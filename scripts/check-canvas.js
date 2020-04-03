
let displayImg = function () {

  let rand = randomNumbers(5);

  if(rand < 1 || rand > 5){

    rand = 1;

  }
  popUpSound.play();
  document.getElementById("popUp").style.display = "block";
  document.getElementById("popUp").innerHTML = "<img src='assets/images/happy" + rand + ".jpg' class='imgStyles' id='imgHappy' alt='Smiley face picture for kids'>";
  document.getElementById("popUp").classList.add("spinner");

  setTimeout(function(){
    hideImg();
  },1000);

}

let hideImg = function () {

  document.getElementById("popUp").classList.remove("spinner");

  setTimeout(function () { document.getElementById("popUp").style.display = "none";},2000);

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



let randomNumbers = function(max){

  let rand = Math.floor(Math.random() * max);

  return rand;

}
