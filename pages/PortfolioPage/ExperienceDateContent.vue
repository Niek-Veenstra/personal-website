<script setup>
const props = defineProps({
  from: String,
  till: String,
});
</script>

<template>
  <span
    class="min-w-[30%] max-w-1/4 shrink text-xs text-center font-semibold items-baseline justify-evenly text-slate-500"
  >
    <span class="flex items-center min-h-6 content-center justify-start">
      <span class="content-center w-1/3 min-h-6">{{ from }}</span>
      <span class="ml-1 inline-block w-3 h-[0.06rem] mr-1 bg-slate-500"></span>
      <span class="content-center w-1/3 max-w-1/3 min-h-6">{{ till }}</span>
    </span>
  </span>
</template>
