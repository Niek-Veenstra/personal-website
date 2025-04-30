<script setup>
const {sections, activeSection, sectionClick} = defineProps({
  sections: Array,
  activeSection: Object,
  sectionClick: Function
})
const isActive = (obj) => toRaw(activeSection) === obj;
</script>

<template>
  <nav class="flex-1 flex text-sm flex-col justify-center items-start ">
    <ul class="pb-20">
      <li v-for="(section, index) in sections" @click="() => sectionClick(index)" class="flex gap-4 mt-2 mb-2 items-center group hover:cursor-pointer">
        <span
            :class="`link-seperator use-transition group-hover:bg-hero-text animate- group-hover:w-16  ${isActive(section) ? 'bg-hero-text w-16' : 'bg-slate-500 w-8 '}`"></span>
        <span
            :class="`peer link font-semibold group-hover:text-hero-text ${isActive(section) ? 'text-hero-text' : 'text-slate-500'}`">
              {{ section.name }}
            </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>