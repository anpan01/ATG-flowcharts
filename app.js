// console.log($('.meep')[0].getBoundingClientRect());
$('#myCanvas').attr('width', window.innerWidth);
$('#myCanvas').attr('height', window.innerHeight);


var somethingBox = $('.meep')[0].getBoundingClientRect();

var somethingElseBox = $('.meep')[1].getBoundingClientRect();

//var pRightCoord = [somethingBox.right, somethingBox.height/2];

console.log(somethingBox);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.moveTo(somethingBox.right, somethingBox.height/2 + somethingBox.top);
ctx.lineTo(somethingElseBox.width/2 + somethingElseBox.left , somethingBox.height/2 + somethingBox.top);
ctx.lineTo(somethingElseBox.width/2 + somethingElseBox.left , somethingElseBox.top);
ctx.stroke();
