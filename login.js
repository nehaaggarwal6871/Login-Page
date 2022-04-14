const sign_in_btn= document.querySelector('#sign-in-button'); 

const sign_up_btn= document.querySelector('#sign-up-button'); 

const fullpage = document.querySelector('.full-page'); 
console.log(sign_in_btn)

sign_up_btn.addEventListener('click',()=>{
    fullpage.classList.add('sign-up-mode'); 
});
sign_in_btn.addEventListener('click',()=>{
    fullpage.classList.remove('sign-up-mode'); 
});