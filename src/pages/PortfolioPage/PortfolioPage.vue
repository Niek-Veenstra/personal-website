<script setup>
import socials from "./js/socials.js"
import Socials from "@/pages/PortfolioPage/Socials.vue";
import Profile from "@/pages/PortfolioPage/Profile.vue";
import SideText from "@/pages/PortfolioPage/SideText.vue";
import Navigation from "@/pages/PortfolioPage/Navigation.vue";

const ASSET_IMAGES = "./../../src/assets/images"
const links = [
  {name: "ABOUT", isActive: false},
  {name: "EXPERIENCE", isActive: true},
  {name: "PROJECTS", isActive: false},
]
</script>

<template>
  <body class="min-h-[200dvh] max-h-[200dvh] flex bg-deeppurple ">
  <div id="hero" class="min-h-[100dvh] max-h-[200dvh] flex flex-1 justify-center">
    <div class="flex justify-center max-w-7xl pl-5 pr-5 gap-4">
      <aside id="info"
             class="max-w-2xl h-1/2 flex-1 w-[40em] pt-20 text-hero-text font-inter flex flex-col justify-start sticky top-0">
        <Profile></Profile>
        <Navigation :links="links"></Navigation>
        <div class="flex flex-1 flex-col justify-end ">
          <ul id="socials" class="flex justify-self-end mb-20">
            <Socials :socials="socials"></Socials>
          </ul>
        </div>
      </aside>
      <main id="main-content"
            class="grid pt-20 grid-cols-2 max-w-xl grid-rows-2 items-center justify-around">
        <span class="text-base col-span-2 place-self-start font-inter">
          <SideText></SideText>
        </span>
      </main>
    </div>
  </div>
  </body>
</template>