document.addEventListener('DOMContentLoaded', function () {
    var hasScrollbar = window.innerWidth > document.documentElement.clientWidth;
    if (hasScrollbar) {
        document.body.style.paddingLeft = '17px'; // 스크롤바의 너비에 따라 조절
    }
});