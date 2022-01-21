<template>
  <div class="max-w-3xl mx-auto">
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="(tag, index) in tags" :key="index" class="space-x-2">
        <div
          class="flex items-center h-5 p-1 m-1 border border-red-300 rounded-lg"
        >
          <div class="text-[12px] px-2 font-bold text-red-400">{{ tag }}</div>
          <svg
            @click="removeTag(index)"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 h-3 text-red-400 transition-colors rounded-full fill-current hover:text-white hover:bg-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <input
        ref="newtagInput"
        type="text"
        placeholder="Add a Tag"
        class="text-[12px] w-20 m-1 rounded-full text-center focus:outline-none border border-red-500 text-red-500"
        v-model="newtag"
        @keydown="addTag"
      />
    </div>
    <div class="h-12 tag-info">
      <div
        v-show="suggestedTags.length && newtag.length"
        class="tag-suggestions-container"
      >
        <div
          @click="suggestionClicked(tag)"
          v-for="(tag, index) in suggestedTags"
          :key="index"
          class="text-[12px] px-1 font-bold text-red-300 border rounded-full border-red-500 w-min mx-auto mt-2"
        >
          {{ tag }}
        </div>
      </div>
      <span class="text-[12px] text-gray-400">{{ newtagMsg }}</span>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "@nuxtjs/composition-api";

export default {
  emits:["tagsUpdated"],
  props:["suggestions"],
  setup(props, {emit}) {
    const tags = ref([]);
    const suggestionTags = ref(["comedy", "laugh"]);
    const newtag = ref("");
    const newtagInput = ref();
    const newtagMsg = ref("");

    const suggestedTags = computed(() => {
      return suggestionTags.value.filter((tag) => tag.includes(newtag.value));
    });

    const suggestionClicked = (tag) => {
      if (!isTagDuplicate(tag)) {
        tags.value.push(tag);
        newtag.value = "";
        newtagInput.value.focus();
      } else {
        showTagMsg("Duplicate tag");
        newtagInput.value.focus();
      }
    };

    const showTagMsg = (msg) => {
      newtagMsg.value = msg;
      setTimeout(() => {
        newtagMsg.value = "";
      }, 3000);
    };

    const addTag = (e) => {
      // console.log('addtag: ', e);
      if (e.code === "Comma" || e.code === "Enter") {
        e.preventDefault();
        // let val = e.target.value.trim();
        if (newtag.value.length > 0 && !isTagDuplicate(newtag.value)) {
          tags.value.push(newtag.value);
          newtag.value = "";
          newtagMsg.value = "";

          emit("tagsUpdated", tags.value);
        } else {
          showTagMsg("Duplicate tag");
        }
      }
    };

    const removeTag = (index) => {
      console.log("index", tags.value[index]);
      tags.value.splice(index, 1);
      emit("tagsUpdated", tags.value);
    };

    const isTagDuplicate = (tag) => {
      let res = tags.value.filter((t) => t === tag);
      if (res.length) {
        return true;
      }
      return false;
      // console.log("res", res);
    };

    return {
      tags,
      newtag,
      newtagInput,
      newtagMsg,
      addTag,
      suggestedTags,
      removeTag,
      suggestionClicked,
    };
  },
};
</script>

<style>

</style>