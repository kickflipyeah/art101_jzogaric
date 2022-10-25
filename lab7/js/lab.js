/**
 * Author:    Jessica Zogaric
 * Created:   10.24.22
 * ART 101
 *
 **/

//function creates pop up, prompts user, splits string to array, sorts array,
//puts array back into string, and then returns a sorted name.
 function userName_sort() {
   //prompts window and asks for name
   var userName = window.prompt("Hello, Please enter your username so I can sort it!");
   console.log("userName = jess", userName);
   //split the string to an array of the characters
   var userArray = userName.split("");
   console.log("userArray =", userArray);
   //now sort the array of characters
   var userArray_sort = userArray.sort();
   console.log("userArray_sort =", userArray_sort);
   //return the sorted array
   var userArray_join = userArray_sort.join("");
   console.log("userArray_join =", userArray_join);
   //make first letter Uppercase
   var userUppercase = userArray_join.charAt(0).toUpperCase() + userArray_join.slice(1);
   console.log("userUppercase =", userUppercase);

   return userUppercase;
   //this function has the potential to be shortened to just userName.toLower().split("").sort().join("")
 }

//output and use the function.
document.writeln("I have rearranged your name! Here it is: ",
    userName_sort(), "</br>");
