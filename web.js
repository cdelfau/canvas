//creating the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var clrbutton = document.getElementById("clr");

//clearing the canvas
var clearCanvas = function() {
    ctx.clearRect(0,0, c.width, c.height);
    ctx.closePath()
    begin = true;
};

//drawing a rectangle
//var drawRect = function(d) {
//    var x = d.offsetX;
//    var y = d.offsetY;
//    ctx.fillStyle = "#000000";
//    ctx.fillRect(x-10, y-10, 10, 10);
//};

//connecting the dots
var connect = function(f) {
    var begin = true;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineWidth= "1px";
    var x = f.offsetX;
    var y = f.offsetY;
    if (begin) {
	ctx.moveTo(x, y)
	begin = false;
    }  
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.lineTo(x, y);
    ctx.stroke();
};    

//test calls
//c.addEventListener("click", drawRect);
c.addEventListener('click', connect);
clrbutton.addEventListener("click", clearCanvas);




