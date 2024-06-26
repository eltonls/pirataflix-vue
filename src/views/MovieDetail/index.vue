<script>
  export default {
    props: {
       movie: {}
    }
  }
</script>

<template>
  <section
    :class="bg-[url(`${movie.backdrop_path}`)] bg-center bg-no-repeat bg-cover"
  >
    <div
      class="bg-black bg-opacity-80 w-screen h-screen flex items-center p-10"
    >
      <Card class="lg:w-1/3" style="background: rgba(0,0,0, .4);">
        <template #title class="">
          <h3 class="text-2xl text-white font-bold tracking-wider mb-1">
            {{ movie.title }}
          </h3>
        </template>
        <template #content>
          <div class="flex flex-row text-gray-400 gap-2 mb-3">
            <p class="" id="ano">{{ movie.release_date }}</p>
            <p class="text-green-400 brightness-120">
              {{ movie.vote_count }}
            </p>
            <p class="">|</p>
            <p class="" id="screenTime">{{ movie.runtime }} Min</p>
          </div>
          <div class="text-white mb-2">
            <h4 class="font-bold">{{ movie.tagline }}</h4>
            <p class="">
              {{ movie.overview }}
            </p>
          </div>
        </template>
        <template #footer>
            <div class="flex gap-4">
                <Button label="Trailer" icon="pi pi-play" severity="primary" class="text-white bg-red-600 border-none hover:scale-105 transition-all"/>
                <Button label="Salvar" icon="pi pi-heart" severity="contrast" class="border-none hover:scale-105 transition-all"/>
            </div> 
        </template>
      </Card>
    </div>
  </section>
</template>
