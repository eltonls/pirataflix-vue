<template>
  <DataView :value="tvShows.results" :rows="tvShows.results?.length" 
    :first="getFirstItemIndexActualPage()" :totalRecords="getTotalRecords()" @page="onPageChange"
    responsive-layout="scroll" :lazy="true">
    <template #list="tvShows">
      <div class="flex flex-col">
        <div class="bg-greybackground">
          <div class="flex items-center justify-center p-5 md:p-12">
            <div class="grid md:grid-cols-4 md:gap-8 gap-4 grid-cols-2">
              <Card v-for="show in tvShows.items" :key="show.id" unstyled>
                <template #content>
                  <RouterLink :to="`/tv/${show.id}`">
                    <img :src="'https://image.tmdb.org/t/p/w500' + show.poster_path" :alt="show.name"
                      class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer" />
                  </RouterLink>
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
  <div class="flex justify-center">
    <Paginator :rows="tvShows.results?.length" :value="tvShows.results" :totalRecords="getTotalRecords()"
      @page="onPageChange" :first="getFirstItemIndexActualPage()" class="mt-15 text-white w-full lg:w-1/3 " />
  </div>
</template>

<script lang="ts">
import { PageState } from "primevue/paginator";
import { tvShowViewData } from "../../interfaces/tvShowViewData.interface";
import QueryParams from "../../models/QueryParams";
import { TvShowResponse } from "../../models/TvShow/TvShowResponse.model";
import { TvShowService } from "./series.service";

export default {
  data(): tvShowViewData {
    return {
      tvShows: new TvShowResponse(),
      query: new QueryParams(),
      maxNumberOfPages: 500,
      numberOfItemsPerPage: 20,
    };
  },
  created() {
    this.$watch(
      () => this.$route.query,
      () => {
        this.getTvShows(this.query);
      }
    );
  },
  mounted() {
    if (this.$route.query.page) {
      this.query.page = Number(this.$route.query.page)
    }
    this.getTvShows(this.query);
  },
  methods: {
    getTvShows(query: QueryParams) {
      this.service.tvShows.pipe().subscribe({
        next: (response: any) => {
          this.tvShows = response;
        },
      });

      this.service.getPopularTvShows(query)
    },
    onPageChange(event: PageState) {
      this.query.page = event.page + 1
      if (this.query) {
        this.$router.push({ name: "series", query: { ...this.query } });
      }
    },
    getFirstItemIndexActualPage(): number | undefined {
      if (this.tvShows.page) {
        return this.tvShows.page * this.numberOfItemsPerPage - 1;
      }
    },
    getTotalRecords(): number | undefined {
      if (this.tvShows.results) {
        return this.tvShows.results?.length * this.maxNumberOfPages;
      }
    },
  },
  updated() { },
  computed: {
    service() {
      return new TvShowService();
    },
  },
};
</script>
