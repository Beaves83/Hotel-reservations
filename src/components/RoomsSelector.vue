<script setup lang="ts">
import { ref } from 'vue';

import Rooms from '@/components/Rooms.vue';
import Summary from '@/components/Summary.vue';
import { Room } from '@/interfaces';

const summary = ref(null); //todo: no es un string?
const room: Room = ref({
  name: '',
});

const selectRoom = (selectedRoom: Room) => {
  room.value = selectedRoom;
};
</script>
<template>
  <div class="flex px-8 mb-16">
    <div class="float-left w-2/3">
      <Rooms @selectRoom="selectRoom" />
    </div>
    <div class="float-right w-1/3 pl-4">
      <Summary ref="summary" :room="room" />
    </div>
  </div>
</template>
<style scoped></style>
