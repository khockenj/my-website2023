<template>
  <div :class="closed ? 'display-none' : ''">
    <div
      class="absolute-center outset-border draggable"
      style="max-width: 50rem; min-width: 50rem"
      ref="draggableContainer"
    >
      <q-bar
        class="navbar text-white draggable-header"
        @mousedown="dragMouseDown"
      >
        {{ title }}
        <q-space />
        <q-btn class="button" dense flat icon="minimize" />
        <q-btn
          class="button"
          dense
          flat
          icon="crop_square"
          @click="maximize()"
        />
        <q-btn class="button" dense flat icon="close" @click="closeOut(this)" />
      </q-bar>

      <q-bar class="bg-accent inherit-width">
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
                <q-item-section @click="closeOut(this)">Quit</q-item-section>
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
              <q-item clickable v-close-popup>
                <q-item-section @click="copyText(this, title, body)"
                  >Copy</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup disable>
                <q-item-section>Paste</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Select All</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <q-space />
      </q-bar>
      <div class="window">
        <AboutMe :body="body" v-if="type == 'about'" />
        <MyExperience :body="body" v-if="type == 'exp'" />
        <MyProjects :body="body" v-if="type == 'projects'" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AboutMe from "components/AboutMe.vue";
import MyExperience from "components/MyExperience.vue";
import MyProjects from "components/MyProjects.vue";

export default defineComponent({
  name: "ProjectWindow",
  components: {
    AboutMe,
    MyExperience,
    MyProjects,
  },
  props: ["title", "body", "type"],
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
    copyText: (self, t, b) => {
      navigator.clipboard.writeText(b).then(
        () => {
          /* clipboard successfully set */
          console.log(self);
        },
        () => {
          /* clipboard write failed */
        }
      );
    },
    closeOut: (self) => {
      self.closed = true;
    },
    maximize: function () {
      let w = window.screen.width - window.screen.width / 250 + "px";
      this.$refs.draggableContainer.style.width = w;
      this.$refs.draggableContainer.style.maxWidth = w;
      this.$refs.draggableContainer.style.minWidth = w;

      let h = window.screen.width - window.screen.width / 250 + "px";
      this.$refs.draggableContainer.style.height = h;
      this.$refs.draggableContainer.style.maxHeight = h;
      this.$refs.draggableContainer.style.minHeight = h;
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
