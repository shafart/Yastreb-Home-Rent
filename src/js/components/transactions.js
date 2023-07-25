
let currentPageTransactions = 1;
const totalPagesTransactions = 5;

function showLoading() {
  const transactionsContainer = document.getElementById('transactions-container');
  transactionsContainer.innerHTML =
  '<div class="loading"><svg><use xlink:href="img/sprite.svg#loading"></use></svg></div>';
}
function hideLoading() {
  const transactionsContainer = document.getElementById('transactions-container');
  transactionsContainer.innerHTML = '';
}

function getTransactions(page) {

  showLoading()
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)

    .then(response => response.json())
    .then(data => {

      hideLoading()
      const transactionsContainer = document.getElementById('transactions-container');
      transactionsContainer.innerHTML = '';

      data.forEach((transaction, index) => {
        const html = `
          <div class="transactions-item ${index % 2 === 0 ? 'transactions-item-even' : 'transactions-item-odd'}">
            <div class="transactions-item-left">
              <img src="img/rub.png" alt="rub">
              <div class="transactions-item-left-wrap">
                <span class="transactions-name">Вывод средств</span>
                <span class="transactions-date">6 марта, 22:13</span>
              </div>
            </div>
            <div class="transactions-item-right">
              <span class="transactions-total">999 руб</span>
              <span class="transactions-status">${transaction.id}</span>
            </div>
          </div>
        `;
        transactionsContainer.innerHTML += html;
      });
    })
    .catch(error => {
      showLoading()
      console.error('Ошибка получения данных:', error);
    });
}


document.addEventListener('DOMContentLoaded', () => {
  getTransactions(currentPageTransactions);
  updatePaginationTransactions(currentPageTransactions);
});


function updatePaginationTransactions(currentPageTransactions) {
  const paginationContainerTransactions = document.getElementById('pagination-container-withdrawal');
  paginationContainerTransactions.innerHTML = '';


  for (let page = 1; page <= totalPagesTransactions; page++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = page;
    button.addEventListener('click', () => {
      if (page !== currentPageTransactions) {
        currentPageTransactions = page;
        getTransactions(currentPageTransactions);
        updatePaginationTransactions(currentPageTransactions);
      }
    });


    if (page === currentPageTransactions) {
      button.classList.add('active');
    }

    paginationContainerTransactions.appendChild(button);
  }
}
