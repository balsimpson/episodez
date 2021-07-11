<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex justify-center min-h-screen bg-gray-100 items-top sm:items-center sm:pt-0 "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div @click="createUser">firebase</div>
      <div @click="readFromFirestore">readFromFirestore</div>
    </div>
  </div>
</template>

<script>
import { useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $fire } = useContext();

    const createUser = async () => {
      try {
        await $fire.auth.createUserWithEmailAndPassword(
          "foo@foo.foo",
          "test12345"
        );
      } catch (e) {
        console.log("error", e);
      }
      console.log("hello");
    };

    const readFromFirestore = async () => {
      const lists = $fire.firestore.collection("lists");
      try {
        const docs = await lists.get();
        docs.forEach((doc) => {
          console.log("doc", doc.data());
        });
      } catch (e) {
        console.log("error", e);
        return;
      }
    };

    return { createUser, readFromFirestore };
  },
};
</script>

<style>
</style>