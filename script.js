const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const apiKey = `ADD YOUR API KEY`
const userId = 'ADD YOUR USER ID'
const photosetId = 'ADD YOUR PHOTOSET ID'
const apiURL = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&user_id=${userId}&photoset_id=${photosetId}&format=json&extras=url_z`;

function displayPhotos(){
    let html = '';
    photosArray.forEach((photo) => {
        html += `  
        <a data-flickr-embed="true" href="https://www.flickr.com/photos/${userId}/${photo.id}/in/dateposted-public/" title="${photo.title}">
             <img src=${photo.url_z} alt="${photo.title}"/>
         </a> `
    })

    imageContainer.innerHTML = html;

}


function jsonFlickrApi(data){
    photosArray = data.photoset.photo;
    displayPhotos();
    console.log(photosArray)
}

const script = document.createElement('script');
script.src = apiURL;
document.body.appendChild(script);


// getPhotos()