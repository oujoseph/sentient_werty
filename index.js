var tessel = require("tessel");
var backpack = require('backpack-ht16k33').use(tessel.port['B']);

//backpack.on('ready', function() {
//  backpack.clear();
//  var bitmap = [
//    [1,1,1,1,1,1,1,1],
//    [1,0,0,0,0,0,0,1],
//    [1,0,0,0,0,0,0,1],
//    [1,0,0,0,0,0,0,1],
//    [1,0,0,0,0,0,0,1],
//    [1,0,0,0,0,0,0,1],
//    [1,0,0,0,0,0,0,1],
//    [1,1,1,1,1,1,1,1],
//  ];
//  backpack.writeBitmap(bitmap);
//});

//backpack.clear ( callback(err) );

//setTimeout(function(){
//    var bitmap = [
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//    [1,1,1,1,1,1,1,1],
//  ];
//  backpack.writeBitmap(bitmap);
//}, 0);

var bitmap = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
];
var smile = [
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,1,1,0,0,0],
    [0,0,0,0,0,0,0,0],
];
var mouth_open = [
    [0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,1,1,1,1,0,0],
    [0,0,0,1,1,0,0,0],
];
var frames = [smile, mouth_open, smile, mouth_open, smile, mouth_open, smile, mouth_open, smile, mouth_open];
backpack.animate(frames, 500);

//backpack.on('ready', function() {
//  backpack.clear();
//  var smile = [
//    [0,0,0,0,0,0,0,0],
//    [0,1,0,0,0,0,1,0],
//    [0,1,0,0,0,0,1,0],
//    [0,0,0,0,0,0,0,0],
//    [0,0,0,0,0,0,0,0],
//    [0,0,1,1,1,1,0,0],
//    [0,0,0,1,1,0,0,0],
//    [0,0,0,0,0,0,0,0],
//  ];
//  backpack.writeBitmap(bitmap);
//});

//for(var i =0; i < 7; i++){
//    for(var j = 0; j < 7; j++){
//        setInterval(function(){
//            bitmap[i][j] = 1;
//            backpack.writeBitmap(bitmap);
//        },23);
//    }
//    
//}

'use strict';
const os = require('os');
const path = require('path');
const av = require('tessel-av');
 
const speaker = new av.Speaker();
 

var weather = "sunny";
var lows = 50;
var highs = 12332.352;
speaker.say({
    phrase: "The forecast today is " + weather + ". The temperature is " + lows + " to  " + highs + " degrees.",
    a: 40,
    //amplitude (volume)
    p: 60,
    //pitch
    v: 'en-us+f2',
})

console.log("I'm blinking! (Press CTRL + C to stop)")