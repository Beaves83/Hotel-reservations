<script setup lang="ts">
import { toRef, inject } from 'vue';
import { reservationKey } from '@/keys';
import { ReservationGlobalState, Room } from '@/interfaces';

const props = defineProps<{ room: Room }>();
const room = toRef(props, 'room');

const { reservation }: ReservationGlobalState =
  inject<ReservationGlobalState>(reservationKey)!;

const saveHandler = () => {};
</script>
<template>
  <div class="summary">
    <h2 class="summary-title">Reservation summary</h2>
    <h3 class="mb-4 font-bold">
      {{ room.name }}
    </h3>
    <div class="summary-checkin">
      <div class="flex space-x-12">
        <div>
          <p class="font-bold">Check in</p>
          <p>From 15.00h</p>
        </div>
        <div>
          <p class="font-bold">Check out</p>
          <p>Before 12.00h</p>
        </div>
      </div>
      <div>
        <p class="font-bold">Reservation date</p>
        <p v-if="reservation.startDate && reservation.endDate">
          From {{ reservation.startDate }} to {{ reservation.endDate }}
        </p>
      </div>
      <div>
        <p class="font-bold">People</p>
        <p>{{ reservation.adults }} Adults</p>
        <p>{{ reservation.children }} Children</p>
      </div>
    </div>
    <hr />
    <div class="summary-total">
      <p>Total</p>
      <p>{{ room.amount }}</p>
    </div>
    <button @click="saveHandler">Save</button>
  </div>
</template>

<style scoped>
.summary {
  @apply p-4 border border-gray-light;
}
.summary-title {
  @apply mb-8 text-xl font-bold;
}
.summary-checkin {
  @apply mb-4 space-y-8 text-sm;
}
button {
  display: block;
  width: 100%;
  background-color: #0162b3;
  color: white;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5rem;
  min-width: 7rem;
  transition: all 0.3s ease;
}
hr {
  @apply mb-4 border-0 border-t border-gray-light;
}
.summary-total {
  @apply flex justify-between mb-8;
}
</style>
