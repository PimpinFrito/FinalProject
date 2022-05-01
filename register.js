let first = document.getElementById("first");
let last = document.getElementById("last");
let response = document.getElementById("response");
const submit = document.getElementById("submit");

submit.addEventListener('click', validator);

function validator(){
    console.log(first.length)
    if (first.value.length < 2  || last.value.length < 2){
        response.textContent = 'Names must be more than 2 characters';
    }else{
        response.textContent = 'Registration submitted';
    }
}