const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function(ev) {
let text = input.value;

if (text !==''){
    list.innerHTML += '<li>' + text + '<button onclick="Delete(this);">X</button></li>';
    input.value = '';
}

ev.preventDefault();
}, false);





function Delete(currentEl){
    currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
    }