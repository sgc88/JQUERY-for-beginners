// $("h3").css({border: "3px solid blue"});

// $(".wrapper").css({border: "3px solid red"});


// $("#clients").css({border: "3px solid yellow"});
// alert("welcome");

// $("#social-nav").children().css({border: "3px solid pink"});
// $("#contact-methods").next().css({border: "3px solid green"});

// $("#social-nav").prev().css({border: "3px solid green"});
// $(".banner-title").parent().css({border: "3px solid green"});
// $("#social-nav").children().css({border: "3px solid green"});
// $("#contact").find(".facebook").css({border: "3px solid green"});
// $("#social-nav").closest(".wrapper").css({border: "3px solid green"});

// $("#contact-methods").css({border: "2px solid red"})
//    .next().css({border: "3px solid green"})
//    .closest("section").css({border: "3px solid blue"});
// var sweet = "<div style= 'margin : 20px 0; padding: 10px; background: gray;' >the big cat vs the big dog</div> ";


// $("section").wrap("<div>");
// $("section").unwrap();

// $("section").wrapAll("<div>");

// var wrapper ="<div clas='wrapper'>"

// var button=$(".button");

// var wrapped=true;

// button[0].onclick=function(){
//    if(wrapped){
//        $("section").unwrap();
//        wrapped= false;
//        button.text("Wrap");
//       }else{
//        $("section").wrapAll(wrapper);
//           wrapped= true;
//           button.text("Unwrap");
      
//       }
// };

// $(".button").empty();

// $("#contact img").attr("alt");
// console.log()

// $("#contact").css("background", "red").css("text-align", "center");

    
// $("#main-content").removeClass("wrapper"); 

// var myLis=$("#points-of-sale li");
// myLis.on("onclick", function(){
//        $(this).css({"background": "pink"});
//        mhyLis.off("click");
   
   
//         });


// $("#lead-banner").click(function(){
//     alert("You clicked me");
//     console.log("welcome");
// })
// var myLis= $("#points-of-sale li");
// myLis.on("click", function(){

// 	$(this).css({"background": "red"});
// 	myLis.off("click");

// })

// $("#lead-banner").dblclick(function(){
// 	alert("you clicked me");
// 	$("#lead-banner").off("dblclick");
// })

// $(document).ready(function(){

// 	$("*").on("click", function(e){
// 	// console.log(e.target);
// 	// console.log("the event type is " + e.type);
// 	// console.log(e.pageX);
// 	// console.log(e.pageY);
// 	e.stopPropagation();
// 	console.log(e.)
// });


// });

// $(document).ready(function(){

// 	$("section > h2").on("click", function(){
// 		$(this).animate({"width": "500px", "height": "100px"}, 2000, "linear", function(){
// 			alert("animation complete");
// 		}

// 	});
// });
$(document).ready(function(){
	$("section > h2").on("click", function(){
	// 	$(this).animate({"opacity" : "0.5"});

	$(this).fadeTo(200, 0.2).fadeTo(200, 0.8)
	.fadeTo(200, 0.2).fadeTo(200, 0.8)
	.fadeTo(200, 0.2).fadeTo(200, 0.8)
	.fadeTo(200, 0.2).fadeTo(200, 0.8);
	});

	
});

$(document).ready(function(){
	$("img[alt=map]").on("click", function(){

		$("section > h2").toggle(1000);

	});

	
});

//lesson 22 slideUp, slidedown and slideToggle

$(document).ready(function(){
	$(".slide-button-up").on("click", function(){
			$("#lead-banner").slideToggle(1000,
				function(){
					alert("animation not complete yet")
				});



	});
	// $(".slide-button-down").on("click", function(){
	// 		$("#lead-banner").slideDown(4000, function(){
	// 			alert("animation complete");
	// 		});
	// });
	
});

//LESSON 23 FADDING ANIMATION EXAMPLE- QUOTE FADER;
//LESSON 23 FADDING ANIMATION EXAMPLE- QUOTE FADER;
//LESSON 23 FADDING ANIMATION EXAMPLE- QUOTE FADER;

$(document).ready(function(){

	var allQuotes = $("blockquote");
	var currentQuote = 0;

	function changeQuote(){

		$(allQuotes[currentQuote]).fadeOut(200, function(){
			if(currentQuote == allQuotes.length - 1){
				currentQuote = 0;
			}else{
				currentQuote++;
			}
			$(allQuotes[currentQuote]).fadeIn(200);
		});
	}

	var quoteTimer = setInterval(changeQuote, 3000);


});

//LESSON 24 ANIMATION EXAMPLE 2- CLICK TO EXPAND

//LESSON 24 ANIMATION EXAMPLE 2- CLICK TO EXPAND
//LESSON 24 ANIMATION EXAMPLE 2- CLICK TO EXPAND


$(document).ready(function(){

	var items = $("#points-of-sale li");
	items.on("click", function(){
		$(this).find("p").slideToggle(300);
	});
});
//LESSON 25 USING PLUGINS
//LESSON 25 USING PLUGINS
//LESSON 25 USING PLUGINS


$(document).ready(function(){

	$(".rslides").responsiveSlides();
});






