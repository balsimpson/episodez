<template>
  <div class="bg-white border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700 card">
    <div class="card__media">
      <img src="../assets/random.jpg" alt="" class="object-cover object-top w-full origin-top rounded-t max-h-32" />
    </div>
    <div class="p-4 text-left text-gray-500 dark:text-gray-400 card__content">
      <div class="text-xs font-semibold text-red-500 uppercase">category</div>
      <div class="font-serif text-2xl font-bold leading-6 text-gray-600 capitalize dark:text-gray-400">
        This is an actual Headline
      </div>
      <h2 class="mb-2 text-xs font-semibold tracking-widest uppercase dark:text-gray-500 title-font">Subtitle</h2>
      <div class="pt-2 leading-tight text-left dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sint alias aspernatur commodi. Recusandae culpa minima
        fugiat illo dolores!
      </div>

      <div class="mt-4 overflow-y-scroll divide-y divide-gray-200 dark:divide-gray-600 max-h-72">
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
        <BaseRowItem />
      </div>

    </div>
    <div class="flex py-2 border-t border-gray-100 divide-x dark:border-gray-500 card__footer">
      <div class="flex items-center justify-center w-full">
        <FontAwesomeIcon icon="heart" class="text-gray-300 " />
        <span class="flex-shrink-0 ml-2 text-xs font-semibold uppercase dark:text-gray-500 title-font">14 likes</span>
      </div>
      <div class="flex items-center justify-center w-full">
        <FontAwesomeIcon icon="share-alt" class="text-gray-300 " />
        <span class="flex-shrink-0 ml-2 text-xs font-semibold uppercase dark:text-gray-500 title-font">4 shares</span>
      </div>
      <div class="flex items-center justify-center w-full">
        <FontAwesomeIcon :icon="['fas', 'comment']" class="text-gray-300 " />
        <span class="flex-shrink-0 ml-2 text-xs font-semibold uppercase dark:text-gray-500 title-font">17 comments</span>
      </div>
      
    </div>
  </div>
</template>

<script>
import BaseRowItem from './BaseRowItem.vue';
export default {
  components: { BaseRowItem },};
</script>

<style>
</style>