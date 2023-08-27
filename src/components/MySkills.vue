<template>
  <div>
    <q-list bordered padding>
      <q-item-label header>Programming</q-item-label>

      <q-item>
        <q-item-section top avatar>
          <q-icon color="yellow-10" name="mdi-language-javascript" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Javascript</q-item-label>
          <q-item-label caption
            ><q-icon color="green-8" name="mdi-vuejs" size="sm"></q-icon>Vue
            <q-icon color="red" name="mdi-angular" size="sm"></q-icon>Angular
            <q-icon color="light-green" name="mdi-nodejs" size="sm"></q-icon
            >Node
            <q-icon color="deep-orange" name="mdi-train" size="sm"></q-icon
            >Express
            <q-icon
              color="light-blue-8"
              name="mdi-language-typescript"
              size="sm"
            ></q-icon
            >Typescript
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item>
        <q-item-section top avatar>
          <q-icon color="cyan-7" name="mdi-language-python" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Python</q-item-label>
          <q-item-label caption lines="2"
            ><q-icon color="pink-5" name="mdi-flask" size="sm"></q-icon>Flask
            <q-icon color="black" name="mdi-panda" size="sm"></q-icon>pandas
            <q-icon color="brown" name="mdi-numeric" size="sm"></q-icon
            >NumPy</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item>
        <q-item-section top avatar>
          <q-icon color="blue-grey-9" name="mdi-server" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Databases</q-item-label>
          <q-item-label caption
            ><q-icon color="pink" name="mdi-database" size="sm"></q-icon>MongoDB
            <q-icon color="green" name="mdi-database-off" size="sm"></q-icon
            >MySQL</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-separator spaced />

      <q-item-label header>Software & Skills</q-item-label>

      <q-item>
        <q-item-section top avatar>
          <q-icon color="cyan-8" name="mdi-salesforce" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Salesforce</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced inset="item" />

      <q-item>
        <q-item-section top avatar>
          <q-icon color="blue-10" name="mdi-atlassian" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Confluence & Jira</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section top avatar>
          <q-icon color="red" name="mdi-microsoft-windows-classic" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Microsoft Office</q-item-label>
          <q-item-label caption> </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
      <q-item>
        <q-item-section top avatar>
          <q-icon color="deep-purple" name="mdi-alpha-a-box" size="lg" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Harada Method</q-item-label>
          <q-item-label caption
            >Agile Methodology, The Human Side of Lean</q-item-label
          >
        </q-item-section>
      </q-item>
      <q-separator spaced inset="item" />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MySkills",
});
</script>
