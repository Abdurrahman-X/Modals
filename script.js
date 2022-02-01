'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



for (let i = 0; i < showModal.length; i++) {
   showModal[i].addEventListener('click', function () {
       console.log(showModal[i].textContent);
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
   })
}


closeModalBtn.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');   
})