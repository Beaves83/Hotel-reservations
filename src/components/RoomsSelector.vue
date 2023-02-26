<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Rooms from '@/components/Rooms.vue';
import Summary from '@/components/Summary.vue';
import { Room } from '@/interfaces';

// Data
const summary = ref(null);
const room: Room = ref({
  name: '',
  description: '',
  size: '',
  beds: 0,
  people: 0,
  amount: 0,
  image: '',
});

// Methods
const selectRoom = (selectedRoom: Room) => {
  room.value = selectedRoom;
};

// Lifecycle hooks
onMounted(() => {
  const roomString = localStorage.getItem('room');
  if (roomString) {
    const roomRecovery: Room = JSON.parse(roomString);
    room.value = roomRecovery;
  }
});
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
