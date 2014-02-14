$(function(){
	/*/////////////////////////
	//60fps scroll paints
	/////////////////////////*/

	var toggleDrawer = function(){
		console.log("firing");
		$('.pair').on("click",".toggle-drawer", function(){
			console.log($(this).parent());
			$(this).parent().toggleClass('drawer-active');
		});
	};

	toggleDrawer();

	var body = $('body');
	var timer;
	$(window).on("scroll", function(){
		if(! body.hasClass('disable-hover')){
			body.addClass('disable-hover');
		}
		timer = setTimeout(function(){
			body.removeClass('disable-hover');
		}, 250);
	}, false);
});
