<template>
  <div
    class="flex items-start justify-between px-3 py-3 cursor-pointer hover:text-red-200 dark:hover:text-red-200 dark:hover:bg-red-500 hover:bg-red-500 group"
  >
    <div class="text-sm font-bold uppercase">Dark mode</div>
    <input
      @change="switchTheme"
      v-model="isDarkMode"
      type="checkbox"
      true-value=true
      false-value=false
      class="absolute w-full h-full -translate-x-1/2 rounded-md appearance-none left-1/2 peer "
    />
    <span
      class="flex items-center flex-shrink-0 w-8 h-5 p-1 duration-300 ease-in-out bg-gray-300 rounded-full cursor-pointer peer-checked:bg-red-500 dark:peer-checked:bg-red-200 after:w-3 after:h-3 after:bg-white dark:after:bg-red-500 after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-3 group-hover:after:translate-x-0"
    ></span>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "@nuxtjs/composition-api";
export default {
  setup(props, { emit }) {
    const currentTheme = ref("light");
    const isDarkMode = ref(false);
    const switchTheme = (e) => {
      if (e.target.checked) {
        currentTheme.value = "dark";
        isDarkMode.value = true;
      } else {
        currentTheme.value = "light";
        isDarkMode.value = false;
      }
      localStorage.theme = currentTheme.value;
      // console.log("localStorage.theme", localStorage.theme, darkMode.value);
      emit("switchTheme", currentTheme.value);
    };

    onMounted(() => {
      
      if (localStorage.theme == "dark") {
        // console.log('if true', localStorage.theme);
        currentTheme.value = "dark";
        isDarkMode.value = true;
      } else {
        // console.log('else', localStorage.theme);
        if (
        localStorage.theme != "light" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
       {
          currentTheme.value = "dark";
          isDarkMode.value = true;
          localStorage.theme = currentTheme.value;
        } else {
          currentTheme.value = localStorage.theme;
        }
      }

      // console.log("themeSwitcher-localStorage.theme", localStorage.theme);

    });

    return { currentTheme, switchTheme, isDarkMode };
  },
};
</script>

<style>
</style>