<template>
    <div class="bg-greybackground mt-20">
      <div class="flex items-center justify-center p-12">
        <div class="grid grid-cols-4 gap-8">
          <Card v-for="card in movies" :key="card.id" unstyled> 
            <template #content>
              <RouterLink :to="`/movie/${card.id}`">              
              <img v-if="card"
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
import { FilmService } from './films.service';

  export default {

    data() {
      return{
        movies:{} as TvShow
  
      }
    },
    methods:{
      getAllMovies(){
        this.filmService.allMovies.pipe().subscribe({next:(response)=>
          this.movies=response.results
        })
        this.filmService.getAllMovies()
      }
    },
    computed:{
      filmService(){
        return new FilmService()
      }
    },
    mounted(){
      this.getAllMovies()
    }
  }
  
  </script>
  