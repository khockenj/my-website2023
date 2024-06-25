<template>
  <div class="q-pa-md">
    <!--<div class="col" v-for="w in windows" :key="w.title">
        <ProjectWindow :title="w.title" :body="w.body" />
      </div>-->
    <div class="row">
      <div class="col">
        <q-btn square flat stack no-caps class="home-icon">
          <q-avatar icon="mdi-robot" text-color="deep-purple"> </q-avatar>
          <div class="white">About Me</div>
        </q-btn>
        <q-btn square flat stack no-caps class="home-icon">
          <q-avatar icon="mdi-cards" text-color="teal"> </q-avatar>
          <div class="white">Projects</div>
        </q-btn>
        <q-btn
          square
          flat
          stack
          no-caps
          class="home-icon"
          href="https://docs.google.com/document/d/1Wxca0DxutLRAWSDXOPhp7D2B1HytLYEv/edit?usp=sharing&ouid=105661401220528503426&rtpof=true&sd=true"
          target="_blank"
        >
          <q-avatar icon="mdi-file-document" text-color="brown"> </q-avatar>
          <div class="white">Resume</div>
        </q-btn>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-btn square flat stack no-caps class="home-icon">
          <q-avatar icon="work" text-color="primary"> </q-avatar>
          <div class="white">Experience</div>
        </q-btn>
        <q-btn square flat stack no-caps class="home-icon">
          <q-avatar icon="mdi-school" text-color="black"> </q-avatar>
          <div class="white">Education</div>
        </q-btn>
        <q-btn square flat stack no-caps class="home-icon">
          <q-avatar icon="mdi-brain" text-color="red"> </q-avatar>
          <div class="white">Skills</div>
        </q-btn>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <q-btn
          square
          flat
          stack
          no-caps
          class="home-icon"
          href="https://fq2021.netlify.app/"
          target="_blank"
        >
          <q-avatar icon="mdi-leaf" text-color="green"> </q-avatar>
          <div class="white">LoL FlyQuest</div>
        </q-btn>
      </div>
    </div>

    <div>
      <ProjectWindow
        :title="windows[w].title"
        :type="w"
        v-for="w in opened"
        v-bind:key="w"
        :id="w"
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
  data() {
    return {
      windows: {
        about: {
          title: "About Me",
        },
        exp: {
          title: "My Experience",
        },
        projects: {
          title: "My Projects",
        },
        intro: {
          title: "Welcome to my site!",
        },
        edu: {
          title: "My Education",
        },
        skills: {
          title: "My Skills",
        },
        books: {
          title: "Recent Reads",
        },
      },
    };
  },
};
</script>
