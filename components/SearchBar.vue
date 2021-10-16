<template>
  <div class="relative max-w-md mx-auto">
    <form @submit.prevent="clickHandler">
      <input
        v-model="query"
        type="text"
        :placeholder="placeholder"
        class="w-full px-3 py-3 font-bold text-red-500 border-2 rounded-lg dark:text-red-200 focus:outline-none focus:ring-1 focus:ring-red-500 dark:bg-gray-600 dark:border-gray-500"
      />
      <div class="absolute inset-y-0 right-0">
        <div
          @click.prevent="clickHandler"
          class="flex items-center h-full px-4 text-red-500 transition cursor-pointer hover:text-red-700 dark:hover:text-red-200 "
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
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  props: ["placeholder"],
  setup(props, { emit }) {
    const query = ref("");

    const clickHandler = (e) => {
      // console.log("e", query.value);
      if (query.value) {
        emit("query", query.value);
      }
    };

    return { query, clickHandler };
  },
};
</script>

<style>
</style>