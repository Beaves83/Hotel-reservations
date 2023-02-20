<script setup lang="ts">
import { ref } from 'vue';

import Rooms from '@/components/Rooms.vue';
import Summary from '@/components/Summary.vue';

const summary = ref(null); //todo: no es un string?

const selectRoom = (room: any) => {
  if (summary.value) {
    summary.value.updateHotelData(room);
  }
};


</script>
<template>
 <div class="inline-block px-8 mb-16">
    <div class="float-left w-2/3">
      <Rooms :select-room="selectRoom"
      />
    </div>
    <div class="float-right w-1/3 pl-4">
      <Summary ref="summary" />
    </div>
  </div>
</template>
<style scoped>

</style>