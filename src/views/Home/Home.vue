<template>
  <div class="bg-greybackground mt-20">
    <div class="flex items-center justify-center p-12">
      <div class="grid grid-cols-4 gap-8">
        <Card v-for="card in data" :key="card.id" unstyled> 
          <template #content>
             <RouterLink :to="`/${card.media_type}/${card.id}`"> 

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
  </div>

</template>

<script lang="ts">

import { TvShow } from '../../models/TvShow/TvShow';
import { HomeService } from './home.service';

export default {

  data(){
    return{
      data:{} as TvShow


    }
  },
  methods:{
    getAllData(){     

      this.homeService.allMoviesPopular.pipe().subscribe({next:(response) =>
       this.data=response.results   

        })
        
      this.homeService.getAllMoviesPopular()

    },

  },
  computed:{
    homeService(){
      return new HomeService()
    }
  },
  mounted(){
    this.getAllData()
  }
}

</script>
