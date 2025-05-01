export function useScrollSpy() {
    const observe = (sections, section) => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };
        const observer = new IntersectionObserver((entries) => {
            let found = false;
            entries.forEach(entry => {
                if (!found
                    && entry.isIntersecting
                    && entry.target !== section.value.element) {
                    section.value = sections.find(newSection => entry.target === unref(newSection.element))
                    found = true;
                }
            });
        }, options);
        sections
            .map(section => section.element)
            .map(unref)
            .forEach(section => observer.observe(section))
        onUnmounted(() => {
            if (observer) {
                observer.disconnect();
            }
        });
    };
    return {observe}
}