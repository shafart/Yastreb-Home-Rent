let currentPageEnrollments = 1;
const totalPagesEnrollments = 5;

function getEnrollments(page) {
  fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=8`)
    .then(response => response.json())
    .then(data => {

      const enrollmentsContainer = document.getElementById('enrollments-container');
      console.log(enrollmentsContainer);


      enrollmentsContainer.innerHTML = '';


      data.forEach((enrollments, index) => {
        const html = `
          <div class="enrollments-item ${index % 2 === 0 ? 'enrollments-item-even' : 'enrollments-item-odd'}">
            <div class="enrollments-item-left">
              <img src="img/status.png" alt="status">
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




document.addEventListener('DOMContentLoaded', () => {
  getEnrollments(currentPageEnrollments);
  updatePaginationEnrollment(currentPageEnrollments);
});


function updatePaginationEnrollment(currentPageEnrollments) {
  const paginationContainerEnrollment = document.getElementById('pagination-container-enrollment');
  paginationContainerEnrollment.innerHTML = '';


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


    if (page === currentPageEnrollments) {
      button.classList.add('active');
    }

    paginationContainerEnrollment.appendChild(button);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
});
