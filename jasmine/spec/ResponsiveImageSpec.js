describe("ResponsiveImageHandler", function () {
  var input = document.createElement('div');
  input.setAttribute("style", "display: none;");
  input.innerHTML = '<img class="ri" data-desktop-width="700" data-tablet-width="400" data-phone-width="200" \
          data-src-desktop="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-tablet="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-phone="http://res.cloudinary.com/demo/image/upload/sample.jpg"> \
            ';

  it("loads images with default settings", function () {
    window.devicePixelRatio = 0.4;

    window.innerWidth = 780;
    document.documentElement.appendChild(input);

    new ResponsiveImageLoader().loadImages();
    console.log(document.getElementsByClassName("ri"))
    expect(document.getElementsByClassName("ri").length).toEqual(1);
    var images = $(input).find('.ri');
    expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/sample.jpg");
  });

  it("loads images for retina display", function () {
    window.devicePixelRatio = 1.5;
    window.innerWidth = 780;

    document.documentElement.appendChild(input);

    new ResponsiveImageLoader({imageServer: "Scene7"}).loadImages();

    expect($(input).find('.ri').length).toEqual(1);
    var images = $(input).find('.ri');
    expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/sample.jpg?wid=1400");
  });

  it("load images with configured breakpoints and imageServer", function () {
    window.devicePixelRatio = 0.4;
    window.innerWidth = 400;

    document.documentElement.appendChild(input);

    new ResponsiveImageLoader({imageServer: "Cloudinary",
      breakpoints: new Breakpoints({
        "desktop": { minWidth: 769, maxWidth: screen.availWidth },
        "phone": { minWidth: 0, maxWidth: 768 }
      })
    }).loadImages();

    expect($(input).find('.ri').length).toEqual(1);
    var images = $(input).find('.ri');
    expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/w_200/sample.jpg");
  });
});