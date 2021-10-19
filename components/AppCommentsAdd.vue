<template>
  <div>
      <div class="flex mt-1 space-x-3">
          <div class="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full"></div>
          <textarea
            rows="2"
            placeholder="add a comment to join the conversation"
            class="w-full p-2 text-sm rounded focus:outline-none ring-1 ring-gray-300 dark:ring-gray-600 focus:ring-red-400 focus:ring-1 dark:bg-gray-700"
          ></textarea>
        </div>
        <div class="flex items-end justify-end mt-2 space-x-2 text-sm">
          <div class="px-1 text-xs font-semibold uppercase border border-gray-400 rounded-sm dark:border-gray-600 dark:text-gray-600">cancel</div>
          <div class="px-1 text-xs font-semibold text-red-300 uppercase border border-red-400 rounded-sm">submit</div>
          
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>