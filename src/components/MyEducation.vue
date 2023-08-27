<template>
  <div>
    <q-list bordered padding>
      <q-item-label header>Education</q-item-label>

      <q-item>
        <q-item-section top avatar>
          <q-icon color="red-9" name="school" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Stevens Institute of Technology</q-item-label>
          <q-item-label caption
            >Graduated in 2019 with a Bachelor's of Engineering in Software
            Engineering
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item-label header>Certifications</q-item-label>
      <q-item>
        <q-item-section top avatar>
          <q-icon color="green" name="bi-question-circle" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Coming soon...</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>
      <!--
      <q-item>
        <q-item-section top avatar>
          <q-icon color="yellow-9" name="security" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>CompTIA Security+</q-item-label>
          <q-item-label caption>Certified on 1/1/2024</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section top avatar>
          <q-icon color="deep-purple" name="mdi-death-star" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>JLPT</q-item-label>
          <q-item-label caption>Passed the JLPT N4 on 1/1/2024</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      -->
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyEducation",
});
</script>
