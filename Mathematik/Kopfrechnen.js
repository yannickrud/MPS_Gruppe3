
var a;
var b;
var c;
var op;

function init() {
	document.getElementById("result_input").value = "";
	document.getElementById("feedback").innerHTML = "";

	let opIndex = random(0, operations.length);
	op = operations[opIndex];

	a = getLeftOperand(op);
	b = getRightOperand(op);

	document.getElementById("left_operand").innerHTML = a;
	document.getElementById("right_operand").innerHTML = b;


	document.getElementById("operator").innerHTML = op.operator;

	c = op.func(a, b);
}


function showSolution() {
	answer = a + " " + op.operator + " " + b + " = " + c;
	document.getElementById("feedback").innerHTML = answer;
}

var divisor;

function getLeftOperand(op) {
	switch (op.name) {
		case "add":
		case "subtract":
			return random(20, 200);

		case "multiply":
			return random(20, 100);

		case "divide":
			divisor = random(2, 10);
			let x = random(2, 20);
			return divisor * x;
	}
}

function getRightOperand(op) {
	switch (op.name) {
		case "add":
		case "subtract":
			return random(20, 200);

		case "multiply":
			return random(2, 10);

		case "divide":
			return divisor;
	}
}

function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower) + lower);
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return Math.floor(a / b);
}