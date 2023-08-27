<template>
  <div>
    <q-list bordered padding>
      <q-item>
        <q-item-section avatar>
          <q-icon name="mdi-web" color="deep-purple-4" size="lg" />
        </q-item-section>
        <q-item-section>
          <q-item-label overline>VUE, QUASAR</q-item-label>
          <q-item-label>This Website</q-item-label>
          <q-item-label caption
            >Designed this website in the style of Windows NT</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption
            ><q-badge rounded color="positive" label="Complete"
          /></q-item-label>

          <div>
            <q-btn
              icon="mdi-github"
              class="github"
              flat
              href="https://github.com/khockenj/my-website2023"
              target="_blank"
              dense
            />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item>
        <q-item-section avatar>
          <q-icon name="mdi-leaf" color="green" size="lg" />
        </q-item-section>
        <q-item-section>
          <q-item-label overline
            >PYTHON, FLASK, PANDAS, NUMPY, VUE</q-item-label
          >
          <q-item-label>FlyQuest LoL Data Analytics</q-item-label>
          <q-item-label caption
            >Created a web application that tracked League of Legends pros stats
            in professional matches and online games, tracking tendencies and
            demonstrating and showing different metrics
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption
            ><q-badge rounded color="positive" label="Complete"
          /></q-item-label>

          <div>
            <q-btn
              icon="mdi-link-variant"
              flat
              href="https://fq2021.netlify.app/"
              target="_blank"
              dense
            />
            <q-btn
              icon="mdi-github"
              class="github"
              flat
              href="https://github.com/khockenj/fq2021"
              target="_blank"
              dense
            />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item>
        <q-item-section avatar>
          <q-icon name="mdi-record-circle" color="black" size="lg" />
        </q-item-section>
        <q-item-section>
          <q-item-label overline
            >JAVASCRIPT, HTML5 CANVAS, NODE.JS, EXPRESS</q-item-label
          >
          <q-item-label>Web Vinyl</q-item-label>
          <q-item-label caption
            >Designed a web application that plays music from YouTube, and a
            HTML5 Canvas designed record player spins</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption
            ><q-badge rounded color="warning" label="In Progress"
          /></q-item-label>
          <div>
            <q-btn
              icon="mdi-image-frame"
              flat
              href="https://imgur.com/siXSLRU"
              target="_blank"
              color="blue-7"
              dense
            />
          </div>
        </q-item-section>
      </q-item>
      <q-separator spaced />
      <q-item>
        <q-item-section avatar>
          <q-icon name="mdi-steam" color="black" size="lg" />
        </q-item-section>
        <q-item-section>
          <q-item-label overline>PYTHON, JAVASCRIPT</q-item-label>
          <q-item-label>CS Tradeup Machine</q-item-label>
          <q-item-label caption
            >Developed a Python based application that will check your Counter
            Strike inventory, and determine the best possible tradeup based on
            odds and chance to profit</q-item-label
          >
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption
            ><q-badge rounded color="warning" label="In Progress"
          /></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyProjects",
});
</script>
