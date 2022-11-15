/**
 * Author:    Jessica Zogaric
 * Created:   11.14.22
 * ART 101
 *
 **/


 function FizzBuzz(){
   var str = "";
   for(var i = 1; i <= 200; i++){
     if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
       str += i + " - " +  " FizzBuzzBoom" + "<br>";
     }
     else if (i % 3 == 0 && i % 5 == 0){
       str += i + " - " +  " FizzBuzz" + "<br>";
     }
     else if (i % 3 == 0 && i % 7 == 0){
       str += i + " - " +  " FizzBoom" + "<br>";
     }
     else if (i % 3 == 0){
       str += i + " - " + "Fizz" + "<br>";
     }
     else if (i % 5 == 0){
       str += i + " - " + "Buzz " + "<br>";
     }
     else if (i % 7 == 0){
       str += i + " - " + "Boom " + "<br>";
     }else{
       str += i + " - " + "<br>";
     }
   }
   return str;
 }

var string = FizzBuzz();
console.log(string);
$('#output').html(string);
