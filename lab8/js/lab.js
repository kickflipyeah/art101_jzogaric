/**
 * Author:    Jessica Zogaric
 * Created:   10.25.22
 * ART 101
 *
 **/

function numAdd(x){
    return (x + x) - 8;
    console.log("numAdd", );
}

console.log("test numAdd", numAdd(5));
console.log("test numAdd", numAdd(12));

numArray = [3, 5, 8, 9, 12, 26, 79];
console.log("numArray", numArray);

var withAdd = numArray.map(numAdd);
//will display results of numAdd after performed on numArray
console.log("function numAdd performed on numArray", withAdd);

var withAdd = numArray.map(function(x){
    return (x * x) + (x - 2);
})

console.log("Array multiplied by itself added to itself minus 2", withAdd);
