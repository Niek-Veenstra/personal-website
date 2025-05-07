<script setup lang="ts">
const coordinates = useMouseCoordinates();
const mouseGradientBox = useTemplateRef('mouseGradientBox')
onMounted(() => watchEffect(() => {
  const element = toValue(mouseGradientBox) as HTMLElement
  element.style.top = coordinates.y.value - (element.offsetWidth / 2)  + "px";
  element.style.left = coordinates.x.value - (element.offsetWidth / 2) + "px";
}));
</script>

<template>
<div ref="mouseGradientBox" class="min-w-1/3 min-h-1/3 absolute rounded-4xl bg-red-500/40">
</div>
</template>

<style scoped>

</style>