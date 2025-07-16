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
    <div class="bg-slate-900">
      <MouseGradient></MouseGradient>
      <div class="min-h-[100dvh] flex flex-1 justify-center">
        <div class="2xl:flex justify-center max-w-7xl gap-4">
          <aside
            id="info"
            class="2xl:h-1/2 flex-1 max-w-[40em] max-h-[100dvh] 2xl:pt-25 pt-16 text-hero-text font-inter 2xl:flex 2xl:flex-col 2xl:justify-start 2xl:sticky 2xl:top-0"
          >
            <Profile></Profile>
            <ScrollNavigation
              :section-click="sectionClickHandler"
              :sections="sections"
              :active-section="activeSection"
            >
            </ScrollNavigation>
            <div class="flex flex-1 flex-col justify-end">
              <ul
                id="socials"
                class="flex col-span-2 justify-center 2xl:justify-start justify-self-end mb-4 mt-4 2xl:mb-20"
              >
                <Socials :socials="socials"></Socials>
              </ul>
            </div>
          </aside>
          <main
            id="main-content"
            class="2xl:pt-25 max-w-2xl flex flex-col break-words"
          >
            <section
              ref="about"
              id="about"
              class="text-base col-span-2 place-self-start font-inter w-full scroll-mt-32 justify-center items-center flex flex-col"
            >
              <span class="w-3/4 2xl:w-full">
                <SideText></SideText>
              </span>
            </section>
            <section
              ref="experience"
              id="experience"
              class="pt-20 w-3/4 2xl:w-full"
            >
              <ul>
                <JobExperienceCard
                  v-for="experience in experiences"
                  :card="experience"
                >
                </JobExperienceCard>
              </ul>
            </section>
            <section
              ref="projects"
              id="projects"
              class="pt-20 2xl:w-full w-3/4"
            >
              <ul :v-if="githubProjects.status.value === 'success'">
                <ProjectCard
                  v-for="project in githubProjects.data?.value?.sort(
                    (a, b) =>
                      Object.keys(b.languages).length -
                      Object.keys(a.languages).length,
                  )"
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
