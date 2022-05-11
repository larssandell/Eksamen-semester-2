/* call rest api template */

const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

async function getApi(url) {
    try {
        const response = await fetch(wpApi);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log("Her er feilen " ,err);
    }
}


