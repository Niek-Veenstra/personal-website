const TAGS = {
  docker: "Docker",
  jQuery: "jQuery",
  javaScript: "JavaScript",
  php: "PHP",
  bootstrap: "Bootstrap"
}
export function useExperiences() {
    return [
        {
            header: "RYSST",
            subHeader: "Junior Software Developer",
            description: "Building and maintaning software and documentation for various companies.",
            tags: [TAGS.php, TAGS.javaScript, TAGS.bootstrap, TAGS.docker, "C#", "React"],
            link: "https://rysst.nl",
            from: "2025",
            till: "PRESENT",
        },
        {
            header: "DataVisual",
            subHeader: "Software Engineering Intern",
            description: "The internship was a data retention project focused on analyzing and managing historical data within a cloud architecture."
                + " The assignment involved evaluating options for handling outdated data, assessing the effectiveness of various retention strategies. Implemented a parallel batch processing pipeline using Java and Apache Beam, running on Google Cloud Dataflow."
                + " Emphasis was placed on scalability, extensibility, cost-efficiency, and cloud native solutions.",
            tags: ["Java", "Node.js", TAGS.php, "Google Guice", "Apache Beam", TAGS.jQuery, TAGS.docker, "GCP", "Terraform"],
            link: "https://datavisual.nl",
            from: "SEP",
            till: "FEB 2025",
        },
        {
            header: "Qoden",
            subHeader: "Junior Software Developer",
            description: "Migrating projects from older PHP versions to PHP 8. Contributing to the development of custom Healthcare integrations using the Nedap API.",
            tags: [TAGS.php, TAGS.javaScript, TAGS.jQuery, TAGS.bootstrap, TAGS.docker],
            link: "https://www.qoden.nl",
            from: "JULY 2023",
            till: "SEP 2024",
        }
    ];
};
