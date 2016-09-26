/*******************************

Problem: User when clicking on image goes to a dead end page.
Solution: Create an overlay with the large images - lightbox.

1.0 Capture the click event on a link to an image.
1.1 Show the overlay.
1.2 Update overlay with the image linked in the link.
1.3 Get child's alt atribute and set capation.
2.0 Add overlay.
2.1 An image.
2.2 A caption.
3.0 When overlay is clicked.
3.1 Hide the overlay.

*******************************/

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function() {
  $(this).hide();
});