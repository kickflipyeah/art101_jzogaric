/**
 * Author:    Jessica Zogaric
 * Created:   10.22.22
 * ART 101
 *
 **/

 myTransport = ["Honda Civic", " bike", " bus", " train "];

 myMainRide = {
   make: "Honda",
   model: "Civic",
   color: "gray",
   year: 2019,
   age: function() {
      return 2019 - age;
   }
 }

 document.writeln("Kinds of transportation that I use: ", myTransport, ".</br>");
 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
