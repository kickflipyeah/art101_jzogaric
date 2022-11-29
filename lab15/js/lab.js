/**
 * Author:    Jessica Zogaric
 * Created:   11.22.22
 * ART 101
 *
 **/

function getAPIData() {
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://itsthisforthat.com/api.php?text",
    type: "GET",
    success: function(data) {
        $("#output").html(data);
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})

}

$("#activate").click(getAPIData);
