var canvas,ctx;
let imgArray = [];
let arr = [];
let letterNum = -1;
let count = 0;
let drawingCorrect = false;
let colorStroke = "black";
const soundEffect = new Audio();
let audioBool = false;

// onClick of first interaction on page before I need the sounds
//soundEffect.play();

// later on when you actually want to play a sound at any point without user interactio


var mouseX,mouseY,mouseDown=0;


var touchX,touchY;


function drawDot(ctx,x,y,size) {

  console.log("{ x: " + x + ", y: " + y + ", bool: false },");

    if(window.innerHeight < window.innerWidth){
      x-=65;
    }
    ctx.fillStyle = colorStroke;

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    if(drawingCorrect === false){
    checkCoordinates(x,y);
  }
}



function sketchpad_mouseDown() {
  soundEffect.play();
    mouseDown=1;
    drawDot(ctx,mouseX,mouseY,55);
}


function sketchpad_mouseUp() {
  soundEffect.play();
    mouseDown=0;
}


function sketchpad_mouseMove(e) {
  soundEffect.play();
    getMousePos(e);


    if (mouseDown==1) {
        drawDot(ctx,mouseX,mouseY,55);
    }
}


function getMousePos(e) {
  soundEffect.play();
    if (!e)
        var e = event;

    if (e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if (e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
 }


function sketchpad_touchStart() {
  soundEffect.play();
    getTouchPos();

    drawDot(ctx,touchX,touchY,55);


    event.preventDefault();
}


function sketchpad_touchMove(e) {
  soundEffect.play();
    getTouchPos(e);


    drawDot(ctx,touchX,touchY,55);


    event.preventDefault();
}


function getTouchPos(e) {
  soundEffect.play();
    if (!e)
        var e = event;

    if(e.touches) {
        if (e.touches.length == 1) { // Only deal with one finger
            var touch = e.touches[0]; // Get the information for finger #1
            touchX=touch.pageX-touch.target.offsetLeft;
            touchY=touch.pageY-touch.target.offsetTop;
        }
    }
}

let addColors =  function () {
let li = document.getElementsByTagName("li");
li[0].style.backgroundColor = "black";
li[1].style.backgroundColor = "green";
li[2].style.backgroundColor = "red";
li[3].style.backgroundColor = "blue";
li[4].style.backgroundColor = "yellow";
li[4].style.color = "black";

//checkScreenWidth();
}

function init() {


    canvas = document.getElementById('sketchpad');
    //addColors();
    // If the browser supports the canvas tag, get the 2d drawing context for this canvas
    if (canvas.getContext)
        ctx = canvas.getContext('2d');


    if (ctx) {

        getLetter(-1);
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);
        window.addEventListener('mouseup', sketchpad_mouseUp, false);

        canvas.addEventListener('touchstart', sketchpad_touchStart, false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false);
    }
}

let changeColorStroke = function (num) {
  console.log("colorChange");
  let colors = ["black","green","red","blue","purple","#ff3399","yellow","orange","#66ff33","#ff1a1a","#00ffff","#ff99ff","#ff33cc","brown","white"]

  colorStroke = colors[num];
}

let showColorPallet = function () {
  playSound(1);
  if(document.getElementById("hiddenPanel2").classList.contains("slideIn")){
    document.getElementById("hiddenPanel2").classList.remove("slideIn");
  }
  document.getElementById("hiddenPanel1").classList.toggle("slideIn");


}
let showLetterPallet = function () {
  playSound(1);
  if(document.getElementById("hiddenPanel1").classList.contains("slideIn")){
    document.getElementById("hiddenPanel1").classList.remove("slideIn");
  }
  document.getElementById("hiddenPanel2").classList.toggle("slideIn");

  console.log("stuff");
}

let checkCoordinates = function (posx, posy) {
  imgArray.push({x:posx,y:posy});
  for (var i = 0; i < arr.length; i++) {
    if(posx >= (arr[i].x - 20) && posx <= (arr[i].x + 20) && arr[i].bool === false){

      if(posy >= (arr[i].y - 20) && posy <= (arr[i].y + 20)){

          arr[i].bool = true;
          checkCanvas();

      }
    }
  }

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
    drawingCorrect = true;
    displayImg();
  }

}

let displayImg = function () {

  let rand = randomNumbers(5);

  if(rand < 1 || rand > 5){

    rand = 1;

  }

  document.getElementById("popUp").style.display = "block";
  document.getElementById("popUp").innerHTML = "<img src='images/happy" + rand + ".jpg' class='imgStyles' id='imgHappy' alt='Smiley face picture for kids'>";
  document.getElementById("popUp").classList.add("spinner");

  setTimeout(function(){
    hideImg();
  },1000);

}

let hideImg = function () {

  document.getElementById("popUp").classList.remove("spinner");

  setTimeout(function () { document.getElementById("popUp").style.display = "none";},2000);

}

let btnGetLetter = function (num) {

  if(num === -1){
    playSound(2);
  }else{
    playSound(2);
  }
  getLetter(num);

}

let getLetter = function (num) {
hideImg();
clearCanvas(canvas, ctx);
imgArray = [];
arr = [];

let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


let letterA = [
{ x: 353, y: 438, bool: false },
{ x: 398, y: 339, bool: false },
{ x: 439, y: 242, bool: false },
{ x: 496, y: 168, bool: false },
{ x: 550, y: 240, bool: false },
{ x: 588, y: 342, bool: false },
{ x: 632, y: 432, bool: false },
{ x: 522, y: 378, bool: false },
{ x: 456, y: 376, bool: false },
];

let letterB = [
{ x: 390, y: 191, bool: false },
{ x: 397, y: 434, bool: false },
{ x: 396, y: 315, bool: false },
{ x: 534, y: 170, bool: false },
{ x: 626, y: 226, bool: false },
{ x: 551, y: 310, bool: false },
{ x: 638, y: 389, bool: false },
{ x: 518, y: 456, bool: false }];

let letterC = [
{ x: 612, y: 414, bool: false },
{ x: 499, y: 430, bool: false },
{ x: 396, y: 360, bool: false },
{ x: 390, y: 242, bool: false },
{ x: 486, y: 168, bool: false },
{ x: 601, y: 186, bool: false }];

let letterD = [
{ x: 374, y: 433, bool: false },
{ x: 533, y: 426, bool: false },
{ x: 632, y: 346, bool: false },
{ x: 626, y: 228, bool: false },
{ x: 513, y: 169, bool: false },
{ x: 381, y: 169, bool: false },
{ x: 372, y: 294, bool: false }];

let letterE = [
{ x: 612, y: 439, bool: false },
{ x: 510, y: 438, bool: false },
{ x: 398, y: 439, bool: false },
{ x: 403, y: 326, bool: false },
{ x: 403, y: 154, bool: false },
{ x: 403, y: 235, bool: false },
{ x: 503, y: 159, bool: false },
{ x: 604, y: 166, bool: false },
{ x: 501, y: 304, bool: false },
{ x: 596, y: 303, bool: false }];

let letterF = [
{ x: 617, y: 164, bool: false },
{ x: 507, y: 158, bool: false },
{ x: 404, y: 154, bool: false },
{ x: 412, y: 257, bool: false },
{ x: 416, y: 357, bool: false },
{ x: 423, y: 438, bool: false },
{ x: 507, y: 330, bool: false },
{ x: 599, y: 321, bool: false }];

let letterG = [
{ x: 623, y: 335, bool: false },
{ x: 584, y: 438, bool: false },
{ x: 455, y: 427, bool: false },
{ x: 371, y: 323, bool: false },
{ x: 412, y: 201, bool: false },
{ x: 540, y: 171, bool: false },
{ x: 621, y: 198, bool: false }];

let letterH = [
{ x: 383, y: 442, bool: false },
{ x: 384, y: 317, bool: false },
{ x: 377, y: 179, bool: false },
{ x: 500, y: 299, bool: false },
{ x: 614, y: 291, bool: false },
{ x: 616, y: 171, bool: false },
{ x: 615, y: 434, bool: false }];

let letterI = [
{ x: 494, y: 166, bool: false },
{ x: 494, y: 258, bool: false },
{ x: 499, y: 353, bool: false },
{ x: 495, y: 446, bool: false },
{ x: 496, y: 446, bool: false }];

let letterJ = [
{ x: 426, y: 169, bool: false },
{ x: 562, y: 169, bool: false },
{ x: 523, y: 431, bool: false },
{ x: 554, y: 300, bool: false },
{ x: 396, y: 429, bool: false }];

let letterK = [
{ x: 388, y: 439, bool: false },
{ x: 387, y: 314, bool: false },
{ x: 387, y: 174, bool: false },
{ x: 484, y: 285, bool: false },
{ x: 601, y: 155, bool: false },
{ x: 555, y: 366, bool: false },
{ x: 615, y: 449, bool: false },
];

let letterL = [
{ x: 425, y: 434, bool: false },
{ x: 600, y: 434, bool: false },
{ x: 425, y: 277, bool: false },
{ x: 431, y: 160, bool: false },
];

let letterM = [
{ x: 337, y: 434, bool: false },
{ x: 336, y: 295, bool: false },
{ x: 335, y: 165, bool: false },
{ x: 432, y: 287, bool: false },
{ x: 500, y: 387, bool: false },
{ x: 499, y: 386, bool: false },
{ x: 571, y: 272, bool: false },
{ x: 656, y: 170, bool: false },
{ x: 655, y: 307, bool: false },
{ x: 657, y: 429, bool: false },
];

let letterN = [
{ x: 376, y: 432, bool: false },
{ x: 375, y: 297, bool: false },
{ x: 371, y: 166, bool: false },
{ x: 481, y: 284, bool: false },
{ x: 557, y: 381, bool: false },
{ x: 628, y: 442, bool: false },
{ x: 623, y: 285, bool: false },
{ x: 612, y: 169, bool: false },
];

let letterO = [
{ x: 492, y: 162, bool: false },
{ x: 609, y: 222, bool: false },
{ x: 627, y: 369, bool: false },
{ x: 499, y: 441, bool: false },
{ x: 364, y: 390, bool: false },
{ x: 364, y: 255, bool: false },
];

let letterP = [
{ x: 400, y: 190, bool: false },
{ x: 393, y: 315, bool: false },
{ x: 398, y: 434, bool: false },
{ x: 504, y: 344, bool: false },
{ x: 619, y: 264, bool: false },
{ x: 536, y: 166, bool: false },
];

let letterQ = [
{ x: 648, y: 522, bool: false },
{ x: 530, y: 491, bool: false },
{ x: 609, y: 391, bool: false },
{ x: 627, y: 238, bool: false },
{ x: 451, y: 164, bool: false },
{ x: 349, y: 302, bool: false },
{ x: 407, y: 412, bool: false },
];

let letterR = [
{ x: 604, y: 441, bool: false },
{ x: 521, y: 355, bool: false },
{ x: 392, y: 426, bool: false },
{ x: 394, y: 295, bool: false },
{ x: 399, y: 182, bool: false },
{ x: 532, y: 170, bool: false },
{ x: 610, y: 254, bool: false },
];

let letterS = [
{ x: 575, y: 169, bool: false },
{ x: 432, y: 172, bool: false },
{ x: 413, y: 283, bool: false },
{ x: 535, y: 313, bool: false },
{ x: 595, y: 399, bool: false },
{ x: 408, y: 426, bool: false },
{ x: 507, y: 446, bool: false },
];

let letterT = [
{ x: 499, y: 436, bool: false },
{ x: 603, y: 166, bool: false },
{ x: 392, y: 164, bool: false },
{ x: 500, y: 175, bool: false },
{ x: 499, y: 304, bool: false },
];

let letterU = [
{ x: 381, y: 177, bool: false },
{ x: 377, y: 311, bool: false },
{ x: 423, y: 418, bool: false },
{ x: 502, y: 450, bool: false },
{ x: 587, y: 394, bool: false },
{ x: 616, y: 269, bool: false },
{ x: 611, y: 165, bool: false },
];

let letterV = [
{ x: 369, y: 172, bool: false },
{ x: 413, y: 295, bool: false },
{ x: 496, y: 432, bool: false },
{ x: 572, y: 306, bool: false },
{ x: 628, y: 165, bool: false },
];

let letterW = [
{ x: 375, y: 444, bool: false },
{ x: 624, y: 431, bool: false },
{ x: 271, y: 177, bool: false },
{ x: 505, y: 178, bool: false },
{ x: 724, y: 172, bool: false },
{ x: 311, y: 298, bool: false },
{ x: 444, y: 309, bool: false },
{ x: 556, y: 309, bool: false },
{ x: 692, y: 307, bool: false },
];

let letterX = [
{ x: 395, y: 165, bool: false },
{ x: 604, y: 162, bool: false },
{ x: 496, y: 290, bool: false },
{ x: 604, y: 444, bool: false },
{ x: 377, y: 450, bool: false },
];

let letterY = [
{ x: 384, y: 165, bool: false },
{ x: 611, y: 167, bool: false },
{ x: 498, y: 437, bool: false },
{ x: 496, y: 317, bool: false },
];

let letterZ = [
{ x: 389, y: 168, bool: false },
{ x: 614, y: 434, bool: false },
{ x: 608, y: 167, bool: false },
{ x: 384, y: 440, bool: false },
{ x: 491, y: 310, bool: false },
];


let letterCoordsArr = [letterA,letterB,letterC, letterD, letterE, letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letterM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ];

if(num > -1){

  for (var i = 0; i < letterCoordsArr[num].length; i++) {
    arr.push(letterCoordsArr[num][i]);
  }
  document.getElementById("letterLayer").innerHTML =letters[num];
  letterNum = num;
}else{

for (var i = 0; i < 1; i++) {

  let rand = randomNumbers(letterCoordsArr.length);

  for (var j = 0; j < letterCoordsArr[rand].length; j++) {

    arr.push(letterCoordsArr[rand][j]);

}
  //memoryArr = arr;
  document.getElementById("letterLayer").innerHTML = letters[rand];
  letterNum = rand;
}
}
  console.log(arr);
}



let randomNumbers = function(max){

  let rand = Math.floor(Math.random() * max);

  return rand;

}

let btnClear = function () {
  playSound(1);
  imgArray= [];
  drawingCorrect = false;
  hideImg();
  getLetter(letterNum);
  clearCanvas(canvas, ctx);
}

let clearCanvas = function (canvas,ctx) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

let playSound = function (num) {

    switch (num) {
      case 1:
      var audio = new Audio('sounds/rollover3.ogg');
        audio.play();
        break;
      case 2:
        var audio = new Audio('sounds/rollover3.ogg');
        audio.play();
        break;
    }

}

let playAudio = function () {

  if (playAudio === false) {

    soundEffect.play();

  }

}
