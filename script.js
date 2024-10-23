// Telegram WebApp готов
window.Telegram.WebApp.ready();

// Получаем информацию о пользователе из Telegram
const userInfo = Telegram.WebApp.initDataUnsafe.user;
document.getElementById("username").textContent = "Игрок: " + userInfo.username;

// Обработка выбора персонажа
document.getElementById("select-character1").addEventListener('click', () => {
    document.getElementById("character-image").src = "images/character1.png";
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("actions").style.display = "block"; // Показываем действия
});

document.getElementById("select-character2").addEventListener('click', () => {
    document.getElementById("character-image").src = "images/character2.png";
    document.getElementById("character-image").style.display = "block";
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("actions").style.display = "block"; // Показываем действия
});

// Анимация GSAP для персонажа
gsap.from("#character-image", { duration: 1, y: -200, opacity: 0 });

// Обработка кнопок
document.getElementById("arena-button").addEventListener('click', () => {
    gsap.to("#character-image", { duration: 1, rotation: 360 });
    alert("Вы отправились на арену!");
});

document.getElementById("train-button").addEventListener('click', () => {
    gsap.to("#character-image", { duration: 1, scale: 1.2 });
    alert("Началась тренировка!");
});
