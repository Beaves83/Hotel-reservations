<script setup lang="ts">
import { toRef, ref, inject, computed, onMounted } from 'vue';
import { reservationKey } from '../keys';
import { ReservationGlobalState, Room } from '../interfaces';
import { getFormattedDate } from '../utils';
import MessagePop from './MessagePop.vue';

// Props
const props = defineProps<{ room: Room }>();
const room = toRef(props, 'room');

// Data
const promoCode = ref<string | null>(null);
const open = ref<boolean>(false);
const { reservation } = inject<ReservationGlobalState>(reservationKey)!;

// Lyfecycle hooks
onMounted(() => {
  const searchParams = new URLSearchParams(window.location.search);
  promoCode.value = searchParams.get('promo_code')?.trim() || null;
});

// Methods
const calcDiffDays = () => {
  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // milliseconds in a day
  const { endDate, startDate } = reservation.value;

  if (endDate && startDate) {
    const diffDays = Math.round(
      Math.abs((endDate.valueOf() - startDate.valueOf()) / ONE_DAY_IN_MS),
    );
    return diffDays;
  }
  return 0;
};

const calcAmount = computed(() => {
  const roomAmount = room.value.amount;

  if (roomAmount) {
    const finalPrice = promoCode.value
      ? roomAmount * calcDiffDays() * (1 - parseInt(promoCode.value) / 100)
      : roomAmount * calcDiffDays();
    return finalPrice;
  }
  return 0;
});

const saveHandler = () => {
  localStorage.setItem('room', JSON.stringify(room.value));
  localStorage.setItem('reservation', JSON.stringify(reservation.value));
  open.value = true;
  setTimeout(() => {
    open.value = false;
  }, 2500);
};
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
          From {{ getFormattedDate(reservation.startDate) }} to
          {{ getFormattedDate(reservation.endDate) }}
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
      <p>{{ calcAmount }} €</p>
    </div>
    <button class="primary-btn rounded-md" @click="saveHandler">Save</button>
  </div>
  <MessagePop
    v-if="open"
    title="Information"
    message="Your choice has been saved."
    @close="open = false"
  />
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
.alert {
  @apply bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative;
}

.alert .close {
  @apply absolute top-0 right-0 px-4 py-3;
}
</style>
