(function() {
  var animateBackground, detectYposition, navScrolling, setUpPage;
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
    if (yScrollPosition > 645) {
      return $('#Focus_Btm span').html('You');
    } else if (yScrollPosition > 300) {
      return $('#Focus_Btm span').html('Colorado');
    } else {
      return $('#Focus_Btm span').html('The Web');
    }
  };
  animateBackground = function(y) {
    return $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (600 - y) + 'px');
  };
  navScrolling = function(b) {
    var scrollPos;
    if (b === 'web') {
      scrollPos = 0;
    } else if (b === 'colorado') {
      scrollPos = 324;
    } else {
      scrollPos = 650;
    }
    return $('html, body').animate({
      scrollTop: scrollPos
    }, 300, 'linear');
  };
  $(document).ready(function() {
    setUpPage();
    detectYposition();
    $(document).scroll(function(e) {
      return detectYposition();
    });
    return $('#Nav_Main a').click(function(e) {
      var $btn;
      $btn = $(this).attr('href').replace('#', '');
      navScrolling($btn);
      return e.preventDefault();
    });
  });
}).call(this);
