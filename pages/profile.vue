<template>
  <div class="min-h-screen bg-gray-200 dar:bg-gray-800">
    <div class="max-w-sm pt-12 mx-auto text-gray-500 dark:text-gray-300">
      <div
        class="pb-6 text-3xl font-semibold text-center border-b border-gray-300"
      >
        Your Profile
      </div>

      <div class="flex items-center py-6 border-b border-gray-300">
        <div class="flex-shrink-0 w-16 h-16 mr-6 bg-red-500 rounded-full"></div>
        <div>
          <div class="flex items-center">
            <div
              @keydown.enter="isEditing = !isEditing"
              @dblclick="isEditing = !isEditing"
              class="text-xl font-semibold leading-snug border focus:outline-none "
              :contenteditable="isEditing"
              :class="[
                isEditing
                  ? 'text-red-400 border-dashed border-gray-500 border'
                  : 'border-transparent',
              ]"
            >
              display name
            </div>
            <span
              @click="isEditing = !isEditing"
              class="inline-block px-1 ml-3 text-xs font-thin border border-gray-400 rounded cursor-pointer hover:bg-gray-300 "
              >{{ isEditing ? "save" : "edit" }}</span
            >
          </div>
          <div class="text-sm text-gray-400 dark:text-gray-600">
            someone@email.com
          </div>
          <div class="mt-4 text-xs uppercase">joined 20 Oct 2021</div>
        </div>
      </div>

      <div class="flex justify-between py-6 border-b border-gray-300">
          <div class="text-center">
              <div class="text-4xl text-gray-600">33</div>
              <div class="text-xs font-semibold uppercase">followers</div>
          </div>
          <div class="text-center">
              <div class="text-4xl text-gray-600">7</div>
              <div class="text-xs font-semibold uppercase">following</div>
          </div>
          <div class="text-center">
              <div class="text-4xl text-gray-600">0</div>
              <div class="text-xs font-semibold uppercase">favorites</div>
          </div>
          <div class="text-center">
              <div class="text-4xl text-gray-600">12</div>
              <div class="text-xs font-semibold uppercase">lists</div>
          </div>
      </div>
    </div>

    <div class="max-w-3xl mx-auto">
      <SectionHeader title="Your" highlighted="Feed" icon="rss" class="py-4" />
      
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import SectionHeader from '~/components/SectionHeader.vue';
export default {
  components: { SectionHeader },
  setup(props, { emit }) {
    const isEditing = ref(false);

    return { isEditing };
  },
};
</script>

<style>
</style>