<script setup lang="ts">
import type { MeterItem } from "primevue/metergroup";
import { tech_colors } from "~/client/styling/tech_colors";
import type { Project } from "~/client/types/project";
const props = defineProps<{
  project: Project;
}>();
const meterGroupValues: Ref<MeterItem[]> = ref(
  Object.entries(props.project.languages).map(([label, value]) => ({
    label,
    value,
    color: tech_colors[label],
  })),
);
const sum = (a: number, b: number) => a + b;
const max = ref(Object.values(props.project.languages).reduce(sum, 0));
const metergroupActive = ref(Object.keys(props.project.languages).length > 0);
const metergroupConfig = ref({
  root: {
    class: "w-full",
  },
  meter: {
    class: "h-[0.5rem] mr-[0.2rem] ",
  },
  labelText: {
    class: "text-xs text-web-text",
  },
  labelList: {
    class: "",
  },
  labelMarker: {
    class: "mr-[0.3rem] ml-[0.3rem]",
  },
});
const meterGroupDesignTokens = ref({
  borderRadius: "1rem",
  gap: "0.5rem",
  label: {
    marker: {
      size: "0.7rem",
    },
    list: {
      horizontal: {
        gap: "0.1rem",
      },
    },
  },
});
</script>
<template>
  <ListCard>
    <a :href="project.html_url" class="grid grid-rows-1 grid-cols-9 min-h-fit">
      <div
        class="row-start-1 row-end-2 col-start-1 col-end-4 items-center justify-center pr-2"
      >
        <NuxtImg
          class="border-2 card-transition rounded-sm border-gray-500 group-hover:border-gray-400 ease-in-out"
          :src="project.previewUrl"
        ></NuxtImg>
      </div>
      <div class="flex-grow col-start-4 col-end-10 row-start-1 row-end-2">
        <CardTitle class="min-h-6 flex space-between gap-1 content-center">
          {{ project.fullName }}
          <Arrow></Arrow>
        </CardTitle>
        <p class="text-sm text-web-text">{{ project.description }}</p>
        <MeterGroup
          :max="max"
          :value="meterGroupValues"
          :dt="meterGroupDesignTokens"
          :pt="metergroupConfig"
        >
          <template #start>
            <p
              v-if="metergroupActive"
              class="pt-5 pb-0 mb-0 text-web-text text-xs"
            >
              Languages
            </p>
          </template>
          ></MeterGroup
        >
      </div>
    </a>
  </ListCard>
</template>
