const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nave = document.getElementById('navbar');

bar.onclick = () =>{
    bar.classList.toggle('fa-times');
    nave.classList.toggle('active');
} 


window.onscroll = () =>{
    bar.classList.remove('fa-times');
    nave.classList.remove('active');
}

if (close) {
    close.addEventListener('click', () => {
        nave.classList.remove('active') 
    })
}







/*const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nave = document.getElementById('navbar');



bar.onclick = () =>{
    bar.classList.toggle('fa-times');
    nave.classList.toggle('active');
} 


window.onscroll = () =>{
    bar.classList.remove('fa-times');
    nave.classList.remove('active');
}

if (close) {
    close.addEventListener('click', () => {
        nave.classList.remove('active') 
    })
}*/


/*let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}*/

/*let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} */




/*const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nave = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nave.classList.add('active') 
    })
}

if (close) {
    close.addEventListener('click', () => {
        nave.classList.remove('active') 
    })
}*/