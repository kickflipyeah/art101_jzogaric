/**
 * Author:    Jessica Zogaric
 * Created:   11.8.22
 * ART 101
 *
 **/

$('#p').append("<button id='my-button'> Please press me!");
$('#p1').append("<button id='my-button1'> Please press me!");
$('#p2').append("<button id='my-button2'> Please press me!");

$("#my-button").click(function(){
  $('#p').toggleClass("special");
});

$("#my-button1").click(function(){
  $('#p1').toggleClass("special");
});

$("#my-button2").click(function(){
  $('#p2').toggleClass("special");
});
