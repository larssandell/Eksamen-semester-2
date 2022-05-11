// hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));


//API Call
// const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

// async function getApi(url) {
//     try {
//         const response = await fetch(wpApi);
//         const data = await response.json();
//         return data;
//     } catch(err) {
//         console.log("Her er feilen " ,err);
//     }
// }
// callApi();