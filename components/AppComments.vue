<template>
  <div class="max-w-3xl p-4 mx-auto">
    <SectionHeader title="comments" highlighted="" icon="comments" class="mb-4"/>
    <AppCommentsAdd />
    <!-- comment -->
    <AppCommentItem />
    <AppCommentItem />
    <AppCommentItem>
      <template #replies>
        <AppCommentItem :isReply="true" />
        <AppCommentItem :isReply="true" />
        <AppCommentItem :isReply="true" />
        <AppCommentItem :isReply="true" />
    </template>
    </AppCommentItem>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
</style>