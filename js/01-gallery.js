import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = galleryItems
  .map(({preview, original, description}) => {
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

  function openModalImg(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
      return;
    };
    
    function onEscKeyPress(e) {
        if (e.code === "Escape") {
            instance.close();
          }
    };

    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="1280" height="auto">`, {
        onShow: () => window.addEventListener("keydown", onEscKeyPress),
        onClose: () => window.removeEventListener("keydown", onEscKeyPress)
    });
    instance.show();
};

  galleryRef.addEventListener("click", openModalImg);
