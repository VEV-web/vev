// Заполняет выпадающее меню «Решения» категориями из solutions-data.js
(function () {
  var menu = document.querySelector('[data-solutions-menu]');
  if (!menu || !window.SOLUTIONS) return;
  // Берём адрес из ссылки «Решения» рядом: на странице 404 он абсолютный
  var base = menu.previousElementSibling.getAttribute('href');
  window.SOLUTIONS.forEach(function (cat) {
    var a = document.createElement('a');
    a.href = base + '#' + cat.id;
    a.textContent = cat.title;
    // Иначе на самой странице «Решения» меню остаётся открытым из-за фокуса
    a.addEventListener('click', function () { a.blur(); });
    menu.appendChild(a);
  });
})();
