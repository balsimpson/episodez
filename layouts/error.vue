<template>
  <div class="flex flex-col items-center justify-start min-h-screen mx-auto dark:bg-gray-400">
    <div v-if="error.statusCode === 404" class="p-12">
      <img src="/taken.svg" alt="" class="max-w-sm mt-4">
      <div class="font-serif text-3xl font-extrabold text-center">Page Not Found</div>
    </div>
    <h1 v-else-if="error.statusCode === 500">Internal Server error</h1>
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