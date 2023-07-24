import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    // Дополнительные опции Swiper, если необходимо
  });

  // Подключение кнопок для навигации
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  prevButton.addEventListener('click', function () {
    swiper.slidePrev();
  });

  nextButton.addEventListener('click', function () {
    swiper.slideNext();
  });
});
