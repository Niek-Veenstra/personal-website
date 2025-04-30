<script setup>
const props = defineProps({
  experience: Object
});
const {companyName, professionName, description, companyUrl, from, till, tags} = props.experience;
</script>

<template>
  <li class="hover:bg-slate-800/50 p-5 pl-2 group hover:cursor-pointer rounded-md transition motion-reduce:transition-none
              hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:border-t-hero-text hover:drop-shadow-lg mt-2 mb-2">
    <a :href="companyUrl" rel="noopener" target="_blank" class="flex">
      <span class="min-w-[30%] max-w-1/4 shrink text-xs text-center font-semibold items-baseline justify-evenly text-slate-500">
        <span class="flex items-center justify-start">
          <span class="leading-5 content-start w-1/3 ">{{ from }}</span>
          <span class="ml-1 inline-block w-3 h-[0.06rem] mr-1 bg-slate-500"></span>
          <span class="leading-2 content-start min-w-1/3 max-w-1/3">{{ till }}</span>
        </span>
      </span>
      <span class="flex flex-col items-start">
        <span class="leading-5 text-hero-text content-start font-semibold group-hover:text-teal-200">{{ companyName }}
          <i class="pi pi-arrow-up-right text-[0.6rem] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"></i></span>
        <span class="block text-slate-500 font-semibold">{{ professionName }}</span>
        <p class="text-web-text mt-2 ">
          {{ description }}
        </p>
        <ul>
          <li></li>
        </ul>
      </span>
    </a>
  </li>
</template>

<style scoped>

</style>