//This function will count the characters of the textarea.

function countText() {
    let text = document.form_main.text.value;
    document.querySelector('#character').innerText = text.length;
  }

//This function will select the radio and check if it is marked (checked).
//Then, it will display the benefits according to the membership level.
const article = document.createElement('article');
const price = document.createElement('h4');
const benefit1 = document.createElement('h4');
const benefit2 = document.createElement('h4');
const benefit3 = document.createElement('h4');
const benefit4 = document.createElement('h4');
const messageID = document.querySelector('#message');


  function display(){
    let checkRadio = document.querySelector('input[name="membership"]:checked');

    if(checkRadio != null & checkRadio.value === "np"){
      messageID.innerHTML="Benefits:";
      price.innerHTML = "- Free"
      benefit1.innerHTML = "- Trainings"
      benefit2.innerHTML = "- 10% event discounts"
      article.append(price);
      article.append(benefit1);
      article.append(benefit2);
      messageID.append(article);
      article.removeChild(benefit3);
      article.removeChild(benefit4);

      

    }else if(checkRadio != null & checkRadio.value == "bronze"){
      messageID.innerHTML="Benefits:";
      price.innerHTML = "- $20 per month"
      benefit1.innerHTML = "- Trainings"
      benefit2.innerHTML = "- 20% event discounts"
      benefit3.innerHTML = "- Sponsorships"
      article.append(price);
      article.append(benefit1);
      article.append(benefit2);
      article.append(benefit3);
      messageID.append(article);
      article.removeChild(benefit4);

    }else if(checkRadio != null & checkRadio.value == "silver"){
      messageID.innerHTML="Benefits:";
      price.innerHTML = "- $30 per month"
      benefit1.innerHTML = "- Trainings"
      benefit2.innerHTML = "- 30% event discounts"
      benefit3.innerHTML = "- Sponsorships"
      article.append(price);
      article.append(benefit1);
      article.append(benefit2);
      article.append(benefit3);
      messageID.append(article);
      article.removeChild(benefit4);
    }else if(checkRadio != null & checkRadio.value == "gold"){
      messageID.innerHTML="Benefits:";
      price.innerHTML = "- $40 per month"
      benefit1.innerHTML = "- Trainings and consultancy"
      benefit2.innerHTML = "- 40% event discounts"
      benefit3.innerHTML = "- Sponsorships"
      benefit4.innerHTML = "- Advertising"
      article.append(price);
      article.append(benefit1);
      article.append(benefit2);
      article.append(benefit3);
      article.append(benefit4);
      messageID.append(article);
    
    }

  
   

  }