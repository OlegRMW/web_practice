// 1 задание
const button = document.querySelector('.but11');


button.addEventListener('click', function(){
    let str1 = document.querySelector('.input11').value;
    let str2 = document.querySelector('.input12').value;
    let parentDiv = document.querySelector('.flex1');

    let number1 = Number(str1);
    let number2 = Number(str2);

    let oldDiv = document.querySelector('.new-div');
    if (oldDiv) {
        oldDiv.remove();
    }

    let newDiv = document.createElement('div');
    newDiv.classList.add('new-div');
    newDiv.textContent = `Результат: ${number1 + number2}`;
    parentDiv.after(newDiv);
});


// 2 задание
let globalCounter = 0;

const globalCounterElement = document.querySelector('.numb2');
const localCounterElement = document.querySelector('.numb3');
const globalButton = document.querySelector('.but1');
const localButton = document.querySelector('.but2');

globalButton.addEventListener('click', function(){
    globalCounter++;
    globalCounterElement.textContent = globalCounter;
});

localButton.addEventListener('click', function(){
    let localCounter = 0;
    localCounter++;
    localCounterElement.textContent = localCounter;
});



// 3 задание

let but31 = document.querySelector('.but31');

but31.addEventListener('click', function(){
    let str31 = document.querySelector('.input3').value;
    let flex31 = document.querySelector('.flex31');

    let num31 = Number(str31);

    let oldDiv32 = document.querySelector('.new-div32');
    let oldDiv31 = document.querySelector('.new-div31');
    if (oldDiv31){
        oldDiv31.remove();
    }

    if(oldDiv32){
        oldDiv32.remove();
    }

    if (num31 >= 18){
        let newDiv3 = document.createElement('div');
        newDiv3.classList.add('new-div31');
        newDiv3.textContent = `Вам ${num31} лет - вы совершеннолетний!`;
        flex31.after(newDiv3);
    }

    else {
        let newDiv3 = document.createElement('div');
        newDiv3.classList.add('new-div32');
        newDiv3.textContent = `Вам ${num31} лет - вы несовершеннолетний!`;
        flex31.after(newDiv3);
    }

});


// 4 задание

let button4 = document.querySelector('.but41');

button4.addEventListener('click', function(){
    let flex41 = document.querySelector('.flex41');
    let str4 = document.querySelector('.input4').value;
    let number4 = Number(str4);

    let oldDiv4 = document.querySelector('.new-div4');

    if (oldDiv4){
        oldDiv4.remove();
    }

    let newDiv4 = document.createElement('div');
    newDiv4.classList.add('new-div4');
    newDiv4.innerHTML = `<b>Таблица умножения для ${number4}:</b><br>`
    flex41.after(newDiv4);

    for (let i=1; i<=10; i++){
        let result = document.createElement('div');
        result.innerHTML = `${number4}*${i} = <b>${number4*i}</b>`;
        newDiv4.appendChild(result);
    }
});


// 5 задание

let button51 = document.querySelector('.but51');
let button52 = document.querySelector('.but52');
let button53 = document.querySelector('.but53');

let listMyTasks = [];

button51.addEventListener('click', function(){
    let input5 = document.querySelector('.input5').value;
    listMyTasks.push(input5);
});

button53.addEventListener('click', function(){
    listMyTasks.length = 0;
});

button52.addEventListener('click', function(){
    let flex51 = document.querySelector('.flex51');

    let oldDiv5 = document.querySelector('.new-div5');

    if (oldDiv5){
        oldDiv5.remove();
    }

    let newDiv5 = document.createElement('div');
    newDiv5.classList.add('new-div5');
    newDiv5.innerHTML = `<b>Ваши задачи:</b><br>`
    flex51.after(newDiv5);

    listMyTasks.forEach(function(current_value, index){
        let result = document.createElement('ul');
        result.innerHTML = `<li>${index+1}. ${current_value}</li>`;
        newDiv5.appendChild(result);
    });
});


// 6 задание

let button61 = document.querySelector('.but61');
let button62 = document.querySelector('.but62');

let random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
let counter = 0;

button61.addEventListener('click', function(){
    let flex61 = document.querySelector('.flex61');
    let str6 = document.querySelector('.input6').value;
    let number6 = Number(str6);

    counter++;

    let oldDiv61 = document.querySelector('.new-div61');
    let oldDiv62 = document.querySelector('.new-div62');
    let oldcounter1 = document.querySelector('.counter-div1');
    let oldcounter2 = document.querySelector('.counter-div2');


    if (oldDiv61){
        oldDiv61.remove();
    }
    if (oldcounter1){
        oldcounter1.remove();
    }
    if (oldcounter2){
        oldcounter2.remove();
    }
    if (oldDiv62){
        oldDiv62.remove();
    }


    if (number6 == random) {
        let newDiv61 = document.createElement('div');
        newDiv61.classList.add('new-div61');
        newDiv61.textContent = `Ура! Вы угадали!`
        flex61.after(newDiv61);
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter-div1')
        counterDiv.textContent = `Попытки: ${counter}`
        newDiv61.after(counterDiv);
    }

    else {
        let newDiv62 = document.createElement('div');
        newDiv62.classList.add('new-div62');
        newDiv62.textContent = `Нет, вы не угадали`
        flex61.after(newDiv62);
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter-div2')
        counterDiv.textContent = `Попытки: ${counter}`
        newDiv62.after(counterDiv);
    }

});

button62.addEventListener('click', function(){
    let random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    counter = 0;

    let oldDiv61 = document.querySelector('.new-div61');
    let oldDiv62 = document.querySelector('.new-div62');
    let oldcounter1 = document.querySelector('.counter-div1');
    let oldcounter2 = document.querySelector('.counter-div2');
    let input6 = document.querySelector('.input6');

    if (oldDiv61) {
        oldDiv61.remove();
    };

    if (oldDiv62) {
        oldDiv62.remove();
    };

    if (oldcounter1) {
        oldcounter1.remove();
    };

    if (oldcounter2) {
        oldcounter2.remove();
    };

    if (input6) {
        input6.value = '';
    };

    if (number6 == random) {
        let newDiv61 = document.createElement('div');
        newDiv61.classList.add('new-div61');
        newDiv61.textContent = `Ура! Вы угадали!`
        flex61.after(newDiv61);
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter-div1')
        counterDiv.textContent = `Попытки: ${counter}`
        newDiv61.after(counterDiv);
    }

    else {
        let newDiv62 = document.createElement('div');
        newDiv62.classList.add('new-div62');
        newDiv62.textContent = `Нет, вы не угадали`
        flex61.after(newDiv62);
        let counterDiv = document.createElement('div');
        counterDiv.classList.add('counter-div2')
        counterDiv.textContent = `Попытки: ${counter}`
        newDiv62.after(counterDiv);
    }
})


// 7 задание


let button71 = document.querySelector('.but71');
let button72 = document.querySelector('.but72');

let myList = [15, 3, 45, 8, 12, 7, 22, 9, 30, 1];

button71.addEventListener('click', function(){
    let flex71 = document.querySelector('.flex71');

    let even = myList.filter(num => num%2===0);

    let oldDiv71 = document.querySelector('.new-div71');

    if (oldDiv71){
        oldDiv71.remove();
    }

    let newDiv71 = document.createElement('div');
    newDiv71.classList.add('new-div71');
    newDiv71.textContent = `Четные числа : [${even}]`;
    flex71.after(newDiv71);
})

button72.addEventListener('click', function(){
    let flex71 = document.querySelector('.flex71');

    let more_10 = myList.filter(num => num>10);

    let oldDiv72 = document.querySelector('.new-div72');

    if (oldDiv72){
        oldDiv72.remove();
    }

    let newDiv72 = document.createElement('div');
    newDiv72.classList.add('new-div72');
    newDiv72.textContent = `Числа > 10: [${more_10}]`;
    flex71.after(newDiv72);
})


// 8 задание


let timer = {
    time: 0,
    isRunning: false,
    intervalId: null
};

const timeElement = document.querySelector('.time');
const but81 = document.querySelector('.but81');
const but82 = document.querySelector('.but82');
const but83 = document.querySelector('.but83');

function startTimer() {
    if (timer.isRunning) return;
    
    timer.isRunning = true;
    updateButtons();
    
    timer.intervalId = setInterval(() => {
        timer.time++;
        timeElement.textContent = timer.time;
    }, 1000);
}

function pauseTimer() {
    if (!timer.isRunning) return;
    
    timer.isRunning = false;
    clearInterval(timer.intervalId);
    timer.intervalId = null;
    updateButtons();
}

function resetTimer() {
    pauseTimer();
    timer.time = 0;
    timeElement.textContent = timer.time;
    updateButtons();
}

function updateButtons() {
    but81.disabled = timer.isRunning;
    but82.disabled = !timer.isRunning;
}

but81.addEventListener('click', startTimer);
but82.addEventListener('click', pauseTimer);
but83.addEventListener('click', resetTimer);

updateButtons();