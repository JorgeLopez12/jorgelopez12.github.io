window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    /*Switch*/
    header.classList.toggle("abajo", window.scrollY>0);

});

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

