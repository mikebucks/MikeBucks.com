setUpPage = ()->
  pageHeight = $(window).height()
  contentHeight = $('#MB_Content').height()
  if (pageHeight >= 585)
    $('#MB_Content').height(pageHeight + contentHeight - 610)

detectYposition = ()->
  yScrollPosition = $(document).scrollTop()
  animateBackground(yScrollPosition)
  if (yScrollPosition > 250)
    $('#Focus_Btm span').html('The Web')
  else
    $('#Focus_Btm span').html('Colorado')

animateBackground = (y)->
  $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (279 - y) + 'px') #initial BG position = '0 -279px'

$(document).ready ->
  setUpPage()

  #Listeners
  $(document).scroll (e)->
    detectYposition()
