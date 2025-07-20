import { useWindowScroll } from "@vueuse/core";

const windowScroll = useWindowScroll();
const getBoundingBox = (value: Section) =>
  value.element.value.getBoundingClientRect();
export function useScrollSpy(
  sections: Array<Section>,
  activeSection: Ref<Section>,
) {
  return watch(windowScroll.y, () => {
    const sortF = (one: Section, two: Section) =>
      getBoundingBox(two).top - getBoundingBox(one).top;
    const filterF = (section: Section) => getBoundingBox(section).top <= 200;
    const result = sections.filter(filterF).sort(sortF).at(0);
    activeSection.value = result ?? activeSection.value;
  });
}
