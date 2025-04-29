<script setup>
const {links} = defineProps({
  links: Array
})
</script>

<template>
  <nav class="flex-1 flex text-sm flex-col justify-center items-start ">
    <ul v-for="({name, isActive}) in links">
      <li class="flex gap-4 items-center group hover:cursor-pointer">
        <span :class="`link-seperator use-transition group-hover:bg-hero-text group-hover:w-16  ${isActive ? 'bg-hero-text w-16' : 'bg-web-text w-8 '}`"></span>
        <span :class="`peer link group-hover:text-hero-text ${isActive ? 'text-hero-text' : 'text-web-text'}`">
              {{ name }}
            </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>