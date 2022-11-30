"use strict";
let texts = ['text1', 'text2', 'text3', 'text4'];

const sliderDiv = document.querySelector('#slider');

const left = document.querySelector('#left');
const right = document.querySelector('#right');

let i = 2;

sliderDiv.textContent = texts[i];

right.addEventListener('click', () => {
    if (i < texts.length - 1) {
        i ++;
        sliderDiv.textContent = texts[i];        
    } else {        
        sliderDiv.textContent = texts[texts.length - 1];
        i = texts.length - 1;
    } 

    }
);
left.addEventListener('click', () => {
    if (i > 0) {
        i --;
        sliderDiv.textContent = texts[i];
        console.log(i);        
    } else {        
        sliderDiv.textContent = texts[0];
        i = 0;
        console.log(i);
    } 

    }
);



