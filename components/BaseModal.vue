<template>
  <div
    v-if="isActive"
    class="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen p-2 bg-center bg-no-repeat bg-cover outline-none min-w-screen animated fadeIn faster focus:outline-none"
    id="modal-id"
  >
    <div
      @click="clickHandler"
      class="absolute inset-0 z-0 bg-black opacity-80"
    ></div>
    <div
      class="relative w-full max-w-3xl mx-auto my-auto transition duration-1000 transform bg-white shadow-lg rounded-xl"
      :class="[isActive ? 'scale-100': 'scale-0']"
    >
      <div @click="clickHandler" class="absolute cursor-pointer right-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 transition hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <!--content-->
      <div>
        <!--body-->
        <div class="justify-center flex-auto p-2 text-center">
          <div class="flex flex-col items-center justify-center mb-4 text-2xl">
            <!-- <div> -->
              <slot name="header"> </slot>
          
              
            <!-- </div> -->
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "@nuxtjs/composition-api";
import BaseDropdown from './BaseDropdown.vue';
export default {
  components: { BaseDropdown },
  props: ["isActive", "item"],
  setup(props, { emit }) {
    const clickHandler = (e) => {
      emit("clicked", e);
    };
    return { clickHandler };
  },
};
</script>

<style>
</style>