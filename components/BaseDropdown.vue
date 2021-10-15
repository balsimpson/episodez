<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        @click.prevent="clickHandler"
        type="button"
        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500 "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {{ selectedVal }}
        <!-- Heroicon name: solid/chevron-down -->
        <svg
          class="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
    <div
      v-if="showDropdown"
      class="absolute right-0 w-full mt-2 overflow-scroll origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-52"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div v-for="item in options" class="py-1" role="none">
        <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
        <a
          @click.prevent="optionSelect(item)"
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400"
          role="menuitem"
          tabindex="-1"
          id="menu-item-0"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  props: ["btnText", "options"],
  setup(props, { emit }) {
    const showDropdown = ref(false);
    const selectedVal = ref(props.btnText);

    const clickHandler = (e) => {
      emit("clicked", e);
      showDropdown.value = !showDropdown.value;
    };

    const optionSelect = (item) => {
      console.log('options', props.options);
      selectedVal.value = item.name;
      emit("selected", item.season_number);
      showDropdown.value = !showDropdown.value;
    };

    return { clickHandler, showDropdown, optionSelect, selectedVal };
  },
};
</script>

<style>
</style>