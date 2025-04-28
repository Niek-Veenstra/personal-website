<script setup>
import socials from "./socials.js"

const ASSET_IMAGES = "./../../src/assets/images"
</script>

<template>
  <body class="min-h-[200dvh]">
  <div id="hero"
       class="min-h-[100dvh] max-h-[100dvh] bg-deeppurple  ">
    <div class="flex justify-center  min-h-[100dvh]">
      <aside id="info" class="col-start-1 col-span-2 max-w-2xl items-center justify-items-center min-w-1/2">
        <span id="hero" class="text-hero-text font-inter">
          <span id="hero-header" class="text-6xl block pt-20">
            Niek Veenstra
          </span>
          <span id="hero-content" class="text-2xl pt-3 block">
            Software Engineer
          </span>
          <p class="text-web-text pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deleniti dolore dolores earum, esse ex inventore ipsa pariatur soluta voluptas.
          </p>

          <div id="socials" class="mt-10">
            <template v-for="({icon,tooltip,href}) in socials">
              <a class="w-0 h-0 p-0 m-0" :href="href" target="_blank" rel="noopener">
                <Avatar :pt="{root:{class:'inline'}}" v-tooltip.bottom="{value:tooltip, showDelay: 500, hideDelay: 0}"
                        size="large"
                        class="social-icon mr-4 visible" :icon="`pi ${icon}`"></Avatar>
              </a>
            </template>
          </div>
        </span>
      </aside>
      <div id="header-images"
           class="col-start-3 col-span-full grid row-span-1  grid-rows-2 items-center justify-items-center">
        <img :src="`${ASSET_IMAGES}/micro_one.png`"
             class="flex-none object-contain backdrop-blur-md drop-shadow-white drop-shadow-xl/50" alt="MCU 1">
        <img :src="`${ASSET_IMAGES}/micro_two.png`"
             class="flex-none object-contain backdrop-blur-md drop-shadow-white drop-shadow-xl/50" alt="MCU 1">
      </div>
    </div>
  </div>
  </body>
</template>