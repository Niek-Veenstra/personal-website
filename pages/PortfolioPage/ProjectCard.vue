<script setup lang="ts">
import type { Project } from "~/client/types/project";
import ListCard from "./ListCard.vue";
defineProps<{
  project: Project;
}>();
</script>
<template>
  <ListCard class="flex">
    <div class="min-w-[30%] max-w-1/4">
      <NuxtImg provider="server" :src="project.previewUrl"></NuxtImg>
    </div>
    <div class="min-w-[70%] max-w-3/4">
      <span class="text-hero-text font-semibold group-hover:text-teal-300">{{
        project.fullName
      }}</span>
      <p>{{ project.description }}</p>
    </div>
  </ListCard>
</template>
