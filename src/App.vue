<script setup lang="ts">
import { provide, ref, Ref } from 'vue';
import TopBar from '@/components/TopBar.vue';
import Footer from '@/components/Footer.vue';
import Hero from '@/components/Hero.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import RoomsSelector from '@/components/RoomsSelector.vue';
import { Reservation } from '@/interfaces';

import { reservationKey } from '@/keys';

const reservation: Ref<Reservation> = ref({
  startDate: null,
  endDate: null,
  adults: 0,
  children: 0,
});

const updateReservation = (newReservation: Reservation) => {
  reservation.value = newReservation;
};

provide(reservationKey, {
  reservation,
  updateReservation,
});
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
  --vdp-hover-bg-color: theme('colors.primary');
  --vdp-selected-bg-color: theme('colors.primary');
}
</style>
