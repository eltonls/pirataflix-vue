<script lang="ts">
import { DetailService } from "./detail.service";
import { TvShow } from "../../models/TvShow/TvShow";
import LocalStorage from "../../utils/localStorage.util";
import TrailerResponse from "../../models/trailerResponse";

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
      trailerData: new TrailerResponse()
    };

  },
  methods: {
    getDataById() {
      this.detailService.dataById
        .pipe()
        .subscribe({ next: (response) => (this.data = response) });
      this.detailService.getDataById(this.id, this.mediaType);
    },
    getTrailerVideo(media: TvShow) {
      this.detailService.trailer.pipe().subscribe({
        next: (response) => this.trailerData = response 
      })

      if(media.id) {
        this.detailService.getTrailerById(media.id, this.checkMediaType(media))
      } 
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
    }, 
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
    trailerUrl() {
      if(this.trailerData !== undefined && this.trailerData.results !== undefined) {
        const videoKey = this.trailerData.results[0].key
        https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0

        return "https://www.youtube.com/embed/" + videoKey
      }
    }
  },
  mounted() {
    this.getDataById()
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
            <Button
              label="Trailer"
              icon="pi pi-play"
              severity="primary"
              class="text-white bg-red-600 border-none hover:scale-105 transition-all"
              @click="getTrailerVideo(data)"
            />
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
      <iframe :src="trailerUrl" frameborder="0" width="600" height="400" class="absolute top-5 right-5 rounded" v-if="trailerData" />
      <div v-else>Video</div>
    </div>
  </section>
</template>
