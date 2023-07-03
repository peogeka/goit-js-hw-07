import { galleryItems } from './gallery-items.js';
const galleryList = document.querySelector('.gallery');
const imgList = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  )
  .join('');

galleryList.innerHTML = imgList;


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});
