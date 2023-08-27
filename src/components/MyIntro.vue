<template>
  <div class="row">
    <div class="col-2 q-mr-lg">
      <q-avatar icon="mdi-pac-man" text-color="yellow-10" size="9rem">
      </q-avatar>
    </div>
    <div class="col q-px-lg q-ml-xs q-pt-sm">
      Hi, I'm Kevin! Welcome to my portfolio website. I created this in the
      style of Windows NT using Vue and Quasar. You might be wondering "Why
      would anyone do this?" and truthfully, I simply thought it would be an
      interesting concept. I feel that most web designs are top and side bar
      focused, so I thought this would be an interesting, different concept.
      Also, I have an affinity for retro things in general, and this reminded me
      of playing games on my old Windows 2000 PC!
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyIntro",
});
</script>
