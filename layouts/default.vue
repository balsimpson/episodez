<template>
  <div :class="[currentTheme == 'dark' ? 'dark' : '']" class="">
    <div class="sticky top-0 z-50 transition-colors duration-200 bg-gray-200 shadow-lg dark:bg-gray-800">
      <div
        class="flex items-center justify-between max-w-5xl p-4 mx-auto text-white "
      >
        <NuxtLink to="/">
          <img v-if="currentTheme == 'dark'" src="/logo_light.png" alt="episodez logo" class="w-32" />
          <img v-else src="/logo_dark.png" alt="episodez logo" class="w-32" />
        </NuxtLink>

        <div class="flex">
          <NuxtLink to="/createlist">
            <div
              class="px-2 py-1 mr-2 text-xs font-bold uppercase transition bg-red-500 rounded-sm cursor-pointer hover:bg-red-800 dark:hover:bg-red-600"
            >
              create list
            </div>
          </NuxtLink>
          <ProfileDropdown>
            <!-- Switch theme -->
            <template #themeSwitcher>
              <ThemeSwitcher @switchTheme="clickHandler" />
            </template>
          </ProfileDropdown>
        </div>
      </div>
    </div>

    <div>
      <Nuxt />
    </div>

    <!-- <BaseFooter  /> -->
  </div>
</template>

<script>
import { ref, onMounted } from "@nuxtjs/composition-api";
export default {
  head: {
    title: 'episodez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover, create and share episode playlists of your favourite TV Shows.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './favicon.png' }
    ]
  },
  
  setup(props, { emit }) {
    const currentTheme = ref("");

    onMounted(() => {
      if (localStorage.theme == "dark") {
        // console.log('if true', localStorage.theme);
        currentTheme.value = "dark";
      } else {
        // console.log('else', localStorage.theme);
        if (
        localStorage.theme != "light" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
       {
          currentTheme.value = "dark";
          localStorage.theme = currentTheme.value;
        } else {
          currentTheme.value = localStorage.theme;
        }
      }

      // if (
      //   localStorage.theme ||
      //   (!("theme" in localStorage) &&
      //     window.matchMedia("(prefers-color-scheme: dark)").matches)
      // ) {
      //   isDarkMode.value = true;
      //   localStorage.theme = isDarkMode.value;
      // } else {
      //   isDarkMode.value = localStorage.theme;
      // }
      // console.log("dafault-localStorage.theme", localStorage.theme);
    });

    const clickHandler = (val) => {
      currentTheme.value = val;
      console.log('clicked', val);
    };

    return { currentTheme, clickHandler };
  },
};
</script>

<style>
</style>