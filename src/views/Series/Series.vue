<template>
    <div class="bg-greybackground">
      <div class="flex items-center justify-center p-12">
        <div class="grid grid-cols-4 gap-8">
          <Card v-for="x in 8" :key="x" unstyled> 
            <template #content>
              <img
                :src="imageUrl"
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

  export default {

    data() {
      return{
        imageUrl: '././src/assets/images/serieimage.jpg',
  
      }
    },
  }
  
  </script>