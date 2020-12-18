var lastX = -1;
var lastY = -1;
var doDraw = false;

function draw(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    let hex = document.getElementById("hex").innerHTML;

    if (lastX > -1 && lastY > -1 && doDraw) {
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.strokeStyle = hex;
        context.stroke();

        redrawnLines.push([lastX, lastY, x, y]);
    }

    lastX = x;
    lastY = y;
}

function enableDrawing() {
    doDraw = true;
}

function disableDrawing() {
    doDraw = false;
}
