<template>
  <div class="w-full max-w-3xl px-2 py-12 mx-auto">
    <div>
      <h2 class="mt-6 text-3xl font-extrabold text-black">Sign in.</h2>
    </div>

    <div class="w-full mt-6">
      <form @submit="login" class="space-y-4">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-left text-gray-500"
          >
            Email address
          </label>
          <div class="mt-1">
            <input
              v-model="emailInput"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              placeholder="Your Email"
              class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-gray-300 rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-300 "
            />
          </div>
        </div>
        <div class="space-y-1">
          <label
            for="password"
            class="block text-sm font-medium text-left text-gray-500"
          >
            Password
          </label>
          <div class="mt-1">
            <input
              v-model="passwordInput"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              placeholder="Your Password"
              class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-gray-300 rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-300 "
            />
          </div>
        </div>

        <div class="mt-1">
          <div class="h-4 mb-2 text-sm text-red-500">
            {{ loginErrorMsg }}
          </div>
          <button
            @click.prevent="login"
            class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500  rounded-xl hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 "
          >
            Sign in
          </button>
        </div>
      </form>
      <div class="relative my-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 text-black bg-white"> Or continue with </span>
        </div>
      </div>
      <div class="flex items-center justify-around text-2xl text-gray-500">
        <FontAwesomeIcon
          @click="googleSignin"
          :icon="['fab', 'google']"
          class="cursor-pointer hover:text-gray-700"
        />
        <FontAwesomeIcon
          @click="githubSignIn"
          :icon="['fab', 'github']"
          class="cursor-pointer hover:text-gray-700"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useStore } from "@nuxtjs/composition-api";

export default {
  setup(props, { emit }) {
    const store = useStore();
    const emailInput = ref("");
    const passwordInput = ref("");

    const loginErrorMsg = ref("");

    const login = async () => {
      let res = await store.dispatch("signIn", {
        inputEmail: emailInput.value,
        inputPassword: passwordInput.value,
      });

      loginErrorMsg.value = "User not found";
      console.log("res", res);
    };

    const googleSignin = async () => {
      let res = await store.dispatch("googleSignIn");
      console.log("res", res);
    };

    const githubSignIn = async () => {
      let res = await store.dispatch("githubSignIn");
      console.log("res", res);
    };

    return {
      emailInput,
      passwordInput,
      login,
      loginErrorMsg,
      googleSignin,
      githubSignIn,
    };
  },
};
</script>

<style>
</style>