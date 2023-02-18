

const year = document.querySelector("#year");
let lastModified = document.querySelector("#lastModified");

//Display on the screen the date of the last time there was a modification.
lastModified.textContent = document.lastModified;

//Display on the screen the current year.
year.textContent = `${new Date().getFullYear()}`;

const datefield = document.querySelector(".Currentdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

const menuButton = document.querySelector('#menuButton');

menuButton.addEventListener('click', function() {
    toggleMenu();
});


function toggleMenu() {
    const navElement = document.querySelector('#primaryNav');
    navElement.classList.toggle('open');
    document.querySelector('#menuButton').classList.toggle("open");
}

const p = document.createElement('p');

const event1 = document.querySelector('#event');
const image = document.createElement('img');
const myPicture = "planner.png";
event1.append(image);
event1.append(p);




const d = new Date();

if (d.getDay() >= 1 && d.getDay() <= 2){
image.setAttribute("src", "images/" + myPicture);
const weekMessage = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
p.innerHTML = weekMessage;
}else{
 const weekAnotherMessage = "New events coming soon."
 p.innerHTML = weekAnotherMessage;
}



 
        
 


