// Перевіряємо, чи DOM повністю завантажений
document.addEventListener('DOMContentLoaded', () => {
    const myAudio = document.getElementById("soundClickOnButton");
    const allButtons = document.querySelectorAll("button"); // Отримуємо ВСІ кнопки на поточній сторінці

    // Перевіряємо, чи знайдено аудіо-елемент та кнопки
    if (myAudio && allButtons.length > 0) {
        allButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Скидаємо звук на початок, щоб він відтворювався щоразу
                myAudio.currentTime = 0; 
                myAudio.play()
                    .then(() => {
                        // Звук відтворено успішно
                    })
                    .catch(error => {
                        console.error('Помилка при відтворенні звуку:', error);
                    });
            });
        });
    } else {
        if (!myAudio) {
            console.warn('Аудіо-елемент з ID "soundClickOnButton" не знайдено на сторінці.');
        }
        if (allButtons.length === 0) {
            console.warn('Кнопок (<button>) не знайдено на сторінці.');
        }
    }
});