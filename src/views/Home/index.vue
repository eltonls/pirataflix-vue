<template>

  <Toast position="top-center" class="z-50" />
  <div  class="bg-greybackground pt-20">
    <div  class="flex flex-col items-center justify-center p-12">
      <div v-if="data" class="grid grid-cols-4 gap-8" >
        <Card v-for="card in data" :key="card.id" unstyled>
          <template #content>
            <RouterLink :to="`/${card?.media_type}/${card.id}`">
              <img
                v-if="card.poster_path"
                :src="'https://image.tmdb.org/t/p/w500' + card.poster_path"
                alt="Imagem"
                class=" h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
              />

              <div
                v-else
                class=" flex items-center justify-center text-white font-semibold items-center hover:opacity-50 hover:bg-[#303153] rounded-lg"
              >
                Imagem não encontrada
              </div>
            </RouterLink>
          </template>
        </Card>
      </div>

      <div v-else class="bg-greybackground h-screen text-white "> <h1 class="flex text-9xl font-bold pt-60"> . . .</h1></div> 
      <Paginator
        :rows="dataPerPage"
        :value="data"
        :totalRecords="getTotalRecords()"
        @page="onPaginate"
        :first="getFirstItemIndex()"
        class="mt-16 text-white"
      />
      <Toast position="top-center" class="z-50" />

    </div>
  </div>
</template>

<script lang="ts">
import { PageState } from "primevue/paginator";
import { TvShow } from '../../models/TvShow/TvShow';
import QueryParams from '../../models/QueryParams';
import { HomeService } from './home.service';
import { useToast } from 'primevue/usetoast';



export default {
  data() {
    return {

      data: [] as Array<TvShow>,
      query: new QueryParams(),
      dataPerPage: 20,
      maxOfPages: 500,
      page: 0,
      totalResults:0,
      toast:useToast()

    }

  },

  methods: {
    getAllData(query: QueryParams) {


      
      this.homeService.allMoviesPopular.pipe().subscribe({
        next: (response) => {

          this.data = response.results;
          this.page = response.page;
          this.totalResults = response.results?.length;
        },
      });


      this.homeService.getAllMoviesPopular(query);
    },

    onPaginate(event: PageState) {
      this.query.page = event.page + 1;
      if (this.query) {
        this.$router.push({ name: "home", query: { ...this.query } });

      }
    },

    getFirstItemIndex(): number | undefined {
      if (this.query.page) {
        return this.query.page * this.dataPerPage - 1;
      }
    },
    getTotalRecords(): number | undefined {

      if (this.data) {
        return this.totalResults * this.maxOfPages;
      }
    },

  },
  computed: {
    homeService() {
      return new HomeService();
    },
  },

  created() {
    this.$watch(
      () => this.$route.query,
      () => {
        this.getAllData(this.query);
      }
    );
  },

  mounted() {
    if (this.$route.query.page) {
      this.query.page = Number(this.$route.query.page);
    }
    this.getAllData(this.query);
  },
};
</script>
