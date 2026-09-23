const translations = {
  en: { home:"Home", courses:"Courses", blog:"Blog", coursesLabel:"COURSES" },
  vi: { home:"Trang chủ", courses:"Khóa học", blog:"Blog", coursesLabel:"KHÓA HỌC" }
};

const root = document.documentElement;
const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

let language = localStorage.getItem("site-language") || "en";
let theme = localStorage.getItem("site-theme") || "dark";

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[language][el.dataset.i18n] || "";
  });
  // Shows the language you can switch to.
  languageToggle.textContent = language === "en" ? "VI" : "EN";
  localStorage.setItem("site-language", language);
}

function applyTheme() {
  root.classList.toggle("light", theme === "light");
  themeIcon.textContent = theme === "light" ? "☀" : "☾";
  themeText.textContent = theme;
  localStorage.setItem("site-theme", theme);
}

languageToggle.addEventListener("click", () => {
  language = language === "en" ? "vi" : "en";
  applyLanguage();
});

themeToggle.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  applyTheme();
});

applyLanguage();
applyTheme();
