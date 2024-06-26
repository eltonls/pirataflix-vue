<template>
  <div>
    <NavBar/>
<!-- tem que ter o RouterView -->
    <RouterView/> 

  </div> 
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue'

defineComponent({
  components: {
    NavBar
  }
});
</script>

<style scoped>

</style>