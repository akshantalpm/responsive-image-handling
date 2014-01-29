Responsive Image Handling                                      [![Build Status](https://travis-ci.org/akshantalpm/responsive-image-handling.png?branch=master)](https://travis-ci.org/akshantalpm/responsive-image-handling)
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
        imageServer: "Scene7",
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
 <img class="ri" src="" data-desktop-width="700" data-tablet-width="400" data-phone-width="200"
     data-src-desktop="http://s7ap1.scene7.com/is/image/TW/lemon1"
     data-src-tablet="http://s7ap1.scene7.com/is/image/TW/lemon1"
     data-src-phone="http://s7ap1.scene7.com/is/image/TW/lemon2">
 ```
