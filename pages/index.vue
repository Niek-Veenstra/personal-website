<script setup lang="ts">
import Socials from "@/pages/PortfolioPage/Socials.vue";
import Profile from "@/pages/PortfolioPage/Profile.vue";
import SideText from "@/pages/PortfolioPage/SideText.vue";
import ScrollNavigation from "@/pages/PortfolioPage/ScrollNavigation.vue";
import JobExperienceCard from "~/pages/PortfolioPage/JobExperienceCard.vue";
import MouseGradient from "@/pages/PortfolioPage/MouseGradient.vue";
import ProjectCard from "./PortfolioPage/ProjectCard.vue";
import { useProjects } from "~/client/fetch/projects";

const sections = useSections();
const activeSection = useSection();

const githubProjects = await useProjects();

const socials = useSocials();
const experiences = useExperiences();
activeSection.value = sections[0];

onMounted(async () => {
  useScrollSpy(sections, activeSection as Ref<Section>);
});

const scrollIntoView = (element: HTMLElement) =>
  element.scrollIntoView({ behavior: "smooth" });
const sectionClickHandler = (index: number) => {
  const section = sections[index];
  scrollIntoView(section.element.value as HTMLElement);
};
</script>

<template>
  <NuxtPage>
    <div class="min-h-fit flex flex-1 bg-slate-900">
      <MouseGradient></MouseGradient>
      <div class="min-h-[100dvh] flex flex-1 justify-center">
        <div class="flex justify-center max-w-7xl pl-5 pr-5 gap-4">
          <aside
            id="info"
            class="max-w-2xl h-1/2 flex-1 w-[40em] max-h-[100dvh] pt-25 text-hero-text font-inter flex flex-col justify-start sticky top-0"
          >
            <Profile></Profile>
            <ScrollNavigation
              :section-click="sectionClickHandler"
              :sections="sections"
              :active-section="activeSection"
            >
            </ScrollNavigation>
            <div class="flex flex-1 flex-col justify-end">
              <ul id="socials" class="flex col-span-2 justify-self-end mb-20">
                <Socials :socials="socials"></Socials>
              </ul>
            </div>
          </aside>
          <main id="main-content" class="pt-25 max-w-2xl flex flex-col">
            <section
              ref="about"
              id="about"
              class="text-base col-span-2 place-self-start font-inter scroll-mt-32"
            >
              <SideText></SideText>
            </section>
            <section ref="experience" id="experience" class="pt-20">
              <ul>
                <JobExperienceCard
                  v-for="experience in experiences"
                  :card="experience"
                >
                </JobExperienceCard>
              </ul>
            </section>
            <section ref="projects" id="projects" class="pt-20">
              <ul :v-if="githubProjects.status.value === 'success'">
                <ProjectCard
                  v-for="project in githubProjects.data.value"
                  :project="project"
                ></ProjectCard>
              </ul>
            </section>
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  </NuxtPage>
</template>
