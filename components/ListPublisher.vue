<template>
  <div>
    <div
      v-if="step1"
      class="flex flex-col items-center p-6 mb-4 text-center bg-white border rounded-lg shadow-lg sm:flex-row sm:justify-between sm:text-left "
    >
      <div>
        <h1 class="text-xl font-medium text-gray-700">
          {{ items.length }} {{ items.length == 1 ? "Episode" : "Episodes" }} |
          {{ shows }} {{ shows == 1 ? "Show" : "Shows" }}
        </h1>
        <p class="text-gray-600">Click on the next button to proceed.</p>
      </div>

      <button
        @click="step1 = !step1"
        class="px-8 py-2 mt-2 text-white bg-red-600 rounded-full sm:mt-0 hover:opacity-75 "
      >
        Next
      </button>
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
        <button
          class="w-3/5 px-8 py-2 mx-auto text-white bg-red-600 rounded-full sm:mt-0 hover:opacity-75 "
        >
          Publish
        </button>
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
        console.log('shows', grouped, shows.value);
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