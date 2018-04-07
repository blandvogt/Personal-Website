//Home
(function(){
  $('#homeJumbotron').hide().delay(500).fadeIn(2000)

  $('.homeDisplay').animate({
    marginRight: 170,
    opacity: 0.0
  }, 0, function(){
    $('.homeDisplay').animate({
      marginRight: 0,
      opacity: 1.0
    }, 3000, function(){
    });
  });

  $('#pic_me').animate({
    marginLeft: 170,
    opacity: 0.0
  }, 0, function(){
    $('#pic_me').animate({
      marginLeft: 0,
      opacity: 1.0
    }, 3000, function(){
    });
  });

  $('#homeLead').hide().delay(2000).fadeIn(2000)
  $('#nav').hide().delay(2000).slideDown(1000)
  $('#homeCards').hide().delay(2000).fadeIn(1000)





  $(window).on('hashchange', function(){
    $('#homeJumbotron').hide().delay(500).fadeIn(3000)

    $('.homeDisplay').animate({
      marginRight: 170,
      opacity: 0.0
    }, 0, function(){
      $('.homeDisplay').animate({
        marginRight: 0,
        opacity: 1.0
      }, 4000, function(){
      });
    });

    $('#pic_me').animate({
      marginLeft: 170,
      opacity: 0.0
    }, 0, function(){
      $('#pic_me').animate({
        marginLeft: 0,
        opacity: 1.0
      }, 4000, function(){
      });
    });

    $('#homeLead').hide().delay(2500).fadeIn(2000)
    $('#homeCards').hide().delay(3000).fadeIn(1000)
  });



}());


//About
(function(){
  $(window).on('hashchange', function(){
    $('.figRow').animate({
      opacity: 0.0
    }, 0, function(){
      $('.figRow').delay(800).animate({
        opacity: 1.0
      }, 2000, function(){
      });
    });
  });

  $(window).on('load', function(){
    $('.figRow').animate({
      opacity: 0.0
    }, 0, function(){
      $('.figRow').delay(800).animate({
        opacity: 1.0
      }, 2000, function(){
      });
    });
  });

}());


//Exp
(function(){
  $(window).on('hashchange', function(){
    $('#eduSec').hide()
    $('#expSec').hide()
    $('#proSec').hide()
    $('#leadSec').hide()
  });
  $(window).on('load', function(){
    $('#eduSec').hide()
    $('#expSec').hide()
    $('#proSec').hide()
    $('#leadSec').hide()
  });
}());
