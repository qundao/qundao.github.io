// $(document).ready(function () {
document.addEventListener("DOMContentLoaded", function () {
  const tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(function (table) {
    var dataTable = new DataTable(table, {
      lengthMenu: [10, 50, 100, 200, 500],
      pageLength: 50,
      language: {
        url: "https://cdn.datatables.net/plug-ins/2.0.2/i18n/zh.json",
      },
    });
  });
});
