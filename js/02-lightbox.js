import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryContainerRef = document.querySelector('.gallery');
const galeryMarkup = createGalleryImagesMarkup(galleryItems);

galeryContainerRef.insertAdjacentHTML('beforeend', galeryMarkup);


function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `
}).join('')
             
}


var lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData: "alt",
    captionDelay: 250,
})


    



