<template>
  <div class="bg-white border border-gray-300 rounded card">
    <div class="card__media">
      <img src="../assets/random.jpg" alt="" class="w-full rounded-t" />
    </div>
    <div class="p-4 text-left text-gray-500 card__content">
      <div class="text-xs uppercase">category</div>
      <div class="font-serif text-xl font-bold leading-6 capitalize">
        This is an actual Headline
      </div>
      <div class="pt-1">Subtitle</div>
      <div class="pt-2 text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sint alias aspernatur commodi. Recusandae culpa minima
        fugiat illo dolores!
      </div>
    </div>
    <div class="flex py-2 border-t border-gray-100 divide-x card__footer">
      <div class="w-full text-center">
        <FontAwesomeIcon icon="heart" />
        <span class="text-xs uppercase">Likes</span>
      </div>
      <div class="w-full text-center">
        <FontAwesomeIcon icon="share" />
        <span class="text-xs uppercase">Share</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>