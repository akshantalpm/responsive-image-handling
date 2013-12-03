var breakpoints = {}
breakpoints['phone'] = {minWidth:0, maxWidth: 480}
breakpoints['tablet'] = {minWidth: 481, maxWidth: 768}
breakpoints['desktop'] = {minWidth: 769, maxWidth: screen.availWidth}

loadImages = function () {
  var width = $(window).width();

  $(".ri").each(function (idx, img) {
    var breakpointName = getBreakpointName(breakpoints, width);
    loadImage(img, breakpointName);
  });
}

loadImage = function (img, breakpointName) {
  var imgSrc = $(img).data('src-' + breakpointName);
  var imgWidth = $(img).data(breakpointName + '-width');
  $(img).attr('src', imgSrc + "?wid=" + imgWidth)
}

getBreakpointName = function (breakpoints, viewportWidth) {
  var result, minWidth, maxWidth;

  for (breakpointName in breakpoints) {
    minWidth = breakpoints[breakpointName].minWidth;
    maxWidth = breakpoints[breakpointName].maxWidth;

    if(viewportWidth >= minWidth && viewportWidth <= maxWidth) {
      result = breakpointName
    }

  }
  return result;
}


