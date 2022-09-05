`use strict`;

let num = +prompt(`Enter number`);
let degree = +prompt(`Enter degree`);
let result;

function foo(number, degree = 1) {
    if (!isNaN(number) && !isNaN(degree)) {
        result = number ** degree;
        return alert(result);
    } else return alert(`some error`);
}

foo(num, degree);