<template>
  <div class="bg-greybackground">
    <div class="flex items-center justify-center p-12">
      <div class="grid grid-cols-4 gap-8">
        <Card v-for="show in tvShows" :key="show.id" unstyled>
          <template #content>
            <img
              :src="'https://image.tmdb.org/t/p/w500'+show.poster_path"
              alt="Imagem"
              class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
            />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Card from 'primevue/card';
import { TvShowService } from './series.service';

export default {
  components: {
    Card,
  },
  data(): any {
    return{
      tvShows: []
    }
  },
  mounted () {
    this.getAllPopularTvShows();
  },
  methods: {
    getAllPopularTvShows() {
      this.service.tvShows.pipe().subscribe({next: (response: any) => { 
        this.tvShows = response.results
      }});

      this.service.getPopularTvShows();
    }
  },
  computed: {
    service() {
      return new TvShowService();
    }
  },
}
</script>
