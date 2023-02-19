<script setup lang="ts">
import { reactive } from 'vue'

const room = reactive({
  roomName: '-',
  checkinDate: '-',
  checkoutDate: '-',
  adults: '-',
  total: '-',
});
const updateHotelData = (hotelData: any) => {
  room.roomName = hotelData.name;
  room.total = hotelData.amount;
};
const updateReservationData = (reservationData: any) => {
  room.checkinDate = reservationData.startDate;
  room.checkoutDate = reservationData.endDate;
  room.adults = reservationData.adults;
};
const saveHandler = () => {};
</script>

<template>
  <div class="p-4 border border-gray-light">
    <h2 class="mb-8 text-xl"><strong>Reservation summary</strong></h2>
    <h3 class="mb-4">
      <strong>{{ room.roomName }}</strong>
    </h3>
    <div class="mb-4 space-y-8 text-sm">
      <div class="flex space-x-12">
        <div>
          <p><strong>Check in</strong></p>
          <p>From 15.00h</p>
        </div>
        <div>
          <p><strong>Check out</strong></p>
          <p>Before 12.00h</p>
        </div>
      </div>
      <div>
        <p><strong>Reservation date</strong></p>
        <p>From {{ room.checkinDate }} to {{ room.checkoutDate }}</p>
      </div>
      <div>
        <p><strong>People</strong></p>
        <p>{{ room.adults }} Adults</p>
      </div>
    </div>
    <hr class="mb-4 border-0 border-t border-gray-light" />
    <div class="flex justify-between mb-8">
      <p>Total</p>
      <p>{{ room.total }}</p>
    </div>
    <button class="button" @click="saveHandler">Save</button>
  </div>
</template>

<style scoped>
.button {
  display: block;
  width: 100%;
  background-color: #0162B3;
  color: white;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  min-width: 7rem;
  transition: all 0.3s ease;
}
</style>
