<template>
    <div>
      <draggable
        class="list-group"
        tag="ul"
        handle=".handle"
        v-model="items"
        v-bind="dragOptions"
        @start="drag = true"
        @end="dragEnd"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <slot name="list"></slot>
        </transition-group>
      </draggable>
    </div>
</template>

<script>
import tmdb from "assets/js/useTmdbApi";
import draggable from "vuedraggable";
import { ref, onMounted } from "@nuxtjs/composition-api";
export default {
  props:["items"],
  components: {
    draggable,
  },
  setup(props, { emit }) {
    const list = ref([]);
    const drag = ref(false);
    const dragOptions = {
      animation: 200,
      disabled: false,
      ghostClass: "ghost",
    };

    const dragEnd = () => {
      console.log('list', list.value);
      emit("dragEnd"),
      drag.value = false;
    }

    onMounted(() => {
      list.value = props.items;
    });

    return { drag, dragOptions, list, tmdb, dragEnd };
  },
};
</script>

<style>
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.8s;
}
.no-move {
  transition: transform 0.8s;
}
.ghost {
  opacity: 0;
  background: #c8ebfb;
  border: 1px solid;
}
.list-group {
  min-height: 30px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>