(function ( $ ) {

  $.fn.loadImages = function( options ) {
    var breakpoints = {}
    breakpoints['phone'] = {minWidth:0, maxWidth: 480}
    breakpoints['tablet'] = {minWidth: 481, maxWidth: 768}
    breakpoints['desktop'] = {minWidth: 769, maxWidth: screen.availWidth}

    var settings = $.extend({
     imageServer: "Scene7"
    }, options );

    loadImage = function (img, breakpointName) {
      var imgSrc = $(img).data('src-' + breakpointName);
      var imgWidth = $(img).data(breakpointName + '-width');
      $(img).attr('src', constructUrl(imgSrc, imgWidth))
    }

    constructUrl = function(imgUrl, width) {
      function constructScene7Url() {
        return imgUrl + "?wid=" + width;
      }

      function constructCloudinaryUrl() {
        var filename = imgUrl.split('/').pop();
        var imagePath = imgUrl.substring(0, imgUrl.lastIndexOf("/") + 1);
        return imagePath + "w_" + width + "/" + filename
      }

      switch (settings.imageServer) {
        case "Scene7":
          return constructScene7Url();
          break;
        case "Cloudinary" :
          return constructCloudinaryUrl();
          break;
        default :
          return imgUrl;
          break;
      }
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

    var width = $(window).width();
    this.find(".ri").each(function (idx, img) {
      var breakpointName = getBreakpointName(breakpoints, width);
      loadImage(img, breakpointName);
    });
  };


}( jQuery ));





