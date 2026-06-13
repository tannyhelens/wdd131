document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

const projects = [
{
    title: "Temple Album",
    category: "Web Development",
    image: "images/pessoas_trabalhando.avif",
    description: "Responsive temple gallery with JavaScript filtering."
},
{
    title: "Product Review Form",
    category: "Web Development",
    image: "images/trabalhando_programacao.avif",
    description: "Interactive review form with validation."
},
{
    title: "Utah Place Page",
    category: "Web Development",
    image: "images/trabalhando_programacao.avif",
    description: "Weather page with responsive design and wind chill calculation."
},
{
    title: "Santos Tech Studio",
    category: "Web Development",
    image: "images/equipe_de_tecnologia_digital.avif",
    description: "Professional portfolio website."
},
{
    title: "Grocery Receipt System",
    category: "Software Development",
    image: "images/trabalhando_programacao.avif",
    description: "Python application using CSV files and calculations."
},
{
    title: "Password Strength Checker",
    category: "Software Development",
    image: "images/pessoas_trabalhando.avif",
    description: "Python security application for password analysis."
},
{
    title: "Chemistry Calculator",
    category: "Software Development",
    image: "images/equipe_de_tecnologia_digital.avif",
    description: "Python program for molecular mass calculations."
}
];

const container = document.querySelector("#portfolio-grid");

if (container) {

    projects.forEach(project => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p><strong>${project.category}</strong></p>
            <p>${project.description}</p>
        `;

        container.appendChild(card);

    });

}