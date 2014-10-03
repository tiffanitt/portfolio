/**
 * Created by TTruong on 10/2/14.
 */
$(document).ready(function() {
    var clientID = '50fe0d67e2b84cc5821321f45c0eaac6';
    var userID = '1237504007';
    var displayInfo = {};


        $.ajax({
            url: 'https://api.instagram.com/v1/users/'+ userID +'/media/recent/?client_id=' + clientID,
            type: 'GET',
            dataType: 'jsonp',
            success: function (response) {
                console.log(response);
                for (i=0; i < response.data.length; i++) {
                    displayInfo = {};
                    displayInfo.img = response.data[i].images.thumbnail.url;
                    var gallery = $('#photos');
                    gallery.append("<img src='" + displayInfo.img + "'/>");
                }
            },
            error: function (error_message) {
                console.log(error_message);
            }
        });
    });

