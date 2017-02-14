//creating the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var clrbutton = document.getElementById("clr");

//clearing the canvas
var clearCanvas = function() {
    ctx.clearRect(0,0, c.width, c.height);
};

//drawing a rectangle
var drawRect = function(d) {
    var mouseX = d.offsetX;
    var mouseY = d.offsetY;
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(mouseX-10, mouseY-10, 30, 30);
};

//test calls
c.addEventListener("click", drawRect);
clrbutton.addEventListener("click", clearCanvas);



