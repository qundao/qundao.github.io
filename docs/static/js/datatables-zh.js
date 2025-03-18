document.addEventListener("DOMContentLoaded", function () {
  const tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(function (table) {
    new DataTable(table, {
      language: {
        url: "//cdn.datatables.net/plug-ins/2.0.8/i18n/zh.json",
      },
      pageLength: 25,
    });
  });
});
