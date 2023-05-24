let bg = document.querySelector('body');
bg.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg')"

let outerContainer = create('div', 'container mt-4 p-4 rounded-5');     
outerContainer.setAttribute('style','background-color:#1f1e0c')

let header = document.createElement('h1')
header.textContent = 'Calculator'
header.className = ('text-center')
header.style = ('color:white; font-weight:bold; font-size:50px')
header.id = 'title'

let description = document.createElement('p')
description.textContent = 'Simple Calculator using DOM,BOOTSTRAP & CSS'
description.className = ('text-center')
description.style = ('color:white; font-weight:bold; font-size:20px')
description.id = 'description'


let divarr = createElements('div', 'row justify-content-center p-1', 6);

let input = create('input', 'col-8 text-right mt-5 mb-3 rounded-3');
input.setAttribute('type', 'text');
input.disabled = true;
input.setAttribute('style', `line-height:80px; background-color:white;`);
input.id = "result";

var btnnumbers = createElements('button', 'btn btn-secondary border-3 border-dark col-2 p-4 rounded-4', 10);
btnnumbers[0].setAttribute('onclick', `appendNumber(0)`);
btnnumbers[1].setAttribute('onclick', `appendNumber(1)`);
btnnumbers[2].setAttribute('onclick', `appendNumber(2)`);
btnnumbers[3].setAttribute('onclick', `appendNumber(3)`);
btnnumbers[4].setAttribute('onclick', `appendNumber(4)`);
btnnumbers[5].setAttribute('onclick', `appendNumber(5)`);
btnnumbers[6].setAttribute('onclick', `appendNumber(6)`);
btnnumbers[7].setAttribute('onclick', `appendNumber(7)`);
btnnumbers[8].setAttribute('onclick', `appendNumber(8)`);
btnnumbers[9].setAttribute('onclick', `appendNumber(9)`);


let doubleZero = createButton('00', '00', `appendNumber('00')`,'doubleZero');
let add = createButton('+', '+', `appendNumber('+')`,'add');
let sub = createButton('-', '-', `appendNumber('-')`,'subtract');
let mul = createButton('*', '*', `appendNumber('*')`,'multiplication');
let division = createButton('/', '/', `appendNumber('/')`,'division');
let dot = createButton('.', '.', `appendNumber('.')`,'dot');
let clear = createButton('CL', 'CL', 'clearScreen()','clear');
let equals = createButton('=', '=', 'equate()','equal');
let percent = createButton('%', '%', 'percentage()')
let backSpace = createButton('⬅️','⬅️','backspace()');

document.body.prepend(outerContainer)
outerContainer.append(header,description,divarr[0],divarr[1],divarr[2],divarr[3],divarr[4],divarr[5]);
divarr[0].appendChild(input)
divarr[1].append(clear,backSpace,percent,division);
divarr[2].append(btnnumbers[7],btnnumbers[8],btnnumbers[9],mul);
divarr[3].append(btnnumbers[4],btnnumbers[5],btnnumbers[6],sub);
divarr[4].append(btnnumbers[1],btnnumbers[2],btnnumbers[3],add);
divarr[5].append(doubleZero,btnnumbers[0],dot,equals)

function create(tagname, classname) {
    var t = document.createElement(tagname);
    t.setAttribute('class', classname);
    return t;
}

function createElements(tagname, classname, num) {
    let tag = [];
    for (let i = 0; i < num; i++) {
        var b = document.createElement(tagname);
        b.setAttribute('class', classname);
        b.setAttribute('style', 'font-size: 30px; font-weight:bold;');
        if (tagname === 'button') {
            b.setAttribute('value', i);
            b.innerHTML = i;
        }
        tag.push(b);
    }
    return tag;
}

function createButton(txt, val, fn, id) {
    let a = document.createElement('button');
    a.setAttribute('class', 'col-2 p-4 rounded-4 btn btn-secondary border-3 border-dark');
    a.setAttribute('value', val);
    a.setAttribute('style','font-weight:bold; font-size:25px;')
    a.innerHTML = txt;
    a.setAttribute('onclick', fn);
    a.id = id;
    return a;
}

function backspace() {
    let input = document.getElementById("result");
    input.value = input.value.substring(0, input.value.length - 1);
}

  function appendNumber(val) {
    input.value += val;
}


function equate() {
    input.value = Number.isInteger(eval(input.value)) ? eval(input.value) : eval(input.value).toFixed(2);
}

function percentage() {
    if (input.value) {
        let val = parseFloat(eval(input.value))
        input.value = val/100;
    }
}

function clearScreen() {
    input.value = "";
}