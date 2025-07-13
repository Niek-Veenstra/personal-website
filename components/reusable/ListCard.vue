<script setup lang="ts">
import { mergeCn } from "~/client/styling/merge";

const props = defineProps<{
  class?: string;
}>();
</script>
<template>
  <li
    :class="
      mergeCn(
        'hover:bg-slate-800/50 p-5 pl-2 group hover:cursor-pointer rounded-md transition motion-reduce:transition-none hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:border-t-hero-text hover:drop-shadow-lg mt-4 mb-4',
        props?.class ?? '',
      )
    "
  >
    <slot></slot>
  </li>
</template>
