const title = document.querySelector("h1");

title.addEventListener("click", function () {
    alert("Welcome to the Temple Album!");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
   {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893",
    area: 253000,
    imageUrl: "images/brasiliatemple.jpg"
},
    {
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, Brazil",
        dedicated: "1978",
        area: 59246,
        imageUrl: "images/saopaulotemple.jpg"
    },
    {
        templeName: "Campinas Brazil Temple",
        location: "Campinas, Brazil",
        dedicated: "2002",
        area: 48500,
        imageUrl: "images/campinastemple.jpg"
    },
    {
        templeName: "Fortaleza Brazil Temple",
        location: "Fortaleza, Brazil",
        dedicated: "2019",
        area: 36000,
        imageUrl: "images/fortalezatemple.jpg"
    },
    {
        templeName: "Manaus Brazil Temple",
        location: "Manaus, Brazil",
        dedicated: "2012",
        area: 32032,
        imageUrl: "images/manaustemple.jpg"
    },
    {
        templeName: "Recife Brazil Temple",
        location: "Recife, Brazil",
        dedicated: "2000",
        area: 37200,
        imageUrl: "images/recifetemple.jpg"
    },
    {
        templeName: "Porto Alegre Brazil Temple",
        location: "Porto Alegre, Brazil",
        dedicated: "2000",
        area: 10700,
        imageUrl: "images/portoalegretemple.jpg"
    },
    {
        templeName: "Curitiba Brazil Temple",
        location: "Curitiba, Brazil",
        dedicated: "2008",
        area: 27850,
        imageUrl: "images/curitiba.jpg"
    },
    {
        templeName: "Belem Brazil Temple",
        location: "Belém, Brazil",
        dedicated: "2022",
        area: 28675,
        imageUrl: "images/belemtemple.jpg"
    },
    {
    templeName: "Colonia Juárez Chihuahua Mexico Temple",
    location: "Colonia Juárez, Mexico",
    dedicated: "1999",
    area: 6800,
    imageUrl: "images/riodejaneirotemple.jpg"
},
{
    templeName: "Brasília Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2023",
    area: 25000,
    imageUrl: "images/brasiliatemple.jpg"
}
];

const container = document.querySelector("#temple-container");
const heading = document.querySelector("main h2");

function displayTemples(templesToDisplay) {
    container.innerHTML = "";

    templesToDisplay.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName}`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        container.appendChild(card);
    });
}

document.querySelector("#home").addEventListener("click", () => {
    heading.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    heading.textContent = "Old";
    displayTemples(temples.filter((temple) => Number(temple.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    heading.textContent = "New";
    displayTemples(temples.filter((temple) => Number(temple.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    heading.textContent = "Large";
    displayTemples(temples.filter((temple) => temple.area > 90000));
});

document.querySelector("#small").addEventListener("click", () => {
    heading.textContent = "Small";
    displayTemples(temples.filter((temple) => temple.area < 10000));
});

displayTemples(temples);