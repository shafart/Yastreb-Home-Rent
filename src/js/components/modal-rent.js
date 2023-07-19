const btnsModalRent = document.querySelectorAll('.rent-map-btn');
const modalRent = document.querySelector('.rent-home-modal');
const modalTitleRent = document.getElementById('modal-title');

btnsModalRent.forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    modalTitleRent.textContent = title;
    modalRent.classList.add('rent-home-modal-active');

    btnsModalRent.forEach(btn => {
      btn.classList.remove('rent-map-btn-active');
    });

    button.classList.add('rent-map-btn-active');
  });
});

document.addEventListener('click', (event) => {
  const isClickedOutside = !modalRent.contains(event.target) && !event.target.classList.contains('rent-map-btn');
  if (isClickedOutside) {
    modalRent.classList.remove('rent-home-modal-active');

    btnsModalRent.forEach(btn => {
      btn.classList.remove('rent-map-btn-active');
    });
  }
});
