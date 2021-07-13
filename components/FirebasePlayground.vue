<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      grid
      justify-center
      grid-cols-2
      bg-gray-100
      items-top
      sm:pt-0
    "
  >
    <!-- Create New User -->
    <div class="container flex justify-center px-5 py-12 mx-auto">
      <div
        class="
          relative
          z-10
          flex flex-col
          w-full
          max-w-sm
          p-8
          bg-white
          rounded-lg
          shadow-md
        "
      >
        <h2 class="mb-1 text-xl font-black text-gray-900 title-font">
          Create new user
        </h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          Create a new user with email and password
        </p>
        <div class="relative mb-4">
          <input
            v-model="email"
            type="email"
            id="email"
            name="email"
            class="
              w-full
              text-base
              leading-8
              text-gray-700
              placeholder-transparent
              transition-colors
              duration-200
              ease-in-out
              bg-white
              border-b border-gray-300
              outline-none
              peer
              focus:ring-0
            "
            placeholder="Email"
          />
          <label
            for="email"
            class="
              absolute
              left-0
              text-sm text-gray-600
              transition-all
              -top-3
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-gray-400
              peer-placeholder-shown:top-1
            "
            >Email</label
          >
        </div>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            name="password"
            class="
              w-full
              px-3
              py-1
              text-base
              leading-8
              text-gray-700
              transition-colors
              duration-200
              ease-in-out
              bg-white
              border border-gray-300
              rounded
              outline-none
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
            "
          />
        </div>

        <button
          @click="createUser"
          class="
            px-6
            py-2
            text-lg text-white
            bg-indigo-500
            border-0
            rounded
            focus:outline-none
            hover:bg-indigo-600
          "
        >
          Create User
        </button>
        <p class="h-6 mt-3 text-xs text-gray-500">
          {{ createUserMsg }}
        </p>
      </div>
    </div>

    <!-- Read from firestore -->
    <div class="container flex justify-center px-5 py-12 mx-auto">
      <div
        class="
          relative
          z-10
          flex flex-col
          w-full
          max-w-sm
          p-8
          bg-white
          rounded-lg
          shadow-md
        "
      >
        <h2 class="mb-1 text-xl font-black text-gray-900 title-font">
          Read from firestore
        </h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          Read documents from a collection
        </p>
        <div class="relative mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600"
            >Collection name</label
          >
          <input
            v-model="collectionName"
            type="text"
            id="collectionName"
            name="collectionName"
            class="
              w-full
              px-3
              py-1
              text-base
              leading-8
              text-gray-700
              transition-colors
              duration-200
              ease-in-out
              bg-white
              border border-gray-300
              rounded
              outline-none
              focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200
            "
          />
        </div>

        <button
          @click="readFromFirestore"
          class="
            px-6
            py-2
            text-lg text-white
            bg-indigo-500
            border-0
            rounded
            focus:outline-none
            hover:bg-indigo-600
          "
        >
          Get Collection
        </button>
        <p class="mt-3 overflow-scroll text-xs text-gray-500 max-h-24">
          {{ readFromFirestoreMsg }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, useContext, useStore } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $fire } = useContext();
    const store = useStore();

    // Create User
    const email = ref("");
    const password = ref("");
    const createUserMsg = ref("");

    // Read from firestore
    const collectionName = ref("");
    const docId = ref("");
    const readFromFirestoreMsg = ref("");

    const createUser = async () => {
      try {
        let res = await store.dispatch(
          "createUser",
          email.value,
          password.value
        );

        createUserMsg.value = `${res.user.email} has signed in`;
        // console.log("res", res);
      } catch (error) {
        // console.log("error", error);
        createUserMsg.value = error.message;
      }
    };

    const signIn = async () => {
      let res = await $fire.auth.signInWithEmailAndPassword(
        inputEmail,
        inputPassword
      );
    };

    const readFromFirestore = async () => {
      const lists = $fire.firestore.collection(collectionName.value);
      const items = [];
      try {
        const docs = await lists.get();
        docs.forEach((doc) => {
          items.push(doc.data());
          // console.log("doc", doc.data());
        });
        readFromFirestoreMsg.value = JSON.stringify(items);
      } catch (error) {
        console.log("error", error);
        readFromFirestoreMsg.value = error.message;
        return;
      }
    };

    return {
      createUser,
      readFromFirestore,
      email,
      password,
      createUserMsg,
      readFromFirestoreMsg,
      collectionName,
    };
  },
};
</script>

<style>
</style>