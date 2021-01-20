var ops;
var current;
var currentIndex;

var c;

function init() {
    
    document.getElementById("submit_button").disabled = false;
    
	document.getElementById("result_input").value = "";
	document.getElementById("feedback").innerHTML = "";

	let nOperations = random(1, 4);
	let minOperand = 1;
	let maxOperand = 11;

	current = random(minOperand, maxOperand);
	currentIndex = -1;

	ops = [];
	for (var i = 0; i < nOperations; i++) {
		let opIndex = random(0, 2); //only addition/subtraction
		ops[i] = {
			operation: operations[opIndex],
			operand: random(minOperand, maxOperand),
		};
	}

	setNumbers(7);
	c = getNext();
}

function showSolution() {
	let numbers = document.getElementById("numbers").innerHTML;
	let answer = c;
	document.getElementById("result_input").value = answer;
    document.getElementById("submit_button").disabled = true;
}

function setNumbers(count) {
	var numbers = [];
	for (var i = 0; i < count; i++) {
		numbers[i] = getNext();
	}
	document.getElementById("numbers").innerHTML = numbers;
}

function getNext() {
	if (currentIndex != -1) {
		op = ops[currentIndex % ops.length];
		current = op.operation.func(current, op.operand);
	}
	currentIndex++;
	return current;
}
