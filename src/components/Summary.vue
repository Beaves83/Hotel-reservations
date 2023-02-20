<script setup lang="ts">
import { reactive, ref } from 'vue'
import { HotelData, ReservationData } from '@/src/interfaces.ts'

const room = reactive({
  roomName: '',
  checkinDate: ref<Date | null>(null),
  checkoutDate: ref<Date | null>(null),
  adults: 0,
  total: 0,
});

const updateHotelData = ({name, amount}: HotelData) => {
  room.roomName = name;
  room.total = amount;
};
const updateReservationData = ({startDate, endDate, adults}: ReservationData) => {
  room.checkinDate = startDate;
  room.checkoutDate = endDate;
  room.adults = adults;
};
const saveHandler = () => {};
</script>
<template>
  <div class="summary">
    <h2 class="summary-title">Reservation summary</h2>
    <h3 class="mb-4 font-bold">
      {{ room.roomName }}
    </h3>
    <div class="summary-checkin">
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
    <hr />
    <div class="summary-total">
      <p>Total</p>
      <p>{{ room.total }}</p>
    </div>
    <button @click="saveHandler">Save</button>
  </div>
</template>

<style scoped>
.summary{
  @apply p-4 border border-gray-light;
}
.summary-title{
  @apply mb-8 text-xl font-bold;
}
.summary-checkin{
  @apply mb-4 space-y-8 text-sm;
}
button {
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
hr{
  @apply mb-4 border-0 border-t border-gray-light;
}
.summary-total {
  @apply flex justify-between mb-8;
}
</style>
