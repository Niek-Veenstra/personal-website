const author = "Niek Veenstra";
const keywords = [author, "Developer Portfolio", "C++", "JavaScript", "C", "Haskell"]

export function headImplementation() {
    useHead({
        title: `${author} | Software Engineer`,
        meta: [
            {name: 'author', content: author},
            {name: 'description', content: `Developer portfolio of ${author}.`},
            {name: 'keywords', content: keywords.join(", ")},
        ]
    });
}