const close = document.querySelector(".close");
const open = document.querySelector(".open");
const password = document.querySelector(".password");

close.addEventListener("click" , (event) =>{
   console.log("clicked");
   password.type = "text";
   close.style.display = "none";
   open.style.display = "initial";
});

open.addEventListener("click" , (event) =>{
   console.log("clicked");
   password.type = "password";
   close.style.display = "initial";
   open.style.display = "none";
});