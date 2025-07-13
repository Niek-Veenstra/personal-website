<script setup lang="ts">
import { mergeCn } from "~/client/styling/merge";

const props = defineProps<{
  class?: string;
}>();
</script>
<template>
  <span
    :class="
      mergeCn(
        'text-hero-text font-semibold group-hover:text-teal-300',
        props.class ?? '',
      )
    "
    ><slot> ></slot></span
  >
</template>
