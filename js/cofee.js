import { coffeeIngredients } from "api/objects.js";

const myAudio = document.getElementById("soundClickOnButton");
const buttonLink = document.querySelector("button");

buttonLink.addEventListener("click", () => {
    if (myAudio) {
        // Відтворюємо звук
        myAudio.play()
            .then(() => {
                console.log('Звук відтворено успішно!');
            })
            .catch(error => {
                console.error('Помилка при відтворенні звуку:', error);
                // Тут можна додати логіку для обробки помилок, наприклад, показати повідомлення користувачеві
            });
    } else {
        console.error('Аудіо-елемент не знайдено!');
    }
})


const infoGameLink = document.querySelector(".info-game");
const firstElementLink = document.querySelector(".first");
const startButton = document.querySelector(".start_game")

infoGameLink.style.display = "none";
startButton.addEventListener("click", () => {
    infoGameLink.style.display = "block";
    firstElementLink.style.display = "none"

})


const stepsOfCreateCafe = [
    {
        step: 1,
        description: "Оберіть назву вашого ресторану. Це можна зробити в налаштуваннях"
    },
    {
        step: 2,
        description: "Закупівля обладнання та інгредієнтів"
    },
    {
        step: 3,
        description: "Наймання та управління персоналом"
    },
    {
        step: 4,
        description: "Маркетинг та реклама"
    },
    {
        step: 5,
        description: "Фінанси та звітність"
    },
    {
        step: 6,
        description: "Розвиток та розширення"
    },
    {
        step: 7,
        description: "Події та виклики"
    },
    {
        info: "Якщо вам є не зрозумілі деякі кроки - ви завжди можете почитати їх детальніше в налаштуваннях!"
    }
];

const openGuideBtn = document.getElementById("openGuideBtn");
const guideModal = document.getElementById("guideModal");
const stepNumberElement = document.getElementById("stepNumber");
const stepDescriptionElement = document.getElementById("stepDescription");
const nextStepBtn = document.getElementById("nextStepBtn");
const closeGuideBtn = document.getElementById("closeGuideBtn");

let currentStepIndex = 0; // Починаємо з першого кроку

// Функція для відображення поточного кроку з анімацією
function showCurrentStep() {
    // Прибираємо клас анімації, щоб можна було додати його знову
    stepNumberElement.classList.remove('fade-in');
    stepDescriptionElement.classList.remove('fade-in');

    // Примусово перемальовуємо, щоб анімація спрацювала знову (trick for re-triggering animation)
    void stepNumberElement.offsetWidth;
    void stepDescriptionElement.offsetWidth;

    // Додаємо клас анімації назад
    stepNumberElement.classList.add('fade-in');
    stepDescriptionElement.classList.add('fade-in');

    const currentStepData = stepsOfCreateCafe[currentStepIndex];

    if (currentStepData.step) { // Якщо це крок з номером
        stepNumberElement.textContent = `Крок ${currentStepData.step}`;
        stepDescriptionElement.textContent = currentStepData.description;
        nextStepBtn.classList.remove('hidden'); // Переконаємось, що кнопка "Далі" видима
        closeGuideBtn.classList.add('hidden');  // Переконаємось, що кнопка "Закрити гід" прихована
    } else { // Якщо це останній елемент з info
        stepNumberElement.textContent = ""; // Очищаємо номер кроку
        stepDescriptionElement.textContent = currentStepData.info;
        nextStepBtn.classList.add('hidden'); // Приховуємо кнопку "Далі"
        closeGuideBtn.classList.remove('hidden'); // Показуємо кнопку "Закрити гід"
    }
}

// Функція для відкриття модального вікна гіду
function openGuide() {
    guideModal.classList.remove('hidden'); // Показуємо модалку
    currentStepIndex = 0; // Скидаємо гід на початок при відкритті
    showCurrentStep(); // Відображаємо перший крок
}

// Функція для закриття модального вікна гіду
function closeGuide() {
    guideModal.classList.add('hidden'); // Приховуємо модалку
}

// Обробник події для кнопки "Відкрити Гід"
if (openGuideBtn) {
    openGuideBtn.addEventListener('click', openGuide);
}

// Обробник події для кнопки "Далі"
if (nextStepBtn) {
    nextStepBtn.addEventListener('click', () => {
        currentStepIndex++;
        if (currentStepIndex < stepsOfCreateCafe.length) {
            showCurrentStep();
        } else {
            // Це резерв, якщо логіка в showCurrentStep не спрацює
            nextStepBtn.classList.add('hidden');
            closeGuideBtn.classList.remove('hidden');
        }
    });
}


// Обробник події для кнопки "Закрити гід"
if (closeGuideBtn) {
    closeGuideBtn.addEventListener('click', closeGuide);
}

if (guideModal) {
    guideModal.addEventListener('click', (event) => {
        if (event.target === guideModal) { // Перевіряємо, що клік був саме на оверлеї, а не на вмісті модалки
            closeGuide();
        }
    });
}

const settingsButton = document.querySelector(".setings_button"); // Змінено на селектор класу
const sideMenu = document.getElementById("sideMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// Створюємо елемент оверлею в JS
const sideMenuOverlay = document.createElement('div');
sideMenuOverlay.classList.add('side-menu-overlay');
document.body.appendChild(sideMenuOverlay);


function openSideMenu() {
    if (sideMenu) {
        sideMenu.classList.add("active");
        sideMenuOverlay.classList.add("active"); // Показуємо оверлей
    }
}

function closeSideMenu() {
    if (sideMenu) {
        sideMenu.classList.remove("active");
        sideMenuOverlay.classList.remove("active"); // Приховуємо оверлей
    }
}

// Додаємо слухачів подій
if (settingsButton) {
    settingsButton.addEventListener("click", openSideMenu);
}

if (closeMenuBtn) {
    closeMenuBtn.addEventListener("click", closeSideMenu);
}

// Додатково: Закриття меню при кліку поза ним (на оверлей)
if (sideMenuOverlay) {
    sideMenuOverlay.addEventListener("click", closeSideMenu);
}
// --- Кінець: Логіка для бічного меню ---

// --- Нова логіка для панелі контенту ---
const mainContentPanel = document.getElementById("mainContentPanel");
const closeContentPanelBtn = document.getElementById("closeContentPanelBtn");
const sideMenuLinks = document.querySelectorAll("#sideMenu ul li a"); // Всі посилання в бічному меню

// Отримуємо посилання на секції контенту
const bakeryNameContent = document.getElementById("bakeryNameContent");
const guidePanelContent = document.getElementById("guidePanelContent");

// Логіка для "Ім'я пекарні"
const bakeryNameInput = document.getElementById("bakeryNameInput");
const saveBakeryNameBtn = document.getElementById("saveBakeryNameBtn");
const nameCafeElement = document.getElementById("name_cafe"); // Отримуємо елемент для відображення імені пекарні

// Функція для завантаження імені пекарні з localStorage
function loadBakeryName() {
    const savedName = localStorage.getItem('bakeryName');
    if (savedName && nameCafeElement) {
        nameCafeElement.textContent = savedName;
        if (bakeryNameInput) {
            bakeryNameInput.value = savedName; // Також встановлюємо його у полі вводу, якщо воно є
        }
    } else if (nameCafeElement) {
        nameCafeElement.textContent = "Ваша Пекарня"; // Дефолтне ім'я, якщо нічого не збережено
    }
}

// Функція для збереження імені пекарні
if (saveBakeryNameBtn) {
    saveBakeryNameBtn.addEventListener('click', () => {
        const name = bakeryNameInput.value.trim();
        if (name) {
            localStorage.setItem('bakeryName', name); // Зберігаємо ім'я у localStorage
            if (nameCafeElement) {
                nameCafeElement.textContent = name; // Оновлюємо текст у name_cafe
            }
            alert(`Ім'я пекарні збережено: ${name}`);
            // Тут ви можете додати інші дії після збереження, наприклад, закрити панель
            closeContentPanel();
        } else {
            alert("Будь ласка, введіть ім'я пекарні.");
        }
    });
}

// Викликаємо завантаження імені при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadBakeryName);


// Функція для відкриття панелі контенту (залишається без змін)
function openContentPanel(contentId) {
    // ... ваш існуючий код openContentPanel ...
    if (!mainContentPanel) {
        console.error("Елемент #mainContentPanel не знайдено!");
        return;
    }

    document.querySelectorAll('.panel-section').forEach(section => {
        section.classList.add('hidden');
    });

    let targetContent;
    switch (contentId) {
        case 'bakeryName':
            targetContent = bakeryNameContent;
            break;
        case 'guideContent':
            targetContent = guidePanelContent;
            break;
        default:
            console.warn(`Невідомий contentId: ${contentId}.`);
            return;
    }

    if (targetContent) {
        targetContent.classList.remove('hidden');
    } else {
        console.error(`Секцію контенту для ID "${contentId}" не знайдено.`);
    }

    mainContentPanel.classList.add('active');
    closeSideMenu();
}

// Функція для закриття панелі контенту (залишається без змін)
function closeContentPanel() {
    if (mainContentPanel) {
        mainContentPanel.classList.remove('active');
    }
}

// Додаємо обробники кліків для посилань у бічному меню (залишається без змін)
sideMenuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const contentId = link.dataset.contentId;
        if (contentId) {
            openContentPanel(contentId);
        } else {
            closeSideMenu();
        }
    });
});

// Додаємо обробник для кнопки закриття панелі контенту (залишається без змін)
if (closeContentPanelBtn) {
    closeContentPanelBtn.addEventListener('click', closeContentPanel);
}

document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.add_plus');
    const closeButton = document.querySelector('.closebtn');
    const overlay = document.getElementById('fullscreen-overlay');

    // Функція відкриття оверлея
    function openNav() {
        overlay.style.width = '100%'; // Розширюємо на всю ширину екрану
        document.querySelector('.add_plus').style.zIndex = '0'; // Ховаємо кнопку під оверлей
    }

    // Функція закриття оверлея
    function closeNav() {
        overlay.style.width = '0%'; // Згортаємо ширину
        document.querySelector('.add_plus').style.zIndex = '2'; // Повертаємо кнопку наверх
    }

    // Прив'язка подій
    openButton.addEventListener('click', openNav);
    closeButton.addEventListener('click', closeNav);
});

