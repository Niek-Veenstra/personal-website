<script setup lang="ts">
const coordinates = useMouseCoordinates();
const mouseGradientBox = useTemplateRef('mouseGradientBox')
const stylePosition = ref("background: radial-gradient(600px at 500px 500px, rgba(29, 78, 216, 0.15), transparent 80%);");
 watchEffect(() => {
  const element = toValue(mouseGradientBox) as HTMLElement
  if (!element) return;
  const x = coordinates.x.value  + "px";
  const y = coordinates.y.value  + "px";
  stylePosition.value = `background: radial-gradient(600px at ${x} ${y}, rgba(29, 78, 216, 0.15), transparent 80%);`
});
</script>

<template>
<div ref="mouseGradientBox" :style="stylePosition" class="h-dvh pointer-events-none w-dvw fixed inset z-30 rounded-4xl">
</div>
</template>

<style scoped>

</style>
