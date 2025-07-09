const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const getObserver = (sections, activeSection, options = defaultOptions) =>
  new IntersectionObserver((entries) => {
    const sectionEntry = entries.find((entry) => entry.isIntersecting);
    const foundNewSection = sections.find(
      (newSection) => sectionEntry?.target === unref(newSection.element),
    );
    activeSection.value = foundNewSection
      ? foundNewSection
      : activeSection.value;
  }, options);

export function useScrollSpy(sections, activeSection) {
  if (import.meta.server) return;
  const observer = getObserver(sections, activeSection);
  onMounted(() => {
    sections
      .map((section) => section.element)
      .map(unref)
      .forEach((section) => observer.observe(section));
  });
  onUnmounted(() => observer.disconnect());
}
