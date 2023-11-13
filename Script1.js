const experiences = document.querySelectorAll(".experience");

experiences.forEach(experience=> {
    experience.addEventListener("click", () => {
        experience.classList.toggle("active");
    });
});