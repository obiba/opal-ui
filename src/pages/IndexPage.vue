<template>
  <div>
    <q-toolbar class="bg-grey-3">
      <q-breadcrumbs>
        <q-breadcrumbs-el :label="$t('dashboard')" icon="home" />
      </q-breadcrumbs>
    </q-toolbar>
    <q-page class="q-pa-md">
      <router-link to="/projects">{{ $t('projects') }}</router-link>
    </q-page>
  </div>
</template>

<script setup lang="ts"></script>
