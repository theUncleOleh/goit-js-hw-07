import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGalleryItemMarkup(); 
galleryContainer.insertAdjacentHTML('beforeend',cardsMarkup);

// console.log(createGalleryItemMarkup());
// рендер и создание елементов
function createGalleryItemMarkup () {
   
    return galleryItems.map(({preview, original, description}) => {
 return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join(" ");
}
//  делегирование
const refs = {
     link : document.querySelector(".gallery__link"),
   item : document.querySelector(".gallery__item"),
  image : document.querySelector(".gallery__image"),
}

// console.log(refs.link);
// console.log(refs.item);
// console.log(galleryImage);
// const  handleImageClick = () => {
// console.log('this is click')
// };


const instance = basicLightbox.create(
    `<img src=""/>`
    
, {
    onShow: () => {
        window.addEventListener('keydown', handleKeyDown);
},
onClose: () =>{
    window.addEventListener('keydown', handleKeyDown)
},

}
)



const handleImageClick =(event) => {
event.preventDefault();
instance.element().querySelector("img").src = event.target.dataset.source;
instance.show()
console.log()
};
 
const handleKeyDown = (event) => {
     if(event.key === 'Escape'){
      instance.close();
     }
    
 };

galleryContainer.addEventListener('click', handleImageClick);
 






