<script setup lang="ts">
import type { Project } from "~/client/types/project";
const props = defineProps<{
  project: Project;
}>();
</script>
<template>
  <li>
    <div class="flex">
      <span>{{ project.fullName }}</span>
      <p>{{ project.description }}</p>
    </div>
  </li>
</template>
