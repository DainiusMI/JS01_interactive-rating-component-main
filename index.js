
function voting() {
const score = document.activeElement.textContent;
document.getElementById("score").innerText = score;
}

function submit() {
    var score = document.getElementById("score").innerText;
    if (score > 0) {
        var ratingForm = document.getElementById("rating-form");
        ratingForm.classList.add("hide-form");
        var tankingForm = document.getElementById("thanking-form");
        tankingForm.classList.add("display-form");
    }
    else alert('Please vote before submiting');
 }