import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => {
  return `<li>
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt=${description}/>
    </a>
  </li>`;
});

galleryListRef.insertAdjacentHTML('beforeend', galleryItem.join(''));


let gallery = new SimpleLightbox('.gallery a',{
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
});

// const galleryItemMarkup = galleryItems.map(({ preview, original, description }) => {
//   return `
//   <li>
//     <a class="gallery__item" href="${original}">
//       <img class="gallery__image" src="${preview}" alt="${description}"/></a>
//   </li>`;
// });

// const galleryContainerRef = document.querySelector('.gallery')
// galleryContainerRef.insertAdjacentHTML('beforeend', galleryItemMarkup).join('')

//  let gallery = new SimpleLightbox('.gallery a',{
//   captions: true,
//   captionsData: 'alt',
//   captionsDelay: 250,
// });