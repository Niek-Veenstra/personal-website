<script setup>
import Pill from "@/pages/PortfolioPage/Pill.vue";
import ListCard from "./ListCard.vue";
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
        <span
          class="min-h-6 flex space-between gap-1 content-center text-hero-text font-semibold group-hover:text-teal-300"
          >{{ header }}
          <i
            class="pi pi-arrow-up-right content-center before:text-[0.7rem] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          ></i
        ></span>
        <span class="block text-slate-500 font-semibold">{{ subHeader }}</span>
        <p class="text-web-text mt-2 text-sm">
          {{ description }}
        </p>
        <ul class="flex flex-wrap gap-2 mt-4">
          <Pill v-for="tag in tags" :tag="tag"></Pill>
        </ul>
      </span>
    </a>
  </ListCard>
</template>
