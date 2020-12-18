var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var lastX = -1;
var lastY = -1;
var doDraw = false;

context.lineWidth = 4;

function draw(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    let hex = document.getElementById("hex").innerHTML

    if (lastX > -1 && lastY > -1 && doDraw) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = hex;
        context.stroke();
    }

    lastX = x;
    lastY = y;
}

function enable() {
    doDraw = true;
}

function disable() {
    doDraw = false;
}

function increaseThickness() {
    context.lineWidth++;
    console.log(context.lineWidth);
}

function decreaseThickness() {
    if (context.lineWidth > 1) {
        context.lineWidth--;
    }
    console.log(context.lineWidth);
}


// Farbe aus ColorPicker auslesen
var theInput = document.getElementById("kb_selected_color");

var theColor = theInput.value;
theInput.addEventListener("input", function() {

// Farcode (Hex) schreiben
document.getElementById("hex").innerHTML = theInput.value;

// Farbvariable schreiben
document.documentElement.style.setProperty('--kb-color',theInput.value);

}, false);
