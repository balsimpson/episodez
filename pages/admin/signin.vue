<template>
  <div>
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div
        class="relative z-10 flex flex-col p-8 bg-white rounded-lg shadow w-72 "
      >
        <h2 class="mb-1 text-xl font-black text-gray-900 title-font">
          Sign In
        </h2>
        <p class="mb-5 text-sm leading-5 text-gray-600">
          Sign in using your administrator email and password
        </p>
        <div class="relative mb-4">
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="w-full text-base leading-8 text-gray-700 placeholder-transparent transition-colors duration-200 ease-in-out bg-white border-b border-gray-300 outline-none peer focus:ring-0" placeholder="Email"
          />
          <label for="email" class="absolute left-0 text-sm text-gray-600 transition-all -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1"
            >Email</label
          >
        </div>
        <div class="relative mb-4">
          
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="w-full text-base leading-8 text-gray-700 placeholder-transparent transition-colors duration-200 ease-in-out bg-white border-b border-gray-300 outline-none peer focus:ring-0" placeholder="password"
          />
          <label for="email" class="absolute left-0 text-sm text-gray-600 transition-all -top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1"
            >Password</label
          >
        </div>

        <button
          @click="createUser"
          class="px-6 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600 "
        >
          Sign In
        </button>
        <p class="h-6 mt-3 text-xs text-gray-500">
          {{ createUserMsg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>