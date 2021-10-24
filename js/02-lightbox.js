import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

console.log(galleryContainer);
console.log(galleryItems);

const cardsMarkup = createGalleryItemMarkup(); 
galleryContainer.insertAdjacentHTML('beforeend',cardsMarkup);


function createGalleryItemMarkup () {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description} " />
      </a>`
       ;

    }).join(' ');
}

let lightbox = new SimpleLightbox(".gallery a");
lightbox.on('show.simplelightbox', 
function handleModalOpen(event)  {
event.preventDefault();
	
})
console.log(lightbox);
















