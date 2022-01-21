<template>
  <div class="max-w-5xl mx-auto ">
    <h3
      class="relative inline-block w-auto pb-3 text-3xl font-semibold leading-none tracking-tighter text-center text-gray-600 capitalize dark:text-gray-400 title-font "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute top-0 left-0 w-16 h-24 opacity-10 rotate-6"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <circle cx="17" cy="249" r="17" fill="currentColor" />
        <circle cx="17" cy="191" r="17" fill="currentColor" />
        <circle cx="17" cy="133" r="17" fill="currentColor" />
        <circle cx="17" cy="75" r="17" fill="currentColor" />
        <circle cx="17" cy="17" r="17" fill="currentColor" />
        <circle cx="75" cy="249" r="17" fill="currentColor" />
        <circle cx="75" cy="191" r="17" fill="currentColor" />
        <circle cx="75" cy="133" r="17" fill="currentColor" />
        <circle cx="75" cy="75" r="17" fill="currentColor" />
        <circle cx="75" cy="17" r="17" fill="currentColor" />
        <circle cx="133" cy="249" r="17" fill="currentColor" />
        <circle cx="133" cy="191" r="17" fill="currentColor" />
        <circle cx="133" cy="133" r="17" fill="currentColor" />
        <circle cx="133" cy="75" r="17" fill="currentColor" />
        <circle cx="133" cy="17" r="17" fill="currentColor" />
        <circle cx="191" cy="249" r="17" fill="currentColor" />
        <circle cx="191" cy="191" r="17" fill="currentColor" />
        <circle cx="191" cy="133" r="17" fill="currentColor" />
        <circle cx="191" cy="75" r="17" fill="currentColor" />
        <circle cx="191" cy="17" r="17" fill="currentColor" />
        <circle cx="249" cy="249" r="17" fill="currentColor" />
        <circle cx="249" cy="191" r="17" fill="currentColor" />
        <circle cx="249" cy="133" r="17" fill="currentColor" />
        <circle cx="249" cy="75" r="17" fill="currentColor" />
        <circle cx="249" cy="17" r="17" fill="currentColor" />
      </svg>
      <FontAwesomeIcon :icon="icon" class="mr-2" />

      {{ title }} <span class="text-red-500">{{ highlighted }}</span>
    </h3>
    <div class="border-b border-gray-400 border-dotted dark:border-gray-600">
      <p class="max-w-md pb-2 leading-tight text-gray-500 capitalize dark:text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque
        molestias debitis, assumenda facilis voluptas deserunt in cupiditate
        enim ea?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "highlighted", "icon"],
};
</script>

<style>
</style>