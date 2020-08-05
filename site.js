let clickedElem = document.querySelectorAll('.plus');

for (i = 0; i < clickedElem.length; i++) {
    let aim = clickedElem[i].previousElementSibling.lastElementChild;
    clickedElem[i].addEventListener('click', function () {
        aim.classList.toggle("hidden");
    });
}