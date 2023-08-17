<template>
  <div class="q-px-lg q-py-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading class="header">Experience </q-timeline-entry>
      <q-timeline-entry
        title="Teaching Assistant"
        subtitle="September 2018"
        icon="library_books"
        side="left"
      >
        <div>
          Teaching Assistant for the graduate level course: Software
          Development, Maintenance, and Configuration.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        icon="school"
        title="Graduated"
        subtitle="May 2019"
        side="right"
      >
        <div>
          Graduated from Stevens Institute of Technology with a Bachelor's of
          Engineering in Software Engineering.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Teledata Communications"
        subtitle="June 2019"
        side="left"
        icon="work"
      >
        <div>Technology Specialist</div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Acquired by MeridianLink"
        subtitle="January 2021"
        side="right"
      >
        <div>Software Configuration Specialist II</div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Promoted to AdminPro Team"
        subtitle="February 2022"
        side="left"
      >
        <div>AdminPro - Advisory Client Support Specialist</div>
      </q-timeline-entry>

      <q-timeline-entry color="orange" icon="done_all">
        <template v-slot:title> Event Title </template>
        <template v-slot:subtitle> February 22, 1986 </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  name: "WorkExp",

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
};
</script>
