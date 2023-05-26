let outercontainer = document.createElement('div')
outercontainer.setAttribute('class', 'container p-4 bg-light');

let bg = document.querySelector('body');
bg.setAttribute('style','background-color:beige')

let header = document.createElement('div');
header.setAttribute('class', 'h2 bg-info');
header.textContent = "HTML FORM"
header.style.textAlign = "center";

let form = document.createElement('form');
form.setAttribute('class', 'p-5 bg-secondary')

let firstName = createFormElements('First Name', 'text', 'firstName');
let lastName = createFormElements('Last Name ', 'text', 'lastName');
let address = createFormElements('Address ', 'textarea', 'address');
let pincode = createFormElements('Pincode ', 'number', 'pincode');
let gender = createRadio();
let favFoodType = createMultiSelect();
let state = createState();
let country = createCountry();
let submit = submitButton();

let clear = document.createElement('button');
clear.setAttribute('type','reset')
clear.setAttribute('class', 'btn btn-info mt-2 offset-6')
clear.textContent = 'Clear'

let divtable = document.createElement('div')
divtable.setAttribute('class', 'row');

let table = document.createElement('table');
table.setAttribute('class', 'table mt-5 table-striped');

let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

let tr1 = document.createElement('tr');

let th1 = document.createElement('th');
th1.innerHTML = 'First Name';
let th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
let th3 = document.createElement('th');
th3.innerHTML = 'Address';
let th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
let th5 = document.createElement('th');
th5.innerHTML = 'Gender';
let th6 = document.createElement('th');
th6.innerHTML = 'Favourite Food';
let th7 = document.createElement('th');
th7.innerHTML = 'State';
let th8 = document.createElement('th');
th8.innerHTML = 'Country'; 

document.body.append(outercontainer);
outercontainer.append(header, form, divtable);
divtable.append(table);
table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);
form.append(clear);

function submitButton() {
    let d = document.createElement('div');
    d.setAttribute('class', 'row offset-6');

    let btn = document.createElement('button');
    btn.innerHTML = 'Submit';
    btn.type = 'button'
    btn.setAttribute('class', 'btn btn-info text-center mt-5')
    btn.onclick = action;

    form.append(d);
    d.append(btn);
    return d;
}

function createFormElements(labelDes, typ, idname) {
    let d = document.createElement('div');
    d.setAttribute('class', 'form-group row');
    let label = document.createElement('label');
    label.classList.add('label', 'col-4', 'col-form-label');
    label.innerHTML = labelDes;
    let input = document.createElement('input');
    input.setAttribute('type', typ);
    input.id = idname;
    input.placeholder = labelDes;
    input.setAttribute('class', 'form-control col-6')
    input.required = true;

    form.append(d)
    d.append(label, input);
    return d;
}

function createRadio() {
    let fieldset = document.createElement('fieldset');
    fieldset.setAttribute('class', 'form-group');

    let d = document.createElement('div');
    d.setAttribute('class', 'row');

    let legend = document.createElement('legend');
    legend.setAttribute('class', 'col-form-label col-4')
    legend.innerHTML = 'Gender'

    let d1 = document.createElement('div');
    d1.setAttribute('class', 'col-6 pl-1');

    let d2 = document.createElement('div');
    d2.setAttribute('class', 'form-check');

    let male = document.createElement('label');
    male.setAttribute('for', 'Male');
    male.setAttribute('class', 'form-check-label')
    male.innerHTML = 'Male';
    let radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('class', 'form-check-input');
    radio1.checked = true;
    radio1.id = 'Male';
    radio1.value = 'Male'
    radio1.name = 'gender';

    let d3 = document.createElement('div');
    d3.setAttribute('class', 'form-check');

    let female = document.createElement('label');
    female.setAttribute('for', 'Female');
    female.innerHTML = 'Female'
    let radio2 = document.createElement('input');
    radio2.setAttribute('class', 'form-check-input');
    radio2.setAttribute('type', 'radio');
    radio2.id = 'Female';
    radio2.value = 'Female'
    radio2.name = 'gender';

    form.append(fieldset);
    fieldset.append(d)
    d.append(legend, d1);
    d1.append(d2, d3);
    d2.append(radio1, male);
    d3.append(radio2, female);

    return fieldset;
}

function createMultiSelect() {
    let d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    let label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Favourite Food Type"

    let select = document.createElement('select');
    select.multiple = true;
    select.id = 'food'
    select.setAttribute('class', 'form-control col-6')
    let opt1 = new Option('Dairy', 'Dairy');

    let opt2 = new Option('Fruits', 'Fruits');
    let opt3 = new Option('Vegetables', 'Vegetables');
    let opt4 = new Option('Grains', 'Grains');
    let opt5 = new Option('Non-Veg', 'Non-Veg');
    opt2.selected = true;

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);

    form.append(d);
    d.append(label, select);
    return d;
}

function createState() {
    let d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    let label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "State";

    let select = document.createElement('select');
    select.id = 'state'
    select.setAttribute('class', 'form-control col-6')
    let opt1 = new Option('Tamilnadu', 'Tamilnadu');
    opt1.selected = true;
    let opt2 = new Option('Tamilnadu', 'Tamilnadu');
    let opt3 = new Option('Delhi','Delhi');
    let opt4 = new Option('Goa', 'Goa');
    let opt5 = new Option('Odisha', 'Odisha');
    let opt6 = new Option('Punjab','Punjab');
    let opt7 = new Option('Kerala','Kerala');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    form.append(d);
    d.append(label, select);
    return d;
}

function createCountry() {
    let d = document.createElement('div');
    d.setAttribute('class', 'form-group row');

    let label = document.createElement('label');
    label.setAttribute('class', 'col-form-label col-4');
    label.innerHTML = "Country";

    let select = document.createElement('select');
    select.setAttribute('class', 'form-control col-6')
    select.id = 'country'
    let opt1 = new Option('India', 'India');
    opt1.selected = true;
    let opt2 = new Option('UK', 'UK');
    let opt3 = new Option('Qatar', 'Qatar');
    let opt4 = new Option('USA', 'USA');
    let opt5 = new Option('UAE', 'UAE');
    let opt6 = new Option('France', 'France');
    let opt7 = new Option('Srilanka', 'Srilanka');

    select.add(opt1);
    select.add(opt2);
    select.add(opt3);
    select.add(opt4);
    select.add(opt5);
    select.add(opt6);
    select.add(opt7);

    form.append(d);
    d.append(label, select);
    return d;
}

function action() {
    let fn = document.getElementById('firstName').value;
    let ln = document.getElementById('lastName').value;
    let addr = document.getElementById('address').value;
    let pcode = document.getElementById('pincode').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pin code');
    } else {

        let tablebody = document.querySelector('tbody');
        let trow2 = tablebody.insertRow(0);
        let cell1 = trow2.insertCell(0);
        let cell2 = trow2.insertCell(1);
        let cell3 = trow2.insertCell(2);
        let cell4 = trow2.insertCell(3);
        let cell5 = trow2.insertCell(4);
        let cell6 = trow2.insertCell(5);
        let cell7 = trow2.insertCell(6);
        let cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        let data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }

        let foodvalues = document.getElementById('food');
        cell6.innerHTML = [...foodvalues.options].filter((val) => val.selected).map((opt) => opt.value);

        cell7.innerHTML = document.getElementById('state').value;
        cell8.innerHTML = document.getElementById('country').value;

    
    }


}