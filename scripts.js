const experience =
document.querySelector(
".experience"
);

const fill =
document.getElementById(
"fill"
);

const cards =
[
...document.querySelectorAll(
".card"
)
];

const hero =
document.querySelector(
".hero"
);

const skillsSection =
document.querySelector(
".skills"
);

const skillFills =
[
...document.querySelectorAll(
".skill .fill"
)
];

const languageButtons =
[
...document.querySelectorAll(
".lang-btn"
)
];

const themeToggle =
document.getElementById(
"theme-toggle"
);

const cvDownloadLink =
document.getElementById(
"cv-download"
);

const translatableElements =
[
...document.querySelectorAll(
"[data-i18n]"
)
];

const contactMap =
document.getElementById(
"contact-map"
);

const clamp =
(value, min, max) =>
Math.max(min, Math.min(max, value));

const IMAGE_PARALLAX_STRENGTH = 100;

const TEXT_PARALLAX_STRENGTH = 24;

const TEXT_DEADZONE = 0.4;

const TEXT_REVEAL_TOP_RATIO = 0.56;

const TEXT_REVEAL_BOTTOM_RATIO = 0.18;

const englishTranslations = {};

translatableElements.forEach(element=>{
englishTranslations[
element.dataset.i18n
] = element.textContent.trim();
});

const danishTranslations = {
"page-title":"Frederik Rokkjær Strebøl — Embedded Firmware Udvikler",
"hero-title":"Embedded Firmware Udvikler",
"hero-subtitle":"Firmware • IoT • Produktionssystemer • Cloud integration",
"hero-view-experience":"Se erfaring",
"hero-get-cv":"Hent CV",
"hero-linkedin":"LinkedIn profil",
"about-heading":"Ingeniørarbejde der bliver til virkelighed",
"about-intro":"Embedded systemer med ejerskab fra firmware til produktionsværktøjer og cloud integration.",
"about-detail":"Jeg er embedded firmwareudvikler med en passion for at bygge komplette løsninger fra lavniveau firmware og IoT-systemer til produktionsværktøjer og cloud integration. Jeg lever efter princippet om, at det bedste arbejde kommer af at lægge hjerte i detaljerne, søge sparring når det er nødvendigt og bygge stærke relationer med menneskerne omkring mig.",
"experience-label":"Erfaring",
"exp1-role":"Embedded Firmware Udvikler",
"exp1-date":"Feb. 2022 — Nu",
"exp1-desc":"Jeg har i samarbejde med kunder udviklet produkter til industrien og andre virksomheder. Mit hovedprodukt er en intelligent rottefælde, der via internettet sender information om det udførte aflivninger, hvorefter kunden kan sende notifikationer til deres slutbrugere. Arbejdet har bestået af cirka 70% firmwareudvikling og 30% softwareudvikling, herunder produktionsværktøjer, remote firmware-opdatering, backend-servere og et labelprinterprogram.",
"exp2-role":"Praktikant — Produktudvikling",
"exp2-date":"Feb. 2020 — Jul. 2020",
"exp2-desc":"Udviklede en funktionel prototype til avanceret overvågning for borgere med demens i hjemmeplejen. Arbejdet var med til at danne grundlag for, at virksomheden oprettede en dedikeret elektronikudviklingsafdeling.",
"exp2-tag-product":"Produktudvikling",
"exp2-tag-prototype":"Prototypeudvikling",
"exp2-tag-embedded":"Embedded systemer",
"exp3-role":"Hjælpelærer og studenterrepræsentant",
"exp3-date":"Sep. 2021 — Nov. 2021",
"exp3-desc":"Hjalp første- og andensemesterstuderende i studiecaféen for Elektronik, Software, Elektrisk Energiteknologi og Sundhedsteknologi. Deltog samtidig i akademisk råd for at repræsentere de studerendes behov.",
"exp3-tag-education":"Undervisning",
"exp3-tag-mentoring":"Vejledning",
"exp3-tag-leadership":"Lederskab",
"skills-label":"Kompetencer",
"skills-core-languages":"Kernesprog",
"skills-embedded":"Embedded og mikrocontrollere",
"skills-devops":"DevOps og infrastruktur",
"skills-strengths":"Tekniske styrker",
"skills-soft":"Styrker",
"soft-passionate":"Passioneret",
"soft-responsible":"Pligtopfyldende",
"soft-ambitious":"ambitiøs",
"soft-fast-learner":"Klæbehjerne",
"soft-collaborative":"Samarbejdende",
"soft-results":"Resultatorienteret",
"soft-flexible":"Fleksibel",
"soft-customer":"Kundeminded",
"skills-languages":"Sprog",
"lang-danish":"Dansk",
"lang-english":"Engelsk",
"about2-heading":"Lidt om mig",
"about2-p1":"Jeg bor i Høll sammen med min kone Louise og vores datter Vilde samt vores hund. Jeg befinder mig et sted i livet, hvor jeg søger nye udfordringer, både fagligt og privat.",
"about2-p2":"Jeg har altid haft stor stolthed i at levere et grundigt og veludført stykke arbejde. Gennem vedholdenhed og engagement har jeg opnået mine resultater, og jeg trives med at tage fat, også når tingene bliver komplekse.",
"about2-p3":"Jeg ser det som en styrke, at jeg ikke tøver med at søge sparring, når opgaven kræver det, og jeg sætter stor pris på et stærkt kollegialt fællesskab med godt humør og en konstruktiv tilgang.",
"contact-heading":"Kontakt",
"linkedin-label":"LinkedIn",
"location-label":"📍 Høll, Danmark",
"map-heading":"Find mig på kortet",
"map-open":"Åbn i OpenStreetMap"
};

const translations = {
en:englishTranslations,
da:danishTranslations
};

const cvByLanguage = {
da:{
href:"CVs/CV_Dansk.pdf",
fileName:"Frederik_Rokkjaer_Streboel_CV_DA.pdf"
},
en:{
href:"CVs/CV_English.pdf",
fileName:"Frederik_Rokkjaer_Streboel_CV_EN.pdf"
}
};

function initContactMap(){

if(
!contactMap
){
return;
}

const latitude = 55.63587;
const longitude = 9.740399;

if(
typeof L === "undefined"
){
contactMap.innerHTML =
"<iframe title=\"Location map\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\" src=\"https://www.openstreetmap.org/export/embed.html?bbox=9.620399%2C55.55587%2C9.860399%2C55.71587&layer=mapnik&marker=55.63587%2C9.740399\"></iframe>";
return;
}

const map = L.map(contactMap, {
zoomControl:true,
scrollWheelZoom:false
}).setView([latitude, longitude], 12);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom:19,
attribution:"&copy; OpenStreetMap contributors"
}
).addTo(map);

L.marker([latitude, longitude]).addTo(map);

setTimeout(()=>{
map.invalidateSize();
}, 150);

}

function applyTheme(theme){

const selectedTheme =
theme === "light"
?
"light"
:
"dark";

document.body.classList.toggle(
"light-theme",
selectedTheme === "light"
);

if(
themeToggle
){
themeToggle.textContent =
selectedTheme === "light"
?
"Dark"
:
"Light";

themeToggle.setAttribute(
"aria-label",
selectedTheme === "light"
?
"Switch to dark mode"
:
"Switch to light mode"
);
}

try {
localStorage.setItem(
"preferred-theme",
selectedTheme
);
} catch (error) {
// Ignore storage errors in restricted browsing modes.
}

}

function applyLanguage(lang){

const selectedLanguage =
translations[lang]
?
lang
:
"en";

translatableElements.forEach(element=>{

const key =
element.dataset.i18n;

const text =
translations[selectedLanguage][key]
??
englishTranslations[key];

if(
typeof text === "string"
){
element.textContent = text;
}

});

document.documentElement.lang =
selectedLanguage;

if(
cvDownloadLink
){
const cvConfig =
cvByLanguage[selectedLanguage]
||
cvByLanguage.en;

cvDownloadLink.href =
cvConfig.href;

cvDownloadLink.setAttribute(
"download",
cvConfig.fileName
);
}

languageButtons.forEach(button=>{
button.classList.toggle(
"active",
button.dataset.lang === selectedLanguage
);
});

try {
localStorage.setItem(
"preferred-language",
selectedLanguage
);
} catch (error) {
// Ignore storage errors in restricted browsing modes.
}

}

languageButtons.forEach(button=>{
button.addEventListener("click", ()=>{
applyLanguage(button.dataset.lang);
});
});

let preferredLanguage = null;

try {
preferredLanguage =
localStorage.getItem(
"preferred-language"
);
} catch (error) {
preferredLanguage = null;
}

applyLanguage(preferredLanguage || "en");

if(
themeToggle
){

themeToggle.addEventListener("click", ()=>{
const useLightTheme =
!document.body.classList.contains(
"light-theme"
);

applyTheme(
useLightTheme
?
"light"
:
"dark"
);
});

}

let preferredTheme = null;

try {
preferredTheme =
localStorage.getItem(
"preferred-theme"
);
} catch (error) {
preferredTheme = null;
}

applyTheme(preferredTheme || "dark");

initContactMap();

if(
skillsSection
&&
skillFills.length
){

skillFills.forEach((bar, index)=>{
bar.style.setProperty(
"--skill-delay",
`${index * 0.08}s`
);
});

if(
"IntersectionObserver"
in
window
){

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{
if(
entry.isIntersecting
){
skillsSection.classList.add("in-view");
observer.disconnect();
}
});

}, {
threshold:0.35
});

observer.observe(skillsSection);

} else {

skillsSection.classList.add("in-view");

}

}


function animate(){

if(
hero
){

const heroRect =
hero.getBoundingClientRect();

document.body.classList.toggle(
"scrolled",
heroRect.bottom <= 0
);

}

if(
experience
&&
fill
){

const rect =
experience.getBoundingClientRect();

const total =
experience.offsetHeight
-
window.innerHeight;

const progress =
total > 0
?
clamp(
-rect.top/total,
0,
1
)
:
0;

fill.style.width =
`${progress*100}%`;

}

cards.forEach(card=>{

const r =
card.getBoundingClientRect();

card.classList.toggle(

"visible",

r.top
<
window.innerHeight*0.75

);

card.classList.toggle(
"text-in-front",
r.top < window.innerHeight*TEXT_REVEAL_TOP_RATIO
&&
r.bottom > window.innerHeight*TEXT_REVEAL_BOTTOM_RATIO
);

const viewportCenter =
window.innerHeight/2;

const cardCenter =
r.top + (r.height/2);

const normalized =
clamp(
(cardCenter - viewportCenter)
/
window.innerHeight,
-1,
1
);

const imageShift =
normalized * -IMAGE_PARALLAX_STRENGTH;

const textProgress =
Math.abs(normalized)
>
TEXT_DEADZONE
?
(Math.abs(normalized) - TEXT_DEADZONE)
/
(1 - TEXT_DEADZONE)
:
0;

const textShift =
Math.sign(normalized)
*
textProgress
*
TEXT_PARALLAX_STRENGTH;

card.style.setProperty(
"--image-shift",
`${imageShift}px`
);

card.style.setProperty(
"--text-shift",
`${textShift}px`
);

card.style.setProperty(
"--image-opacity",
`${clamp(0.55 + (1 - Math.abs(normalized))*0.45, 0.5, 1)}`
);

});

requestAnimationFrame(
animate
);

}

animate();