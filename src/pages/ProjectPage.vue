<template>
  <div>
    <q-toolbar class="bg-grey-3">
      <q-breadcrumbs>
        <q-breadcrumbs-el :label="$t('dashboard')" icon="home" to="/" />
        <q-breadcrumbs-el :label="$t('projects')" to="/projects" />
        <q-breadcrumbs-el :label="project?.name" />
      </q-breadcrumbs>
    </q-toolbar>
    <q-page class="q-pa-md">
      <pre>{{ project }}</pre>
    </q-page>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const projectsStore = useProjectsStore();

const project = computed(() => projectsStore.project);

onMounted(() => {
  projectsStore.getProject(route.params.id);
});
</script>
