<script lang="ts">
//import { useRoute } from "vue-router";
import DetailsModel from "../../models/details.model";
import { ViewDetails } from "../../models/detailsView.model";
import { DetailService } from "./detail.service";

export default {
  
  props: {
    movie: {},
  },
  data():ViewDetails {
    return {
      
      data:{} as DetailsModel ,
      id: Number(this.$route.params.id),
      mediaType: String(this.$route.params.media_type),
      prefixUrlImage: 'https://image.tmdb.org/t/p/w500',
          };
  },
  methods: {
    getDataById() {
      this.detailService.dataById
        .pipe()
        .subscribe({ next: (response) => (this.data = response) });
      this.detailService.getDataById(this.id, this.mediaType);
      
    },

  },
  computed: {
    detailService() {
      return new DetailService();
    },
    backgroundImage(){
      if(this.data.backdrop_path)
      return  this.prefixUrlImage+this.data.backdrop_path
    },


  },
  mounted() {
    this.getDataById();
  },

};
</script>

<template>
  <section  :class="`bg-center bg-no-repeat  bg-cover bg-[url('${backgroundImage}')]`">
    <div
      class=" bg-opacity-80 h-screen flex items-center p-10 "
    >
      <Card class="lg:w-1/3" style="background: rgba(0, 0, 0, 0.4)" >
        <template #title >
          <h3 class="text-2xl text-white font-bold tracking-wider mb-1">
            {{ data.original_title }}
          </h3>
        </template>
        <template #content>
          <div class="flex flex-row text-gray-400 gap-2 mb-3">
            <p class="" id="ano">{{ data.release_date }}</p>
            <p class="text-green-400 brightness-120">
              {{ data.vote_count }}
            </p>
            <p class="">|</p>
            <p class="" id="screenTime">{{ data.runtime }} Min</p>
          </div>
          <div class="text-white mb-2">
            <h4 class="font-bold">{{ data.tagline }}</h4>
            <p class="">
              {{ data.overview }}
            </p>
          </div>
        </template>
        <template #footer>
          <div class="flex gap-4">
            <Button
              label="Trailer"
              icon="pi pi-play"
              severity="primary"
              class="text-white bg-red-600 border-none hover:scale-105 transition-all"
            />
            <Button
              label="Salvar"
              icon="pi pi-heart"
              severity="contrast"
              class="border-none hover:scale-105 transition-all"
            />
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
