let operations = [
	{
		name: "add",
		operator: "+",
		func: add,
	},
	{
		name: "subtract",
		operator: "-",
		func: subtract,
	},
	{
		name: "multiply",
		operator: "*",
		func: multiply,
	},
	{
		name: "divide",
		operator: "/",
		func: divide,
	},
];

var a;
var b;
var c;
var op;

function init() {
	document.getElementById("result_input").value = "";

	let opIndex = random(0, operations.length);
	op = operations[opIndex];

	a = getLeftOperand(op);
	b = getRightOperand(op);

	document.getElementById("left_operand").innerHTML = a;
	document.getElementById("right_operand").innerHTML = b;


	document.getElementById("operator").innerHTML = op.operator;

	c = op.func(a, b);
}

function submit() {
	submission = document.getElementById("result_input").value;
	submission = parseInt(submission);

	feedback = document.getElementById("feedback");

	if (submission == c) {
		feedback.innerHTML = "correct";
		init();
	}
	else {
		feedback.innerHTML = "wrong answer";
	}
}

function showSolution() {
	answer = a + " " + op.operator + " " + b + " = " + c;
	document.getElementById("feedback").innerHTML = answer;
	init();
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