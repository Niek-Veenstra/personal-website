<script setup lang="ts">
import type { MeterItem } from "primevue/metergroup";
import type { Project } from "~/client/types/project";
const props = defineProps<{
  project: Project;
}>();
const colors: Record<string, string> = {
  "C++": "#f34b7d",
  JavaScript: "#f1e05a ",
  TypeScript: "#3178c6 ",
  Python: "#3572A5",
  Java: "#b07219",
  Shell: "#89e051",
  CSS: "#663399",
  HTML: "#e34c26",
  C: "#555555",
  Go: "#375eab",
  Rust: "#dea584",
  CMake: "#DA3434",
  PowerShell: "#012456",
  Lua: "#000080",
  Vue: "#41b883",
};
console.log(props.project.social_preview_url);
const meterGroupValues: Ref<MeterItem[]> = ref(
  Object.entries(props.project.languages).map(([label, value]) => ({
    label,
    value,
    color: colors[label],
  })),
);
const sum = (a: number, b: number) => a + b;
const max = ref(Object.values(props.project.languages).reduce(sum, 0));
</script>
<template>
  <ListCard class="flex">
    <div
      class="min-w-[30%] flex flex-col items-center justify-center max-w-1/4 pr-2"
    >
      <NuxtImg
        class="border-2 card-transition border-gray-500 group-hover:border-gray-400 ease-in-out"
        :src="project.previewUrl"
      ></NuxtImg>
      <MeterGroup
        :max="max"
        :value="meterGroupValues"
        :dt="{
          borderRadius: '1rem',
        }"
        :pt="{
          root: {
            class: 'w-full',
          },
          meter: {
            class: 'h-[0.5rem] mr-[0.1rem] border border-transparent',
          },
          meters: {
            class: 'pt-1',
          },
          labelText: {
            class: 'text-sm text-web-text',
          },
          labelMarker: {
            class: 'h-[0.5rem] w-[0.5rem]',
          },
        }"
      ></MeterGroup>
    </div>
    <div class="min-w-[70%] max-w-3/4">
      <CardTitle class="min-h-6 flex space-between gap-1 content-center">
        {{ project.fullName }}
        <Arrow></Arrow>
      </CardTitle>
      <p class="text-sm text-web-text">{{ project.description }}</p>
      <div class="flex justify-center"></div>
      <div></div>
    </div>
  </ListCard>
</template>
