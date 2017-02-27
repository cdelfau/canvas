////clearing the canvas
//var clearCanvas = function(f) {
//    f.preventDefault();
//    ctx.clearRect(0,0, c.width, c.height);
//   ctx.closePath();
//    begin = false;
//};
//

//
//creating the lines to connect the dots
//var begin = true;
//ctx.beginPath();
//
//creating the dots to be connected
var connect = function(f) {
    var x = f.offsetX;
    var y = f.offsetY;
    if (begin) {
	ctx.moveTo(x, y)
	begin = false;
    };
    ctx.arc(x, y, 5, 0, 2*Math.PI);
    ctx.lineTo(x, y);
    ctx.stroke();
};    


//CLEAN UP THE GARBAGE THAT IS ABOVE ^^












//creating the canvas
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var button = document.getElementById("button");

//drawing a rectangle
var drawRect = function(f) {
    var x = f.offsetX;
    var y = f.offsetY;
    ctx.fillStyle = "#000000";
    ctx.fillRect(x-10, y-10, 10, 10);
};

var requestID;

//clear 
var clear = function(e) {
    e.preventDefault();
    ctx.clearRect(0,0,500,500);
}

//animate
var animate = function() {
    //initial parameters for drawing dot
    var radius = 50;
    var xcor= 10;
    // draw a dot 
    var drawDot = function() {
	console.log(requestID);
	ctx.clearRect(0,0,c.width, c.height);
	ctx.beginPath();
	ctx.arc(xcor, 100, radius, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	xcor++;
	requestID = window.requestanimationFrame(drawDot);
    };
    drawDot();
};

//stop the animation
var stopIt = function() {
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

lastX = -1;
lastY = -1;

var drawPath = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;
    if (lastX == -1 && lastY == -1) {
	lastX = mouseX;
	lastY = mouseY;
    } else {
	ctx.strokeStyle = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	ctx.beginPath();
	ctx.moveTo(lastX,lastY);
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
	ctx.fillStyle = "rgb("+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+","+
  		Math.floor(Math.random()*256)+")";
	ctx.beginPath();
	ctx.moveTo(lastX,lastY);
	ctx.arc(lastX,lastY,10,0,Math.PI*2);
	ctx.stroke();
	ctx.fill();
	lastX = mouseX;
	lastY = mouseY;
    };
};

var clr = document.getElementById("clr");
clr.addEventListener("click",clearCanvas);

c.addEventListener("click",drawPath);
//c.addEventListener("click",drawSquare);

//testcalls
//c.addEventListener("click", drawRect);
button.addEventListener("click", clear);
c.addEventListener('click', connect);
