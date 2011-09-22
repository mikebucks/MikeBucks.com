(function() {
  var animateBackground, detectYposition, navScrolling, setUpPage;
  setUpPage = function() {
    var contentHeight, pageHeight;
    pageHeight = $(window).height();
    contentHeight = $('#MB_Content').height();
    if (pageHeight >= 585) {
      return $('#MB_Content').height(pageHeight + contentHeight - 578);
    }
  };
  detectYposition = function() {
    var $colorHook, $loveText, yScrollPosition;
    yScrollPosition = $(document).scrollTop();
    $loveText = $('#Focus_Btm span');
    $colorHook = $('#Focus_Btm');
    animateBackground(yScrollPosition);
    if (yScrollPosition > 645) {
      $('#Focus_Btm').removeClass().addClass('beer');
      return $loveText.html('Beer');
    } else if (yScrollPosition > 300) {
      $('#Focus_Btm').removeClass().addClass('colorado');
      return $loveText.html('Colorado');
    } else {
      $('#Focus_Btm').removeClass().addClass('web');
      return $loveText.html('The Web');
    }
  };
  animateBackground = function(y) {
    return $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (600 - y) + 'px');
  };
  navScrolling = function($btn) {
    var scrollPos;
    $('#Focus_Btm').removeClass().addClass($btn);
    switch ($btn) {
      case 'web':
        scrollPos = 0;
        break;
      case 'colorado':
        scrollPos = 324;
        break;
      default:
        scrollPos = 650;
    }
    return $('html, body').animate({
      scrollTop: scrollPos
    }, 400);
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
