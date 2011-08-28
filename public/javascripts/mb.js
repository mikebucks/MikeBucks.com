(function() {
  var animateBackground, detectYposition, setUpPage;
  setUpPage = function() {
    var contentHeight, pageHeight;
    pageHeight = $(window).height();
    contentHeight = $('#MB_Content').height();
    if (pageHeight >= 585) {
      return $('#MB_Content').height(pageHeight + contentHeight - 610);
    }
  };
  detectYposition = function() {
    var yScrollPosition;
    yScrollPosition = $(document).scrollTop();
    animateBackground(yScrollPosition);
    if (yScrollPosition > 250) {
      return $('#Focus_Btm span').html('The Web');
    } else {
      return $('#Focus_Btm span').html('Colorado');
    }
  };
  animateBackground = function(y) {
    return $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (279 - y) + 'px');
  };
  $(document).ready(function() {
    setUpPage();
    return $(document).scroll(function(e) {
      return detectYposition();
    });
  });
}).call(this);
