/**
 * Created by TTruong on 10/2/14.
 */
$(document).ready(function() {
    var clientID = '50fe0d67e2b84cc5821321f45c0eaac6';
    var userID = '1237504007';
    var displayInfo = {};

        $.ajax({
            url: 'https://api.instagram.com/v1/users/'+ userID +'/media/recent/?client_id=' + clientID + "&callback=?&count=18",
            type: 'GET',
            dataType: 'jsonp',
            success: function (response) {
                console.log(response);
                for (i=0; i < response.data.length; i++) {
                    displayInfo = {};
                    displayInfo.img = response.data[i].images.thumbnail.url;
                    var gallery = $('#photos');
                    gallery.append("<a href='http://instagram.com/perchancenopants'>"+"<img src='" + displayInfo.img + "'/></a>");
                }
            },
            error: function (error_message) {
                console.log(error_message);
            }
        });

  $('#myCarousel').carousel({
    interval:   6000
  });

  var clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function() {
      clickEvent = true;
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.nav').children().length -1;
      var current = $('.nav li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.nav li').first().addClass('active');
      }
    }
    clickEvent = false;
  });

    });

