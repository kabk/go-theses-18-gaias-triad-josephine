'use strict';

Array.prototype.max = function () {
	return Math.max.apply(null, this);
};

$('.columns').each(function () {
	var highest;
	var heights = [];

	$(this).children('.col').each(function () {
		heights.push($(this).outerHeight());
	});

	highest = heights.max();

	$(this).css('height', highest + 3 + 'px');
});

var wHeight = $(window).height();
$(".title, .staticColumns").css("height", wHeight + "px");
// $(".title div").css("padding-top", wHeight/2+"px");


$('.headerLink').each(function (i) {
	if ($(this).hasClass("active")) {
		$("#gradientHeader").append("<div class='noGrad'></div>");
	} else {
		$("#gradientHeader").append("<div class='grad'></div>");
	}
});

function convertRemToPixels(rem) {
	return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

var trippyGradient = function trippyGradient(target) {
	$(target).each(function () {
		var $outerDiv = $(this);
		var $innerDiv = $outerDiv.find("div");
		var h = $innerDiv.innerHeight();
		var hOuter = $outerDiv.height();

		var lel = h - hOuter + convertRemToPixels(4);

		$(this).scroll(function () {
			var scr = $outerDiv.scrollTop();
			var scrPerc = scr / lel; //map scroll to 0,100
			if (scrPerc >= 1) {
				scrPerc = 1;
			}

			// console.log(scrPerc*100);

			$innerDiv.css("background-size", 1100 - scrPerc * 1000 + '% 100%');
			// $innerDiv.css("background-position", `${Math.floor(scrPerc*30)}%`);
		});
	});
};

trippyGradient(".trippyGradientGreen");
trippyGradient(".trippyGradientBrown");
trippyGradient(".trippyGradientPurple");

$(".titleTxt").each(function (i) {
	$(this).css("top", wHeight * i + wHeight / 2 + "px");
});

$(".axolotl").css("top", wHeight * 5 + wHeight / 2 + "px");

// $("body").click(function(){
// 	$.scrollify.next()
// });

if ($("body").hasClass("gaia01")) {
	$(window).scroll(function () {
		var st = $(this).scrollTop();

		if (st >= wHeight) {
			$("header").css("position", "fixed");
		} else {
			$("header").css("position", "relative");
		}
	});
} else {
	$("header").css("position", "fixed");
}

//fade video + scroll once
var fadeVideo = function fadeVideo() {

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		var scrollWindow = st / wHeight; // 0to1. >1 is more than wHeight
		$("video").css("opacity", 2 - scrollWindow);
		$("#gradientHeader, #gradientHeaderUnder").css("opacity", scrollWindow);

		if (scrollWindow >= 2 && $("body").hasClass("threeCols")) {
			$("body").css("overflow", "hidden");
			$(".sCol").css("pointer-events", "auto");
		} else {
			$(".sCol").css("pointer-events", "none");
		}
	});
};

fadeVideo();

// flickering
var flicker = function flicker(target) {
	var time = 0;
	var val = 0;
	var goingUp = true;
	setInterval(function () {
		time++;

		if (time % 45 === 0) {
			if (goingUp === true) {
				goingUp = false;
				$(target).addClass("flick");
			} else {
				goingUp = true;
				$(target).removeClass("flick");
			}
		}
	}, 33);
};

flicker(".greenShadow");
flicker(".yellowShadow");
flicker(".brownShadow");
flicker(".purpleShadow");
flicker(".epiShadow");

// var snapped = false;

// $(function() {
//   $.scrollify({
//     section : ".snap",
//     interstitialSection : "",
//     easing: "easeOutExpo",
//     scrollSpeed: 1100,
//     offset : 0,
//     scrollbars: true,
//     standardScrollElements: "",
//     setHeights: true,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll:true,
//     before:function() {},
//     after:function() {
//     	if (snapped === false && $("body").hasClass("gaia01")) {
//     		$("header").css("position", "fixed");
//     	}
//     	snapped = true;
//     },
//     afterResize:function() {},
//     afterRender:function() {}
//   });
// });