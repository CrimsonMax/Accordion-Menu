function showText() {
    const text = document.querySelector('.hidderRidds');
    text.classList.remove('hidden');
}


document.querySelector('.plus').addEventListener('click', showText);