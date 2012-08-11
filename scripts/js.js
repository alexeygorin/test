$(document).ready(function()
{


	
	$(".me p.wdop").click(function(){
		$(this).parents(".me").find(".dop").slideToggle("slow")
		.siblings(".dop:visible").slideUp("slow");
		$(this).toggleClass("arr");
		$(this).siblings(".me p").removeClass("arr");
	});
	
	$(".dop3 div").click(function(){
		$(this).parents(".dop3").find("ul").slideToggle("slow")
		.siblings(".dop3 ul:visible").slideUp("slow");
		$(this).toggleClass("arr");
		$(this).siblings(".dop3 div").removeClass("arr");
	});
	
	 $('.it-table tr:even').addClass('coltd'); 



});