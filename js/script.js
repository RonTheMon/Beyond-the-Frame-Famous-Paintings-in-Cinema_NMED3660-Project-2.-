console.log("Beyond the Frame");

const allArtworks = document.getElementById("all-artworks");

// Create a card using an image URL and the information returned by a collection API.
function createArtworkCard(imagePath, title, collection, detailPage) {
    const artworkCard = document.createElement("article");
    artworkCard.classList.add("artwork-card");

    const artworkFigure = document.createElement("figure");
    const artworkImage = document.createElement("img");
    const artworkTitle = document.createElement("h2");
    const artworkCollection = document.createElement("p");
    const artworkLink = document.createElement("a");

    artworkImage.src = imagePath;
    artworkImage.alt = title;
    artworkImage.loading = "lazy";

    artworkTitle.textContent = title;

    artworkCollection.textContent = "Collection: " + collection;
    artworkCollection.classList.add("artwork-credit");

    artworkLink.href = detailPage;
    artworkLink.textContent = "Explore Painting →";

    artworkFigure.appendChild(artworkImage);
    artworkCard.appendChild(artworkFigure);
    artworkCard.appendChild(artworkTitle);
    artworkCard.appendChild(artworkCollection);
    artworkCard.appendChild(artworkLink);

    allArtworks.appendChild(artworkCard);
}

// Show a message in the page if an API request or image lookup fails.
function showError(collection, error) {
    console.error(collection + " request failed:", error);

    const errorMessage = document.createElement("p");
    errorMessage.classList.add("artwork-card");
    errorMessage.textContent = collection + " artwork could not be loaded.";
    allArtworks.appendChild(errorMessage);
}

// GETTY - The Blue Boy
const gettyURL = "https://data.getty.edu/museum/collection/object/";
const gettyObj = "07246891-8ed5-4f56-b5ab-346447033874";
const gettyObjURL = gettyURL + gettyObj;

async function getGetty() {
    try {
        const response = await fetch(gettyObjURL);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        const data = await response.json();
        console.log(data);

        const imagePath = data.representation[0].id;
        const artworkTitle = data._label || "Getty collection artwork";

        createArtworkCard(imagePath, artworkTitle, "Getty", "details/the-blue-boy.html");
    } catch (error) {
        showError("Getty", error);
    }
}
getGetty();



/*-------------ORIGINAL API CALL FOR YALE LUX 1 WAS INTERRUPTED BY A WAF ISSUE!-------------*/

// // YALE LUX - Le café de nuit (The Night Café)
// const luxURL1 = "https://lux.collections.yale.edu/data/object/6a76f826-54e7-4b94-8fee-f043b29bb2b8";

// async function getLux1() {
//     try {
//         const response = await fetch(luxURL1);
//         if (!response.ok) {
//             throw new Error("HTTP status " + response.status);
//         }

//         const data = await response.json();
//         console.log(data);

//         const imagePath = data.representation[0].digitally_shown_by[0].access_point[0].id;
//         const artworkTitle = data._label || "Yale LUX collection artwork";

//         createArtworkCard(imagePath, artworkTitle, "Yale LUX", "details/the-night-cafe.html");
//     } catch (error) {
//         showError("Yale LUX", error);
//     }
// }
// getLux1();



// YALE LUX - Le café de nuit (The Night Café)
const luxImage1 = "images/the-night-cafe.jpg";

function getLux1() {
    const imagePath = luxImage1;
    const artworkTitle = "Le café de nuit (The Night Café)";

    createArtworkCard(imagePath, artworkTitle, "Yale LUX", "details/the-night-cafe.html");
}
getLux1();


/*-------------ORIGINAL API CALL FOR YALE LUX 2 WAS INTERRUPTED BY A WAF ISSUE!-------------*/

// // YALE LUX - Rooms By The Sea   
// const luxURL2 = "https://lux.collections.yale.edu/data/object/63bdda22-a6be-413d-9a35-5e2649c14c21";

// async function getLux2() {
//     try {
//         const response = await fetch(luxURL2);
//         if (!response.ok) {
//             throw new Error("HTTP status " + response.status);
//         }

//         const data = await response.json();
//         console.log(data);

//         const imagePath = data.representation[0].digitally_shown_by[0].access_point[0].id;
//         const artworkTitle = data._label || "Yale LUX collection artwork";

//         createArtworkCard(imagePath, artworkTitle, "Yale LUX", "details/rooms-by-the-sea.html");
//     } catch (error) {
//         showError("Yale LUX", error);
//     }
// }
// getLux2();

// YALE LUX - Rooms By The Sea
const luxImage2 = "images/rooms-by-the-sea.jpg";

function getLux2() {
    const imagePath = luxImage2;
    const artworkTitle = "Rooms by the Sea";

    createArtworkCard(imagePath, artworkTitle, "Yale LUX", "details/rooms-by-the-sea.html");
}
getLux2();

// RIJKSMUSEUM - The Night Watch
const rijkURL2 = "https://id.rijksmuseum.nl/200107928";

async function getRijks2() {
    try {
        const response = await fetch(rijkURL2);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        const data = await response.json();
        console.log(data);

        const imagePath = data.subject_of[0].digitally_carried_by[0].access_point[0].id;
        const artworkTitle = data.identified_by[2].content;

        createArtworkCard(imagePath, artworkTitle, "Rijksmuseum", "details/the-night-watch.html");
    } catch (error) {
        showError("Rijksmuseum", error);
    }
}
getRijks2();

// RIJKSMUSEUM - The Musicians
const rijkURL3 = "https://id.rijksmuseum.nl/200366179";

async function getRijks3() {
    try {
        const response = await fetch(rijkURL3);
        if (!response.ok) {
            throw new Error("HTTP status " + response.status);
        }

        const data = await response.json();
        console.log(data);

        const imagePath = data.subject_of[0].digitally_carried_by[0].access_point[0].id;
        const artworkTitle = data.identified_by[2].content;

        createArtworkCard(imagePath, artworkTitle, "Rijksmuseum", "details/the-musicians.html");
    } catch (error) {
        showError("Rijksmuseum", error);
    }
}
getRijks3();
