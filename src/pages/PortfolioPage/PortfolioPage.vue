<script setup>
import socials from "@/pages/PortfolioPage/js/constants/socials.js"
import useSections from "@/pages/PortfolioPage/js/constants/sections.js";
import experiences from "@/pages/PortfolioPage/js/constants/experiences.js";
import Socials from "@/pages/PortfolioPage/Socials.vue";
import Profile from "@/pages/PortfolioPage/Profile.vue";
import SideText from "@/pages/PortfolioPage/SideText.vue";
import ScrollNavigation from "@/pages/PortfolioPage/ScrollNavigation.vue";
import ExperienceCard from "@/pages/PortfolioPage/ExperienceCard.vue";
import {useSection} from "@/pages/PortfolioPage/js/active_section.js";
import {useScrollSpy} from "@/pages/PortfolioPage/js/scrollspy.js";

const sections = useSections();
const activeSection = useSection();
activeSection.value = sections[0];
const scrollSpy = useScrollSpy(sections,activeSection);
onMounted(() => {
  scrollSpy.observe();
});

const scrollIntoView = (element) => element.scrollIntoView({behavior: "smooth"})
const sectionClickHandler = (index) => {
  const section = sections[index];
  activeSection.value = section;
  scrollIntoView(section.element.value)
};
</script>

<template>
  <body class="min-h-[200dvh] max-h-[200dvh] flex bg-slate-900 ">
  <div id="hero" class="min-h-[100dvh] max-h-[200dvh] flex flex-1 justify-center">
    <div class="flex justify-center max-w-7xl pl-5 pr-5 gap-4">
      <aside id="info"
             class="max-w-2xl h-1/2 flex-1 w-[40em] pt-25 text-hero-text font-inter flex flex-col justify-start sticky top-0">
        <Profile></Profile>
        <ScrollNavigation :section-click="sectionClickHandler" :sections="sections"
                          :active-section="activeSection"></ScrollNavigation>
        <div class="flex flex-1 flex-col justify-end ">
          <ul id="socials" class="flex justify-self-end mb-20">
            <Socials :socials="socials"></Socials>
          </ul>
        </div>
      </aside>
      <main id="main-content"
            class="pt-25  max-w-2xl flex flex-col">
        <section ref="about" id="about" class="text-base col-span-2 place-self-start font-inter scroll-mt-32">
          <SideText></SideText>
        </section>
        <section ref="experience" id="experience" class="mt-20">
          <ul>
            <ExperienceCard v-for="experience in experiences" :experience="experience"></ExperienceCard>
          </ul>
        </section>
        <section ref="projects" id="projects" class="mt-20 flex-1">
          <ul class="flex-1">

          </ul>
        </section>
      </main>
      <footer></footer>
    </div>
  </div>
  </body>
</template>