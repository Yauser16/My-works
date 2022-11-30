'use strict';
let cells = document.querySelectorAll('#field td');

const table = document.querySelector('#field');

const button = document.createElement('input');

function createButton(elem) {
    elem.type = 'button';
    elem.style.height = '30px';
    elem.value = 'Играть ещё';
    elem.style.marginTop = '10px';
    elem.style.backgroundColor = 'yellow';
    elem.classList = 'button';
    }
createButton(button);

table.after(button);

start (cells); 

let e = 0;   
function start(cells) {       
    for (let cell of cells) { 
    cell.addEventListener('click', function() {
        e += 1;
        if (e % 2 != 0 && this.textContent == '') {
        this.textContent = 'X';               
        } else {
        if (e % 2 == 0 && this.textContent == '') { 
        this.textContent = 'O';        
        } else {
        if (this.textContent == 'X' || this.textContent == 'O') {
            e -= 1;
        }
        }        
    }});
}}

let i = 0;

function finish() {
    if ((i != 1) &&
        ((cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') || 
        (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') ||
        (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') ||
        (cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') ||
        (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') ||
        (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') ||
        (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') ||
        (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X'))) {            
            colorTd(cells);
            setTimeout(() => alert('Победа X!'), 500);
            i = 1;            
            return;            
        } else {
        if (((cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O') || 
            (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O') ||
            (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O') ||
            (cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O') ||
            (cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O') ||
            (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O') ||
            (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O') ||
            (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O')) &&
            (i != 1)) { 
                colorTd(cells);        
                setTimeout(() => alert('Победа O!'), 500);
                i = 1;
                return;                
        } else {
            if (e == 9 && i != 1) {
                setTimeout(() => alert('Ничья!'), 500);
            }
        }
    }
    
}

table.onclick = finish;

function colorTd(arr) {
    for (let z in arr) {
        if (arr[z].textContent == '') {
            arr[z].style.backgroundColor = 'rgb(228, 223, 223)';
            arr[z].textContent = ' ';
        }
    }    
}
/* function stop(arr) {
    for (let v in arr) {
        if (arr.some(() => {
                arr[v].textContent != '';   
        }) == true) {

        }
    }
} */

 button.addEventListener('click', () => {
    e = 0;
    i = 0;
    for (let c = 0; c < cells.length; c ++) {
        if (cells[c].textContent == 'X' || cells[c].textContent == 'O') {
            cells[c].textContent = '';            
        } else {
            if (cells[c].style.backgroundColor == 'rgb(228, 223, 223)' || cells[c].textContent == ' ') {
                cells[c].style.backgroundColor = 'white';
                cells[c].textContent = '';
        }        
    }
}});





