<template>
  <div
    @click="clickHandler(item)"
    class="flex bg-white border border-gray-300 rounded"
  >
    <div class="relative flex-none w-32 h-48">
      
        <img
          :src="tmdb.getImageURL(item.poster_path)"
          alt=""
          class="object-cover w-full h-full rounded"
        />
        <span
          class="absolute top-0 left-0 w-full h-full rounded-b bg-gradient-to-t from-gray-900 "
        >
        </span>

        <div class="absolute inset-x-0 bottom-4">
          <div class="inline-flex px-1 text-[10px] text-gray-300 rounded">
            {{ tmdb.getGenre(item.genre_ids).join(", ") }}
          </div>
          <div
            class="px-2 font-serif text-base font-bold leading-5 text-gray-200 capitalize "
          >
            {{ item.name }}
          </div>
          <div class="w-12 h-1 mx-auto mt-1 mb-1 bg-red-500 rounded"></div>
          <div
            v-if="item.first_air_date"
            class="px-2 font-serif text-xs font-light leading-4 text-gray-200 capitalize "
          >
            {{ item.first_air_date.split("-")[0] }}
          </div>
        </div>
      </transition>
    </div>
    <!-- <div>{{item}}</div> -->
  </div>
</template>

<script>
import tmdb from "assets/js/useTmdbApi";
import { ref, computed } from "@nuxtjs/composition-api";
export default {
  props: ["item"],
  setup(props, { emit }) {
    const clickHandler = (e) => {
      emit("clicked", e);
    };

    return { tmdb, clickHandler };
  },
};
</script>

<style>
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