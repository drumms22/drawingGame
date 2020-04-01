let imgArray = [];
let arr = [];
let count = 0;
let canvasStrokeBool = true;



let touchDownType = function (event) {

    canvasStrokeBool = true;
    switch(event.pointerType) {
        case "mouse":
            window.addEventListener('mousemove', getCoordinates, false);
            break;
        case "pen":
            window.addEventListener('pointermove', getCoordinates, false);
            break;
        case "touch":
            window.addEventListener('touchmove', getCoordinates, false);
            break;
        default:
            /* pointerType is empty (could not be detected)
            or UA-specific custom type */
    }
}

let touchUpType = function (event) {

    canvasStrokeBool = false;
    switch(event.pointerType) {
        case "mouse":
            window.removeEventListener('mousemove', getCoordinates, false);
            break;
        case "pen":
            window.removeEventListener('pointermove', getCoordinates, false);
            break;
        case "touch":
            window.removeEventListener('touchmove', getCoordinates, false);
            break;
        default:
            /* pointerType is empty (could not be detected)
            or UA-specific custom type */
    }
}
let getCoordinates = function (e) {
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
let canvas = document.getElementById("imgCanvas");
window.addEventListener('pointerdown',touchDownType, false);
window.addEventListener('touchstart',touchDownType, false);

window.addEventListener('pointerup',touchUpType,false);
window.addEventListener('touchend',touchUpType,false);

let checkCoordinates = function (posx, posy) {
  console.log(posx);
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].x - 5);
    if(posx >= (arr[i].x - 20) && posx <= (arr[i].x + 20) && arr[i].bool === false){

      if(posy >= (arr[i].y - 20) && posy <= (arr[i].y + 20)){

          arr[i].bool = true;
          checkCanvas();

      }
    }
  }

}

let clearCanvas = function () {
  console.log("clearrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  let canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
window.onload = function () {

let letterA = [
{ x: 337, y: 615, bool: false },
{ x: 387, y: 484, bool: false },
{ x: 434, y: 348, bool: false },
{ x: 438, y: 529, bool: false },
{ x: 497, y: 221, bool: false },
{ x: 561, y: 341, bool: false },
{ x: 609, y: 487, bool: false },
{ x: 663, y: 615, bool: false },
{ x: 509, y: 522, bool: false },
];
let letterB = [
{ x: 337, y: 615, bool: false },
{ x: 387, y: 484, bool: false },
{ x: 434, y: 348, bool: false },
{ x: 438, y: 529, bool: false },
{ x: 497, y: 221, bool: false },
{ x: 561, y: 341, bool: false },
{ x: 609, y: 487, bool: false },
{ x: 663, y: 615, bool: false },
{ x: 509, y: 522, bool: false },
];

for (var i = 0; i < letterA.length; i++) {
  arr.push(letterA[i]);
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
  ctx.arc(x, y, 70, 0, 2 * Math.PI);
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
    alert("You are done! good jobbbbbbbbbbbbbbb!");
  }

}
