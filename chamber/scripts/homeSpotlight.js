const newUrl = "./data.json";

companiesList = [];

async function getCompaniesInfo(url) {
    const response = await fetch(url)
    const data = await response.json();
    data["companies"].forEach(company => {
        if(company.membership == "gold" || company.membership == "silver"){
            companiesList.push(company); 
        }
    })

    for ( i = 0; i < 3; i++ ) {
        let randomIndex = Math.floor(Math.random() * companiesList.length);
        displayCompaniesInfo(companiesList[randomIndex]);
        companiesList.splice(randomIndex, 1);
    };
}


getCompaniesInfo(newUrl);



function displayCompaniesInfo(company){
    const article = document.createElement('article')
    article.setAttribute('class', 'display-companies');
    const div = document.querySelector('#spotlight');
    div.appendChild(article);
    const companyInfo = 
    `<p>${company.name}</p>
    <img src="${company.imageurl}" alt="Portait of ${company.name}" width="75px" />
    <p>📞${company.phone}</p>
    <p>📧${company.email}</p>`;
    article.innerHTML = companyInfo;    
}




