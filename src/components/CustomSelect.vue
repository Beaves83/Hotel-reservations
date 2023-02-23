<script setup lang="ts"></script>

<template>
  <div class="custom-select">
    <slot />
  </div>
</template>

<style scoped>
.custom-select {
  @apply p-2;
  display: grid;
  grid-template-areas: 'select';
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  line-height: 24px;
  background-color: #fff;
}
.custom-select::after {
  @apply bg-gray;
  content: '';
  grid-area: select;
  justify-self: end;
  width: 0.8em;
  height: 0.5em;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
</style>
