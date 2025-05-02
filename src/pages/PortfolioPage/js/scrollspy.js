const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1
};

const getObserver = (sections, section, options = defaultOptions) => new IntersectionObserver((entries) => {
    const sectionEntry =
        entries.find(entry =>
            entry.isIntersecting
            && entry.target !== section.value.element
        );
    section.value = sections.find(newSection => sectionEntry.target === unref(newSection.element))
}, options);

const observeSections = (sections, observer) => {
    sections
        .map(section => section.element)
        .map(unref)
        .forEach(section => observer.observe(section))
    onUnmounted(() => {
        observer.disconnect();
    });
};

export function useScrollSpy(sections, section) {
    const observer = getObserver(sections, section)
    return {observe: () => observeSections(sections, observer)}
}