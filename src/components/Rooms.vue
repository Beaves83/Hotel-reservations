<script setup lang="ts">
import { defineEmits } from 'vue';
import { myRooms } from '../mockData';
import { Room } from '../interfaces';

// Emits
const emit = defineEmits(['selectRoom']);

// Methods
const selectRoom = (selectedRoom: Room) => {
  emit('selectRoom', selectedRoom);
};
</script>
<template>
  <div class="space-y-4">
    <div
      v-for="myRoom in myRooms"
      :key="myRoom.name"
      class="room"
      role="room"
      @click="selectRoom(myRoom)"
    >
      <div class="flex space-x-4">
        <div class="w-1/3">
          <img
            :src="myRoom.image"
            alt="Mini Dreamy Room"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col w-2/3 text-sm">
          <p class="mb-2 text-base font-display font-bold">
            {{ myRoom.name || '' }}
          </p>
          <p class="flex-1">{{ myRoom.description }}</p>
          <p class="mb-6">Size: {{ myRoom.size }}</p>
          <div class="flex items-baseline space-x-16">
            <div>
              <img src="../assets/img/double-bed.svg" class="w-8 mb-1" />
              <p>Beds: {{ myRoom.beds }}</p>
            </div>
            <div class="flex-1">People: {{ myRoom.people }}</div>
            <div class="text-xl font-bold">
              {{ myRoom.amount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.room {
  @apply p-4 transition-all duration-300 border cursor-pointer border-gray-light hover:bg-gray-light hover:bg-opacity-20 hover:shadow-sm;
}
</style>
