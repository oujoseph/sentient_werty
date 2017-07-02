var tessel = require("tessel");
var wakeup = require("./app/display_module/wake_up_animation");
var weather = require("./app/forecast_module/weather");
var backpack = require('backpack-ht16k33').use(tessel.port['B']);

const os = require('os');
const path = require('path');


// const av = require('tessel-av');
// const mic = new av.Microphone();

// mic.monitor(mic.listen());

// setTimeout(() => {
//   mic.stop();
// }, 5000);

// .listen() returns a stream...

// var request = require('request')


// var headers = {
//     'Authorization': 'Bearer NI5VLATDYJNNO2RMGBR2WBO6EE27MV65',
//     'Content-Type': 'audio/wav'
// };


// var options = {
//     url: 'https://api.wit.ai/speech?v=20160526',
//     method: 'POST',
//     headers: headers,
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }else console.log(error);
// }
// console.log("starting mic");
// mic.listen().pipe(request(options, callback));

// setTimeout(function(){
// 	mic.stop();
// 	console.log("stopping mic");
// }, 2000)

wakeup.wakeUp(weather.weather);