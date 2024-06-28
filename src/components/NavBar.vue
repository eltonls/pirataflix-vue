
<template>
  <div>
    <Menubar
      :model="items"
      class="!rounded-none !border-0 h-16   !bg-darkgrey z-10 top-0 w-full fixed"

    >
      <template #start>
        <RouterLink :to="'/'">
          <img
            src="../assets/images/logo.dc3d4eba.png"
            alt="Logo PirataFlix"
            class="h-8 w-8 mx-5"
        /></RouterLink>
      </template>
      <template #item="{ item }" >
        <RouterLink :to="`${item.route}` " class="flex items-center gap-5">
          
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

import ItemInterface from "../interfaces/ItemInterface";


export default {

  components:{

  },

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
  data() {
    return {
      items: [
        { label: "Home", route: "/"  },
        { label: "Filmes", route: "/films" },
        { label: "Séries", route: "/series" },
      ],
    };
  },
};
</script>

<style >
.p-menubar-item.p-focus > .p-menubar-item-content{
  background-color: transparent !important;
  color: transparent !important;
}
.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover{
  background-color: transparent !important;
  color: transparent !important;
}
</style>