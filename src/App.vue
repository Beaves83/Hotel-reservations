<script setup lang="ts">
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import RoomsSelector from '@/components/RoomsSelector.vue';
</script>

<template>
  <TopBar />
  <Hero />
  <ProgressBar />
  <RoomsSelector />
  <Footer />
</template>
<style scoped>
:root {
  /* TODO: No existen los colores en el theme */
  --vdp-hover-bg-color: theme('colors.primary');
  --vdp-selected-bg-color: theme('colors.primary');
}
</style>
