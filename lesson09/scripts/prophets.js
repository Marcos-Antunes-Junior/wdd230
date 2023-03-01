

const year = document.querySelector('#year');
let lastModified = document.querySelector('#lastModified');

lastModified.textContent = document.lastModified;

year.textContent = `${new Date().getFullYear()}`;

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
  getProphetData();


const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); 
  
    prophets.forEach((prophet) => {
    
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birth = document.createElement('h4');
      let place = document.createElement('h4');
      let children = document.createElement('h4');
      let div = document.createElement('div');
      let years = document.createElement('h4');
      let death = document.createElement('h4');
      let convertBirthDate = Date.parse(prophet.birthdate);
      let convertDeathDate = Date.parse(prophet.death);
      let convertedAge = convertDeathDate - convertBirthDate;
      let checkAge = Math.floor(convertedAge / 31536000000);
      let age = document.createElement('h4');


  
     
      if(prophet.order == '1'){
        h2.textContent = `${prophet.name} ${prophet.lastname} ${prophet.order}st Latter-day President`;
      }else if(prophet.order == '2'){
        h2.textContent = `${prophet.name} ${prophet.lastname} ${prophet.order}nd Latter-day President`;
      }else if(prophet.order == '3'){
        h2.textContent = `${prophet.name} ${prophet.lastname} ${prophet.order}rd Latter-day President`;
      }else{
        h2.textContent = `${prophet.name} ${prophet.lastname} ${prophet.order}th Latter-day President`;
      }
     
      birth.textContent = `Birth: ${prophet.birthdate}`;
      place.textContent = `Place: ${prophet.birthplace}`;
      children.textContent = `Children: ${prophet.numofchildren}`;
      years.textContent = `Prophet Years: ${prophet.length}`;
      
      if(prophet.death != null){
      death.textContent = `Death: ${prophet.death}`;
      }

      if(prophet.death != null){
        age.textContent = `Age: ${checkAge}`;
      }else{
        age.textContent = `Age: 98`
      }
      
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      card.appendChild(h2);
      div.appendChild(birth);
      div.appendChild(place);
      div.appendChild(children);
      div.appendChild(years);
      div.appendChild(death);
      div.appendChild(age);
      card.appendChild(div);
      card.appendChild(portrait);
      cards.appendChild(card);
    }) 
  } 



  