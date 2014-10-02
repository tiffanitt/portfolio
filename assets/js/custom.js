
jQuery(function($) {


    /*==========================================
    CUSTOM SCRIPTS
    =====================================================*/

    // CUSTOM LINKS SCROLLING FUNCTION 

    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
       && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                return false;
            }
        }
    });

    /*==========================================
  PARALLAX SCRIPTS
   =====================================================*/

    
    $('.parallax').scrolly({ bgParallax: true });

    /*==========================================
    WRITE  YOUR  SCRIPTS BELOW
    =====================================================*/

    $(window).scroll(function() {

  // get the variable of how far we've scrolled from the top
  var offset = $(window).scrollTop();
	offset     = offset * 20;

  $('#sp-links a').css({
    '-moz-transform': 'rotate(' + offset + 'deg)',
    '-webkit-transform': 'rotate(' + offset + 'deg)',
    '-o-transform': 'rotate(' + offset + 'deg)',
    '-ms-transform': 'rotate(' + offset + 'deg)',
    'transform': 'rotate(' + offset + 'deg)',
  });

});

});
