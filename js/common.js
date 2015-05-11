$(document).ready(function() {

	// magnific popup
	$('.popup').magnificPopup({type:'image'});
	$('.popup_c').magnificPopup({});

	// параллакс стеллар
	$.stellar({
		responsive: true
	});

	// карусель owl
	$(".carousel").owlCarousel({

		navigation : true, // Show next and prev buttons
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true


		// "singleItem:true" is a shortcut for:
		// items : 1,
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});

	// Фон страницы подстраивается на весь экран под ширину
	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});

	//табс в header (телефон и т.д.)
	$(".top_phone .wrapper .tab").click(function(){
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//табс в footer (телефон и т.д.)
	$(".bottom_phone .wrapper .tab").click(function(){
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//табс в header (скидки и доп скидки)
	$(".tabs_header .wrapper .tab").click(function(){
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//табс в header (как нас найти)
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var ths = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance;
// save instance in magnificPopup variable
				magnificPopup.close();
// Close popup that is currently opened
				ths.trigger("reset");
			}, 1000);
		});
	});
	
});

$(window).load(function() {
	// анимация css
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "flipInY");
	$(".profi_item").animated("fadeInRight", "fadeOutLeft");
	$(".form_container").animated("zoomInRight", "fadeOutLeft");
	$("form").animated("zoomInRight", "zoomInRight");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("zoomIn", "zoomOut");
})