<template>
<section class="pt-8 h-screen bg-greybackground">
    <div class="bg-greybackground pt-20">
        <h1 class="text-white flex justify-center font-montserrat font-bold text-3xl"> Minha Lista</h1>
      <div class="flex items-center justify-center p-5 md:p-12" v-if="favorites.length > 0">
      <div class="grid md:grid-cols-4 md:gap-8 gap-4 grid-cols-2">
        <Card v-for="card in favorites" :key="card" unstyled> 
          <template #content>
            <RouterLink :to="'/' + getMediaType(card) + '/' + card.id">
            <img v-if="card.poster_path"
              :src="'https://image.tmdb.org/t/p/w500'+card.poster_path"
              alt="Imagem"
              class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
            />

            <div v-else class="h-[20vw] flex text-white font-bold items-center hover:opacity-50 hover:bg-[#303153] rounded-lg "> Imagem não encontrada</div>

           </RouterLink> 
          </template>
        </Card>
      </div>
    </div>
    <div v-else>
      <p class="text-center text-xl m-5">Parece que você ainda não favoritou nada. Os seus favoritos aparecerão aqui.</p>
    </div>
  </div>
</section>

</template>

<script lang="ts">
import { TvShow } from '../../models/TvShow/TvShow';
import LocalStorage from '../../utils/localStorage.util';

export default{
  data() {
    return {
      favorites: Array<TvShow>(),
    }
  },

  mounted() {
    this.getFavorites()
  },

  methods: {
    getFavorites() {
      const localStorageController = new LocalStorage<Array<TvShow>>();

      const items = localStorageController.getItem("favorites") || new Array<TvShow>()

      if(items) {
        this.favorites = items;
      }
    },
    getMediaType(media: TvShow) {
      if(media.number_of_seasons) {
        return "tv"
      }

      return "movie"
    }
  },
}
</script>
