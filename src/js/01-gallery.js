// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const imageContainer = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `      
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionsDelay: 250,
  navText: ['❰', '❱'],
});

console.log(galleryItems);
