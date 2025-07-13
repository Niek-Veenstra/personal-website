<script setup lang="ts">
import type { Project } from "~/client/types/project";
const props = defineProps<{
  project: Project;
}>();
const chartData = ref();
const chartOptions = ref();
onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});
const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          documentStyle.getPropertyValue("--pink-500"),
          documentStyle.getPropertyValue("--gray-500"),
          documentStyle.getPropertyValue("--orange-500"),
          documentStyle.getPropertyValue("--purple-500"),
          documentStyle.getPropertyValue("--cyan-500"),
        ],
        label: props.project.fullName,
      },
    ],
    labels: ["Pink", "Gray", "Orange", "Purple", "Cyan"],
  };
};
const setChartOptions = () => ({
  plugins: {
    legend: {
      display: false,
    },
  },
});
</script>
<template>
  <ListCard class="flex">
    <div class="min-w-[30%] flex items-center justify-center max-w-1/4 pr-2">
      <NuxtImg
        class="border-2 card-transition border-gray-500 rounded group-hover:border-gray-400 ease-in-out"
        :src="project.previewUrl"
      ></NuxtImg>
    </div>
    <div class="min-w-[70%] max-w-3/4">
      <CardTitle class="min-h-6 flex space-between gap-1 content-center">
        {{ project.fullName }}
        <Arrow></Arrow>
      </CardTitle>
      <p class="text-sm text-web-text">{{ project.description }}</p>
      <div class="flex justify-center">
        <Chart
          type="doughnut"
          :pt="{
            root: {
              style: {
                width: '20rem',
                height: '20rem',
              },
            },
            canvas: {
              style: {
                width: '20rem',
                height: '100%',
              },
            },
          }"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>
  </ListCard>
</template>
