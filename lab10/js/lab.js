/**
 * Author:    Jessica Zogaric
 * Created:   11.2.22
 * ART 101
 *
 **/

var userOutput = document.getElementById("output");

  var userInput = document.getElementById("my-button").addEventListener("click", function() {
    var userInput = document.getElementById("user-name").value;
    var userInput = userInput.toLowerCase().split("").sort().join("");
    console.log(userInput);
    userOutput.innerHTML = "Here is your new username:  " + userInput;

  });
