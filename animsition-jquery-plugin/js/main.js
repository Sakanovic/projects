$(".animsition").animsition({
	inClass: "fade-in-right-lg",
	outClass: "fade-out-right-lg",
	linkElement: "header a",
	inDuration: 1000,
	outDuration: 300
});

$(".header").sticky({
	getWidthFrom: ".container",
	responsiveWidth: true
});

$(".header").on("sticky-start", function() {
	$(".description").html("We build <strong>great</strong> apps.")
});

$(".header").on("sticky-end", function() {
	$(".description").html("We build apps.")
});

$(".work-with-us").sticky({
	topSpacing: 64,
	getWidthFrom: ".container",
	responsiveWidth: true
});

$(".work-with-us").on("sticky-start", function() {
	$(this).append(" <a href='mailto:team@markedquery.com' class='email-text'>Email&nbsp;Us</a>");
});
$(".work-with-us").on("sticky-end", function() {
	$(".email-text").remove();
});