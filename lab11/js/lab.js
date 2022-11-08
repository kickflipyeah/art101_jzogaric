/**
 * Author:    Jessica Zogaric
 * Created:   11.8.22
 * ART 101
 *
 **/

$('.p').append("<button id='my-button'> Please press me!");

$("button").click(function(){
  $('.p').toggleClass("special");
});
