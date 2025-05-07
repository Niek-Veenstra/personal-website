<script setup>
import Pill from "@/pages/PortfolioPage/Pill.vue";

const props = defineProps({
  card: Object
});
const {header, subHeader, description, link, tags} = props.card;
</script>

<template>
  <li class="hover:bg-slate-800/50 p-5 pl-2 group hover:cursor-pointer rounded-md transition motion-reduce:transition-none
              hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:border-t-hero-text hover:drop-shadow-lg mt-4 mb-4">
    <a :href="link" rel="noopener" target="_blank" class="flex">
      <slot>

      </slot>
      <span class="flex flex-col items-start">
        <span class="leading-5 text-hero-text content-start font-semibold group-hover:text-teal-300">{{ header }}
          <i class="pi pi-arrow-up-right text-[0.6rem] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i></span>
        <span class="block text-slate-500 font-semibold">{{ subHeader }}</span>
        <p class="text-web-text mt-2 text-sm">
          {{ description }}
        </p>
        <ul class="flex flex-wrap gap-2 mt-4">
          <Pill v-for="tag in tags" :tag="tag"></Pill>
        </ul>
      </span>
    </a>
  </li>
</template>