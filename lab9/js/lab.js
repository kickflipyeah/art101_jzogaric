/**
 * Author:    Jessica Zogaric
 * Created:   10.31.22
 * ART 101
 *
 **/

var outputEl = document.getElementsByClassName("output"); //assign output div from html to the variable outputEl (find our output)

var new1El = document.createElement("p"); //create new element "p" (we gonna put it into the output)

new1El.innerHTML = ("Hello..."); //make p say hello using the innerHTML

var new2El = document.createElement("p"); //trying to create a new element "p"

new2El.innerHTML = "Here I am trying to get class elements from an HTML page on Halloween :///////"; //tryng to change what "p" says

outputEl[0].appendChild(new1El); //appending the first new element to my output
outputEl[0].appendChild(new2El); //appending the second new element to my output

document.getElementsByClassName("h1")[0].style.backgroundColor = "blue"; //change the first header in spot 0 to be red background
document.getElementsByClassName("h1")[1].style.backgroundColor = "red"; //change the first header in spot 1 to be red background
document.getElementsByClassName("h1")[2].style.backgroundColor = "purple"; //change the first header in spot 2 to be red background
document.getElementsByClassName("h3")[0].style.padding = "100px"; //change the third header in spot 0 to have 100px of padding
