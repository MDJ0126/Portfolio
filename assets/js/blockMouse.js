document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.cursor = 'default';
});