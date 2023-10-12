//About content

const aboutBtn = document.querySelector(".about");
const aboutBtn2 = document.querySelector(".about-2");
const aboutPage = document.querySelector(".About-page");
const aboutHeading = document.querySelector(".about-h1");
const aboutHeading2 = document.querySelector(".about-content");
const aboutContainer = document.querySelector(".about-container");
const aboutPIC = document.querySelector(".my-pic");
//hero page content
const heroPage = document.querySelector(".hero-page");
const homeBtn = document.querySelector(".homeBtn");
const headerName = document.querySelector(".header-name");
const headerNav = document.querySelector(".header-nav");
//skills content
const skillpage = document.querySelector(".Skills-page");
const skillsHeading = document.querySelector(".skills-h1");
const skillBtn = document.querySelector(".skillsBtn");
const skillBtn2 = document.querySelector(".skillsBtn-2");
const skillContainer = document.querySelector(".skills-container");
//project page
const projBtn = document.querySelector(".Projects");
const projBtn2 = document.querySelector(".Projects-2");
const projPage = document.querySelector(".Project-page");
//contact page
const contactBtn = document.querySelector(".Contacts");
const contactBtn2 = document.querySelector(".Contacts-2");
const contactPage = document.querySelector(".Contact-page");

contactBtn.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    contactPage.style.left = "0%";
    projPage.style.left = "-100%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
});
contactBtn2.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    contactPage.style.left = "0%";
    projPage.style.left = "-100%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
});

projBtn.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    projPage.style.left = "0%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
    contactPage.style.left = "-100%";
});
projBtn2.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    projPage.style.left = "0%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
    contactPage.style.left = "-100%";
});

skillBtn2.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    skillpage.style.left = "0%";
    skillsHeading.style.left = "0%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
    projPage.style.left = "-100%";
    contactPage.style.left = "-100%";
});
skillBtn.addEventListener("click", () => {
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    skillpage.style.left = "0%";
    skillsHeading.style.left = "0%";
    heroPage.style.top = "-100%";
    aboutPage.style.left = "-100%";
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
    projPage.style.left = "-100%";
    contactPage.style.left = "-100%";
});
aboutBtn2.addEventListener("click", () => {
    aboutHeading.style.left = "0%";
    aboutContainer.style.left = "0%";
    heroPage.style.top = "-100%";
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    aboutPage.style.left = "0%";
    aboutPIC.style.left = "0%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    projPage.style.left = "-100%";
    contactPage.style.left = "-100%";
});
aboutBtn.addEventListener("click", () => {
    aboutHeading.style.left = "0%";
    aboutContainer.style.left = "0%";
    heroPage.style.top = "-100%";
    headerNav.style.right = "0%";
    headerName.style.left = "0%";
    aboutPage.style.left = "0%";
    aboutPIC.style.left = "0%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    projPage.style.left = "-100%";
    contactPage.style.left = "-100%";
});

homeBtn.addEventListener("click", function() {
    aboutHeading.style.left = "-100%";
    aboutContainer.style.left = "-100%";
    heroPage.style.top = "0%";
    headerNav.style.right = "-100%";
    headerName.style.left = "-100%";
    aboutPage.style.left = "-100%";
    skillpage.style.left = "-100%";
    skillsHeading.style.left = "-100%";
    projPage.style.left = "-100%";
    contactPage.style.left = "-100%";
});