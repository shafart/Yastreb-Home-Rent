import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',

  });


  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  prevButton.addEventListener('click', function () {
    swiper.slidePrev();
  });

  nextButton.addEventListener('click', function () {
    swiper.slideNext();
  });
});
