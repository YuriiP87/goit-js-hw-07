const images = [
  { url: './images/1.png', alt: 'Image 1' },
  { url: './images/2.png', alt: 'Image 2' },
  { url: './images/3.png', alt: 'Image 3' },
  { url: './images/11.png', alt: 'Image 4' },
  { url: './images/22.png', alt: 'Image 5' },
  { url: './images/32.png', alt: 'Image 6' },
];

const galleryEl = document.querySelector('.gallery');

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" loading="lazy" /></li>`)
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);