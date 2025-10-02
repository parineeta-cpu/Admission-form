
const submitBtn = document.querySelector(".submit-btn");
function submission(event){
    event.preventDefault();
const form = document.querySelector(".application-form");
const number = document.querySelector(".number");
if(number.length==10){
    alert("Please enter a valid mobile no");
}
}
submitBtn.addEventListener("click",submission);