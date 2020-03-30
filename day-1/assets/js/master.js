var src = $('.bg-image').css('background-image');
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
img.onload = function() {
  $('.animate-onload').addClass('visible');
  $('.bg-image-wrapper').addClass('zoom-out');
}

img.src = url;
if (img.complete) img.onload();