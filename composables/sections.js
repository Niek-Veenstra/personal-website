export  function useSections(){
    return [
        {
            name: "ABOUT",
            element: useTemplateRef('about'),
        },
        {
            name: "EXPERIENCE",
            element: useTemplateRef('experience'),
        },
        {
            name: "PROJECTS",
            element: useTemplateRef('projects'),
        },
    ]
}