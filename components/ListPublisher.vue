<template>
  <div>
    <div
      v-if="step1"
      class="flex flex-col items-center p-6 mb-4 text-center bg-red-500 border rounded-lg shadow-lg dark:border-gray-600 sm:flex-row sm:justify-between sm:text-left "
    >
      <div class="flex flex-col justify-between h-full px-3 sm:w-1/2">
        <div class="text-5xl font-bold leading-10 tracking-tight text-gray-100 ">You are ready to publish!</div>
        <h1 class="mt-4 text-xl font-medium text-gray-700 dark:text-red-200">
          {{ items.length }} {{ items.length == 1 ? "Episode" : "Episodes" }} |
          {{ shows }} {{ shows == 1 ? "Show" : "Shows" }}
        </h1>
        
        <div class="mt-6 text-sm text-red-200 opacity-70">
          <div class="flex items-center"><span>Sort the episodes using the </span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg><span> icon</span></div>
          <div>You can add episodes from multiple shows</div>
          <div>You can add as many episodes as you want</div>
        </div>
      </div>

      <div class="w-4/5 p-6 space-y-2 bg-transparent sm:w-1/2">
        <form>
          <div class="text-red-200">
            <h2>Give your list a catchy title</h2>
            <input
              class="w-full p-2 px-3 text-red-100 bg-red-200 rounded focus:outline-none focus:ring-1 focus:ring-red-500 dark:focus:ring-red-100 "
              type="text"
              placeholder="title"
            />
          </div>

          <div class="my-3 text-red-200">
            <h2>Add some description</h2>
            <textarea
              class="w-full p-2 px-3 bg-gray-200 rounded dark:placeholder-gray-200 dark:bg-red-300 dark:text-red-100 focus:outline-none focus:ring-1 focus:ring-red-500 dark:focus:ring-red-100 "
              type="text"
              placeholder="description"
            />
          </div>

          <button
            class="w-3/5 px-8 py-2 mx-auto mt-3 text-red-500 bg-red-100 rounded-full sm:mt-0 hover:opacity-75 "
          >
            Publish
          </button>
        </form>
      </div>
    </div>

    <div v-else class="flex flex-col border shadow-lg sm:flex-row">
      <div class="w-full p-6 space-y-2 bg-white">
        <form>
          <div class="text-gray-700">
            <h2>Give your list a catchy title</h2>
            <input
              class="w-full p-2 px-3 bg-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-red-500 "
              type="text"
              placeholder="title"
            />
          </div>

          <div class="mt-3 text-gray-700">
            <h2>Add some description</h2>
            <textarea
              class="w-full p-2 px-3 bg-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-red-500 "
              type="text"
              placeholder="description"
            />
          </div>
        </form>
      </div>
      <div
        class="flex flex-col justify-center w-full p-4 font-medium text-center text-red-600 bg-red-100 "
      >
        <h4>Sign up Now</h4>
        <p class="mt-2 mb-2 text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "@nuxtjs/composition-api";
export default {
  props: ["items"],
  setup(props, { emit }) {
    const step1 = ref(true);
    const shows = ref();

    const groupByProp = (items, prop) => {
      const groups = {};
      items.map((item) => {
        if (groups[item[prop]]) {
          groups[item[prop]].push(item);
        } else {
          groups[item[prop]] = [item];
        }
      });

      return groups;
    };

    watchEffect(() => {
      if (props.items && props.items.length) {
        let grouped = groupByProp(props.items, "show_id");
        console.log("shows", grouped, shows.value);
        shows.value = Object.keys(grouped).length;
      }
    });

    // onMounted(() => {
    //   if (props.items && props.items.length) {
    //     shows.value = groupByProp(props.items, "show_id");
    //   }
    // });

    return { step1, shows };
  },
};
</script>

<style>
</style>