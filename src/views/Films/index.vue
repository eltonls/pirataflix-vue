<template>
  <div class="bg-greybackground pt-20">
    <div class="flex flex-col items-center justify-center p-5 md:p-12">
      <div class="grid md:grid-cols-4 md:gap-8 gap-4 grid-cols-2">
        <Card v-for="card in movies" :key="card.id" unstyled>
          <template #content>
            <RouterLink :to="`/movie/${card.id}`">
              <img
                v-if="card"
                :src="'https://image.tmdb.org/t/p/w500' + card.poster_path"
                alt="Imagem"
                class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
              />
              <div
                v-else
                class="h-[20vw] flex text-white font-bold items-center hover:opacity-50 hover:bg-[#303153] rounded-lg"
              >
                Imagem não encontrada
              </div>
            </RouterLink>
          </template>
        </Card>
      </div>
      <Paginator
        :rows="dataPerPage"
        :totalRecords="getTotalRecords()"
        @page="onPaginate"
        :first="getFirstItemIndex()"
        class="mt-16 text-white"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { TvShow } from "../../models/TvShow/TvShow";
import { FilmService } from "./films.service";
import QueryParams from "../../models/QueryParams";
import { PageState } from "primevue/paginator";

export default {
  data() {
    return {
      movies: {} as TvShow,
      query: new QueryParams(),
      dataPerPage: 20,
      maxOfPages: 500,
      totalResults: 0,
    };
  },
  methods: {
    getAllMovies(query: QueryParams) {
      this.filmService.allMovies.pipe().subscribe({
        next: (response) => {
          this.movies = response.results;
          this.totalResults = response.results?.length;
        },
      });
      this.filmService.getAllMovies(query);
    },
    onPaginate(event: PageState) {
      this.query.page = event.page + 1;
      this.$router.push({ name: "films", query: { ...this.query } });
    },
    getFirstItemIndex(): number | undefined {
      if (this.query.page) {
        return this.query.page * this.dataPerPage - 1;
      }
    },
    getTotalRecords(): number | undefined {
      if (this.movies) {
        return this.totalResults * this.maxOfPages;
      }
    },
  },
  computed: {
    filmService() {
      return new FilmService();
    },
  },
  created() {
    this.$watch(
      () => this.$route.query,
      () => {
        this.getAllMovies(this.query);
      }
    );
  },
  mounted() {
    if (this.$route.query.page) {
      this.query.page = Number(this.$route.query.page);
    }
    this.getAllMovies(this.query);
  },
};
</script>
