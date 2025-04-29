<script setup>

</script>

<template>
  <h1 id="hero-header" class="text-6xl block ">
    Niek Veenstra
  </h1>
  <span id="hero-content" class="text-2xl italic pt-3 block ">
            Software Engineer
  </span>
  <p class="text-web-text pt-4 text-base w-3/4">
    Passionate about embedded systems, web applications and mathematics. I use
    <span class="inline-flex group flex-col">
      <a class="hover:transition-colors ease-in-out group-hover:text-transparent group-hover:bg-gradient-to-r
          text-web-text gradient bg-clip-text"
           rel="noopener" target="_blank" href="https://neovim.io/">NeoVim</a>
      <span class="h-[0.02em] inline-block gradient group-hover:text-transparent bg-gradient-to-r "></span>
      <span class="h-[0.02em] pt-[0.05em] transition bg-web-text gradient relative -top-1 w-full group-hover:bg-gradient-to-r"></span>
    </span>, btw.
  </p>
</template>

<style scoped>
@import 'tailwindcss';

.gradient {
  @apply from-blue-400 via-emerald-500 to-emerald-700
}
</style>