const fruitUrl = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitData() {
    const response = await fetch(fruitUrl);
    const data = await response.json();
    console.log(data);
    displayFruits(data);

  }
  
  getFruitData();


  let carbohydratesList = [0]
  let proteinList = [0]
  let fatList = [0]
  let sugarList = [0]
  let caloriesList = [0] 


  function countText() {
    let text = document.form_main.text.value;
    document.querySelector('#character').innerText = text.length;
  }

  const displayFruits = (fruits) => {

    
    const select = document.querySelector('.fruits');
    const select1 = document.querySelector('.fruits1');
    const select2 = document.querySelector('.fruits2');
    const option = document.createElement('option'); 
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option.innerHTML = "Select fruit";
    option1.innerHTML = "Select fruit";
    option2.innerHTML = "Select fruit";
    select.append(option);
    select1.append(option1);
    select2.append(option2);
  
    fruits.forEach((fruit) => {
       let option1 = document.createElement('option');
       let option2 = document.createElement('option');
       let option3 = document.createElement('option');
       option1.innerHTML = fruit.name;
       option2.innerHTML = fruit.name;
       option3.innerHTML = fruit.name;
       select.append(option1);
       select1.append(option2);
       select2.append(option3); 
       
       carbohydratesList.push(fruit.nutritions.carbohydrates);
       proteinList.push(fruit.nutritions.protein);
       fatList.push(fruit.nutritions.fat);
       sugarList.push(fruit.nutritions.sugar);
       caloriesList.push(fruit.nutritions.calories);

    }) 
  } 



 function getInputValue(){
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const selectNew = document.querySelector('.fruits');
    const selectNew1 = document.querySelector('.fruits1');
    const selectNew2 = document.querySelector('.fruits2');
    let inputName = document.getElementById("name").value;
    let inputNumber = document.getElementById("phone").value;
    let inputEmail = document.getElementById("email").value;
    let inputObs = document.getElementById("text").value;
    let selectFruit = selectNew.value;
    let selectFruit1 = selectNew1.value;
    let selectFruit2 = selectNew2.value;
    let div = document.createElement('div');
    div.setAttribute('class', 'fruit-list')
    let order = document.querySelector("#order-data");
    let pElement = document.createElement('p');
    let pElement1 = document.createElement('p');
    let pElement2 = document.createElement('p');
    let pElement3 = document.createElement('p');
    let pElement4 = document.createElement('p');
    let pElement5 = document.createElement('p');
    let pElement6 = document.createElement('p');
    let pElement7 = document.createElement('p');
    let pElement8 = document.createElement('p');
    let pElement9 = document.createElement('p');
    let pElement10 = document.createElement('p');
    let pElement11 = document.createElement('p');
    let pElement12 = document.createElement('p');
    order.append(div);
    div.append(pElement7);
    div.append(pElement);
    div.append(pElement1);
    div.append(pElement2);
    div.append(pElement3);
    div.append(pElement4);
    div.append(pElement5);
    div.append(pElement6);
    div.append(pElement8);
    div.append(pElement9);
    div.append(pElement10);
    div.append(pElement11);
    div.append(pElement12);
    pElement7.innerHTML = `<strong>Date: ${fulldate}</strong>`;
    pElement.innerHTML = `<strong>Name: ${inputName}</strong>`;
    pElement1.innerHTML = `<strong>Phone: ${inputNumber}</strong>`;
    pElement2.innerHTML = `<strong>Email: ${inputEmail}</strong>`;
    pElement3.innerHTML = `<strong>Observation: ${inputObs}</strong>`;
    pElement4.innerHTML = `<strong>Fruit 1 selected: ${selectFruit}</strong>`;
    pElement5.innerHTML = `<strong>Fruit 2 selected: ${selectFruit1}</strong>`;
    pElement6.innerHTML = `<strong>Fruit 3 selected: ${selectFruit2}</strong>`;
    let fruitIndex = document.querySelector('.fruits').selectedIndex;
    let fruitIndex1 = document.querySelector('.fruits').selectedIndex;
    let fruitIndex2 = document.querySelector('.fruits').selectedIndex;
    let carb1 = carbohydratesList[fruitIndex];
    let protein1 = proteinList[fruitIndex];
    let fat1 = fatList[fruitIndex];
    let sugar1 = sugarList[fruitIndex];
    let calories1 = caloriesList[fruitIndex];
    let carb2 = carbohydratesList[fruitIndex1];
    let protein2 = proteinList[fruitIndex1];
    let fat2 = fatList[fruitIndex1];
    let sugar2 = sugarList[fruitIndex1];
    let calories2 = caloriesList[fruitIndex1];
    let carb3 = carbohydratesList[fruitIndex2];
    let protein3 = proteinList[fruitIndex2];
    let fat3 = fatList[fruitIndex2];
    let sugar3 = sugarList[fruitIndex2];
    let calories3 = caloriesList[fruitIndex2];
    let totalCarb = carb1 + carb2 + carb3;
    let totalProtein = protein1 + protein2 + protein3;
    let totalFat = fat1 + fat2 + fat3;
    let totalSugar = sugar1 + sugar2 + sugar3;
    let totalCalories = calories1 + calories2 + calories3;
    pElement8.innerHTML = `<strong>Carbohydrates: ${Math.round(totalCarb)}</strong>`;
    pElement9.innerHTML = `<strong>Protein: ${totalProtein}</strong>`;
    pElement10.innerHTML = `<strong>Fat: ${Math.round(totalFat)}</strong>`;
    pElement11.innerHTML = `<strong>Sugar: ${Math.round(totalSugar)}</strong>`;
    pElement12.innerHTML = `<strong>Calories: ${Math.round(totalCalories)}</strong>`;

    let look = "Please scroll down the page to see your order information";
    alert(look);

 }