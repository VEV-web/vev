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

// Прямое скачивание с Яндекс.Диска: клик по ссылке сразу начинает загрузку файла,
// без перехода на страницу Яндекса. Публичный API Яндекс.Диска отдаёт временную
// прямую ссылку на файл. Если что-то не сработало — открываем обычную страницу.
(function () {
  // Папка (или файл) на Яндекс.Диске и путь к установщику внутри неё.
  // Если выложите файл под другим именем — поправьте YA_FILE.
  var YA_PUBLIC = 'https://disk.360.yandex.ru/d/XKh_OTRC-GVVWA';
  var YA_FILE = '/APK Runner Setup 1.1.0.exe';

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a') : null;
    if (!a || a.href.indexOf('disk.360.yandex.ru') === -1) return;
    e.preventDefault();
    var api = 'https://cloud-api.yandex.net/v1/disk/public/resources/download'
      + '?public_key=' + encodeURIComponent(YA_PUBLIC)
      + (YA_FILE ? '&path=' + encodeURIComponent(YA_FILE) : '');
    var fallback = function () { window.open(a.href, '_blank', 'noopener'); };
    try {
      fetch(api).then(function (r) { return r.json(); }).then(function (d) {
        if (d && d.href) { window.location.href = d.href; } else { fallback(); }
      }).catch(fallback);
    } catch (err) { fallback(); }
  });
})();
