<script lang="ts">
import Card from 'primevue/card';
import CardInterface from '../interfaces/CardInterface.vue';
export default {
components:{
  Card
},
  data():CardInterface{
    return{
      imageUrl: 'https://image.tmdb.org/t/p/original//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',

    }
  }
}
</script>

<template>
    <Card unstyled>
      <template #content>

        <img :src="imageUrl" alt="Imagem" class="h-[20vw] h-fit  hover:opacity-50 hover:bg-[#303153] rounded-lg  hover:p-4 ease-in-out duration-300	shadow-lg cursor-pointer" />
      </template>

    </Card>


  <!-- <div class="h-[20vw] h-fit  hover:opacity-50 hover:bg-[#303153] rounded-lg  hover:p-4 ease-in-out duration-300	shadow-lg cursor-pointer">

    <img alt="Imagem" :src="imageUrl" class=" rounded-lg  w-full "/>

  </div> -->

 
</template>

