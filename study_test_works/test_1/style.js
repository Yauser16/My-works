/* 'use strict'; */

const divTest = document.querySelector('#test');

let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
    'ответ 4'
];

let questions = [
    'вопрос 1?',
    'вопрос 2?',
    'вопрос 3?',
    'вопрос 4?'
];

function rightAnsw(t) {
    t.classList.add('right');
    t.classList.remove('wrong');
}
function wrongAnsw(t) {
    t.classList.add('wrong');
    t.classList.remove('right');
}
function deleteClass(t) {
    const clasW = 'wrong',
        clasR = 'right';

    t.classList.remove(clasW, clasR);
}

function createButton(elem) {
    elem.type = 'button';
    elem.style.height = '30px';
    elem.value = 'Проверить ответы';
    elem.style.marginTop = '10px';
    elem.style.backgroundColor = 'yellow';
    elem.classList = 'button';
    console.log('кнопка создана');
}
function addBlock(elemF, elemS) {
    elemF.forEach((e) => {
        elemS.innerHTML += `<div class="question">
        <p>${e}</p>
        <input type="text" data-right>
        </div>`;
    });
}

addBlock(questions, divTest);

const quest = document.querySelectorAll('[data-right]');
const div = document.querySelectorAll('.question');

const btnResult = document.createElement('input');
divTest.append(btnResult);

createButton(btnResult);

function checkQuestions(item, arr) {
    item.addEventListener('click', () => {
        quest.forEach(() => {
            arr.forEach((elem, i) => {
                if (quest[i].value === elem) {
                    console.log('yes!');
                    rightAnsw(quest[i]);
                } else {
                    if (quest[i].value !== '') {
                        console.log('not yes!');
                        wrongAnsw(quest[i]);
                    } else {
                        if (quest[i].value == '') {
                            deleteClass(quest[i]);
                        }
                    }
                }
            });

        });
    });
}

checkQuestions(btnResult, answers);


// ДЛЯ КНОПОК К КАЖДОМУ ВОПРОСУ

/* function addButton(elem) {
        elem.forEach(item => {
        const butn = document.createElement('input');
        createButton(butn);
        item.append(butn);                         
});
}

addButton(div); 

const btn = document.querySelectorAll('.button');
console.log(btn);
     
function result(item) {
    item.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                quest.forEach(item => {if (item.value === item.dataset.right) {
                   console.log('yes!');
                   rightAnsw(item);
                } else {if (item.value !== '')
                    {
                   console.log('not yes!');
                   wrongAnsw(item);
                } else {if (item.value == '') {
                    deleteClass(item);
                }
                }
            }});    
                      
        }});
    });
}
result(btn); */