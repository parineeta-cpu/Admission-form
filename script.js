const form = document.querySelector("#application-form");
const submitBtn = document.querySelector(".submit-btn");
form.addEventListener("submit",(e)=>{
 e.preventDefault();
   const nameInput= document.querySelector(".name");
   
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
   const result=document.querySelector(".edu-marks");

   if(nameInput.value.length < 3){
    const error1 = document.querySelector(".error1");
    error1.innerText="Name must be atleast 3 characters long.";
    return;
   }
  
    const today = new Date();
    const dobInput=document.querySelector(".dob").value;
    const dob = new Date(dobInput);
    let age = today.getFullYear()-dob.getFullYear();
    const m = today.getMonth()-dob.getMonth();
    if(m<0||(m===0&&today.getDate()<dob.getDate())){
      age--;
    }
    if(age<10||age>80){
      const error2 = document.querySelector(".error2");
    error2.innerText="Age should be between 10-80.";
      return;
    }
   

   if(adhaarNoInput.value && !/^\d{12}$/.test(adhaarNoInput.value)){
    const error3 = document.querySelector(".error3");
    error3.innerText="Please enter a valid Adhaar No.";
    
    return;
   }
   if(GuardianNameInput.value.length < 3){
    const error4 = document.querySelector(".error4");
    error4.innerText="Guardian name must be atleast 3 characters long.";
    
    return;
   }
   
   if(pincodeInput.value.length!==6){
    const error5 = document.querySelector(".error5");
    error5.innerText="Please enter a valid pincode.";
   
    return;
   }
   if(numberInput.value.length!==10){
     const error6 = document.querySelector(".error6");
    error6.innerText="Please enter a valid 10-digit number.";
    
     return;
    
   }
   if(number2Input.value.length!==10){
     const error7 = document.querySelector(".error7");
    error7.innerText="Please enter a valid 10-digit number.";
   
return;
  }else{
    if(number2Input.value===numberInput.value){
alert("Mobile No and Emergency No could't be same.");
return;
}
  }   
   
   if(!emailInput.checkValidity()){
    alert("Please enter a valid email.");
     return;
   }

   if(!studentImg.files[0]){
    alert("Please upload an image.");
    return;
   }else{
   const img = new Image();
   img.src = URL.createObjectURL(studentImg.files[0]);
   img.onload = function(){
const width = img.width;
const height = img.height;

   if(width<200 || height<200 || width>2000 || height>2000){
     const error8 = document.querySelector(".error8");
    error8.innerText="Image Dimensions must be between 200*200 and 2000*2000.";
    
    return;
   }
   else{
    if(studentImg.files[0].size > 200 * 1024){
       const error8 = document.querySelector(".error8");
    error8.innerText="Image size must be less than 200 KB.";
   
      return;
    }
  
   }
   if(!checkbox.checked){
     const error9 = document.querySelector(".error9");
    error9.innerText="Please agree to all Terms&conditions.";
    
     return;
   }
   if(result.value<0 || result.value>100){
alert("Please enter your valid marks between 1-100.");
return;
   }
   else {
    alert("Form submitted successfully✔");
   }
  }
    }
   }
);
