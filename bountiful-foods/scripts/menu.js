function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');

}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

const year = document.querySelector("#year");
let lastModified = document.querySelector("#lastModified");

//Display on the screen the date of the last time there was a modification.
lastModified.textContent = document.lastModified;

//Display on the screen the current year.
year.textContent = `${new Date().getFullYear()}`;

document.getElementById("facebook").onclick = function () {
    window.location.href = "https://wwww.facebook.com";
};

document.getElementById("instagram").onclick = function () {
    window.location.href = "https://www.instagram.com";
};

document.getElementById("twitter").onclick = function () {
    window.location.href = "https://twitter.com/";
};

document.getElementById("linkedin").onclick = function () {
    window.location.href = "https://linkedin.com/";
};

document.getElementById("logo").onclick = function () {
    window.location.href = "index.html";
};


