// Константы для хранения текущей страницы и количества страниц
let currentPage = 1;
const totalPages = 5;

// Функция для получения данных с jsonplaceholder/posts
function getTransactions(page) {
  // Здесь можно использовать AJAX-запрос для получения данных с jsonplaceholder/posts
  // Пример использования Fetch API:
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)
    .then(response => response.json())
    .then(data => {
      // Полученные данные используются для заполнения блока транзакций
      const transactionsContainer = document.getElementById('transactions-container');

      // Очистить предыдущие транзакции
      transactionsContainer.innerHTML = '';

      // Пройти по данным и создать новые транзакции
      data.forEach(transaction => {
        const html = `
            <div class="transactions-item">
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
      console.error('Ошибка получения данных:', error);
    });
}

// Функция для обновления пагинации
function updatePagination(currentPage) {
  const paginationContainer = document.getElementById('pagination-container');
  paginationContainer.innerHTML = '';

  // Создать кнопки для каждой страницы
  for (let page = 1; page <= totalPages; page++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = page;
    button.addEventListener('click', () => {
      if (page !== currentPage) {
        currentPage = page;
        getTransactions(currentPage);
        updatePagination(currentPage);
      }
    });

    // Добавить класс "active" к текущей странице
    if (page === currentPage) {
      button.classList.add('active');
    }

    paginationContainer.appendChild(button);
  }
}

  // Запустить получение транзакций для первой страницы при загрузке страницы
  document.addEventListener('DOMContentLoaded', () => {
    getTransactions(currentPage);
    updatePagination(currentPage); // Вызываем обновление пагинации один раз при загрузке страницы
  });
