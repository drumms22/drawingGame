let imgArray = [];
let arr = [];
let letterNum = -1;


let letterCoordsArr =[

{coords:[//A
  { x: 353, y: 438, bool: false },
  { x: 398, y: 339, bool: false },
  { x: 439, y: 242, bool: false },
  { x: 496, y: 168, bool: false },
  { x: 550, y: 240, bool: false },
  { x: 588, y: 342, bool: false },
  { x: 632, y: 432, bool: false },
  { x: 522, y: 378, bool: false },
  { x: 456, y: 376, bool: false },
]},

{coords:[//B
  { x: 390, y: 191, bool: false },
  { x: 397, y: 434, bool: false },
  { x: 396, y: 315, bool: false },
  { x: 534, y: 170, bool: false },
  { x: 626, y: 226, bool: false },
  { x: 551, y: 310, bool: false },
  { x: 638, y: 389, bool: false },
  { x: 518, y: 456, bool: false }
]},

{coords:[//C
  { x: 612, y: 414, bool: false },
  { x: 499, y: 430, bool: false },
  { x: 396, y: 360, bool: false },
  { x: 390, y: 242, bool: false },
  { x: 486, y: 168, bool: false },
  { x: 601, y: 186, bool: false }
]},

{coords:[//D
  { x: 374, y: 433, bool: false },
  { x: 533, y: 426, bool: false },
  { x: 632, y: 346, bool: false },
  { x: 626, y: 228, bool: false },
  { x: 513, y: 169, bool: false },
  { x: 381, y: 169, bool: false },
  { x: 372, y: 294, bool: false }
]},

{coords:[//E
  { x: 612, y: 439, bool: false },
  { x: 510, y: 438, bool: false },
  { x: 398, y: 439, bool: false },
  { x: 403, y: 326, bool: false },
  { x: 403, y: 154, bool: false },
  { x: 403, y: 235, bool: false },
  { x: 503, y: 159, bool: false },
  { x: 604, y: 166, bool: false },
  { x: 501, y: 304, bool: false },
  { x: 596, y: 303, bool: false }
]},

{coords:[//F
  { x: 617, y: 164, bool: false },
  { x: 507, y: 158, bool: false },
  { x: 404, y: 154, bool: false },
  { x: 412, y: 257, bool: false },
  { x: 416, y: 357, bool: false },
  { x: 423, y: 438, bool: false },
  { x: 507, y: 330, bool: false },
  { x: 599, y: 321, bool: false }
]},

{coords:[//G
  { x: 623, y: 335, bool: false },
  { x: 584, y: 438, bool: false },
  { x: 455, y: 427, bool: false },
  { x: 371, y: 323, bool: false },
  { x: 412, y: 201, bool: false },
  { x: 540, y: 171, bool: false },
  { x: 621, y: 198, bool: false }
]},

{coords:[//H
  { x: 383, y: 442, bool: false },
  { x: 384, y: 317, bool: false },
  { x: 377, y: 179, bool: false },
  { x: 500, y: 299, bool: false },
  { x: 614, y: 291, bool: false },
  { x: 616, y: 171, bool: false },
  { x: 615, y: 434, bool: false }
]},

{coords:[//I
  { x: 494, y: 166, bool: false },
  { x: 494, y: 258, bool: false },
  { x: 499, y: 353, bool: false },
  { x: 495, y: 446, bool: false },
  { x: 496, y: 446, bool: false }
]},

{coords:[//J
  { x: 426, y: 169, bool: false },
  { x: 562, y: 169, bool: false },
  { x: 523, y: 431, bool: false },
  { x: 554, y: 300, bool: false },
  { x: 396, y: 429, bool: false }
]},

{coords:[//K
  { x: 388, y: 439, bool: false },
  { x: 387, y: 314, bool: false },
  { x: 387, y: 174, bool: false },
  { x: 484, y: 285, bool: false },
  { x: 601, y: 155, bool: false },
  { x: 555, y: 366, bool: false },
  { x: 615, y: 449, bool: false }
]},

{coords:[//L
  { x: 425, y: 434, bool: false },
  { x: 600, y: 434, bool: false },
  { x: 425, y: 277, bool: false },
  { x: 431, y: 160, bool: false }
]},


{coords:[//M
  { x: 337, y: 434, bool: false },
  { x: 336, y: 295, bool: false },
  { x: 335, y: 165, bool: false },
  { x: 432, y: 287, bool: false },
  { x: 500, y: 387, bool: false },
  { x: 499, y: 386, bool: false },
  { x: 571, y: 272, bool: false },
  { x: 656, y: 170, bool: false },
  { x: 655, y: 307, bool: false },
  { x: 657, y: 429, bool: false }
]},

{coords:[//N
  { x: 376, y: 432, bool: false },
  { x: 375, y: 297, bool: false },
  { x: 371, y: 166, bool: false },
  { x: 481, y: 284, bool: false },
  { x: 557, y: 381, bool: false },
  { x: 628, y: 442, bool: false },
  { x: 623, y: 285, bool: false },
  { x: 612, y: 169, bool: false }
]},

{coords:[//O
  { x: 492, y: 162, bool: false },
  { x: 609, y: 222, bool: false },
  { x: 627, y: 369, bool: false },
  { x: 499, y: 441, bool: false },
  { x: 364, y: 390, bool: false },
  { x: 364, y: 255, bool: false }
]},

{coords:[//P
  { x: 400, y: 190, bool: false },
  { x: 393, y: 315, bool: false },
  { x: 398, y: 434, bool: false },
  { x: 504, y: 344, bool: false },
  { x: 619, y: 264, bool: false },
  { x: 536, y: 166, bool: false },
]},

{coords:[//Q
  { x: 648, y: 522, bool: false },
  { x: 530, y: 491, bool: false },
  { x: 609, y: 391, bool: false },
  { x: 627, y: 238, bool: false },
  { x: 451, y: 164, bool: false },
  { x: 349, y: 302, bool: false },
  { x: 407, y: 412, bool: false }
]},

{coords:[//R
  { x: 604, y: 441, bool: false },
  { x: 521, y: 355, bool: false },
  { x: 392, y: 426, bool: false },
  { x: 394, y: 295, bool: false },
  { x: 399, y: 182, bool: false },
  { x: 532, y: 170, bool: false },
  { x: 610, y: 254, bool: false },
]},

{coords:[//S
  { x: 575, y: 169, bool: false },
  { x: 432, y: 172, bool: false },
  { x: 413, y: 283, bool: false },
  { x: 535, y: 313, bool: false },
  { x: 595, y: 399, bool: false },
  { x: 408, y: 426, bool: false },
  { x: 507, y: 446, bool: false },
]},

{coords:[//T
  { x: 499, y: 436, bool: false },
  { x: 603, y: 166, bool: false },
  { x: 392, y: 164, bool: false },
  { x: 500, y: 175, bool: false },
  { x: 499, y: 304, bool: false },
]},

{coords:[//U
  { x: 381, y: 177, bool: false },
  { x: 377, y: 311, bool: false },
  { x: 423, y: 418, bool: false },
  { x: 502, y: 450, bool: false },
  { x: 587, y: 394, bool: false },
  { x: 616, y: 269, bool: false },
  { x: 611, y: 165, bool: false },
]},

{coords:[//V
  { x: 369, y: 172, bool: false },
  { x: 413, y: 295, bool: false },
  { x: 496, y: 432, bool: false },
  { x: 572, y: 306, bool: false },
  { x: 628, y: 165, bool: false },
]},

{coords:[//W
  { x: 375, y: 444, bool: false },
  { x: 624, y: 431, bool: false },
  { x: 271, y: 177, bool: false },
  { x: 505, y: 178, bool: false },
  { x: 724, y: 172, bool: false },
  { x: 311, y: 298, bool: false },
  { x: 444, y: 309, bool: false },
  { x: 556, y: 309, bool: false },
  { x: 692, y: 307, bool: false }
]},

{coords:[//X
  { x: 395, y: 165, bool: false },
  { x: 604, y: 162, bool: false },
  { x: 496, y: 290, bool: false },
  { x: 604, y: 444, bool: false },
  { x: 377, y: 450, bool: false },
]},

{coords:[//Y
  { x: 384, y: 165, bool: false },
  { x: 611, y: 167, bool: false },
  { x: 498, y: 437, bool: false },
  { x: 496, y: 317, bool: false },
]},

{coords:[//Z
  { x: 389, y: 168, bool: false },
  { x: 614, y: 434, bool: false },
  { x: 608, y: 167, bool: false },
  { x: 384, y: 440, bool: false },
  { x: 491, y: 310, bool: false },
]},

];


/*for (var i = 0; i < test[0].A.length; i++) {
  console.log(test[0].A[i].x);
}*/


const popUpSound = new Howl({
  src: ['assets/sounds/levelUp.wav']
});

let btnGetLetter = function (num) {

  letterClickSound.play();
  setTimeout(closePanel, 200);
  getLetter(num);

}

let getLetter = function (num) {

drawingCorrect = false;

setLetterBool();

clearCanvas(canvas, ctx);
imgArray = [];
arr = [];


let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


if(num > -1){

  for (var i = 0; i < letterCoordsArr[num].coords.length; i++) {
    arr.push(letterCoordsArr[num].coords[i]);
  }
  document.getElementById("letterLayer").innerHTML =letters[num];
  letterNum = num;

}else{

for (var i = 0; i < 1; i++) {

  let rand = randomNumbers(letterCoordsArr.length);

  for (var j = 0; j < letterCoordsArr[rand].coords.length; j++) {

    arr.push(letterCoordsArr[rand].coords[j]);

}
  //memoryArr = arr;
  document.getElementById("letterLayer").innerHTML = letters[rand];
  letterNum = rand;
}
}
console.log(arr);
}

let setLetterBool = function () {

  if(letterNum > -1){

    for (var i = 0; i < letterCoordsArr[letterNum].coords.length; i++) {

      letterCoordsArr[letterNum].coords[i].bool = false;

    }
  }

}
