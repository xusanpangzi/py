$(document).ready(function(){
	$('.li1').click(function(){
		$('.div3,.div4,.div5,.div6').css("display","none");
		$('.div2').css("display","block");
		$('.li1').addClass("active");
		$('.li2,.li3,.li4,.li5').removeClass("active");
	});
	$('.li2').click(function(){
		$('.div2,.div4,.div5,.div6').css("display","none");
		$('.div3').css("display","block");
		$('.li2').addClass("active");
		$('.li1,.li3,.li4,.li5').removeClass("active");
	});
	$('.li3').click(function(){
		$('.div2,.div3,.div5,.div6').css("display","none");
		$('.div4').css("display","block");
		$('.li3').addClass("active");
		$('.li2,.li1,.li4,.li5').removeClass("active");
	});
	$('.li4').click(function(){
		$('.div2,.div3,.div4,.div6').css("display","none");
		$('.div5').css("display","block");
		$('.li4').addClass("active");
		$('.li2,.li3,.li1,.li5').removeClass("active");
	});
	$('.li5').click(function(){
		$('.div2,.div3,.div4,.div5').css("display","none");
		$('.div6').css("display","block");
		$('.li5').addClass("active");
		$('.li2,.li3,.li4,.li1').removeClass("active");
	});

});


