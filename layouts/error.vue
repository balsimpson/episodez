<template>
  <div class="flex flex-col items-center justify-start min-h-screen py-4 mx-auto bg-gray-200 dark:bg-gray-400">
    <div v-if="error.statusCode === 404" class="p-12">
      <img src="/taken.svg" alt="" class="max-w-sm mt-4">
      <div class="font-serif text-3xl font-extrabold text-center">Page Not Found</div>
    </div>
    <h1 v-else-if="error.statusCode === 500">
      <img src="error_internal.svg" alt="" class="max-w-xl w-44">
      <div class="py-4 font-serif text-2xl text-center">Internal Error</div>
    </h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Go to Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>