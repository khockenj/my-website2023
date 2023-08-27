<template>
  <div>
    <div
      class="fixed-center outset-border draggable"
      style="
        width: 50rem;
        min-width: 18rem;
        min-height: 6rem;
        max-width: 100%;
        max-height: 100%;
        resize: both;
        overflow: auto;
        background-color: rgb(212, 208, 200);
      "
      ref="draggableContainer"
      @click="setActive"
    >
      <q-bar
        class="text-white draggable-header"
        :class="{
          navbar: active == type,
          'navbar-grey': active != type,
        }"
        :style="''"
        @mousedown="dragMouseDown"
      >
        {{ title }}
        <q-space />
        <q-btn class="button" dense flat icon="minimize" @click="closeOut" />
        <q-btn
          class="button"
          dense
          flat
          icon="crop_square"
          @click="maximize()"
        />
        <q-btn class="button" dense flat icon="close" @click="closeOut" />
      </q-bar>

      <q-bar
        class="bg-accent inherit-width"
        style="border-bottom: 1px solid #323232"
      >
        <div class="cursor-pointer non-selectable q-pr-sm file-bar">
          File
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup disable>
                <q-item-section>Open...</q-item-section>
              </q-item>
              <q-item clickable v-close-popup disable>
                <q-item-section>New</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Preferences</q-item-section>
                <q-item-section side>
                  <q-icon name="arrow_right" />
                </q-item-section>

                <q-menu anchor="top end" self="top start">
                  <q-list dense>
                    <q-item clickable>
                      <q-item-section>Do Nothing?</q-item-section>
                      <q-item-section side>
                        <q-icon name="arrow_right" />
                      </q-item-section>
                      <q-menu auto-close anchor="top end" self="top start">
                        <q-list dense>
                          <q-item clickable>
                            <q-item-section>Do Nothing</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section @click="closeOut">Quit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <div class="cursor-pointer non-selectable q-mr-sm">
          Edit
          <q-menu>
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup disable>
                <q-item-section disable>Cut</q-item-section>
              </q-item>
              <q-item clickable v-close-popup disable>
                <q-item-section>Copy</q-item-section>
              </q-item>
              <q-item clickable v-close-popup disable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup disable>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <q-space />
      </q-bar>
      <div class="window inherit-width">
        <AboutMe v-if="type == 'about'" />
        <MyExperience v-if="type == 'exp'" />
        <MyProjects v-if="type == 'projects'" />
        <MySkills v-if="type == 'skills'" />
        <MyEducation v-if="type == 'edu'" />
        <MyIntro v-if="type == 'intro'" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AboutMe from "components/AboutMe.vue";
import MyExperience from "components/MyExperience.vue";
import MyProjects from "components/MyProjects.vue";
import MySkills from "components/MySkills.vue";
import MyEducation from "components/MyEducation.vue";
import MyIntro from "components/MyIntro.vue";

export default defineComponent({
  name: "ProjectWindow",
  components: {
    AboutMe,
    MyExperience,
    MyProjects,
    MySkills,
    MyEducation,
    MyIntro,
  },
  props: ["title", "active", "type", "count"],
  data() {
    return {
      closed: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },

  methods: {
    closeOut: function () {
      this.$emit("closed-me", this.type);
    },
    setActive: function () {
      this.$emit("set-active", this.type);
    },
    maximize: function () {
      this.$refs.draggableContainer.classList.add("fit");
    },
    dragMouseDown: function (event) {
      event.preventDefault();
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();

      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      if (
        window.screen.height >
          this.$refs.draggableContainer.offsetTop - this.positions.movementY &&
        this.$refs.draggableContainer.offsetTop - this.positions.movementY > 0
      ) {
        this.$refs.draggableContainer.style.top =
          this.$refs.draggableContainer.offsetTop -
          this.positions.movementY +
          "px";
      }
      if (
        window.screen.width >
          this.$refs.draggableContainer.offsetLeft - this.positions.movementX &&
        this.$refs.draggableContainer.offsetLeft - this.positions.movementX > 0
      ) {
        this.$refs.draggableContainer.style.left =
          this.$refs.draggableContainer.offsetLeft -
          this.positions.movementX +
          "px";
      }
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
});
</script>
