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

//testcalls
//c.addEventListener("click", drawRect);
button.addEventListener("click", clear);
c.addEventListener('click', connect);
