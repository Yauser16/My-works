'use strict';
const divTest = document.querySelector('#test');

let questions = [
	{
		text:  'вопрос 1?',
		right: 'ответ 1',
	},
	{
		text:  'вопрос 2?',
		right: 'ответ 2',
	},
	{
		text:  'вопрос 3?',
		right: 'ответ 3',
	},
];

console.log(questions);

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
}

for (let key in questions) {
    divTest.innerHTML += `<div class="question">
    <p>${questions[key].text}</p>
    <input type="text" data-right>
    </div>`;                
}

const quest = document.querySelectorAll('[data-right]');
const div = document.querySelectorAll('.question');
const p = document.querySelectorAll('p');

const btnResult = document.createElement('input');
divTest.append(btnResult);

createButton(btnResult);

function checkQuestions() {
    btnResult.addEventListener('click', () => {
       quest.forEach(function(item, i) { 
        for (let key in questions) { 
            if (p[i].textContent === questions[key].text && quest[i].value === questions[key].right) {
                rightAnsw(quest[i]); 
                break;                                     
                } else {
                    if (quest[i].value !== '') { 
                    wrongAnsw(quest[i]);                        
                    } else {
                        if (quest[i].value == '') {
                        deleteClass(quest[i]);
                        } 
                    }
        }}});});}               

checkQuestions(btnResult, questions);