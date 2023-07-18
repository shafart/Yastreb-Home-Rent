// Константы для хранения текущей страницы и количества страниц
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
// Функция для получения данных с jsonplaceholder/posts
function getTransactions(page) {
  // Здесь можно использовать AJAX-запрос для получения данных с jsonplaceholder/posts
  // Пример использования Fetch API:
  showLoading()
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)

    .then(response => response.json())
    .then(data => {
      hideLoading()
      // Полученные данные используются для заполнения блока транзакций
      const transactionsContainer = document.getElementById('transactions-container');

      // Очистить предыдущие транзакции
      transactionsContainer.innerHTML = '';


      // Пройти по данным и создать новые транзакции
      data.forEach((transaction, index) => {
        const html = `
          <div class="transactions-item ${index % 2 === 0 ? 'transactions-item-even' : 'transactions-item-odd'}">
            <div class="transactions-item-left">
              <img src="../img/rub.png" alt="rub">
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

// Остальной код для обновления пагинации остается без изменений

// Запустить получение транзакций для первой страницы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  getTransactions(currentPageTransactions);
  updatePaginationTransactions(currentPageTransactions); // Вызываем обновление пагинации один раз при загрузке страницы
});

  // Функция для обновления пагинации
function updatePaginationTransactions(currentPageTransactions) {
  const paginationContainerTransactions = document.getElementById('pagination-container-withdrawal');
  paginationContainerTransactions.innerHTML = '';

  // Создать кнопки для каждой страницы
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

    // Добавить класс "active" к текущей странице
    if (page === currentPageTransactions) {
      button.classList.add('active');
    }

    paginationContainerTransactions.appendChild(button);
  }
}
