//creating the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//ctx.fillstyle = "#ff0000";
//ctx.fillRect(50, 50, 100, 200);


//clearing the canvas
var clearCanvas = function() {
    ctx.clearRect(0,0, c.width, c.height);
};
var clear = document.getElementById("clearbutton");
clear.addEventListener("click", clearCanvas);

var drawRect = function(d) {
    var mouseX = d.offsetX;
    var mouseY = d.offsetY;
    ctx.fillStyle = "#000000";
    ctx.fillRect(mouseX-10,mouseY-10,20,20);
};
c.addEventListener("click", drawRect);
//




