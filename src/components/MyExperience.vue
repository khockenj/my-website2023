<template>
  <div class="row">
    <div class="col">EXPERIENCE :D</div>
  </div>
  <div class="row">
    <div class="col"></div>
    {{ body }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyExperience",
  props: ["body"],
});
</script>
