$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

	$('ul.tabs2 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs2 li').removeClass('current2');
		$('.tab-content2').removeClass('current2');

		$(this).addClass('current2');
		$("#"+tab_id).addClass('current2');
	})

});
