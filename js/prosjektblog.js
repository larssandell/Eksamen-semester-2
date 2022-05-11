const qs = document.location.search;

const params = new URLSearchParams(qs);

const id = params.get("id");

const urlApi = "https://si.larssandell.no/wp-json/wp/v2/posts/" + id;
const main = document.querySelector("main")
const charContainer = document.querySelector(".char-container")

async function getCharacters() {
    try {
        const response = await fetch(urlApi);
        const apiChar = await response.json();
        document.querySelector(".loader").innerHTML = "";
        createHtml(apiChar);

    }catch(err) {
        console.log("What went wrong", err);
        main.innerHtml = `<div class="error"><p>Noe gikk galt</p></div>`;
    }
}

getCharacters();

function createHtml(apiChar) {
    console.log(apiChar);
    document.title = `${apiChar.name}`
    charContainer.innerHTML = `<div class="char"><h1>${apiChar.rendered.title}</h1>
                                <img src="${apiChar.image}"></img></div>
                                <div class="char-info"><h3>Gender:<h3><h3 class="h3-blue">${apiChar.gender}</h3>
                                <h3>Species:</h3><h3 class="h3-blue">${apiChar.species}</h3>
                                <h3>Location:</h3><h3 class="h3-blue">${apiChar.location.name}</h3>
                                <h3>Status:</h3><h3 class="h3-blue">${apiChar.status}</h3><h3>Number of episodes:</h3>
                                <h3 class="h3-blue">${apiChar.episode.length}</h3>
                      </div>`
}