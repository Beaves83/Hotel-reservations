<script setup lang="ts">
import { ref, inject } from 'vue';

import CustomSelect from '@/components/CustomSelect.vue';
import Datepicker from 'vue3-datepicker';
import { reservationKey } from '@/keys';
import { Reservation, ReservationGlobalState } from '@/interfaces';

const { updateReservation, reservation }: ReservationGlobalState =
  inject<ReservationGlobalState>(reservationKey)!;

const reservationCopyRef =ref<Reservation>( JSON.parse(JSON.stringify(reservation.value)));

reservationCopyRef.value.endDate = new Date(reservationCopyRef.value.endDate);
reservationCopyRef.value.startDate = new Date(reservationCopyRef.value.startDate);

const modifyReservationHandler = () => {
  updateReservation({
    startDate: reservationCopyRef.value.startDate,
    endDate: reservationCopyRef.value.endDate,
    adults: reservationCopyRef.value.adults,
    children: reservationCopyRef.value.children,
  });
};
</script>
<template>
  <div class="hero">
    <div class="hero-content">
      <div class="flex items-start space-x-4">
        <div class="calendar-wrapper">
          <Datepicker
            v-model="reservationCopyRef.startDate"
            class="calendar-input p-2 w-40"
          />
        </div>
        <div class="calendar-wrapper">
          <Datepicker
            v-model="reservationCopyRef.endDate"
            class="calendar-input p-2 w-40"
          />
        </div>
        <CustomSelect>
          <select v-model="reservationCopyRef.adults">
            <option disabled value="">Select Adults</option>
            <option v-for="num in 5" :key="num" :value="num">
              Adults: {{ num }}
            </option>
          </select>
        </CustomSelect>
        <CustomSelect>
          <select v-model="reservationCopyRef.children">
            <option disabled value="true">Select Children</option>
            <option v-for="num in 6" :key="num" :value="num">
              Children: {{ num }}
            </option>
          </select>
        </CustomSelect>
        <button class="primary-btn" @click="modifyReservationHandler">
          Modify
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero {
  @apply mb-4 bg-cover bg-center bg-no-repeat;
  background-image: url(@/assets/img/los-cocos-room-header-2-x.png);
}
.hero-content {
  @apply flex justify-center px-8 py-4 bg-primary bg-opacity-40;
}

.calendar-wrapper {
  position: relative;
}
.calendar-wrapper:before {
  @apply right-2.5;
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(@/assets/img/calendar-empty.svg);
  z-index: 100;
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  grid-area: select;
}
</style>
