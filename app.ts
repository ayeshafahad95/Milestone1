function toggleSection(sectionId: string): void {
    const content = document.getElementById(sectionId) as HTMLElement | null;
    if (content) {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    } else {
        console.error(`Element with ID '${sectionId}' not found.`);
    }
}
