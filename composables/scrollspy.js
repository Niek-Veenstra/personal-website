const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

const getObserver = (sections, section, options = defaultOptions) =>
    new IntersectionObserver(entries => {
        const sectionEntry =
            entries.find(entry =>
                entry.isIntersecting
            );
        const foundNewSection = sections.find(newSection => sectionEntry?.target === unref(newSection.element))
        section.value = foundNewSection ? foundNewSection : section.value;
    }, options);

export function useScrollSpy(sections, section) {
    if (import.meta.server) return;
    const observer = getObserver(sections, section)
    onMounted(() => {
        sections
            .map(section => section.element)
            .map(unref)
            .forEach(section => observer.observe(section))
    })
    onUnmounted(() => observer.disconnect());
}
