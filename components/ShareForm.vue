<template>
  <div>
    <div class="w-4/5 mx-auto mb-6">
      <h2
        class="mt-8 mb-2 text-xs font-semibold tracking-widest text-center text-gray-500 uppercase title-font "
      >
        share the list
      </h2>
      <h1
        class="text-xl font-semibold leading-none tracking-tighter text-center text-gray-600 dark:text-gray-400 title-font "
      >
        Copy the link or click on any of the social media buttons to share
      </h1>
    </div>
    <div class="flex items-center w-4/5 mx-auto ">
      <div
        class="h-8 px-2 py-1 overflow-x-auto text-sm border border-red-500 rounded dark:border-red-400 whitespace-nowrap"
      >
        <div class="text-red-500 dark:text-red-300">https://episodez.in/loremsomething-anything-and-everything-b4r56784j</div>
      </div><FontAwesomeIcon icon="clipboard" class="ml-2 cursor-pointer hover:text-red-500 dark:hover:text-red-400 dark:text-gray-400"/>
    </div>
      <div class="pt-1 text-sm text-green-700"><FontAwesomeIcon icon="check" class="mr-2 "/>copied to clipboard</div>

    <div class="flex items-center justify-center py-6 space-x-6">
        <FontAwesomeIcon :icon="['fab', 'reddit']" class="m-2 text-6xl text-[#FF4301] dark:text-[#FFFFFF] hover:ring-2 hover:ring-red-500 rounded-full cursor-pointer"/>
        <FontAwesomeIcon :icon="['fab', 'twitter']" class="m-2 text-6xl text-[#1DA1F2] hover:ring-2 hover:ring-red-500 rounded-full cursor-pointer"/>
        <FontAwesomeIcon :icon="['fab', 'facebook']" class="m-2 text-6xl text-[#3b5998] hover:ring-2 hover:ring-red-500 rounded-full cursor-pointer"/>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon1 from './FontAwesomeIcon1.vue';
export default {
  components: { FontAwesomeIcon1 },};
</script>

<style>
</style>