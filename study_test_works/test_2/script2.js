
const testQuestion = document.querySelector('#test');
const testAnswer = document.querySelectorAll('input[type="radio"]'); 
const testLebel = document.querySelectorAll('label'); 

let answers = [0, 1, 2];

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

const btnResult = document.createElement('input');
testQuestion.append(btnResult);
createButton(btnResult);

btnResult.addEventListener('click', () => {
    for (let i = 0; i < testAnswer.length; i ++) {
        if (testAnswer[i].checked == true) {
            for (let key in answers) {
                if (testAnswer[i].name - 1 == +key && +
                    testLebel[i].textContent.includes(`${answers[key] + 1}`) == true) {
                    rightAnsw(testLebel[i]);
                    /* break; */ 
                } else {
                    wrongAnsw(testLebel[i]);                              
                    }                 
                }
            } else {            
                deleteClass(testLebel[i]);
                }        
        }
    }
);

        
   