//Copyright 2023 Kaya Sertel. All Rights Reserved.
var transNum = 1;
var animation_on_going = true;
var click_count = 0;
var navicon_button_click_control = true;
var search_bar_focus_control = false;
var is_menu_open = false;
var is_scrolling_locked_menu_nav = false;
var is_scrolling_locked_notifi = false;
var lastScrollTop_stop_scroll;
var is_change_on_going = true;
var is_trans_button_clicked = false;
var ofsets_scroll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var window_height;
var window_width;



$( document ).ready(function() { 
	//do something after document all loaded
	
	$( ".trans_click" ).hover(function() {
		if(!$(this).hasClass('selected'))
			$(this).addClass('hover_trans_click');
	}, function() {
		$(this).removeClass('hover_trans_click');
	});

	
	
	
	$('div.top_button, .close_nav, .search_part_a').click(function() {
		var window_height = parseInt($( window ).height());
		var window_width = parseInt($( window ).width());
		if (is_menu_open){
			$(".menu_button_bottom").text("Menu");
			$(".navicon_button_click").removeClass('navi_change');
			$(".navicon_button_click").removeClass('navi_change_2');
			$(".menu_contact").fadeOut(250);
			$(".close_nav").fadeOut(250);
			$(".my-search-box").val("");
			is_scrolling_locked_menu_nav = false;
		}
		else {
			$(".menu_button_bottom").text("Close");
			$(".navicon_button_click").addClass(window_width > 800 ? 'navi_change' : 'navi_change_2');
			$(".menu_contact").fadeIn(250);
			$(".close_nav").fadeIn(250);
			$('.my-search-box').focus();
			is_scrolling_locked_menu_nav = true;
			lastScrollTop_stop_scroll = $(window).scrollTop();
		}
		is_menu_open = !is_menu_open;
	});
	var isNotifiOpen = false;
	$('.notification_bell, .close_notifi').click(function() {
		if (isNotifiOpen) {
			$('.notificatins_menu').animate({right: (parseInt($( ".notificatins_menu" ).width())+30)*(-1)}, 150);
			$(".close_notifi").fadeOut(250);
			is_scrolling_locked_notifi = false;
		}
		else {
			$('.notificatins_menu').animate({right: '0'}, 150);
			$(".close_notifi").fadeIn(250);
			is_scrolling_locked_notifi = true;
			lastScrollTop_stop_scroll = $(window).scrollTop();
		}
		
		isNotifiOpen = !isNotifiOpen;
	});
	var isCountryOpen = true;
		$('.close_button_img, .close_country, .country_choose').click(function() {
		if (isCountryOpen) {
			$(".choose_country").fadeOut(250);
			$(".close_country").fadeOut(250);
			is_scrolling_locked_notifi = false;
		}
		else {
			$(".choose_country").fadeIn(250);
			$(".close_country").fadeIn(250);
			is_scrolling_locked_notifi = true;
			lastScrollTop_stop_scroll = $(window).scrollTop();
		}
		
		isCountryOpen = !isCountryOpen;
	});
	
	$('.pause_button').click(function() {
		if (is_change_on_going) { //<i class="fa-regular fa-circle-pause"></i>
			$("#pause_button_bottom").removeClass('fa-solid');
			$("#pause_button_bottom").removeClass('fa-circle-pause');
			$("#pause_button_bottom").addClass('fa-regular');
			$("#pause_button_bottom").addClass('fa-circle-play');
		} else {
			$("#pause_button_bottom").addClass('fa-solid');
			$("#pause_button_bottom").addClass('fa-circle-pause');
			$("#pause_button_bottom").removeClass('fa-regular');
			$("#pause_button_bottom").removeClass('fa-circle-play');
		}
		is_change_on_going = !is_change_on_going;
	});

	
	const searchInput = document.querySelector("#searchInput");
	
	$(document).keydown(function(e){
		var key = e.which;
		if (key === 13) {
			const searchValue = searchInput.value;
			console.log(`Search value: ${searchValue}`);
		}
		if(key>48 && key<57)
			transImg(key-48);
		switch(key) {
			case 37:
				transLeft();
				break;
			case 33:
				$('html, body').animate({scrollTop: '0'}, 300);
				break;
			case 39:
				transRight();
				break;
			case 34:
				$('html, body').animate({scrollTop: '1700'}, 300);
				break;
		}
		$(".product_top_header").text($( document ).prop("scrollHeight"));
	});
	
	beReadyPage();
	
	
	$(".icon.whatsapp").on('click', function(){
		window.open('https://wa.me/447541962061', '_blank');
	});
	
	$(".icon.map.UK").on('click', function(){
		window.open('https://www.google.com/maps/place/43+Prusom+St,+London+E1W+3RB,+Birle%C5%9Fik+Krall%C4%B1k/@51.5068,-0.0553,17z/data=!4m5!3m4!1s0x4876032f037bb8ab:0xdb02982fa890124b!8m2!3d51.5068143!4d-0.0551441?hl=en', '_blank');
	});
	
});

var lastScrollTop = 0;
var menu_state = true;
var is_text_visible = [false, false, false, false, false, false, false, false, false, false];


$(window).scroll(function(event){
	if (is_scrolling_locked_menu_nav || is_scrolling_locked_notifi) {
		$(window).scrollTop(lastScrollTop_stop_scroll);
	} else {
		var st = $(this).scrollTop();
		if ((st > parseInt($( ".container_0" ).height())) && (parseInt($( ".container_0" ).height())+window_height*2 > st))  {
		
			$(".container_1s_image").css("top", ((st - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))-150));
			if((!is_text_visible[0]) && (st > ofsets_scroll[0])) {
				$(".c1_main_text_1").addClass('text_upper_ani');
				$(".c1_main_text_1").css("opacity", 1);
				is_text_visible[0] = true;
		}
		
		if((!is_text_visible[1]) && (st > ofsets_scroll[1])) {
			$(".c1_cont_text_1").addClass('text_upper_ani');
			$(".c1_cont_text_1").css("opacity", 1);
			is_text_visible[1] = true;
		}
		
		if((!is_text_visible[2]) && (st > ofsets_scroll[2])) {
			$(".c1_cont_text_2").addClass('text_upper_ani');
			$(".c1_cont_text_2").css("opacity", 1);
			is_text_visible[2] = true;
		}
		
		
		if((!is_text_visible[3]) && (st > ofsets_scroll[3])) {
			$(".c1_cont_text_3").addClass('text_upper_ani');
			$(".c1_cont_text_3").css("opacity", 1);
			is_text_visible[3] = true;
		}
		
		if((!is_text_visible[4]) && (st > ofsets_scroll[4])) {
			$(".c1_cont_text_4").addClass('text_upper_ani');
			$(".c1_cont_text_4").css("opacity", 1);
			is_text_visible[4] = true;
		}
	}
	if ((st > window_height + parseInt($( ".container_0" ).height())) && (parseInt($( ".container_0" ).height())+window_height*3 > st))  {
		//var defval = parseInt($( ".container_1" ).height()) + parseInt($( ".container_0" ).height())  + parseInt($( ".c1_main_text_div" ).height()) + (parseInt($('.container_1_text_part_cont_1').innerWidth()) - parseInt($('.container_1_text_part_sec').width()));
		if((!is_text_visible[5]) && (st > ofsets_scroll[5])) {
			$(".c2_main_text_1").addClass('text_upper_ani');
			$(".c2_main_text_1").css("opacity", 1);
			is_text_visible[5] = true;
		}
		$(".menu_button_bottom").text((st > ($('.c2_main_text_1').offset().top - window_height + parseInt($( ".c2_main_text_1" ).height()))));
		
		if((!is_text_visible[6]) && (st > ofsets_scroll[6])) {
			$(".c2_cont_text_1").addClass('text_upper_ani');
			$(".c2_cont_text_1").css("opacity", 1);
			is_text_visible[6] = true;
		}
		
		if((!is_text_visible[7]) && (st > ofsets_scroll[7])) {
			$(".c2_cont_text_2").addClass('text_upper_ani');
			$(".c2_cont_text_2").css("opacity", 1);
			is_text_visible[7] = true;
		}
		
		
		if((!is_text_visible[8]) && (st > ofsets_scroll[8])) {
			$(".c2_cont_text_3").addClass('text_upper_ani');
			$(".c2_cont_text_3").css("opacity", 1);
			is_text_visible[8] = true;
		}
		if((!is_text_visible[9]) && (st > ofsets_scroll[9])) {
			$(".c2_cont_text_4").addClass('text_upper_ani');
			$(".c2_cont_text_4").css("opacity", 1);
			is_text_visible[9] = true;
		}
	}
	
	if (st > parseInt($( ".container_0" ).height())+window_height && (parseInt($( ".container_0" ).height())+window_height*4 > st))  {
		$(".container_2s_image").css("height", (window_height + (st - window_height - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))));
	}
   
	if (st > lastScrollTop){
		if(menu_state) {
			$(".fixed_menu").animate({top: '-90'}, 50);
			setTimeout(function() { menu_state = false;}, 20);
		}
	} else {
		if(!menu_state) {
			$(".fixed_menu").animate({top: '0'}, 50);
			setTimeout(function() { menu_state = true;}, 20);
			
		}
	}
	lastScrollTop = st;
	}
});


$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
});

function openDetail(notifiNum) {
	var notifiElementID = "#notifi_cont_";
	notifiElementID += notifiNum;
	var notifiArrowElementID = "#down_arrow_fav_opener_";
	notifiArrowElementID += notifiNum;
	if ($(notifiElementID).css("display") == "none") {
		$(notifiElementID).fadeIn(200);
		$(notifiArrowElementID).animate(
			{ deg: 0 },
			{
				duration: 200,
				step: function(now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
				}
			}
		);
	} else {
		$(notifiElementID).fadeOut(200);
		$(notifiArrowElementID).animate(
			{ deg: -90 },
			{
				duration: 200,
				step: function(now) {
					$(this).css({ transform: 'rotate(' + now + 'deg)' });
				}
			}
		);
	}
}


function transImg(elementNum) {
	click_count++;
	if(elementNum == 9) {
		elementNum = 1;
	}
	if(elementNum != transNum) {
		changePhoto(elementNum);
		var elementID = "transClick_";
		elementID += elementNum;
		document.getElementById(elementID).className = "trans_click selected";
		elementID = elementID.replace(elementNum,transNum);
		document.getElementById(elementID).className = "trans_click";
		transNum = elementNum;
	}
}

var is_mini_active = false;
function beReadyPage () {
	window_height = parseInt($( window ).height());
	window_width = parseInt($( window ).width());
	
	$(".photo_part").css("height", window_height);
	$(".all_photos").css("height", $( ".photo_part" ).height());
	$(".img_slogan").css("top", window_height - $( ".img_slogan" ).height() - 50);
	$(".image_trans").css("height", $( ".photo_part" ).height());
	$(".image_trans").css("width", window_width); 
	$(".transition_sign").css("top", $( window ).height() - $( ".transition_sign" ).height() - ($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	$(".transition_sign").css("margin-left", beReverseSign(parseInt($( ".transition_sign_cont" ).width())/2));
	$(".trans_div").css("height", window_height);
	$(".trans_div").css("width", window_width);
	$(".photos").css("height", window_height+4);
	
	$(".container_1").css("height", window_height);
	$(".container_1_cont").css("height", window_height);
	$(".container_1_cont").css("width", window_width);
	$(".container_2").css("height", window_height);
	$(".all_trans_buttons_cont").css("height", window_height);
	$(".choose_country_cont").css("height", window_height);
	

	
	$(".container_2s_image").css("width", window_width);
	$(".container_2s_image").css("height", window_height);
	
	$(".container_1_text_part").css("width", window_width / 2 - ($(".container_1_text_part").outerWidth() - $(".container_1_text_part").outerWidth()));
	$(".menu_contact").css("left", window_width/2 - parseInt($( ".menu_contact" ).css('width'))/2);
	
	
	$(".top_button").css("right", window_width/2 - parseInt($( ".top_button" ).css('width'))/2);
	$(".container_2_text_part_cont").css("height", window_height);
	$(".container_2_text_part_cont").css("width", window_width);
	$(".container_2_text_part").css("padding-left", window_width/2-parseInt($( ".container_2_text_part" ).css('width')));
	$(".top_part_logo").css("padding-left", parseInt($(".contect").css('width')) - parseInt($(".microphone_button_top_a").css('width')));
	ofsets_scroll[0] = $('.c1_main_text_1').offset().top - window_height + parseInt($( ".c1_main_text_1" ).height());
	ofsets_scroll[1] = $('.c1_cont_text_1').offset().top - window_height + parseInt($( ".c1_cont_text_1" ).height());
	ofsets_scroll[2] = $('.c1_cont_text_2').offset().top - window_height + parseInt($( ".c1_cont_text_2" ).height());
	ofsets_scroll[3] = $('.c1_cont_text_3').offset().top - window_height + parseInt($( ".c1_cont_text_3" ).height());
	ofsets_scroll[4] = $('.c1_cont_text_4').offset().top - window_height + parseInt($( ".c1_cont_text_4" ).height());
	ofsets_scroll[5] = $('.c2_main_text_1').offset().top - window_height + parseInt($( ".c2_main_text_1" ).height());
	ofsets_scroll[6] = $('.c2_cont_text_1').offset().top - window_height + parseInt($( ".c2_cont_text_1" ).height());
	ofsets_scroll[7] = $('.c2_cont_text_2').offset().top - window_height + parseInt($( ".c2_cont_text_2" ).height());
	ofsets_scroll[8] = $('.c2_cont_text_3').offset().top - window_height + parseInt($( ".c2_cont_text_3" ).height());
	ofsets_scroll[9] = $('.c2_cont_text_4').offset().top - window_height + parseInt($( ".c2_cont_text_4" ).height());
	
	if(window_width > 1200) {
		$(".container_1s_image").css("width", window_width / 2);
		$(".container_1s_image").css("height", window_height + 150);
		$(".container_1_text_part_sec").css("margin-left", 100);
		$(".container_1_image_part").css("height", window_height);
		$(".container_1_image_part").css("width", window_width/2);
		$(".container_1_text_part").css("height", window_height);
		$(".container_1_text_part").css("width", window_width/2);
		$(".container_1").css("flex-direction", "row");
		$(".container_1_text_part_sec").css("height", window_height);
		$(".container_1_text_part_sec").css("width", window_width/2-200);
		$(".container_1_text_part_cont_1").css("align-items", "flex-start");
		$(".container_1_text_part_cont_1").css("height", window_height);
		$(".button_part").css("margin-top", 20);
		
	} else {
		$(".container_1_text_part_sec").css("margin-left", 0);
		$(".container_1").css("flex-direction", " column-reverse");
		$(".container_1_image_part").css("height", window_height/2);
		$(".container_1_image_part").css("width", window_width);
		$(".container_1_text_part").css("height", window_height/2);
		$(".container_1_text_part").css("width", window_width);
		$(".container_1s_image").css("width", window_width);
		$(".container_1s_image").css("height", window_height/2 + 150);
		$(".container_1_text_part_sec").css("height", window_height/2);
		$(".container_1_text_part_sec").css("width", window_width);
		$(".container_1_text_part_cont_1").css("align-items", "center");
		$(".container_1_text_part_cont_1").css("height", window_height/2);
		$(".button_part").css("margin-top", 30);
	}
	
	if(window_width > 800) {
		$(".imgClick").css("font-size", 70);
		$(".product_top_header").css("font-size", 150);
		$(".product_top_header").css("padding-top", 40);
		$(".product_top_header").css("margin-bottom", 0);
		$(".copywrite_text").css("font-size", 20);
		$(".copywrite_text").css("padding-top", 12);
		$(".menu_button_clickk").css("height", 50);
		$(".menu_button_clickk").css("width", 50);
		$(".top_button").css("bottom", 20);
		$(".menu_icon_bottom").css("padding-bottom", 0);
		$(".menu_icon_bottom").css("font-size", 50);
		$(".menu_contact").css("bottom", 160);
		$(".navicon_button_container").css("padding-top", is_mini_active ? 65:54);
		$(".bar1, .bar2, .bar3 ").css("width", 39);
		$(".bar1, .bar2, .bar3 ").css("height", 6);
		$(".bar1, .bar2, .bar3 ").css("border-radius", 5);
		$(".bar1, .bar2, .bar3 ").css("margin-top", 7);
		$(".bar1, .bar2, .bar3 ").css("margin-bottom", 7);
		if($(".navicon_button_click").hasClass('navi_change_2')) {
			$(".navicon_button_click").removeClass('navi_change_2');
			$(".navicon_button_click").addClass('navi_change');
		}
		
		
	} else {
		$(".imgClick").css("font-size", 50);
		$(".product_top_header").css("font-size", 100);
		$(".product_top_header").css("padding-top", 20);
		$(".product_top_header").css("margin-bottom", -40);
		$(".copywrite_text").css("font-size", 18);
		$(".copywrite_text").css("padding-top", 14);
		$(".menu_button_clickk").css("height", 30);
		$(".menu_button_clickk").css("width", 30);
		$(".top_button").css("bottom", 5);
		$(".menu_icon_bottom").css("padding-bottom", 12);
		$(".menu_icon_bottom").css("font-size", 40);
		$(".menu_contact").css("bottom", 130);
		$(".navicon_button_container").css("padding-top", 54);
		$(".bar1, .bar2, .bar3 ").css("width", 30);
		$(".bar1, .bar2, .bar3 ").css("height", 5);
		$(".bar1, .bar2, .bar3 ").css("border-radius", 5);
		$(".bar1, .bar2, .bar3 ").css("margin-top", 5);
		$(".bar1, .bar2, .bar3 ").css("margin-bottom", 5);
		is_mini_active = true;
		$(".navicon_button_click").css("display", "inline-block");
		if($(".navicon_button_click").hasClass('navi_change')) {
			$(".navicon_button_click").addClass('navi_change_2');
			$(".navicon_button_click").removeClass('navi_change');
		}
	}
	
	if(window_width < 620) { 
		$(".mapouter").css("width", window_width - 20);
		$(".gmap_iframe").css("width", window_width - 20);
		$(".gmap_canvas").css("width", window_width - 20);
		document.getElementById('map1').style.width = ((window_width - 20) + "px");
		document.getElementById('map2').style.width = ((window_width - 20) + "px");
	} else {
		$(".mapouter").css("width", 600);
		$(".gmap_iframe").css("width", 600);
		$(".gmap_canvas").css("width", 600);
		document.getElementById('map1').style.width = '600px';
		document.getElementById('map2').style.width = '600px';
	}
		
	
}

function transLeft() {
	if(transNum == 1) 
		transImg(8)
	 else 
		transImg(transNum - 1);
	is_trans_button_clicked = true;
}

function transRight() {
	if(transNum == 8)
		transImg(1)
	 else 
		transImg(transNum + 1);
	is_trans_button_clicked = true;
}

function beReverseSign(num) {
	num = -num;
	return num;
}

function changePhoto(eleNum) {
	var elementID = "photo_";
	elementID += eleNum;
	document.getElementById(elementID).className = "photos top";
	elementID = elementID.replace(eleNum,transNum);
	document.getElementById(elementID).className = "photos";
}

setTimeout(function() { changeImgg(); }, 5000);

function changeImgg() {
	if(is_change_on_going && !is_trans_button_clicked)
		transImg(transNum+1);
	is_trans_button_clicked = false;
	setTimeout(function() { changeImgg(); }, 5000);
}

setTimeout(function() { beReadyPage();}, 200);
setTimeout(function() { beReadyPage();}, 500);
