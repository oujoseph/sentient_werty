const os = require('os');
const tessel = require("tessel");
const av = require('tessel-av');

var path=require('path');
var root=path.dirname(process.mainModule.filename);
var backpack = require('backpack-ht16k33').use(tessel.port['B']);

module.exports = {
    weather: function(callback){
        console.log("In weather retrieval");
        
        var smile = [
            [0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,1,0],
            [1,0,1,0,0,1,0,1],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,0,0],
        ];
        var mouth_open = [
            [0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,1,0],
            [1,0,1,0,0,1,0,1],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,0,0],
            [0,0,1,1,1,1,0,0],
            [0,0,0,1,1,0,0,0],
        ];
        var talkingLoop = setInterval(talking,500);
        
        function talking(){
            frames = [smile, mouth_open];
            backpack.animate(frames, 250);
        };


        const speaker = new av.Speaker();


        var weather = "sunny";
        var lows = 50;
        var highs = 12321231;

        speaker.say({
            phrase: "The forecast today is " + weather + ". The temperature is " + lows + " to  " + highs + " degrees.",
            a: 40,
            //amplitude (volume)
            p: 60,
            //pitch
            v: 'en-us+f2',
        })
        speaker.on('ended', function(){
            clearInterval(talkingLoop);
        })
        return callback;
    }
}