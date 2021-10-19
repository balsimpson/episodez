<template>
  <div class="relative max-w-5xl mx-auto">
    <h3
      class="relative w-auto pb-3 text-3xl font-semibold leading-none tracking-tighter text-left text-gray-600 capitalize border-b border-gray-400 border-dotted dark:text-gray-400 title-font dark:border-gray-600 "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute w-16 h-24 left-4 opacity-10 rotate-6 -top-8"
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
  </div>
</template>

<script>
export default {
  props: ["title", "highlighted", "icon"],
};
</script>

<style>
</style>