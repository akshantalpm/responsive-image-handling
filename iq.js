var breakpoints = [
  {name: 'phone', maxWidth: 480},
  {name: 'tablet', minWidth: 481, maxWidth: 768},
  {name: 'desktop', minWidth: 769, defaultBreakpoint: true}
];


loadImages = function () {
  var width = $(window).width();

  $(".iq").each(function (idx, img) {
    var breakpoint = getBreakpoint(breakpoints, width);
    loadImage(img, breakpoint);
  });
}

loadImage = function (img, breakpoint) {
  var imgSrc = $(img).data('src-' + breakpoint.name);
  var imgWidth = $(img).data(breakpoint.name + '-width');
  $(img).attr('src', imgSrc + "?wid=" + imgWidth)
}

getBreakpoint = function (breakpoints, vWidth) {
  var _vWidth = vWidth,
    i = 0,
    breakpoint = {},
    _breakpoint,
    minWidth,
    maxWidth;

  while (_breakpoint = breakpoints[i]) {
    minWidth = _breakpoint.minWidth;
    maxWidth = _breakpoint.maxWidth;

    if (
      minWidth && maxWidth && vWidth >= minWidth && vWidth <= maxWidth ||
        minWidth && !maxWidth && vWidth >= minWidth ||
        maxWidth && !minWidth && vWidth <= maxWidth
      ) {
      breakpoint = _breakpoint;
    }

    i++;
  }

  return breakpoint;
}


