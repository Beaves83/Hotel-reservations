<script setup lang="ts">
import { ref, inject } from 'vue';

import CustomSelect from '@/components/CustomSelect.vue';
import Datepicker from 'vue3-datepicker';
import { reservationKey } from '@/keys';

const summary = ref(null); //todo: no es un string?
const { updateReservation } = inject(reservationKey);

const startDate = ref();
const endDate = ref();
const adults = ref(0);
const children = ref(0);

const modifyReservationHandler = () => {
  updateReservation({
    startDate: new Intl.DateTimeFormat('es-ES').format(startDate.value),
    endDate: new Intl.DateTimeFormat('es-ES').format(endDate.value),
    adults: adults.value,
    children: children.value,
  });
  alert('Summary Updated');
};
</script>
<template>
  <div class="hero">
    <div class="hero-content">
      <div class="flex items-start space-x-4">
        <div class="calendar-wrapper">
          <Datepicker v-model="startDate" class="calendar-input" />
        </div>
        <div class="calendar-wrapper">
          <Datepicker v-model="endDate" class="calendar-input" />
        </div>
        <CustomSelect>
          <select v-model="adults">
            <option value="">Select Adults</option>
            <option v-for="num in 5" :key="num" :value="num">
              Adults: {{ num }}
            </option>
          </select>
        </CustomSelect>
        <CustomSelect>
          <select v-model="children">
            <option value="">Select Children</option>
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
.calendar-input {
  @apply p-2 pr-8;
}
</style>
