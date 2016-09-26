/* Prevent spoilerphobes from seeing spoliers. */
/* Solution: Hide spoilers and reveal them through user interaction */


// 1.0 Hide Spoiler
$(".spoiler span").hide();

// 2.0 Add a Button
$(".spoiler").append("<button>Reveal Spoiler!</button>");

// 3.0 When Button Pressed:
$(".spoiler button").click(function(){
  $(this).prev().show();
// 3.2 Get Rid of Button
});


