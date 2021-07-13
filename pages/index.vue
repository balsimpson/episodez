<template>
<div>

  <FirebasePlayground/>

  <button @click="showToast">Toast</button>
</div>
</template>

<script>
import { ref, useContext } from "@nuxtjs/composition-api";
export default {
  setup() {
    const { $toast } = useContext();
    const showToast = () => {
      $toast.show('Successfully toasted!', {
        className: ["text-blue-500"]
      }).goAway(40000)
    }
  
  
    return { showToast }
  }
}
</script>