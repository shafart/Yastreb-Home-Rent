// Константы для хранения текущей страницы и количества страниц
let currentPageEnrollments = 1;
const totalPagesEnrollments = 5;

// Функция для получения данных с jsonplaceholder/posts
function getEnrollments(page) {
  // Здесь можно использовать AJAX-запрос для получения данных с jsonplaceholder/posts
  // Пример использования Fetch API:
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)
    .then(response => response.json())
    .then(data => {
      // Полученные данные используются для заполнения блока транзакций
      const enrollmentsContainer = document.getElementById('enrollments-container');
      console.log(enrollmentsContainer);

      // Очистить предыдущие транзакции
      enrollmentsContainer.innerHTML = '';

      // Пройти по данным и создать новые транзакции
      data.forEach((enrollments, index) => {
        const html = `
          <div class="enrollments-item ${index % 2 === 0 ? 'enrollments-item-even' : 'enrollments-item-odd'}">
            <div class="enrollments-item-left">
              <img src="../img/rub.png" alt="rub">
              <div class="enrollments-item-left-wrap">
                <span class="enrollments-name">Реферальное зачисление</span>
                <span class="enrollments-date">6 марта, 22:13</span>
              </div>
            </div>
            <div class="enrollments-item-right">
              <span class="enrollments-total">1500 руб</span>
              <span class="enrollments-status">${enrollments.id}</span>
            </div>
          </div>
        `;
        enrollmentsContainer.innerHTML += html;
      });
    })
    .catch(error => {
      console.error('Ошибка получения данных:', error);
    });
}

// Остальной код для обновления пагинации остается без изменений

// Запустить получение транзакций для первой страницы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  getEnrollments(currentPageEnrollments);
  updatePaginationEnrollment(currentPageEnrollments); // Вызываем обновление пагинации один раз при загрузке страницы
});

  // Функция для обновления пагинации
function updatePaginationEnrollment(currentPageEnrollments) {
  const paginationContainerEnrollment = document.getElementById('pagination-container-enrollment');
  paginationContainerEnrollment.innerHTML = '';

  // Создать кнопки для каждой страницы
  for (let page = 1; page <= totalPagesEnrollments; page++) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = page;
    button.addEventListener('click', () => {
      if (page !== currentPageEnrollments) {
        currentPageEnrollments = page;
        getEnrollments(currentPageEnrollments);
        updatePaginationEnrollment(currentPageEnrollments);
      }
    });

    // Добавить класс "active" к текущей странице
    if (page === currentPageEnrollments) {
      button.classList.add('active');
    }

    paginationContainerEnrollment.appendChild(button);
  }
}
