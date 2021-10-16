<template>
<div class="flex mt-4 space-x-3">
      <div class="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full"></div>
      <div class="text-gray-500">
        <div class="flex items-center space-x-2">
          <div class="text-sm font-bold">saudalat</div>
          <FontAwesomeIcon icon="circle" class="text-[8px]" />
          <div class="text-sm font-bold">10m</div>
        </div>

        <div class="mt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis
          quibusdam quasi non molestiae, perferendis maxime officiis incidunt
          eligendi veritatis.
        </div>

        <div class="flex mt-2 space-x-4 text-sm">
          <div v-if="!isReply" @click="showReply" class="text-xs font-semibold text-gray-400 uppercase cursor-pointer hover:text-gray-500">reply</div>
          
          <div class="text-xs font-semibold uppercase">
            <FontAwesomeIcon icon="heart" class="cursor-pointer hover:text-red-500"/><span class="ml-1">23 <span>likes</span></span>
          </div>
        </div>

        <AppCommentsAdd :class="[isReplying ? '' : 'hidden']" />
        <slot name="replies"></slot>

      </div>
    </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
export default {
    props: ["title", "score", "text", "date", "isReply"],
    setup(props, { emit }) {
      const isReplying = ref(false);
    
      const showReply = () => {
        isReplying.value = !isReplying.value;
      }
    
      return { showReply, isReplying }
    }
}
</script>

<style>

</style>