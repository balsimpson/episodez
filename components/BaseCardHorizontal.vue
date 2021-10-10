<template>
  <div class="flex bg-white border border-gray-300 rounded card">
    <div class="flex-none w-1/3 h-64 card__media">
      <img
        src="../assets/random.jpg"
        alt=""
        class="object-cover w-full h-full rounded-l"
      />
    </div>
    <div class="relative p-4 pl-6 text-left text-gray-500 card__content ">
      <div class="text-xs uppercase">category</div>
      <div class="font-serif text-xl font-bold leading-6 capitalize">
        This is an actual Headline
      </div>
      <div class="pt-1">Subtitle</div>
      <div class="pt-2 text-sm text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        exercitationem sint alias aspernatur commodi. 
      </div>
      <div class="absolute bottom-0 left-0 flex items-center justify-center w-full p-2 divide-x card__footer">
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>