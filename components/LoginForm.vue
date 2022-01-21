<template>
  <div class="w-full max-w-md px-4 py-12 mx-auto">
    <div>
      <div
        v-if="isRegistering"
        class="mt-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-500 "
      >
        Register.
      </div>
      <div
        v-else
        class="my-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-700 "
      >
        Sign in.
      </div>
    </div>

    <div class="max-w-xl mx-auto mt-12">
      <form v-if="!isRegistering" @submit="login" class="space-y-4">
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-left text-gray-500"
          >
            <div
              v-if="isInvalidEmail"
              class="h-4 text-sm text-left text-red-400"
            >
              Enter a valid email address
            </div>
            <div v-else>Email</div>
          </label>
          <div class="mt-1">
            <input
              v-model="emailInput"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              placeholder="Your Email"
              class="input-item"
              :class="[isInvalidEmail ? 'bg-red-200' : '']"
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
              required="true"
              placeholder="Your Password"
              class="input-item"
            />
          </div>
        </div>

        <div class="mt-1">
          <div class="h-2 mb-2 text-sm text-red-500">
            {{ loginErrorMsg }}
          </div>
          <button
            @click.prevent="login"
            class="btn-login"
            :disabled="isSigninActive"
          >
            <FontAwesomeIcon
              :icon="['fas', 'lock']"
              class="mx-1 mr-3 text-gray-200 cursor-pointer group-hover:text-gray-300 "
            />Sign in
          </button>

          <div class="h-4 my-2 text-sm text-gray-500">
            Not registered?
            <span
              @click="isRegistering = !isRegistering"
              class="text-red-400 cursor-pointer"
              >Register</span
            >
          </div>
        </div>
      </form>

      <form v-else @submit="register" class="space-y-4">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-left text-gray-500"
          >
            Display Name
          </label>
          <div class="mt-1">
            <input
              v-model="displayNameInput"
              id="name"
              name="name"
              type="text"
              required="true"
              placeholder="Your Display Name"
              class="input-item"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-left text-gray-500"
          >
            <div
              v-if="isInvalidEmail"
              class="h-4 text-sm text-left text-red-400"
            >
              Enter a valid email address
            </div>
            <div v-else>Email</div>
          </label>
          <div class="mt-1">
            <input
              v-model="emailInput"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required="true"
              placeholder="Your Email"
              class="input-item"
              :class="[isInvalidEmail ? 'bg-red-200' : '']"
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
              required="true"
              placeholder="Your Password"
              class="input-item"
            />
          </div>
        </div>

        <div class="mt-1">
          <div class="h-2 mb-2 text-sm text-red-500">
            {{ loginErrorMsg }}
          </div>
          <button
            @click.prevent="login"
            class="btn-login"
            :disabled="isSigninActive"
          >
            <FontAwesomeIcon
              :icon="['fas', 'lock']"
              class="mx-1 mr-3 text-gray-200 cursor-pointer group-hover:text-gray-300 "
            />Register
          </button>

          <div class="h-4 my-2 text-sm text-gray-500">
            Already registered?
            <span
              @click="isRegistering = !isRegistering"
              class="text-red-400 cursor-pointer"
              >Sign in</span
            >
          </div>
        </div>
      </form>

      <div class="relative my-4 mt-6">
        <div class="absolute inset-0 flex items-center">
          <div
            class="w-full border-t border-gray-300 dark:border-gray-500"
          ></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span
            class="px-2 text-gray-400 bg-white dark:text-gray-500 dark:bg-gray-700 "
          >
            or continue with
          </span>
        </div>
      </div>

      <div
        class="flex items-center justify-between space-x-4 text-2xl text-gray-500 "
      >
        <div
          class="
            flex
            items-center
            dark:bg-gray-200
            hover:bg-[#4285f4]
            dark:hover:bg-[#4285f4]
            rounded-[3px]
            shadow
            hover:shadow-lg
            group
            cursor-pointer
          "
          @click="socialSignIn('google')"
        >
          <img
            src="google_logo.png"
            alt=""
            class="
              w-10
              p-2
              bg-white
              border border-white
              group-hover:border-[#4285f4]
              rounded-[3px]
            "
          />
          <span
            class="px-3 text-base font-semibold text-gray-600 dark:text-gray-500 group-hover:text-gray-300 "
            >Google</span
          >
        </div>

        <div
          class="
            flex
            items-center
            p-2
            bg-white
            rounded-[3px]
            shadow
            group
            hover:bg-gray-800
            cursor-pointer
          "
          @click="socialSignIn('github')"
        >
          <FontAwesomeIcon
            :icon="['fab', 'github']"
            class="mx-1 text-gray-600 cursor-pointer group-hover:text-gray-300"
          />
          <span
            class="px-2 text-base font-semibold text-gray-600 group-hover:text-gray-300 "
            >Github</span
          >
        </div>

        <div
          class="
            flex
            items-center
            p-2
            bg-white
            rounded-[3px]
            shadow
            group
            hover:bg-blue-600
            cursor-pointer
          "
          @click="socialSignIn('twitter')"
        >
          <FontAwesomeIcon
            :icon="['fab', 'twitter']"
            class="mx-1 text-blue-600 cursor-pointer group-hover:text-gray-200"
          />
          <span
            class="px-2 text-base font-semibold text-gray-600 group-hover:text-gray-300 "
            >Twitter</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, useStore, useContext } from "@nuxtjs/composition-api";

export default {
  setup(props, { emit }) {
    const store = useStore();
    const { $fire, $fireModule } = useContext();

    const emailInput = ref("");
    const passwordInput = ref("");
    const displayNameInput = ref("");

    const isInvalidEmail = ref(false);
    const isRegistering = ref(false);

    const loginErrorMsg = ref("");
    // const isSigninActive = ref(true);
    const isSigninActive = computed(() => {
      if (emailInput.value && passwordInput.value) {
        return false;
      } else {
        return true;
      }
    });

    const login = async () => {
      isInvalidEmail.value = validateEmail(emailInput.value);

      if (!isInvalidEmail.value) {
        // console.log("email invalid", isInvalidEmail.value);
        try {
          let res = await $fire.auth.signInWithEmailAndPassword(
            inputEmail,
            inputPassword
          );
          console.log("res", res);
          return res;
        } catch (error) {
          console.log("error", error);
          loginErrorMsg.value = error.message;
        }
      } else {
        console.log("email valid", isInvalidEmail.value);
      }
    };

    const register = () => {};

    const socialSignIn = async (signinProvider) => {
      let provider;
      switch (signinProvider) {
        case "google":
          provider = new $fireModule.auth.GoogleAuthProvider();
          provider.addScope("https://www.googleapis.com/auth/userinfo.email");
          break;

        case "github":
          provider = new $fireModule.auth.GithubAuthProvider();
          break;

        case "twitter":
          provider = new $fireModule.auth.TwitterAuthProvider();
          break;
      }

      try {
        let res = await $fire.auth.signInWithPopup(provider);
        console.log("res", res);
        emit('signedIn');
        return res;
      } catch (error) {
        console.log("error", error);
      }
    };

    function validateEmail(inputText) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (inputText.match(mailformat)) {
        return false;
      } else {
        return true;
      }
    }

    return {
      isRegistering,
      isSigninActive,
      isInvalidEmail,
      displayNameInput,
      emailInput,
      passwordInput,
      login,
      register,
      loginErrorMsg,
      socialSignIn,
    };
  },
};
</script>

<style lang="postcss">
.input-item {
  @apply block w-full px-5 py-3 text-base text-black placeholder-gray-400 transition duration-500 ease-in-out transform border border-gray-300 rounded-lg dark:text-gray-200 bg-gray-50 dark:bg-gray-500 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white dark:focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-red-300;
}

.btn-login {
  @apply flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition ease-out transform bg-red-500 dark:bg-red-300 rounded-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none;
}
</style>