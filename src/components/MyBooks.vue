<template>
  <div>
    <q-list bordered padding>
      <q-item-label header>Recent Reads</q-item-label>

      <q-item>
        <q-item-section>
          <q-item-label>Blue Ocean Strategy</q-item-label>
          <q-item-label caption>Renée Mauborgne, W. Chan Kim</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label>The Design Of Everyday Things</q-item-label>
          <q-item-label caption>Don Norman</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label>The Innovator's Dilemma</q-item-label>
          <q-item-label caption>Clayton M. Christensen</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label
            >The Harada Method, The Spirit of Self-Reliance</q-item-label
          >
          <q-item-label caption>Norman Bodek, Takashi Harada</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label
            >Peak, Secrets from the New Science of Expertise</q-item-label
          >
          <q-item-label caption>Anders Ericsson, Robert Pool</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label>Ask Iwata</q-item-label>
          <q-item-label caption>Satoru Iwata</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label>Disrupting the Game</q-item-label>
          <q-item-label caption>Reggie Fils-Aim&#xe9;</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section>
          <q-item-label>Eleven Rings</q-item-label>
          <q-item-label caption>Phil Jackson, Hugh Delehanty</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyBooks",
});
</script>
