import images from './gallery-items.js'

const galleryContainer = document.querySelector('.js-gallery')
const overlay = document.querySelector('.lightbox__overlay')
const galleryMarkup = createGalleryItems(images)

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)
galleryContainer.addEventListener('click', onImageClick)

const closeModalBtn = document.querySelector('.lightbox__button')
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', onOverlayClick)
window.addEventListener('keydown', pressEsc)


function createGalleryItems(images) {
  return images
    .map(({ preview, original, description}) => {
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


function onImageClick(evt) {
  evt.preventDefault();  
  const source = evt.target.getAttribute('data-source')
  const selectedImage = document.querySelector('.lightbox__image')
  selectedImage.setAttribute('src', '')
    const isImage = evt.target.classList.contains('gallery__image');
    if (!isImage) {
        return
    }  
    document.querySelector('.js-lightbox').classList.add('is-open')       
    selectedImage.setAttribute('src', source)
}
 

function closeModal() {
  const ActiveModal = document.querySelector('.js-lightbox.is-open');
  if (ActiveModal) {
    ActiveModal.classList.remove('is-open');
  }
}


function onOverlayClick() {
  const ActiveModal = document.querySelector('.js-lightbox.is-open');
  if (ActiveModal) {
    ActiveModal.classList.remove('is-open');
  }
}


function pressEsc(evt) {
  const ActiveModal = document.querySelector('.js-lightbox.is-open');
  if (ActiveModal && evt.code === 'Escape') {
    ActiveModal.classList.remove('is-open');
}
}

