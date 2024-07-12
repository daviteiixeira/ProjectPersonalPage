/*Cursor*/
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let isMouseClicked = false;

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    if (isMouseClicked) {
        cursor.style.backgroundColor = 'red'; // Mudar a cor do cursor quando o mouse for clicado
    } else {
        cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.669)'; // Cor padrão do cursor
    }
});

document.addEventListener('mousedown', () => {
    isMouseClicked = true;
});

document.addEventListener('mouseup', () => {
    isMouseClicked = false;
});

/*menuEffect-FirstOption*/
var btn1 = document.querySelector("#firstOption");
var mefo1 = document.querySelector("#menuNavEffect-about");

btn1.addEventListener("click", function () {

    if (mefo1.classList.contains("hide")){
        mefo1.classList.remove("hide");
    } else{
        mefo1.classList.add("hide");
    }

});
var btn2 = document.querySelector("#secondOption");
var mefo2 = document.querySelector("#menuNavEffect-contact");

btn2.addEventListener("click", function () {

    if (mefo2.classList.contains("hide")){
        mefo2.classList.remove("hide");
    } else{
        mefo2.classList.add("hide");
    }

});
var btn3 = document.querySelector("#thirdOption");
var mefo3 = document.querySelector("#menuNavEffect-services");

btn3.addEventListener("click", function () {

    if (mefo3.classList.contains("hide")){
        mefo3.classList.remove("hide");
    } else{
        mefo3.classList.add("hide");
    }

});
