 const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery');
const galleryMarkup = createGalleryItems(galleryItems);
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');


galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onImageListClick);
// overlay.addEventListener('click', closeLightbox);
// closeButton.addEventListener('click', closeLightbox);
// window.addEventListener('keydown', onEscape);

function createGalleryItems(galleryItems) {
  return galleryItems.map(({preview, original, description})=> {
    return `
       <li class="gallery__item">
     <a
      class="gallery__link"
      href="${original}"
     >
       <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
         />
      </a>
</li>
    `;
  })
    .join('');
}

function onImageListClick(e) {
   e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const currentImage = e.target.dataset.source;
  const currentAlt = e.target.alt;
  lightboxImage.src = currentImage;
  lightboxImage.alt = currentAlt;
  lightbox.classList.add('is-open');
  overlay.addEventListener('click', closeLightbox);
  closeButton.addEventListener('click', closeLightbox);
  window.addEventListener('keydown', onEscape);
}

function closeLightbox(e) {
  if (!lightbox.classList.contains('is-open')) {
    return;
   }
  if (!overlay){
    return;
  }
  lightbox.classList.remove('is-open');
  lightboxImage.src = '';
  lightboxImage.alt = '';

}
function onEscape(e) {
  if (e.code === "Escape") {
    closeLightbox();
  }
  // if (e.code === "ArrowRight") {
  //   const name = lightboxImage.alt;
  //   const currentImage = galleryList.querySelector('[alt = "`lightboxImage.alt `"]');
  //   // const currentImage = document.querySelector('[data-source = src]');
  //   // const nextImage = currentImage.closest('li').nextElementSibling;
  //   // lightboxImage.src = nextImage.querySelector('img').dataset.source;
  //   // lightboxImage.alt = nextImage.querySelector('img').alt;
  //   console.log(currentImage);
  // }
  //  if (e.code === "ArrowLeft") {
  //   const previousImage = e.target.closest('li').previousElementSibling;
  //   lightboxImage.src = previousImage.querySelector('img').dataset.source;
  //   lightboxImage.alt = previousImage.querySelector('img').alt;
  // }

}