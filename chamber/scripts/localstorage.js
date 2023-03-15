
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


 window.onload = function() {
    var lastSeen = localStorage.getItem("lastSeen");
    if (lastSeen) {
        lastVisit.textContent = lastSeen
    } else {
        lastVisit.textContent = "This is your first visit!";
    }
    localStorage.setItem("lastSeen", new Date());
};
