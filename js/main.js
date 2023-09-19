// ------------------------ Starting of Script ---------------------------

// Add hovered class in selected list item
let list = document.querySelectorAll('.navigation ul li');

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink));

// Side Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function () {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// Account Menu Toggle
let toggleMenu = document.querySelector('.accountMenu');
let userToggler = document.querySelector('.user');
userToggler.onclick = function () {
    toggleMenu.classList.toggle('active');
}


/* End of Code :) */