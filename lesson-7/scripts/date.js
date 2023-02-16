const year = document.querySelector('#year');
let lastModified = document.querySelector('#lastModified');

lastModified.textContent = document.lastModified;

year.textContent = `${new Date().getFullYear()}`;