<template>
  <DataView
    :value="tvShows.results"
    :rows="tvShows.results?.length"
    :paginator="true"
    :first="getFirstItemIndexActualPage()"
    :totalRecords="getTotalRecords()"
    @page="onPageChange"
    responsive-layout="scroll"
    :lazy="true"
  >
    <template #list="tvShows">
      <div class="flex flex-col">
        <div class="bg-greybackground">
          <div class="flex items-center justify-center p-12">
            <div class="grid grid-cols-4 gap-8">
              <Card v-for="show in tvShows.items" :key="show.id" unstyled>
                <template #content>
                  <img
                    :src="'https://image.tmdb.org/t/p/w500' + show.poster_path"
                    :alt="show.name"
                    class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
                  />
                </template>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script lang="ts">
import { PageState } from "primevue/paginator";
import { tvShowViewData } from "../../interfaces/tvShowViewData.interface";
import QueryParams from "../../models/QueryParams";
import { TvShowResponse } from "../../models/TvShow/TvShowResponse.model";
import { TvShowService } from "./series.service";

export default {
  data() : tvShowViewData{
    return {
      tvShows: new TvShowResponse(),
      query: new QueryParams(),
      maxNumberOfPages: 500,
      numberOfItemsPerPage: 20
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
    if(this.$route.query.page) {
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
      if(this.query) {
        this.$router.push({ name: "series", query: {...this.query} });
      }
    },
    getFirstItemIndexActualPage(): number | undefined {
      if(this.tvShows.page) {
        return this.tvShows.page * this.numberOfItemsPerPage - 1;
      } 
    },
    getTotalRecords(): number | undefined {
      if(this.tvShows.results) {
        return this.tvShows.results?.length * this.maxNumberOfPages;
      }
    },
  },
  updated() {},
  computed: {
    service() {
      return new TvShowService();
    },
  },
};
</script>
