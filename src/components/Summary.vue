<script setup lang="ts">
import { toRef, ref, inject, computed, onMounted } from 'vue';
import { reservationKey } from '@/keys';
import { ReservationGlobalState, Room } from '@/interfaces';
import { getFormattedDate } from '@/utils';

const props = defineProps<{ room: Room }>();
const room = toRef(props, 'room');
const promoCode = ref<string | null>(null);

const { reservation } = inject<ReservationGlobalState>(reservationKey)!;

onMounted(() => {
  const searchParams = new URLSearchParams(window.location.search);
  promoCode.value = searchParams.get('promo_code')?.trim() || null;
});

const calcAmount = computed(() => {
  const { endDate, startDate } = reservation.value;
  const roomAmount = room.value.amount;

  if (endDate && startDate && roomAmount) {
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // milliseconds in a day
    const diffDays = Math.round(
      Math.abs((endDate.valueOf() - startDate.valueOf()) / ONE_DAY_IN_MS),
    );
    const finalPrice = promoCode.value
      ? roomAmount * diffDays * (1 - parseInt(promoCode.value) / 100)
      : roomAmount * diffDays;
    return finalPrice;
  }
  return 0;
});

const saveHandler = () => {
  localStorage.setItem('room', JSON.stringify(room.value));
  localStorage.setItem('reservation', JSON.stringify(reservation.value));
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
    <button class="primary-btn" @click="saveHandler">Save</button>
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
