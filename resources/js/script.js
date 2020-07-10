$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--education').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-in').waypoint(function(direction) {
        $('.js--wp-in').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-logo').waypoint(function(direction) {
        $('.js--wp-logo').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-edu').waypoint(function(direction) {
        $('.js--wp-edu').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-cou').waypoint(function(direction) {
        $('.js--wp-cou').addClass('animated bounceInLeft');
    }, {
        offset: '50%'
    });
     $('.js--wp-cou1').waypoint(function(direction) {
        $('.js--wp-cou1').addClass('animated bounceInRight');
    }, {
        offset: '50%'
    });
     $('.js--wp-pro').waypoint(function(direction) {
        $('.js--wp-pro').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-ach').waypoint(function(direction) {
        $('.js--wp-ach').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    
});