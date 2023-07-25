function showModalWaiter() {
  const modal = document.getElementById('modal-waiter');
  modal.style.display = 'block';
  setTimeout(function() {
    modal.style.display = 'none';
  }, 4000);
}

const btnsModalWaiter = document.querySelectorAll('.cabinet-right-btn');
const modalWaiter = document.querySelector('.modal-waiter');

btnsModalWaiter.forEach(button => {
  button.addEventListener('click', () => {
      modalWaiter.classList.add('modal-waiter-active');

    setTimeout(function() {
      modalWaiter.classList.remove('modal-waiter-active');
    }, 3000);

  });
});
