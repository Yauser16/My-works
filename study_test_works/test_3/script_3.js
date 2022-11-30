
let questions = [
	{
		text: 'вопрос 1?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 2?',
		right: 0,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
		]
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
			
		]
	},
	{
		text: 'вопрос 4?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3'
			
		]
	},
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
}
const divTest = document.querySelector('#test');
const btnResult = document.querySelector('button');

createButton(btnResult);

for (let i = 0; i < questions.length; i ++) {        
    divTest.innerHTML += `<div>
    <p>${questions[i].text}</p>	
	</div>`;
	 for (let e = 0; e < questions[i].variants.length; e ++) {				        
		divTest.innerHTML += `
		<label>
				<input type="radio" name="${i}">
				${questions[i].variants[e]}
			</label>
		`;
	} 	 
} 
 const label = document.querySelectorAll('label');
 const input = document.querySelectorAll('input');

btnResult.addEventListener('click', ()=> {
	for (let i = 0; i < input.length; i ++) {
		if (input[i].checked == true) {
			outer: for	(let a = 0; a < questions.length; a ++) {
				for (let s = 0; s < questions[a].variants.length; s ++) {
					if (input[i].name == a && s == questions[a].right && label[i].textContent.includes(s + 1) == true) {
									rightAnsw(input[i].parentNode); console.log('1');
									break outer;
									} else {
									wrongAnsw(input[i].parentNode);	console.log('2');																		
								}
							} 
						} 
					} else { if (input[i].checked == false) {
						deleteClass(input[i].parentNode);
						}
				} 
			}
		} 
			 	
	);
       
  




    

    
    

