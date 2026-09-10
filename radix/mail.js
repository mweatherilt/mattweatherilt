(function () {
  var addr = atob("bWF0dEByYWRpeC1pdC1jb25zdWx0aW5nLmNvbQ==");

  document.querySelectorAll(".js-mail").forEach(function (el) {
    el.href = "mailto:" + addr;
  });
})();
