<template>
  <div>
    <div class="flex max-w-md mx-auto mt-6">
      <input
        type="text"
        class="w-full px-2 py-1 border border-solid rounded-l focus-within:border-green-200"
        v-model="ytLink"
      />
      <a
        @click="embedYoutube"
        href="#"
        class="inline-flex items-center px-2 py-1 text-sm font-bold text-white bg-red-500 rounded-r "
        >embed</a
      >
    </div>

    <div v-if="ytLinkId" class="max-w-xl mx-auto">
      <!-- Youtube Embed -->

      <div>{{ ytLinkId }}</div>
      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${ytLinkId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
  setup(props, { emit }) {
    const ytLink = ref("");
    const ytLinkId = ref("");

    const embedYoutube = async () => {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = ytLink.value.match(regExp);

      ytLinkId.value = match && match[2].length === 11 ? match[2] : null;
      console.log("id", ytLinkId.value);
      // let res = await fetch(
      //   `https://www.youtube.com/oembed?url=${ytLink.value}&format=json`
      // );
      // console.log("res", res);
    };

    return { ytLink, ytLinkId, embedYoutube };
  },
};
</script>

<style>
</style>