Responsive Image Handling [![Build Status](http://travis-ci.org/akshantalpm/responsive-image-handling.png?branch=master)](http://travis-ci.org/akshantalpm/responsive-image-handling)
========================= 

* Ability to select different image files with different resolution of same or different image based on the screen size

* With the above functionality in place, browser should download only the requires file. 


####Breakpoints:

- We have three breakpoints: Desktop, Tablet and Phone

- Breakpoint gets selected depending on the size of viewport

	| breakpoint    | minWidth      | maxWidth               |
	| ------------- |:------------- |:---------------------- |
	| phone         | 0             | 480                    |
	| tablet        | 481           | 768                    |
	| desktop       | 769           | screen available width |


####Usage:
*  Register event handler:
   <br><b>imageServer</b> = Scene7 | Cloudinary (By default it is Scene7) 
   <br><b>breakpoints</b> = By default it is as mentioned in the above table.
   <br><br>Above settings can be configured in the following way
   ```javascript
    var imageLoader = new ResponsiveImageLoader(
      {
        imageServer: "Cloudinary",
        breakpoints: new Breakpoints({
          "tablet": {minWidth: 0, maxWidth: 768},
          "desktop": {minWidth: 769, maxWidth: screen.availWidth}
        })
      }
    )

    imageLoader.init();
   ```
   
*	Add following attributes to the img tag:
 * class - "ri"  
 * src and width data attribute 
 
 ```html
 <img class="ri" src="" data-desktop-width="500" data-tablet-width="300" data-phone-width="150"
      data-src-desktop="http://res.cloudinary.com/demo/image/upload/sample.jpg"
      data-src-tablet="http://res.cloudinary.com/demo/image/upload/sample.jpg"
      data-src-phone="http://res.cloudinary.com/cloudinary/image/upload/cloudinary_logo_square.png">
 ```
