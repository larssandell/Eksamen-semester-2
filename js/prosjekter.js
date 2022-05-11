const qs = document.location.search;

const params = new URLSearchParams(qs);

const id = params.get("id");

const url = "https://si.larssandell.no/wp-json/wp/v2/posts/" + id;
const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

/* Call API */ 
async function callApi(url) {
    try {
        const response = await fetch(wpApi);
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        console.log("Her er feilen " ,err);
    }
}
callApi();
// export default getApi;

/* create html from API */
const wpContainer = document.querySelector(".wp-container");
const wpTitle = document.querySelector(".wp-title");
const wpImg = document.querySelector(".wp-img");
const wpText = document.querySelector(".wp-text");

// function createHTML(wpApi) {
//     const wpPost = await callApi(wpApi);
//     for (let i = 0; i < wpApi.length; i++);
//     console.log(wpApi);
//     document.title = `${wpApi.title.rendered}`
//     wpContainer.innerHTML = `<img src="${wpApi.}
//                             <div class="`;
    
// }
async function createHTML() {
    try {
        const wpPost = await callApi(wpApi);  
        for (let i = 0; i < wpPost.length; i++);
        console.log(wpPost);
        document.title = `${wpPost.title.rendered}`
        wpContainer.innerHTML = `<div class="wp-container><a href="/prosjektblog.html${wpApi[i].id} alt="">
                                    <img class="wp-img" src="${wpPost[i].featured_media_src_url}
                                    <div class="wp-text">${wpPost[i].afc.paragraph}</div>
                                    
                                 </div>`;


    } catch(err) {
        console.log("Her er feilen " ,err);
    }
}
createHTML();