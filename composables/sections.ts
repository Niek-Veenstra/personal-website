import type { ShallowRef } from "vue";
export type Section = {
  name: string;
  element: Readonly<ShallowRef<Element>>;
};

export function useSections(): Array<Section> {
  return [
    {
      name: "ABOUT",
      element: useTemplateRef("about") as Readonly<ShallowRef<Element>>,
    },
    {
      name: "EXPERIENCE",
      element: useTemplateRef("experience") as Readonly<ShallowRef<Element>>,
    },
    {
      name: "PROJECTS",
      element: useTemplateRef("projects") as Readonly<ShallowRef<Element>>,
    },
  ];
}
