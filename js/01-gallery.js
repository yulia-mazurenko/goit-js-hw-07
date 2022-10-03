import { galleryItems } from './gallery-items.js';
// Change code below this line

const galeryContainerRef = document.querySelector('.gallery');
const galeryMarkup = createGalleryImagesMarkup(galleryItems);

galeryContainerRef.insertAdjacentHTML('beforeend', galeryMarkup);

galeryContainerRef.addEventListener('click', onGalleryContainerClick)


function createGalleryImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
      alt="${description}"
    />
  </a>
 </div>
        `
}).join('')
             
}

function onGalleryContainerClick(e) {
    
    e.preventDefault();
    
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const imgUrl = e.target.dataset.source;

    createModal(imgUrl); 
   
}

let instance;

function createModal(url) {

    instance = basicLightbox.create(`
        <img src="${url}">
    `)
    
    instance.show();
    
    document.addEventListener('keydown', OnModalCloseEsc);  

    onModalCloseByClick();
    
}

function OnModalCloseEsc(e) {
     
        if (e.code === 'Escape') {
            instance.close();              
        } 
        
        document.removeEventListener('keydown', OnModalCloseEsc);
        
}   
    
function onModalCloseByClick() {
    const basicLightboxRef = document.querySelector('.basicLightbox');
    basicLightboxRef.addEventListener('click', OnModalCloseEsc);
}

console.log(galleryItems);
   




