<script lang="ts">
import { DetailService } from "./detail.service";
import { TvShow } from "../../models/TvShow/TvShow";


import LocalStorage from "../../utils/localStorage.util";

import { useShowError } from "../../utils/toasts";


export default {
  props: {
    movie: {},
  },
  data() {
    return {
      data: {} as TvShow,
      id: Number(this.$route.params.id),
      mediaType: String(this.$route.params.media_type),
      prefixUrlImage: "https://image.tmdb.org/t/p/w1280",
    };

  },
  methods: {
    getDataById() {
    // const { showErrorAuth,showErrorConnect } = useShowError();
      this.detailService.dataById
        .pipe()
        .subscribe({ next: (response) => {
          this.data = response
          console.log(response);
          
          // if (response.success) {
          //   showErrorAuth();
          //   console.log("sucesso");
            
          // }
          // if (response.length === 1) {          
          //   showErrorConnect();
          //   console.log("length");
          //   console.log(response.length);
            
            
          // }
        } });
      this.detailService.getDataById(this.id, this.mediaType);
    },
    addFavorite(favorite: TvShow) {
      const localStorageUtil = new LocalStorage<Array<TvShow>>();

      let items = localStorageUtil.getItem("favorites") || []

      items = items.filter((item: TvShow) => item.id !== favorite.id);

      console.log(items)

      localStorageUtil.setItem("favorites", [...items, favorite])
    },
    checkMediaType(media: TvShow) {
      if(media.number_of_seasons) {
        return "tv"
      }

      return "movie"
    }
  },
  computed: {
    detailService() {
      return new DetailService();
    },


    backgroundImage() {
      return this.prefixUrlImage + this.data.backdrop_path;
    },

    urlVideo() {
      if (this.data.original_title) {
        const url = String(this.data.original_title)
        
        const urlVideo = url.replace(/ /g, "+");
        return "https://www.youtube.com/results?search_query=" + urlVideo;
      } else {
        const url = String(this.data.original_name);
        const urlVideo = url.replace(/ /g, "+");
        return "https://www.youtube.com/results?search_query=" + urlVideo;
      }
    },
  },
  mounted() {
    this.getDataById();
  },
};
</script>

<template>
  <section class="relative h-screen">
    <img
      :src="`${backgroundImage}`"
      alt=""
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    />
    <div class="bg-opacity-80 flex top-72 z-30 absolute  items-center p-10">
      <Card class="lg:w-1/3  overflow-y-auto" style="background: rgba(0, 0, 0, 0.6)">
        <template #title>
          <h3
            v-if="data.original_title"
            class="text-2xl text-white font-bold tracking-wider mb-1"
          >
            {{ data.original_title }}
            
          </h3>
          <h3 v-else class="text-2xl text-white font-bold tracking-wider mb-1">
            {{ data.original_name }}
          </h3>
        </template>
        <template #content>
          <div class="flex flex-row text-gray-400 gap-2 mb-3">
            <p v-if="data.release_date" id="ano">{{ data.release_date }}</p>
            <p v-else> {{ data.first_air_date }}</p>
            <p class="text-green-400 brightness-120">
              {{ data.vote_count }}
            </p>
            <p class="">|</p>
            <p v-if="data.runtime" id="screenTime">{{ data.runtime }} Min</p>
            <p v-else> {{ data.number_of_seasons }} Seasons</p>
          </div>
          <div class="text-white mb-2">
            <h4 class="font-bold">{{ data.tagline }}</h4>
            <p v-if="data.overview" class="max-h-40 overflow-y-auto">
              {{ data.overview }}
            </p>
            <p v-else class="w-[80vw]">  </p>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4">
            <a :href="urlVideo" target="_blank">
              <Button
                label="Trailer"
                icon="pi pi-play"
                severity="primary"
                class="text-white bg-red-600 border-none hover:scale-105 transition-all"
              />
            </a>
            <Button
              label="Salvar"
              icon="pi pi-heart"
              severity="contrast"
              class="border-none hover:scale-105 transition-all"
              @click="addFavorite(data)"
            />
          </div>
        </template>
      </Card>
      <Toast position="top-center" class="z-50" />
    </div>
  </section>
</template>
