<template>
  <div class="relative mt-12">
    <form @submit.prevent="clickHandler">
      <input
        v-model="query"
        type="text"
        :placeholder="placeholder"
        class="w-full px-3 py-3 font-bold text-red-500 border rounded focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <div class="absolute inset-y-0 right-0">
        <div
          @click.prevent="clickHandler"
          class="flex items-center h-full px-4 text-red-500 transition cursor-pointer hover:text-red-700 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </form>
    <!-- <div class="absolute top-3 right-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-3 h-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div> -->
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import FontAwesomeIcon from "./FontAwesomeIcon.vue";
export default {
  components: { FontAwesomeIcon },
  props: ["placeholder"],
  setup(props, { emit }) {
    const query = ref("");

    const clickHandler = (e) => {
      console.log("e", query.value);
      emit("query", query.value);
    };

    return { query, clickHandler };
  },
};
</script>

<style>
</style>