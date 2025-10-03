const form = document.querySelector("#application-form");
const submitBtn = document.querySelector(".submit-btn");
form.addEventListener("submit",(e)=>{
 e.preventDefault();
   const nameInput= document.querySelector(".name");
   const dobInput=document.querySelector(".dob");
   const genderInput=document.querySelector("#gender");
   const adhaarNoInput=document.querySelector(".adhaarNo");
   const GuardianNameInput= document.querySelector(".guardianName");
   const occupationInput= document.querySelector(".occupation");
   const addressInput= document.querySelector(".address");
   const districtInput= document.querySelector(".district");
   const stateInput= document.querySelector(".state");
   const pincodeInput= document.querySelector(".pincode");
    const numberInput=document.querySelector(".mobileNo");
   const number2Input=document.querySelector(".number2");
   const emailInput=document.querySelector(".email");
   const studentImg=document.querySelector(".studentImg");
   const checkbox=document.querySelector(".checkbox");

   if(nameInput.value.length < 3){
    alert("Name must be atleat 3 characters long");
    return;
   }
   
    if(genderInput.value===""){
    alert("Please select your gender");
     return;
      
   }
   if(adhaarNoInput.value && !/^\d{12}$/.test(adhaarNoInput.value)){
    alert("please enter a valid Adhaar No");
    return;
   }
   if(GuardianNameInput.value.length < 3){
    alert("Guardian name must be atleat 3 characters long");
    return;
   }
   if(occupationInput.value===""){
    alert("Please enter your Occupation");
    return;
   }
   if(addressInput.value===""){
    alert("Please enter your Permanent Address");
    return;
   }
   if(districtInput.value===""){
    alert("Please enter your District");
    return;
   }
   if(stateInput.value===""){
    alert("Please enter your State");
    return;
   }
   if(pincodeInput.value.length!==6){
    alert("Please enter a valid pincode");
    return;
   }
   if(numberInput.value.length!==10){
    alert("Please enter a valid 10-digit number.")
     return;
    
   }
   if(number2Input.value.length!==10){
    alert("Please enter a valid 10-digit number.");
return;
  }else{
    if(number2Input.value===numberInput.value){
alert("Mobile No and Emergency No could't be same");
return;
}
  }   
   
   if(!emailInput.checkValidity()){
    alert("Please enter a valid email");
     return;
   }

   if(!studentImg.files[0]){
    alert("Please upload an image");
    return;
   }else{
   const img = new Image();
   img.src = URL.createObjectURL(studentImg.files[0]);
   img.onload = function(){
const width = img.width;
const height = img.height;

   if(width<200 || height<200 || width>2000 || height>2000){
    alert("Image Dimensions must be between 200*200 and 2000*2000");
    return;
   }
   else{
    if(studentImg.files[0].size > 200 * 1024){
      alert("Image size must be less than 200 KB");
      return;
    }
  
   }
   if(!checkbox.checked){
    alert("Please agree to all Terms&conditions");
     return;
   }
   else {
    alert("Form submitted successfully✔");
   }
  }
   console.log(studentImg.files[0])
   
    } }
);
