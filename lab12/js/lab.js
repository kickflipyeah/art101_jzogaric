/**
 * Author:    Jessica Zogaric
 * Created:   11.9.22
 * ART 101
 *
 **/

function sortingHat(str){
  str_len = str.length;
  modulus = str_len % 4;
  if (modulus == 0){
    return "Gryffindor"
  }
  else if (modulus == 1){
    return "RavenClaw"
  }
  else if (modulus == 2){
    return "Slytherin"
  }
  else if (modulus == 3){
    return "Hufflepuff"
  }
}

$("#button").click(function(){
  name = $("#input");
  house = sortingHat(name);
  $("#output").append("<p> The Sorting Hat has sorted you into " + house + " house</p>");
});
