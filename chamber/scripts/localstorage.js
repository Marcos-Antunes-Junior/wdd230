
const visit = document.querySelector('#number');
const lastVisit = document.querySelector('#number-days');
let today = new Date();
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0){
    visit.textContent = numVisits;
} else {
    visit.textContent = "This is your first visit!";
}

 numVisits++;

 localStorage.setItem("visits-ls", numVisits);


 let thisday = 84600000 / Date.now() ;
 lastVisit.textContent = thisday.toFixed(0);

