(function() {
  var animateBackground, detectYposition, swapTextColordo, swapTextWeb;
  detectYposition = function() {
    var yScrollPosition;
    yScrollPosition = $(document).scrollTop();
    animateBackground(yScrollPosition);
    if (yScrollPosition > 250) {
      return swapTextWeb();
    } else {
      return swapTextColordo();
    }
  };
  animateBackground = function(y) {
    return $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (279 - y) + 'px');
  };
  swapTextWeb = function() {
    return $('#Focus_Btm span').html('The Web');
  };
  swapTextColordo = function() {
    return $('#Focus_Btm span').html('Colorado');
  };
  $(document).ready(function() {
    return $(document).scroll(function(e) {
      return detectYposition();
    });
  });
}).call(this);
