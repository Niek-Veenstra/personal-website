<script setup>

</script>

<template>
  <h1 id="hero-header" class="text-6xl block ">
    Niek Veenstra
  </h1>
  <h2 id="hero-content" class="text-2xl italic pt-3 block ">
            Software Engineer
  </h2>
  <p class="text-web-text pt-4 text-base w-3/4">
    Passionate about embedded systems, web applications and mathematics. I use
    <span class="inline-flex group hover:cursor-pointer flex-col">
      <a class="hover:transition-colors ease-in-out gradient text-transparent group-hover:animate-gradient group-hover:bg-gradient-to-r
          bg-web-text bg-clip-text" rel="noopener" target="_blank" href="https://neovim.io/">NeoVim</a>
      <span
          class="h-[0.02em] pt-[0.05em] transition bg-web-text gradient relative group-hover:animate-gradient -top-1 w-full group-hover:bg-gradient-to-r"></span>
    </span>, btw.
  </p>
</template>

<style scoped>
@import 'tailwindcss';

.gradient {
  @apply from-blue-400 via-emerald-500 to-emerald-700
}
</style>