Responsive Image Handling
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
*	Add following attributes to the img tag:
 * class - "ri"  
 * src and width data attribute 
 
*	HTML Snippet:

```html
<img class="ri" src="" data-desktop-width="700" data-tablet-width="400" data-phone-width="200"
     data-src-desktop="http://s7ap1.scene7.com/is/image/TW/lemon1"
     data-src-tablet="http://s7ap1.scene7.com/is/image/TW/lemon1"
     data-src-phone="http://s7ap1.scene7.com/is/image/TW/lemon2">
```
