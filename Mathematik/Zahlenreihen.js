var ops = [];
var current;
var currentIndex = -1;

var c;

function init() {
	let nOperations = random(1, 4);
	let minOperand = (nOperations == 1)? 20 : 1;
	let maxOperand = 100;

	current = random(minOperand, maxOperand);

	for (var i = 0; i < nOperations; i++) {
		let opIndex = random(0, 2); //only addition/subtraction
		ops[i] = {
			operation: operations[opIndex],
			operand: random(minOperand, maxOperand),
		};
	}

	console.log(ops);

	setNumbers(7);
	c = getNext();
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