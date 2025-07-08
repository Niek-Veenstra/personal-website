<script setup>
const {socials} = defineProps({
  socials: Array
})
</script>

<template>
  <template v-for="({icon,tooltip,href}) in socials">
    <li>
      <a class="w-0 h-0 p-0 m-0" :href="href" target="_blank" rel="noopener">
        <Avatar  :pt="{root:{class:'inline'}}" v-tooltip.bottom="{value:tooltip, showDelay: 500, hideDelay: 0}"
                size="large"
                class="social-icon hover-lighting mr-4 visible" :icon="`pi ${icon}`"></Avatar>
      </a>
    </li>
  </template>
</template>
