<template>
    <div>
      <Menubar
        :model="items"
        class="!rounded-none !border-0 h-16 !bg-darkgrey"
        :pt="{
          itemContent:
            'hover:!bg-darkgrey focus:!bg-darkgrey active:!bg-darkgrey focus:!outline-none ',
          item: 'hover:!bg-darkgrey focus:!bg-darkgrey active:!bg-darkgrey focus:!outline-none ',
          itemLabel:
            'hover:!bg-darkgrey  focus:!outline-none  focus:!bg-darkgrey active:!bg-darkgrey',
        }"
      >
        <template #start>
          <RouterLink :to="'/'">
            <img
              src="../assets/images/logo.dc3d4eba.png"
              alt="Logo PirataFlix"
              class="h-8 w-8 mx-5"
          /></RouterLink>
        </template>
        <template #item="{ item }">
          <RouterLink :to="`${item.route}`" class="flex items-center gap-5">
            <span
              :class="getItemClass(item)"
              class="cursor-pointer ml-3 mr-5 !text-white text-sm font-montserrat"
              >{{ item.label }}</span
            >
          </RouterLink>
        </template>
        <template #end>
          <i
            class="pi pi-heart-fill text-red-600 h-8 w-8 right-4 flex right-0 top-0"
            style="font-size: 22px"
          ></i>
        </template>
      </Menubar>
    </div>
  </template>
  
  <script lang="ts">
  import Menubar from "primevue/menubar";
import ItemInterface from "../interfaces/ItemInterface";
  
  export default {
    computed: {
      currentRoute() {
        return this.$route.fullPath;
      },
    },
    methods: {
      getItemClass(item: ItemInterface) {
        return this.currentRoute === item.route ? "font-bold " : "font-medium 	";
      },
    },
    components: {
      Menubar,
    },
    data() {
      return {
        items: [
          { label: "Home", route: "/" },
          { label: "Filmes", route: "/films" },
          { label: "Séries", route: "/series" },
        ],
      };
    },
  };
  </script>