const title = document.querySelector("h1");

title.addEventListener("click", function () {

    alert("Welcome to the Temple Album!");

});

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;