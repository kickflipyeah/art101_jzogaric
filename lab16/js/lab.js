/**
 * Author:    Jessica Zogaric
 * Created:   11.28.22
 * ART 101
 *
 **/

 var endpoint = "https://xkcd.com/614/info.0.json"

 function cookie(){
// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: endpoint,
    // The data to send (will be converted to a query string)

    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back


    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        $("#output").append("<h4>" + data.title + "</h4>");
        $("#output").append("<img src=" + data.img + ">");
        $("#output").append("<p>" + data.alt + "</p>");
      },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("failure");
        console.log("Error:", textStatus, errorThrown);
    }
  })
}

cookie();
