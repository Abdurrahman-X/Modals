'use strict';

// SELECTORS    
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// created a openModal Function
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// created a closeModal Function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


// Showing Modal
for (let i = 0; i < showModal.length; i++) {
   showModal[i].addEventListener('click', openModal)
}

// Closing Modal via "&times" button 
closeModalBtn.addEventListener('click', closeModal)

// Close Modal by clicking outside the Modal
overlay.addEventListener('click', closeModal)


// Handling the "Esc" keypress event
document.addEventListener('keydown', function (e) {
    //console.log('A key was pressed');
    //console.log(e.key)

    if (e.key === "Escape") {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})
