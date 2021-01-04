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

	a = random(20, 200);
	b = random(20, 200);

	document.getElementById("left_operand").innerHTML = a;
	document.getElementById("right_operand").innerHTML = b;

	let opIndex = random(0, operations.length);
	op = operations[opIndex];

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
	answer = a + op.operator + b + "=" + c;
	document.getElementById("feedback").innerHTML = answer;
	init();
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