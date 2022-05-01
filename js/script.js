const apiUrl = "https://si.larssandell.no/wp-json/wp/v2/posts/";
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

//API Call
async function callApi() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);


    }catch(err) {
        console.log("Her er feilen " ,err);
    }
}
callApi();


// hamburger menu
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));