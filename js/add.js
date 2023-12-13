
//кнопка "наверх"
var $backTop = $(".backTop")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 400) {
		$backTop.fadeIn();
	}
	else 
	{
		$backTop.fadeOut();
	}
});

$backTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 200)
});


//дата в копирайте
	const year = document.getElementById('date');
	
	year.textContent = new Date().getFullYear();
