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
//http://css3.bradshawenterprises.com/cfimg/#cfimg1



$( document ).ready(function() { 
	//do something after document all loaded
	
	$( ".trans_click" ).hover(function() {
		if(!$(this).hasClass('selected'))
			$(this).addClass('hover_trans_click');
	}, function() {
		$(this).removeClass('hover_trans_click');
	});
	
	/*
	$('div.top_button').click(function() {
		$('html, body').animate({scrollTop: '0'}, 400);
	});*/
	
	
	
	$('div.top_button, .close_nav, .search_part_a').click(function() {
		var window_height = parseInt($( window ).height());
		var window_width = parseInt($( window ).width());
		if (is_menu_open){
			$(".tooltip").text("Menu");
			$(".navicon_button_click").removeClass('navi_change');
			$(".navicon_button_click").removeClass('navi_change_2');
			$(".menu_contact").fadeOut(250);
			$(".close_nav").fadeOut(250);
			$(".my-search-box").val("");
			is_scrolling_locked_menu_nav = false;
		}
		else {
			$(".tooltip").text("Close");
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

	
	/*pause_button
	$('.search_part_a').click(function() {
		if(!search_bar_focus_control){
			$('.search_bar').animate({width: '400'}, 200);
			$('.search_bar').focus();
			search_bar_focus_control = true;
		}
		$(".img_slogan").text("clk_tmp:" + " " + click_temp + " " + "control:" + " " + search_bar_focus_control);
	});
	
	$('.search_bar').blur(function() {
		var click_temp = false;
		$('.submit_button').click(function() {
			click_temp = true;
			$('.search_bar').animate({width: '0'}, 200);
			setTimeout(function() { search_bar_focus_control = false;}, 200);
		});
		if(search_bar_focus_control && !click_temp){
			$('.search_bar').animate({width: '0'}, 200);
			search_bar_focus_control = false;
		}
		$(".product_top_header").text("clk_tmp:" + " " + click_temp + " " + "control:" + " " + search_bar_focus_control);
	});*/
	/*
	$( ".navicon_button_click, .close_nav" ).click(function() {
		if(navicon_button_click_control) {
			navicon_button_click_control = false;
			$(".navicon_button_click").addClass('navi_change');
			//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").animate({left: '0'}, 250);
			$(".close_nav").fadeIn(250);
		}
		else {
			navicon_button_click_control = true;
			$(".navicon_button_click").removeClass('navi_change');
			//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").animate({left: '-150'}, 250);
			$(".close_nav").fadeOut(250);
		}
	});*/
	
	/*$(window).keypress(function(e) {
		e.preventDefault();
		var key = e.which;
		if(key>48 && key<57)
			transImg(key-48);
		$(".product_top_header").text(key);
	});*/
	const searchInput = document.querySelector("#searchInput");
/*
	searchInput.addEventListener("keypress", function(event) {
		if (event.key === "Enter") {
			const searchValue = searchInput.value;
			console.log(`Search value: ${searchValue}`);
		}
	});*/
	
	$(document).keydown(function(e){
		//e.preventDefault();
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
	/*
	$( ".fixed_menu a" ).hover(function() {
		$(this).css("background-color", "black");
		$(this).css("color", "white");
	}, function() {
		if (navicon_button_click_control)
			$(this).css("background-color", "transparent");
		else
			$(this).css("background-color", "white");
		$(this).css("color", "black");
	});
	
	$( ".navicon_button_click" ).hover(function() {
		$(".bar1").css("background-color", "white");
		$(".bar2").css("background-color", "white");
		$(".bar3").css("background-color", "white");
	}, function() {
		$(".bar1").css("background-color", "black");
		$(".bar2").css("background-color", "black");
		$(".bar3").css("background-color", "black");
	});*/
	
	/*
	if($(window).scrollTop() > 100) {
		$("div.top_button").fadeIn(200);
	}*/
	
	beReadyPage();
	//var dir = <?php echo $dir ?>;
	//var file_count = <?php echo $file_count ?>;

	//alert('File count in folder ' + dir + ' is ' + file_count);
	
	$(".icon.youtube").on('click', function(){
		window.open('https://www.youtube.com/channel/UCBKk4Cv_tXeIh1co755xSzQ', '_blank');
	});
	$(".icon.instagram").on('click', function(){
		window.open('https://www.instagram.com/laquillas_ladyshirt/', '_blank');
	});
});

var lastScrollTop = 0;
var menu_state = true;

$(window).scroll(function(event){
	if (is_scrolling_locked_menu_nav || is_scrolling_locked_notifi) {
		$(window).scrollTop(lastScrollTop_stop_scroll);
	} else {
		var st = $(this).scrollTop();
	var window_height = parseInt($( window ).height());
	var window_width = parseInt($( window ).width());
	//$('div').css({"-webkit-transform":"translate(100px,100px)"});​
	//$(".img_slogan").text(parseInt($( ".container_0" ).height()) + ' ' + (parseInt($( ".container_0" ).height())+window_height*2) + ' ' + st);
	 
	if ((st > parseInt($( ".container_0" ).height())) && (parseInt($( ".container_0" ).height())+window_height*2 > st))  {
		
		//$(".container_1s_image").animate({top: ((st - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))-150)}, 3);
		$(".container_1s_image").css("top", ((st - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))-150));
		
		//$(".container_2s_image").animate({top: ((st - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))-150)}, 3);------------------
		//$(".container_1s_image").css("top", parseInt($( "container_0" ).height()));
		// not: iki window_height boyunca top: 0 dan 150px e kadar gidecek. 
		// st > parseInt($( "container_0" ).height()) && parseInt($( "container_0" ).height())+window_height*2 < st
		// (st - parseInt($( "container_0" ).height()))*(150.0/(window_height*2))
		var defval = parseInt($( ".container_0" ).height())  + parseInt($( ".c1_main_text_div" ).height()) + (parseInt($('.container_1_text_part_cont_1').innerWidth()) - parseInt($('.container_1_text_part_cont_1').width()));
		
		if(st > defval){
			$(".c1_main_text_1").addClass('text_upper_ani');
			$(".c1_main_text_1").css("opacity", 1);
		}
		
		if(st > defval + parseInt($( ".c1_cont_text_1" ).height())) {
			$(".c1_cont_text_1").addClass('text_upper_ani');
			$(".c1_cont_text_2").addClass('text_upper_ani');
			$(".c1_cont_text_1").css("opacity", 1);
			$(".c1_cont_text_2").css("opacity", 1);
		}
		if(st > defval + parseInt($( ".c1_cont_text_1" ).height()) + parseInt($( ".c1_cont_text_3" ).height())){
			$(".c1_cont_text_3").addClass('text_upper_ani');
			$(".c1_cont_text_3").css("opacity", 1);
		}
		if(st > defval + parseInt($( ".c1_cont_text_1" ).height()) + parseInt($( ".c1_cont_text_3" ).height()) + parseInt($( ".c1_cont_text_4" ).height())) {
			$(".c1_cont_text_4").addClass('text_upper_ani');
			$(".c1_cont_text_4").css("opacity", 1);
		}
	}
	if ((st > window_height + parseInt($( ".container_0" ).height())) && (parseInt($( ".container_0" ).height())+window_height*3 > st))  {
		var defval = parseInt($( ".container_1" ).height()) + parseInt($( ".container_0" ).height())  + parseInt($( ".c1_main_text_div" ).height()) + (parseInt($('.container_1_text_part_cont_1').innerWidth()) - parseInt($('.container_1_text_part_sec').width()));
		
		if(st > defval){
			$(".c2_main_text_1").addClass('text_upper_ani');
			$(".c2_main_text_1").css("opacity", 1);
		}
		
		if(st > defval + parseInt($( ".c2_cont_text_1" ).height())) {
			$(".c2_cont_text_1").addClass('text_upper_ani');
			$(".c2_cont_text_2").addClass('text_upper_ani');
			$(".c2_cont_text_1").css("opacity", 1);
			$(".c2_cont_text_2").css("opacity", 1);
		}
		if(st > defval + parseInt($( ".c2_cont_text_1" ).height()) + parseInt($( ".c2_cont_text_3" ).height())){
			$(".c2_cont_text_3").addClass('text_upper_ani');
			$(".c2_cont_text_3").css("opacity", 1);
		}
		if(st > defval + parseInt($( ".c2_cont_text_1" ).height()) + parseInt($( ".c2_cont_text_3" ).height()) + parseInt($( ".c2_cont_text_4" ).height())) {
			$(".c2_cont_text_4").addClass('text_upper_ani');
			$(".c2_cont_text_4").css("opacity", 1);
		}
	}
	
	if (st > parseInt($( ".container_0" ).height())+window_height && (parseInt($( ".container_0" ).height())+window_height*4 > st))  {
		
		//$(".container_2s_image").animate({height: (window_height + (st - window_height - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2)))}, 3);
		$(".container_2s_image").css("height", (window_height + (st - window_height - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2))));
	}


		// not: iki window_height boyunca top: 0 dan 150px e kadar gidecek. 
		// st > parseInt($( "container_0" ).height()) && parseInt($( "container_0" ).height())+window_height*2 < st
		// window_height + (st - window_height - parseInt($( ".container_0" ).height()))*(150.0/(window_height*2)))
		// (st - parseInt($( "container_0" ).height()))*(150.0/(window_height*2))
   
   
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

/*
window.onscroll = function(e) {
	//alert(this.oldScroll > this.scrollY);
		if(this.oldScroll > this.scrollY) {
			//$(".top_div").css("height", parseInt($(".fixed_menu").height()));
			//$(".fixed_menu").css("position", "fixed");
			
		} else {
			$(".fixed_menu").animate({top: '0'}, 250);
			//$(".fixed_menu").css("display", "none");
			//$(".top_div").css("height", parseInt($(".fixed_menu").height()));
			//$(".fixed_menu").css("position", "relative");
		}
		this.oldScroll = this.scrollY;
	};
	*/


$( window ).resize(function() {
	beReadyPage();
	setTimeout(function() { beReadyPage();}, 100);
});
/*
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if(scroll < 200) {
		$("div.top_button").fadeOut(200); //$('div.top_button').hide();  //$("#id").css("display", "none");
	} else {
		$("div.top_button").fadeIn(200); //$('div.top_button').show();
	}
	
});*/

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
	var window_height = parseInt($( window ).height());
	var window_width = parseInt($( window ).width());
	
	//$(".main_div").css("width", window_width);
	$(".photo_part").css("height", window_height);
	$(".all_photos").css("height", $( ".photo_part" ).height());
	$(".img_slogan").css("top", window_height - $( ".img_slogan" ).height() - 50);
	$(".image_trans").css("height", $( ".photo_part" ).height());
	$(".image_trans").css("width", window_width); 
	$(".transition_sign").css("top", $( window ).height() - $( ".transition_sign" ).height() - ($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	$(".transition_sign").css("margin-left", beReverseSign(parseInt($( ".transition_sign_cont" ).width())/2));
	//$(".trans_button").css("top", window_height/2);
	$(".trans_div").css("height", window_height);
	$(".trans_div").css("width", window_width);
	$(".photos").css("width", window_width);
	$(".photos").css("height", window_height+4);
	
	$(".container_1").css("height", window_height);
	$(".container_1_cont").css("height", window_height);
	$(".container_1_cont").css("width", window_width);
	$(".container_2").css("height", window_height);
	$(".all_trans_buttons_cont").css("height", window_height);
	
	//$(".container_1_text_part_cont_1").css("width", window_width/2);
	

	
	$(".container_2s_image").css("width", window_width);
	//$("..container_2_cont").css("width", window_width);
	$(".container_2s_image").css("height", window_height);
	//$("..container_2_cont").css("height", window_height);
	
	$(".container_1_text_part").css("width", window_width / 2 - ($(".container_1_text_part").outerWidth() - $(".container_1_text_part").outerWidth()));
	$(".menu_contact").css("left", window_width/2 - parseInt($( ".menu_contact" ).css('width'))/2);
	
	
	$(".top_button").css("right", window_width/2 - parseInt($( ".top_button" ).css('width'))/2);
	//$(".container_2_text_part").css("padding-top", window_height/2-parseInt($( ".container_2_text_part" ).css('height')));
	$(".container_2_text_part_cont").css("height", window_height);
	$(".container_2_text_part_cont").css("width", window_width);
	$(".container_2_text_part").css("padding-left", window_width/2-parseInt($( ".container_2_text_part" ).css('width')));
	$(".top_part_logo").css("padding-left", parseInt($(".contect").css('width')) - parseInt($(".microphone_button_top_a").css('width')));
	
	
	var total_product_card_in_line;
	var one_card_width = parseInt($( ".product_card" ).width() + parseInt($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	var one_card_height = parseInt($( ".product_card" ).height() + parseInt($(".transition_sign").outerHeight() - $(".transition_sign").innerHeight()));
	var total_product_card = $( ".product_card" ).length;
	if(one_card_width*4 + parseInt($( ".product_card" ).css('margin-left'))*5 < window_width) {
		total_product_card_in_line = 4;
	} else if(one_card_width*3 + parseInt($( ".product_card" ).css('margin-left'))*4-19 < window_width) {
		total_product_card_in_line = 3;
	} else if(one_card_width*2 + parseInt($( ".product_card" ).css('margin-left'))*3-23 < window_width) {
		total_product_card_in_line = 2;
	} else {
		total_product_card_in_line = 1;
	}
	

	if(window_width > 1000) {
		//$(".fixed_menu a").css("font-size", 25);
		//$(".fixed_menu a").css("padding", 20);
		//$(".notification_bell").css("height", 21);
		//$(".microphone_button_top_a").css("height", 21);
		//$(".fixed_menu_container").css("margin-left", 50);
		//$(".fixed_menu_container").css("margin-right", 50);
		//$(".search_part_a").css("display", "block");
		
		
		
	} else if(window_width > 600) {
		//$(".fixed_menu a").css("font-size", 17);
		//$(".fixed_menu a").css("padding", 13);
		//$(".notification_bell").css("height", 20);
		//$(".microphone_button_top_a").css("height", 15);
		//$(".fixed_menu_container").css("margin-left", 25);
		//$(".fixed_menu_container").css("margin-right", 25);
		//$(".search_part_a").css("display", "none");
		
	} else {
		//$(".fixed_menu a").css("font-size", 17);
		//$(".fixed_menu a").css("padding", 4);
		//$(".notification_bell").css("height", 20);
		//$(".microphone_button_top_a").css("height", 15);
		//$(".fixed_menu_container").css("margin-left", 25);
		//$(".fixed_menu_container").css("margin-right", 25);
		//$(".search_part_a").css("display", "none");
		
	}
	
		/*	.container_1_text_part_cont_1 {
	display: flex;
	flex-direction: column;
    align-items: flex-start;
	justify-content: center;
}*/
	
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
		
		//container_1s_image
		
	} else if (window_width > 850){
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
		//$(".imgClick").css("-webkit-text-stroke", "2px black");
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
		//$(".fixed_menu a").css("display", "inline-block");
		//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", "auto");
		//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("background-color", "transparent");
		//$(".home_button").css("top", 0);
		//$(".home_button").css("display", "inline-block");
		//$(".home_button").css("padding-top", 2);
		//$(".home_button").css("padding-bottom", 11);
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
		//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("background-color", "white");
		//$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("display", "block");
		$(".menu_contact").css("bottom", 130);
		$(".navicon_button_container").css("padding-top", 54);
		$(".bar1, .bar2, .bar3 ").css("width", 30);
		$(".bar1, .bar2, .bar3 ").css("height", 5);
		$(".bar1, .bar2, .bar3 ").css("border-radius", 5);
		$(".bar1, .bar2, .bar3 ").css("margin-top", 5);
		$(".bar1, .bar2, .bar3 ").css("margin-bottom", 5);
		is_mini_active = true;
		/*if(navicon_button_click_control) {
			$(".close_nav").css("display", "none");
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", -150);
		}
		else {
			$(".close_nav").css("display", "block");
			$(".fixed_menu a:not(.contect a, .navicon_button_click, .home_button)").css("left", 0);
		}*/
		$(".navicon_button_click").css("display", "inline-block");
		//$(".home_button").css("top", -10);
		//$(".home_button").css("display", "inline-block");
		//$(".home_button").css("padding-top", 3);
		//$(".home_button").css("padding-bottom", 9);
		if($(".navicon_button_click").hasClass('navi_change')) {
			$(".navicon_button_click").addClass('navi_change_2');
			$(".navicon_button_click").removeClass('navi_change');
		}
	}
	
	if(window_width > 1700) {
		$(".contect_part").css("height", 440);
		$(".YouTube_video").css("padding-left", (window_width - $(".YouTube_video").width())/2);
		$(".YouTube_video").css("margin-top", -500);
		$(".YouTube_video").css("padding-bottom", 90);
		$(".YouTube_video").css("top", 0);
		$(".social_media_part").css("margin-right", 70);
		$(".social_media_part").css("padding-bottom", 0);
		$(".contect_social_header").css("text-align", "right");
		$(".contect_social_header").css("margin-right", 85);
		$(".mapouter").css("margin-left", 10);
		$(".mapouter").css("top", 0);
		
	} else if(window_width > 1200) {
		$(".contect_part").css("height", 520);
		$(".YouTube_video").css("padding-left", window_width - $(".YouTube_video").width() - 70);
		$(".YouTube_video").css("margin-top", -1100);
		$(".YouTube_video").css("padding-bottom", 0);
		$(".YouTube_video").css("top", 60);
		$(".social_media_part").css("margin-right", 70);
		$(".social_media_part").css("padding-bottom", 0);
		$(".contect_social_header").css("text-align", "right");
		$(".contect_social_header").css("margin-right", 85);
		$(".mapouter").css("margin-left", 10);
		$(".mapouter").css("top", 45);
	} else {
		$(".contect_part").css("height", 950);
		$(".YouTube_video").css("padding-left", (window_width - $(".YouTube_video").width())/2);
		$(".YouTube_video").css("margin-top", 220);
		$(".YouTube_video").css("padding-bottom", 0);
		$(".YouTube_video").css("top", 0);
		$(".social_media_part").css("margin-right", (window_width - $( ".social_media_part" ).width())/2);
		$(".social_media_part").css("padding-bottom", 20);
		$(".contect_social_header").css("text-align", "center");
		$(".contect_social_header").css("margin-right", 0);
		$(".mapouter").css("margin-left", (window_width - $( ".mapouter" ).width())/2);
		$(".mapouter").css("top", 0);
	}
	
	$(".product_card").css("left", (window_width - (total_product_card_in_line * one_card_width + (total_product_card_in_line+1)*parseInt($( ".product_card" ).css('margin-left'))))/2);
	
	//var total_card_height = 1;
	var total_card_height = (parseInt(total_product_card/total_product_card_in_line) < total_product_card/total_product_card_in_line) ? (total_product_card/total_product_card_in_line+1) : (total_product_card/total_product_card_in_line);
	$(".product_background_gradient").css("height", parseInt($( ".product_top_header" ).height()) + parseInt($( ".product_top_header" ).css('padding-top')) + (parseInt($( ".product_card" ).css('margin-top')) + parseInt($( ".product_card" ).height()))*total_card_height + 100);
	
	
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

for(var i = 1; i < 100; ++i) {
	
	setTimeout(function() { changeImgg(); }, i*5000);
	
}



function changeImgg() {
	if(is_change_on_going && !is_trans_button_clicked)
		transImg(transNum+1);
	is_trans_button_clicked = false;
}

setTimeout(function() { beReadyPage();}, 200);
setTimeout(function() { beReadyPage();}, 500);