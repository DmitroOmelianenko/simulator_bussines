// Спочатку оголошуємо та ініціалізуємо змінні
const myAudio = document.getElementById("soundClickOnButton");
const buttonLink = document.querySelector("button");

// Тепер використовуємо buttonLink
buttonLink.addEventListener("click", () => {
    if (myAudio) {
        // Відтворюємо звук
        myAudio.play()
            .then(() => {
                console.log('Звук відтворено успішно!');
            })
            .catch(error => {
                console.error('Помилка при відтворенні звуку:', error);
            });
    } else {
        console.error('Аудіо-елемент не знайдено!');
    }
});

console.log(55);
const firstLiElement = document.querySelector(".cafe_button"); // Якщо у вас клас "ul" на <ul> елементі
firstLiElement.addEventListener("click", () => {
    window.location.href = "./cofee.html";
});

console.log("Pisdun");