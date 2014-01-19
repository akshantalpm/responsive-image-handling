define(['ri'], function () {

  describe("ResponsiveImageHandler", function () {
    it("loads images with default settings", function () {
      var input = document.createElement('div');
      input.innerHTML = '<img class="ri" data-desktop-width="700" data-tablet-width="400" data-phone-width="200" \
          data-src-desktop="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-tablet="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-phone="http://res.cloudinary.com/demo/image/upload/sample.jpg"> \
            ';
      setFixtures(input)
      new ResponsiveImageLoader().loadImages();

      expect($(input).find('.ri').length).toEqual(1);
      var images = $(input).find('.ri');
      expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/sample.jpg?wid=700");
    });

    it("load images with configured breakpoints and imageServer", function () {
      var input = document.createElement('div');
      input.innerHTML = '<img class="ri" data-desktop-width="700" data-phone-width="400" \
          data-src-desktop="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-phone="http://res.cloudinary.com/demo/image/upload/sample.jpg">';

      setFixtures(input);

      new ResponsiveImageLoader({imageServer: "Cloudinary",
        breakpoints: new Breakpoints({
          "desktop": { minWidth: 769, maxWidth: screen.availWidth },
          "phone": { minWidth:0, maxWidth: 768 }
        })
      }).loadImages();

      expect($(input).find('.ri').length).toEqual(1);
      var images = $(input).find('.ri');
      expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/w_700/sample.jpg");
    });

    it("load images depending on the window width", function(){
      var input = document.createElement('div');
      input.innerHTML = '<img class="ri" data-desktop-width="700" data-tablet-width="400" data-phone-width="200" \
          data-src-desktop="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-tablet="http://res.cloudinary.com/demo/image/upload/sample.jpg"\
          data-src-phone="http://res.cloudinary.com/demo/image/upload/sample.jpg"> \
            ';
      var images = $(input).find('.ri');
      setFixtures(input);

      new ResponsiveImageLoader().loadImages();
      expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/sample.jpg?wid=700");

      window.innerWidth = 100;

      new ResponsiveImageLoader().loadImages();
      expect(images[0].src).toEqual("http://res.cloudinary.com/demo/image/upload/sample.jpg?wid=200");
    });
  });
});