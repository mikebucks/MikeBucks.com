detectYposition = ()->
  yScrollPosition = $(document).scrollTop()
  animateBackground(yScrollPosition)

  if (yScrollPosition > 250)
    swapTextWeb()
  else
    swapTextColordo()

animateBackground = (y)->
  $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (279 - y) + 'px') #initial BG position = '0 -279px'

swapTextWeb = ()->
  $('#Focus_Btm span').html('The Web');

swapTextColordo = ()->
  $('#Focus_Btm span').html('Colorado');

$(document).ready ->
  #Listeners
  $(document).scroll (e)->
    detectYposition()
