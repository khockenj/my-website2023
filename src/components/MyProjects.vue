<template>
  <div class="row">
    <div class="col">PROJECTS</div>
  </div>
  <div class="row">
    <div class="col"></div>
    {{ body }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyProjects",
  props: ["body"],
});
</script>
