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