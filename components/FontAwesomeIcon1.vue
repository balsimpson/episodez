<template>
  <i :class="[iconClass, iconToUse]"></i>
</template>

<script>
import { computed } from "@nuxtjs/composition-api";
export default {
  props: ["icon", "color"],
  setup(props) {
    const iconToUse = computed(() => "fa-" + props.icon);
    const iconClass = computed(() => {
      if (
        props.icon == "google" ||
        props.icon == "vuejs" ||
        props.icon == "twitter"
      ) {
        return "fab";
      } else {
        return "fas";
      }
    });

    return { iconClass, iconToUse };
  },
};
</script>

<style lang="scss" scoped></style>
