<template>
  <div class="flex bg-white border border-gray-300 rounded card">
    <div class="relative flex-none w-full h-64 card__media">
      <img
        src="../assets/random.jpg"
        alt=""
        class="object-cover h-full rounded"
      />
      <span
        class="absolute top-0 left-0 w-full h-full rounded-b bg-gradient-to-t from-gray-800 "
      >
      </span>

      <div class="absolute left-0 bottom-4">
        <div
          class="font-serif text-base font-bold leading-5 text-gray-200 capitalize "
        >
          This is an actual headline
        </div>
        <div class="w-12 h-1 mx-auto mt-1 mb-1 bg-red-500 rounded"></div>
        <div
          class="px-2 font-serif text-sm font-light leading-4 text-gray-200 capitalize"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing.
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