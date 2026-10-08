const defaultData = {

    schedule: {
        monday: [
            { number: 1, name: "Математика", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Русский язык", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "Английский язык", teacher: "Учитель", time: "09:50–10:35" },
            { number: 4, name: "Физика", teacher: "Учитель", time: "10:45–11:30" },
            { number: 5, name: "История", teacher: "Учитель", time: "11:40–12:25" }
        ],

        tuesday: [
            { number: 1, name: "Английский язык", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Химия", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "Математика", teacher: "Учитель", time: "09:50–10:35" },
            { number: 4, name: "Информатика", teacher: "Учитель", time: "10:45–11:30" },
            { number: 5, name: "Литература", teacher: "Учитель", time: "11:40–12:25" }
        ],

        wednesday: [
            { number: 1, name: "Физика", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Математика", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "Биология", teacher: "Учитель", time: "09:50–10:35" },
            { number: 4, name: "Русский язык", teacher: "Учитель", time: "10:45–11:30" },
            { number: 5, name: "История", teacher: "Учитель", time: "11:40–12:25" }
        ],

        thursday: [
            { number: 1, name: "Математика", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Английский язык", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "География", teacher: "Учитель", time: "09:50–10:35" },
            { number: 4, name: "Химия", teacher: "Учитель", time: "10:45–11:30" },
            { number: 5, name: "Физкультура", teacher: "Учитель", time: "11:40–12:25" }
        ],

        friday: [
            { number: 1, name: "История", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Математика", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "Информатика", teacher: "Учитель", time: "09:50–10:35" },
            { number: 4, name: "Литература", teacher: "Учитель", time: "10:45–11:30" },
            { number: 5, name: "Английский язык", teacher: "Учитель", time: "11:40–12:25" }
        ],

        saturday: [
            { number: 1, name: "Английский язык", teacher: "Учитель", time: "08:00–08:45" },
            { number: 2, name: "Математика", teacher: "Учитель", time: "08:55–09:40" },
            { number: 3, name: "Обществознание", teacher: "Учитель", time: "09:50–10:35" }
        ]
    },

    news: [
        {
            title: "Добро пожаловать на сайт 9 «ДК»",
            text: "Теперь у нашего класса есть своё цифровое пространство.",
            date: "08.10.2026",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Наш учебный год",
            text: "Впереди много интересных событий.",
            date: "07.10.2026",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Вместе сильнее",
            text: "Наша команда продолжает развиваться.",
            date: "05.10.2026",
            image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=80"
        }
    ],

    gallery: [
        {
            title: "Наш класс",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Учёба",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Команда",
            image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Мероприятие",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Вместе",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80"
        }
    ],

    videos: [
        {
            title: "Наш класс",
            date: "08.10.2026",
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Наше мероприятие",
            date: "01.10.2026",
            image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80"
        },
        {
            title: "Школьная жизнь",
            date: "25.09.2026",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
        }
    ],

    events: [
        {
            day: "15",
            month: "ОКТ",
            title: "Классное мероприятие",
            text: "Встреча и общение всем классом."
        },
        {
            day: "25",
            month: "ОКТ",
            title: "Школьный праздник",
            text: "Участие нашего класса в школьном мероприятии."
        },
        {
            day: "05",
            month: "НОЯ",
            title: "Экскурсия",
            text: "Совместная поездка класса."
        }
    ],

    students: [
        "Ученик 1",
        "Ученик 2",
        "Ученик 3",
        "Ученик 4",
        "Ученик 5",
        "Ученик 6",
        "Ученик 7",
        "Ученик 8",
        "Ученик 9",
        "Ученик 10"
    ],

    achievements: [
        {
            icon: "🏆",
            title: "Победы",
            text: "Наш класс участвует в школьных и городских соревнованиях."
        },
        {
            icon: "🥇",
            title: "Олимпиады",
            text: "Ученики класса принимают участие в олимпиадах."
        },
        {
            icon: "⭐",
            title: "Активность",
            text: "Мы участвуем в жизни школы и различных мероприятиях."
        }
    ]
};


let data = JSON.parse(localStorage.getItem("class9dk")) || defaultData;


/* CLOCK */

function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}`;

    document.getElementById("currentDate").textContent =
        now.toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "short"
        });

}

setInterval(updateClock, 1000);
updateClock();


/* SCHEDULE */

const dayNames = {
    monday: "Понедельник",
    tuesday: "Вторник",
    wednesday: "Среда",
    thursday: "Четверг",
    friday: "Пятница",
    saturday: "Суббота"
};


function renderSchedule(day = "monday") {

    const list = document.getElementById("scheduleList");

    const lessons = data.schedule[day] || [];

    if (!lessons.length) {
        list.innerHTML = `
            <div class="empty">
                На этот день уроков нет.
            </div>
        `;
        return;
    }

    list.innerHTML = lessons.map(lesson => `
        <div class="lesson">

            <div class="lesson-number">
                УРОК ${lesson.number}
            </div>

            <div>
                <div class="lesson-name">
                    ${lesson.name}
                </div>

                <div class="lesson-teacher">
                    ${lesson.teacher}
                </div>
            </div>

            <div class="lesson-time">
                ${lesson.time}
            </div>

        </div>
    `).join("");

}


document.querySelectorAll(".day-btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".day-btn")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderSchedule(button.dataset.day);

    });

});


renderSchedule();


/* NEWS */

function renderNews() {

    const container = document.getElementById("newsGrid");

    container.innerHTML = data.news.map(news => `
        <article class="news-card">

            <div
                class="news-image"
                style="background-image:url('${news.image}')"
            ></div>

            <div class="news-overlay">

                <div class="news-date">
                    ${news.date}
                </div>

                <div class="news-title">
                    ${news.title}
                </div>

                <div class="news-text">
                    ${news.text}
                </div>

            </div>

        </article>
    `).join("");

}


renderNews();


/* GALLERY */

function renderGallery() {

    const container = document.getElementById("galleryGrid");

    container.innerHTML = data.gallery.map(photo => `
        <div class="gallery-item">

            <img
                src="${photo.image}"
                alt="${photo.title}"
                loading="lazy"
            >

            <div class="gallery-caption">
                ${photo.title}
            </div>

        </div>
    `).join("");

}


renderGallery();


/* VIDEOS */

function renderVideos() {

    const container = document.getElementById("videoGrid");

    container.innerHTML = data.videos.map(video => `
        <article class="video-card">

            <div
                class="video-thumb"
                style="background-image:url('${video.image}')"
            >

                <div class="play">
                    ▶
                </div>

            </div>

            <div class="video-info">

                <strong>${video.title}</strong>

                <span>${video.date}</span>

            </div>

        </article>
    `).join("");

}


renderVideos();


/* EVENTS */

function renderEvents() {

    const container = document.getElementById("eventsGrid");

    container.innerHTML = data.events.map(event => `
        <article class="event-card">

            <div class="event-date">
                <div>
                    <strong>${event.day}</strong>
                    <span>${event.month}</span>
                </div>
            </div>

            <h3>${event.title}</h3>

            <p>${event.text}</p>

        </article>
    `).join("");

}


renderEvents();


/* STUDENTS */

function renderStudents() {

    const container = document.getElementById("studentsList");

    container.innerHTML = data.students.map(name => {

        const initials = name
            .split(" ")
            .map(word => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();

        return `
            <div class="student">

                <div class="student-avatar">
                    ${initials}
                </div>

                <div class="student-name">
                    ${name}
                </div>

            </div>
        `;

    }).join("");

    document.getElementById("studentTotal").textContent =
        data.students.length;

    document.getElementById("studentsCount").textContent =
        data.students.length;

}


renderStudents();


/* ACHIEVEMENTS */

function renderAchievements() {

    const container = document.getElementById("achievementsGrid");

    container.innerHTML = data.achievements.map(item => `
        <article class="achievement">

            <div class="achievement-icon">
                ${item.icon}
            </div>

            <h3>${item.title}</h3>

            <p>${item.text}</p>

        </article>
    `).join("");

    document.getElementById("achievementsCount").textContent =
        data.achievements.length;

}


renderAchievements();


/* STATS */

document.getElementById("lessonsCount").textContent =
    Object.values(data.schedule)
        .reduce((total, day) => total + day.length, 0);

document.getElementById("photosCount").textContent =
    data.gallery.length;


/* TODAY */

function setToday() {

    const day = new Date().getDay();

    const map = {
        1: "monday",
        2: "tuesday",
        3: "wednesday",
        4: "thursday",
        5: "friday",
        6: "saturday"
    };

    if (!map[day]) return;

    const target = document.querySelector(
        `[data-day="${map[day]}"]`
    );

    if (target) {

        document.querySelectorAll(".day-btn")
            .forEach(btn => btn.classList.remove("active"));

        target.classList.add("active");

        renderSchedule(map[day]);

        document.getElementById("todayName").textContent =
            dayNames[map[day]];
    }

}

setToday();


/* THEME */

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark")
            ? "dark"
            : "light"
    );

});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


/* LANGUAGE */

const languages = ["RU", "UZ", "EN"];

let currentLanguage =
    localStorage.getItem("language") || "RU";

document.getElementById("languageBtn").textContent =
    currentLanguage;

document.getElementById("languageBtn").addEventListener("click", () => {

    const index = languages.indexOf(currentLanguage);

    currentLanguage =
        languages[(index + 1) % languages.length];

    localStorage.setItem("language", currentLanguage);

    document.getElementById("languageBtn").textContent =
        currentLanguage;

    translatePage();

});


const translations = {

    RU: {
        navHome: "Главная",
        navSchedule: "Расписание",
        navNews: "Новости",
        navGallery: "Фото",
        navVideos: "Видео",
        navEvents: "Мероприятия",
        navClass: "Класс"
    },

    UZ: {
        navHome: "Bosh sahifa",
        navSchedule: "Dars jadvali",
        navNews: "Yangiliklar",
        navGallery: "Rasmlar",
        navVideos: "Videolar",
        navEvents: "Tadbirlar",
        navClass: "Sinf"
    },

    EN: {
        navHome: "Home",
        navSchedule: "Schedule",
        navNews: "News",
        navGallery: "Photos",
        navVideos: "Videos",
        navEvents: "Events",
        navClass: "Class"
    }

};


function translatePage() {

    const language = translations[currentLanguage];

    document.querySelectorAll("[data-lang]").forEach(element => {

        const key = element.dataset.lang;

        if (language[key]) {
            element.textContent = language[key];
        }

    });

}

translatePage();


/* TOAST */

function showToast(message, icon = "✓") {

    const toast = document.getElementById("toast");
    const text = document.getElementById("toastText");
    const toastIcon = document.getElementById("toastIcon");

    text.textContent = message;
    toastIcon.textContent = icon;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

}


/* LOCAL DATA UPDATE */

window.updateClassData = function(newData) {

    data = {
        ...data,
        ...newData
    };

    localStorage.setItem(
        "class9dk",
        JSON.stringify(data)
    );

    renderNews();
    renderGallery();
    renderVideos();
    renderEvents();
    renderStudents();
    renderAchievements();

    showToast("Данные обновлены");

};


/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 700);

});