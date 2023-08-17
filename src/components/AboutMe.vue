<template>
  <div class="row">
    <div class="col">
      <q-avatar size="8rem">
        <img src="~assets/kevin-halloween.jpg" />
      </q-avatar>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    {{ body }}
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  props: ["body"],
});
</script>
