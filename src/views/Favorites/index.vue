<template>
<section class="pt-8 h-screen bg-greybackground">
    <div class="bg-greybackground pt-20">
        <h1 class="text-white flex justify-center font-montserrat font-bold text-3xl"> Minha Lista</h1>
    <div class="flex items-center justify-center p-12">
      <div class="grid grid-cols-4 gap-8">
        <Card v-for="card in 8" :key="card" unstyled> 
          <template #content>
            <div>
                <img 
              src='../../assets/images/logo.dc3d4eba.png'
              alt="Imagem"
              class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
            />
            </div >
             <!-- <RouterLink :to="`/${card.media_type}/${card.id}`"> 
            <img v-if="card.poster_path"
              :src="'https://image.tmdb.org/t/p/w500'+card.poster_path"
              alt="Imagem"
              class="h-[20vw] h-fit hover:opacity-50 hover:bg-[#303153] rounded-lg hover:p-4 ease-in-out duration-300 shadow-lg cursor-pointer"
            />

            <div v-else class="h-[20vw] flex text-white font-bold items-center hover:opacity-50 hover:bg-[#303153] rounded-lg "> Imagem não encontrada</div>

           </RouterLink>   -->
          </template>
        </Card>
      </div>
    </div>
  </div>
</section>

</template>

<script lang="ts">
export default{

}

</script>