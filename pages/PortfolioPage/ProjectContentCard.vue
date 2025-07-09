<script setup lang="ts">
import type { Project } from "~/client/types/project";

const props = defineProps<{
  project: Project;
}>();
console.log("rendering");
</script>
<template></template>
