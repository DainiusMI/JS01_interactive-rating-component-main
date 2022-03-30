
function voting() {
let score = document.activeElement.textContent;
document.getElementById("score").innerText = score;
//document.getElementsByClassName("voting-score").innerText = score;
}

const buttonSubmit = document.getElementsByClassName("submit");
const votingForm = document.getElementsByClassName("rating-form");
const  thankingForm = document.getElementsByClassName("thanking-form");


buttonSubmit.addEventListener("click", switchForms());

function switchForms() {

    votingForm.classList.add('hide-form');

    thankingForm.classList.add('display-form');
}