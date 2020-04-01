let imgArray = [];
let arr = [];
let count = 0;
let canvasStrokeBool = true;


let getCoordinates = function (e) {
  console.log(canvasStrokeBool);
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  //var pos = getMousePos(canvas, e);
  let posx = e.offsetX;
  let posy = e.offsetY;

  if(canvasStrokeBool === true){
  checkCoordinates(posx, posy);

  createStroke(posx,posy,"black");

  imgArray.push({x:posx,y:posy});
  console.log(imgArray);
  console.log("x = " + posx);
  console.log("y = " + posy);
}else{

  console.log("yay");

}
}
/*function getMousePos(canvas, evt) {
  console.log("event = " + evt);
  console.log("canvas = " + canvas);
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.offsetX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.offsetY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}*/

window.addEventListener('mousedown', function () {
window.addEventListener('mousemove', getCoordinates, false);
}, false);


let checkCoordinates = function (posx, posy) {
  console.log(posx);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].x - 5);
    if(posx >= (arr[i].x - 8) && posx <= (arr[i].x + 8) && arr[i].bool === false){

      if(posy >= (arr[i].y - 8) && posy <= (arr[i].y + 8)){

          arr[i].bool = true;
          checkCanvas();

      }
    }
  }

}
window.onload = function () {

let newLetter = [
{ x: 106, y: 165, bool: false },
{ x: 110, y: 151, bool: false },
{ x: 125, y: 103, bool: false },
{ x: 149, y: 57, bool: false },
{ x: 151, y: 144, bool: false },
{ x: 174, y: 101, bool: false },
{ x: 171, y: 90, bool: false },
{ x: 129, y: 90, bool: false },
{ x: 190, y: 150, bool: false },
{ x: 133, y: 145, bool: false },
{ x: 190, y: 165, bool: false }];

for (var i = 0; i < newLetter.length; i++) {
  arr.push(newLetter[i]);
}
/*for (var i = 0; i < arr.length; i++) {
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(arr[i].x, arr[i].y, 15, 0, 2 * Math.PI);
  ctx.fill();
}*/
}

let createStroke = function (x,y,color) {

  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.arc(x, y, 18, 0, 2 * Math.PI);
  //ctx.rect(x-10, y-10, 25, 25);
  ctx.fillStyle = color;
  ctx.fill();

}

let checkCanvas = function () {
  let count = 0;
  console.log("canvas check....");
  for (var i = 0; i < arr.length; i++) {

      if (arr[i].bool === false) {
        count++;
      }
  }

  if (count === 0) {
    canvasStrokeBool = false;
    console.log("false");
  }

}
