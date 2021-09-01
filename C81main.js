var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="red";
canvas.addEventListener("mousedown",click);


function click(e){
 mousex=e.clientX-canvas.offsetLeft;
 mousey=e.clientY-canvas.offsetTop;
drawcircle(mousex,mousey);
}

function  drawcircle(mousex,mousey) {
  ctx.beginPath();
  ctx.strokeStyle=color;
  ctx.lineWidth=5;
  ctx.arc(mousex,mousey,60,0,360);
  ctx.stroke();
}
