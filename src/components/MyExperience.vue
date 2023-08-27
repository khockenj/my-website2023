<template>
  <div class="q-pa-lg">
    <div class="row q-gutter-md q-mb-lg">
      <q-timeline layout="loose" color="secondary">
        <q-timeline-entry heading>Experience </q-timeline-entry>
        <q-timeline-entry
          title="Teaching Assistant"
          subtitle="September 2018"
          icon="school"
          side="left"
          color="red-8"
        >
          <div>
            Teaching Assistant for the graduate level course: Software
            Development, Maintenance, and Configuration.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Teledata Communications"
          subtitle="June 2019"
          icon="work"
          color="green"
        >
          <div>Technology Specialist</div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Acquired by MeridianLink"
          subtitle="January 2021"
          side="left"
          icon="work"
          color="blue-8"
        >
          <div>Software Configuration Specialist II</div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Promoted to AdminPro Team"
          subtitle="February 2022"
          color="blue-8"
        >
          <div>Advisory Client Support Specialist</div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyExperience",
});
</script>
