const url = "./data.json"

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
  
  }
  
  getCompaniesData(url);



  const displayCompanies = (companies) => {
    const cards = document.querySelector('main div'); 
  
    companies.forEach((company) => {
    
        let card = document.createElement('div');
        card.setAttribute("class", "directory-section");
        let name = document.createElement('h2');
        let portrait = document.createElement('img');
        let phone = document.createElement('h4');
        let address = document.createElement('h4');
        let email = document.createElement('h4');
        


     
     name.textContent = company.name;
     phone.textContent = `📞${company.phone}`;
     address.textContent = `📍${company.address}`;
     email.textContent = `📧${company.email}`;


      portrait.setAttribute('src', company.imageurl);
      portrait.setAttribute('alt', `Portait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');
  

      card.appendChild(name);
      card.appendChild(portrait);
      card.appendChild(phone);
      card.appendChild(address);
      card.appendChild(email);
      cards.appendChild(card);

      const gridbutton = document.querySelector("#grid");
      
      
      const listbutton = document.querySelector("#list");

      gridbutton.addEventListener("click", () => {
        // example using arrow function
        cards.classList.add("cards");
        cards.classList.remove("list");
    });

    listbutton.addEventListener("click", () => {
        // example using arrow function
        cards.classList.add("list");
        cards.classList.remove("cards");

    });


    }) 
  } 


