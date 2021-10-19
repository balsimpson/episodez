<template>
  <div class="relative">
    <div
      @click="showDropdown = !showDropdown"
      class="w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:ring-2 ring-red-300 "
    ></div>
    <transition name="slide-in-up">
      <div
        v-if="showDropdown"
        class="absolute right-0 text-gray-700 bg-white border rounded shadow-lg w-44 top-8"
      >
        <div class="divide-y divide-gray-200">
          <div
            class="flex items-center px-3 py-2 cursor-pointer hover:text-red-700 "
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-2 text-sm font-bold uppercase">Profile</div>
          </div>
          <div
            @keydown="selectOption"
            class="flex items-center px-3 py-2 cursor-pointer hover:text-red-700 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-2 text-sm font-bold uppercase">Favorites</div>
          </div>
          
          <div
            @click="selectOption"
            class="flex items-center px-3 py-2 cursor-pointer hover:text-red-700 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="ml-2 text-sm font-bold uppercase">Logout</div>
          </div>

          <slot name="themeSwitcher">

          </slot>
          
        </div>
      </div>
    </transition>
    <div
      v-if="showDropdown"
      class="outside"
      @keyup="selectOption"
      @click="clickHandler"
      tabindex="0"
    ></div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import BaseDropdown from "./BaseDropdown.vue";
import FontAwesomeIcon from "./FontAwesomeIcon1.vue";
import ThemeSwitcher from './ThemeSwitcher.vue';
export default {
  components: { BaseDropdown, FontAwesomeIcon, ThemeSwitcher },
  setup(props, { emit }) {
    const showDropdown = ref(false);

    const clickHandler = (e) => {
      // console.log("e", e);
      showDropdown.value = !showDropdown.value;
    };

    const selectOption = (val) => {
      console.log("val", val);
    };

    return { showDropdown, selectOption, clickHandler };
  },
};
</script>

<style>
.outside {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: -1;
}

/* Slide-in-up animation*/
.slide-in-up-enter-active,
.slide-in-up-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.slide-in-up-enter,
.slide-in-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>