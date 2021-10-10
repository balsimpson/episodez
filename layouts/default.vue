<template>
  <div>
    <div class="sticky top-0 z-50 bg-gray-800">
      <div
        class="flex items-center justify-between max-w-5xl p-4 mx-auto text-white "
      >
        <NuxtLink to="/">
          <img src="logo_light.png" alt="episodez logo" class="w-32" />
        </NuxtLink>

        <div class="flex">
          <NuxtLink to="/createlist">
            <div
              class="px-2 py-1 mr-2 text-xs font-bold uppercase transition bg-red-500 rounded-sm cursor-pointer hover:bg-red-900 "
            >
              create list
            </div>
          </NuxtLink>
          <ProfileDropdown />
        </div>
      </div>
    </div>

    <div>
      <Nuxt />
    </div>

    <BaseFooter  />
  </div>
</template>