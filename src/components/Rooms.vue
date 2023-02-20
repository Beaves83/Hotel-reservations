<script setup lang="ts">

import img1 from '@/assets/img/room_1.png';
import img2 from '@/assets/img/room_2.png';
import img3 from '@/assets/img/room_3.png';
import { Room } from '@/src/interfaces.ts'



const props = defineProps<{ 
    selectRoom: {
      type: Function, // type: () => void; esto es lo recomendado
      required: true,
    }, 
}>();

const myRooms: Room[] = [
  {
    name: 'Mini Dreamy Room',
    description: 'Generous and comfortable these modern furnished rooms offer two queen-size beds and are on the first floor.',
    size: '20m2',
    beds: 2,
    people: 2,
    amount: '200€',
    image: img1,
  },
  {
    name: 'Seet Bungalow',
    description: 'The perfect blend of comfort and culture, our superior room with a central graden view has the stunning, and comes with a jacuzzi.',
    size: '50m2',
    beds: 2,
    people: 4,
    amount: '350€',
    image: img2,
  },
  {
    name: 'Los Cocos Suite',
    description: 'If you want a little extra form your stay, you might like our superior rooms. A ocean view room has a private beach and a helicopter :-).',
    size: '125m2',
    beds: 3,
    people: 4,
    amount: '450€',
    image: img3,
  },
];

const selectRoom = (room: Room) => {
  props.selectRoom(room);
};
</script>
<template>
  <div class="space-y-4">
    <!-- TODO: Aplicar la deconstruccion {name, descr...} in myRooms si si en selectRoom al final solo necesitamos el id -->
    <div
      v-for="room in myRooms" 
      :key="room.name"
      class="room"
      @click="selectRoom(room)"
    >
      <div class="flex space-x-4">
        <div class="w-1/3">
          <img 
            :src="room.image" 
            alt="Mini Dreamy Room" 
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col w-2/3 text-sm">
          <p class="mb-2 text-base font-display font-bold">
            {{ room.name || '' }}
          </p>
          <p class="flex-1">{{ room.description }}</p>
          <p class="mb-6">Size: {{ room.size }}</p>
          <div class="flex items-baseline space-x-16">
            <div>
              <img src='@/assets/img/double-bed.svg' class="w-8 mb-1" />
              <p>Beds: {{ room.beds }}</p>
            </div>
            <div class="flex-1">People: {{ room.people }}</div>
          <div class="text-xl font-bold">
            {{ room.amount }}
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.room{
  @apply p-4 transition-all duration-300 border cursor-pointer border-gray-light hover:bg-gray-light hover:bg-opacity-20 hover:shadow-sm;
}
</style>