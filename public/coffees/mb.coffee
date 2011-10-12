setUpPage = ->
  pageHeight = $(window).height()
  contentHeight = $('#MB_Content').height()
  if (pageHeight >= 585)
    $('#MB_Content').height(pageHeight + contentHeight - 578)

detectYposition = ->
  yScrollPosition = $(document).scrollTop()
  $loveText = $('#Focus_Btm span')
  $colorHook = $('#Focus_Btm')
  
  animateBackground(yScrollPosition)
  
  if (yScrollPosition > 645)
    $('#Focus_Btm').removeClass().addClass 'beer'
    $loveText.html('Beer')
  else if (yScrollPosition > 300)
    $('#Focus_Btm').removeClass().addClass 'colorado'
    $loveText.html('Colorado')
  else
    $('#Focus_Btm').removeClass().addClass 'web'
    $loveText.html('The Web')

animateBackground = (y) ->
  $('#Focus_Top').css('backgroundPosition', '0 ' + '-' + (600 - y) + 'px') #initial BG position = '0 -600px'

navScrolling = ($btn) ->
  $('#Focus_Btm').removeClass().addClass $btn

  switch $btn
    when 'web' then scrollPos = 0
    when 'colorado' then scrollPos = 324
    else scrollPos = 650

  $('html, body').animate(
    scrollTop: scrollPos, 400)

$(document).ready ->
  setUpPage()
  detectYposition()

  #Listeners
  $(document).scroll (e) ->
    detectYposition()

  $('#Nav_Main a').click (e) ->
    $btn = $(this).attr('href').replace('#', '')
    navScrolling($btn)
    e.preventDefault()