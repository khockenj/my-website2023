<template>
  <div class="q-pa-md">
    <!--<div class="col" v-for="w in windows" :key="w.title">
        <ProjectWindow :title="w.title" :body="w.body" />
      </div>-->
    <div class="row">
      <div class="col">
        <q-btn
          label="My Resume"
          square
          flat
          text-color="white"
          class="body-bg screen-buttons"
          icon="mdi-file-document"
          padding="1rem"
          stack
          no-caps
        />
        <q-btn
          label="About Me"
          square
          flat
          text-color="white"
          class="body-bg screen-buttons"
          icon="folder"
          padding="1rem"
          stack
          no-caps
        />
        <q-btn square flat stack>
          <q-avatar icon="mdi-file-document" text-color="white"> </q-avatar>
          abc
        </q-btn>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-btn
          label="My Experience"
          square
          round
          flat
          text-color="white"
          class="body-bg screen-buttons"
          icon="folder"
          padding="1rem"
          stack
          no-caps
        />
        <q-btn
          label="My Projects"
          square
          round
          flat
          text-color="white"
          class="body-bg screen-buttons"
          size="xl"
          icon="folder"
          padding="1rem"
          stack
          no-caps
        />
      </div>
    </div>

    <div style="max-width: 60rem">
      <ProjectWindow
        :title="windows[0].title"
        :body="windows[0].body"
        :type="'about'"
      />
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
import ProjectWindow from "components/ProjectWindow.vue";

export default {
  name: "MyProjects",
  components: {
    ProjectWindow,
  },
  props: ["opened"],
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? "dense"
          : $q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
  data() {
    return {
      windows: [
        {
          title: "About Me",
          type: "about",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis in eu. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Velit egestas dui id ornare arcu. Purus semper eget duis at tellus. Et netus et malesuada fames ac turpis egestas. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Fermentum posuere urna nec tincidunt. Sed risus pretium quam vulputate dignissim suspendisse.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed faucibus turpis in eu. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Velit egestas dui id ornare arcu. Purus semper eget duis at tellus. Et netus et malesuada fames ac turpis egestas. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Fermentum posuere urna nec tincidunt. Sed risus pretium quam vulputate dignissim suspendisse.`,
        },
        {
          title: "My Experience",
          type: "exp",
          body: `woof woof, meow meow.`,
        },
        {
          title: "My Projects",
          type: "projects",
          body: `projects here`,
        },
      ],
    };
  },
};
</script>
