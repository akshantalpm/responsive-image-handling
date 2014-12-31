function ResponsiveImageLoader(options){
  options = options || {}
  var imageServer = options["imageServer"] || "None";
  var breakpoints = options["breakpoints"] || new Breakpoints();
  var retina = window.devicePixelRatio > 1;
  var imageServers = {
    Scene7 : function() { return new Scene7ImageServer()},
    Cloudinary : function() {return new CloudinaryImageServer()},
    None: function() { return new DefaultImageServer()}
  }

  var loadImage = function (img, breakpointName) {
    var imgSrc = img.getAttribute("data-src-"+breakpointName);
    var imgWidth = img.getAttribute("data-" + breakpointName + '-width');
    imgWidth = retina ? imgWidth *2 : imgWidth;
    img.src = imageServers[imageServer]().getUrl(imgSrc, imgWidth)
  }

  this.loadImages = function () {
    var width = window.innerWidth,
      elements = document.getElementsByClassName("ri");
    for (index = 0; index < elements.length; ++index) {
      var breakpointName = breakpoints.getBreakpointName(width);
      loadImage(elements[index], breakpointName);
    }
  }
}

ResponsiveImageLoader.prototype.init = function() {
  var that = this;
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      that.loadImages();
    }
  }
  window.onresize = function(){that.loadImages()}
}

function Breakpoints(options) {
  var defaultBreakpoints = {
    "phone" : {minWidth:0, maxWidth: 480},
    "tablet" :{minWidth: 481, maxWidth: 767},
    "desktop": {minWidth: 768, maxWidth: screen.availWidth}
  }
  this.breakpoints = options || defaultBreakpoints;
}

Breakpoints.prototype.getBreakpointName = function (viewportWidth) {
  var result, minWidth, maxWidth;

  for (var breakpointName in this.breakpoints) {
    minWidth = this.breakpoints[breakpointName].minWidth;
    maxWidth = this.breakpoints[breakpointName].maxWidth;

    if(viewportWidth >= minWidth && viewportWidth <= maxWidth) {
      result = breakpointName
    }
  }

  return result;
}

function ImageServer(urlGenerator) {
  function Image() {
  }

  Image.prototype.getUrl = function (src, width) {
    return urlGenerator(src, width)
  }

  return Image
}

Scene7ImageServer = ImageServer(
  function(url, width) { return url + "?wid=" + width;}
)

CloudinaryImageServer = ImageServer(
 function(url, width) {
   var filename = url.split('/').pop();
   var imagePath = url.substring(0, url.lastIndexOf("/") + 1);
   return imagePath + "w_" + width + "/" + filename
 }
)

DefaultImageServer = ImageServer(
  function(url, width) { return url;}
)
