const author = "Niek Veenstra";
const keywords = [
  author,
  "Developer Portfolio",
  "C++",
  "JavaScript",
  "C",
  "Haskell",
];

export function useHeadImplementation() {
  useHead({
    title: `${author} | Software Engineer`,
    meta: [
      { name: "author", content: author },
      { name: "description", content: `Developer portfolio of ${author}.` },
      { name: "keywords", content: keywords.join(", ") },
    ],
    link: [
      { rel: "preconnect", href: "https://rsms.me/" },
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css",
      },
    ],
  });
}
