// // Количество транзакций на одной странице
// var transactionsPerPage = 5;

// // Функция для получения списка транзакций с JSONPlaceholder API
// async function getTransactions(pageNumber) {
//   var response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=' + pageNumber + '&_limit=' + transactionsPerPage);
//   var transactions = await response.json();

//   return transactions;
// }

// // Функция для генерации списка транзакций
// function generateTransactionList(transactions) {
//   var transactionsHTML = '';
//   for (var i = 0; i < transactions.length; i++) {
//     var transaction = transactions[i];
//     transactionsHTML += '<div class="transaction-item">ID: ' + transaction.id + ', Title: ' + transaction.title + '</div>';
//   }

//   document.getElementById('transactions-container').innerHTML = transactionsHTML;
// }

// // Функция для генерации пагинации
// function generatePagination(totalPages) {
//   var paginationHTML = '';
//   for (var i = 1; i <= totalPages; i++) {
//     paginationHTML += '<button onclick="handlePageClick(' + i + ')">' + i + '</button>';
//   }

//   document.getElementById('pagination-container').innerHTML = paginationHTML;
// }

// // Функция для обработки клика по странице
// async function handlePageClick(pageNumber) {
//   var transactions = await getTransactions(pageNumber);
//   generateTransactionList(transactions);
// }

// // Функция для инициализации
// async function init() {
//   var response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   var totalTransactions = await response.json();
//   var totalPages = Math.ceil(totalTransactions.length / transactionsPerPage);

//   handlePageClick(1);
//   generatePagination(totalPages);
// }

// // Запуск инициализации
// init();
