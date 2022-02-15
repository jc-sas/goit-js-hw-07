import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const createGalleryItem = createImagesItem(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItem);
galleryContainer.addEventListener('click', onImgLinkClick);


function createImagesItem(images) {
  return images
    .map(({ preview, original, description }) => {
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
      </div>`;
    })
    .join('');
}

let originalImg;

function onImgLinkClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  originalImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}" >`,
  );

  originalImg.show()
}

