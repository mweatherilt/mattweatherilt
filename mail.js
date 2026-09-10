(function () {
  var addr = atob("bWF0dEByYWRpeC1pdC1jb25zdWx0aW5nLmNvbQ==");

  document.querySelectorAll(".js-mail").forEach(function (el) {
    el.href = "mailto:" + addr;
  });

  var form = document.getElementById("subscribe");
  var field = document.getElementById("subscribe-email");
  if (!form || !field) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var body = encodeURIComponent(field.value);
    window.location.href = "mailto:" + addr + "?subject=Newsletter&body=" + body;
  });
})();
