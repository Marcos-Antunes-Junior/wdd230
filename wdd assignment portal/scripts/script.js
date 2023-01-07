const year = document.querySelector('#year');
let lastModified = document.querySelector('#lastModified');
let objectDate = new Date();


let day = objectDate.getDate();


let month = objectDate.getMonth();


let currentYear = objectDate.getFullYear();

let format1 = `${month}/${day}/${year}`;




lastModified.textContent = (document.lastModified);
year.textContent = `${new Date().getFullYear()}`;