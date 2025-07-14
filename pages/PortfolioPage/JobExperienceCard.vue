<script setup>
import ExperienceDateContent from "./ExperienceDateContent.vue";

const props = defineProps({
  card: Object,
});
const { header, subHeader, description, link, tags, from, till } = props.card;
</script>

<template>
  <ListCard>
    <a :href="link" rel="noopener" target="_blank" class="flex">
      <ExperienceDateContent :from="from" :till="till"></ExperienceDateContent>
      <span class="flex flex-col items-start">
        <CardTitle class="min-h-6 flex space-between gap-1 content-center"
          >{{ header }}
          <Arrow></Arrow>
        </CardTitle>
        <span class="block text-slate-500 font-semibold">{{ subHeader }}</span>
        <p class="text-web-text mt-2 text-sm">
          {{ description }}
        </p>
        <ul class="flex text-xs flex-wrap gap-2 mt-4">
          <Pill v-for="tag in tags">{{ tag }}</Pill>
        </ul>
      </span>
    </a>
  </ListCard>
</template>
