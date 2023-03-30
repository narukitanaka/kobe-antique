'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');
	const header = document.querySelector('header');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
		header.classList.toggle('active');
	});
}

$(function () {

	//フェードイン
	const fadeinItems = document.querySelectorAll('.fadein');

	const options = {
		rootMargin: "0px 0px -10% 0px"
	};

	const callback = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('active');
			}
		});
	};

	const io = new IntersectionObserver(callback, options);
	fadeinItems.forEach(fadeinItem => {
		io.observe(fadeinItem);
	});

	if (w > spwidth) {

		// //サブメニュー　表示
		$('.has_submenu').hover(function () {
			$('#header').addClass('active');
			$(this).children('.submenu_wrap').fadeIn(300);

		}, function () {
			$('#header').removeClass('active');
			$(this).children('.submenu_wrap').fadeOut(300);
		});

		if (window.document.body.id === 'items') {
			// //サブメニュー　表示
			$('.has_submenu').hover(function () {

				$(".logo_items").fadeOut(300);
				$(".items_icon").fadeOut(300);
				$(".nav_menu_link").addClass('white');
				$(".logo_items_w").addClass('show');
				$(".items_icon_w").addClass('show');


			}, function () {

				$(".logo_items").fadeIn(300);
				$(".items_icon").fadeIn(300);
				$(".nav_menu_link").removeClass('white');
				$(".logo_items_w").removeClass('show');
				$(".items_icon_w").removeClass('show');

			});

		}

		//お客様の声　ポップアップ表示
		$('.item_list li').click(function () {

			let index = $('.item_list li').index(this);
			let count = $('.item_list li').length;
			count--;
			let currentIndex = index;

			$('#next').click(function () {
				$('.content_list').hide();
				if (currentIndex === count) {
					currentIndex = 0;
				} else {
					currentIndex++;
				}
				$('.content_list li').removeClass('show');
				$('.content_list li').eq(currentIndex).addClass('show');
				$('.content_list').fadeIn(300);
			});

			$('#prev').click(function () {
				$('.content_list').hide();
				if (currentIndex === count) {
					currentIndex = 0;
				} else {
					currentIndex--;
				}
				$('.content_list li').removeClass('show');
				$('.content_list li').eq(currentIndex).addClass('show');
				$('.content_list').fadeIn(300);
			});

			$('.content_list li').removeClass('show');
			$('.content_list li').eq(index).addClass('show');
			$('#popup').fadeIn(300);
		});

	} else {

		//スマホ　サブメニュー表示
		$('.js-nav_link').click(function () {
			$(this).toggleClass('active');
			$(this).next().slideToggle(300);
			$('.js-nav_link').not($(this)).next().slideUp(300);
			$('.js-nav_link').not($(this)).removeClass('active');
			return false;
		});

		$('#js-category').click(function () {
			$(this).toggleClass('active');
			$('#js-category-box').slideToggle(300);
		});

		$('#menu_open').click(function () {

			// $(".logo_items").fadeOut(300);
			// $(".items_icon").fadeOut(300);
			$(".nav_menu_link").toggleClass('white');
			$(".logo_items").toggleClass('show');
			$(".logo_items_w").toggleClass('show');
			// $(".items_icon_w").addClass('show');
			$(".only_items_cart").toggleClass('show');
		});
	}

	//商品一覧　表示切り替え
	$('#grid_btn').click(function () {
		$('#items_list_list').removeClass('show');
		$('#items_list_grid').addClass('show');
	});
	$('#list_btn').click(function () {
		$('#items_list_grid').removeClass('show');
		$('#items_list_list').addClass('show');
	});


	//クリックイベント
	$('#open01').click(function () {
		//パネルをアニメーションでトグル出来るようにする
		$("#inner01").animate({ width: 'toggle' }, 300);
	});

	$('#open02').click(function () {
		//パネルをアニメーションでトグル出来るようにする
		$("#inner02").animate({ width: 'toggle' }, 300);
	});


	$('#cancel').click(function () {
		$('#popup').fadeOut(300);
	});




  //パララックス トップページ

		var rellax = document.getElementsByClassName('rellax01');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.1,
			overflow: true,
			delay: 1.1,
		});

		var rellax = document.getElementsByClassName('rellax02');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.2,
			overflow: true,
			delay: 1.5,
		});

		var rellax = document.getElementsByClassName('rellax03');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.4,
			overflow: true,
			delay: 0.9,
		});

		var rellax = document.getElementsByClassName('rellax04');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.55,
			overflow: true,
			delay: 0.3,
		});



	//パララックス ショップ / アクセスページ

		var rellax = document.getElementsByClassName('rellax05');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.1,
			overflow: true,
			delay: 1.1,
		});

		var rellax = document.getElementsByClassName('rellax06');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.2,
			overflow: true,
			delay: 1.5,
		});

		var rellax = document.getElementsByClassName('rellax07');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.4,
			overflow: true,
			delay: 0.9,
		});

		var rellax = document.getElementsByClassName('rellax08');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.55,
			overflow: true,
			delay: 0.3,
		});

		var rellax = document.getElementsByClassName('rellax09');
		new simpleParallax(rellax, {
			orientation: 'down',
			scale: 1.6,
			overflow: true,
			delay: 0.3,
		});



	// 一番最後に記述
	$("body").removeClass("preload");

});

$(window).on("load scroll", function () {

	if (w > spwidth) {
		let scroll_pos = $(window).scrollTop();
		if (scroll_pos > 600) {
			$('header').addClass('header_low');
		} else {
			$('header').removeClass('header_low');
		}
	}

});


$(window).on("load", function () {

	$('#popup').css({
		'opacity': 1,
		'visibility': 'visible',
		'display': 'none'
	});

	$('#popup li').css({
		'opacity': 1,
		'visibility': 'visible',
		'display': 'none'
	});

});


//配送料について　ポップアップ
$('#js-open-page').click(function () {
  const url = location.href;
  const urlpath = location.pathname;

  console.log(urlpath);

  const replacedUrl = url.replace(urlpath, "/pages/delivery-charge");
  window.open(replacedUrl, '_blank', 'menubar=0,location=0,width=500,height=600,top=150,left=300');
});


//ブログページカテゴリーマーク
// window.onload = function() {

//   var url = window.location.href; 
//   // 最後の値を取り出す 
//   var lastValue = url.split('/').pop();
//   console.log(lastValue);

//   var link01 = $('#act-tag01 a').attr('href'); 
//   // 最後の値を取り出す 
//   var lastLink01 = link01.substring(link01.lastIndexOf('/') + 1); 
//   console.log(lastLink01);

//   var link02 = $('#act-tag02 a').attr('href'); 
//   // 最後の値を取り出す 
//   var lastLink02 = link02.substring(link02.lastIndexOf('/') + 1); 
//   console.log(lastLink02);

//   var link03 = $('#act-tag03 a').attr('href'); 
//   // 最後の値を取り出す 
//   var lastLink03 = link03.substring(link03.lastIndexOf('/') + 1); 
//   console.log(lastLink03);


//   if (lastValue == lastLink01) {
//     $('#all-tag').removeClass('active');
//     $('.act01').parent().addClass('active');
//   }else if (lastValue == lastLink02) {
//     $('#all-tag').removeClass('active');
//     $('.act02').parent().addClass('active');
//   }else if (lastValue == lastLink03) {
//     $('#all-tag').removeClass('active');
//     $('.act03').parent().addClass('active');
//   }
// }



//商品に関するお問い合わせ
// window.onload = function() {
//   // document.getElementById("102523-name").type = "hidden";
//   document.getElementById("102523-url").type = "hidden";
//   document.getElementById("102523-text-2").type = "hidden";

//   // URLを取得
//   const url = new URL(window.location.href);
//   // URLの末尾につく?以降のGETパラメータを取得
//   const params = url.searchParams;
//   // ルートURLを取得
//   const originurl = url.origin; 

//   console.log(params);
//   console.log(originurl);

//   // パラメータから「name」を取得
//   const productname = params.get("name");
//   const producthandle = params.get("handle");
//   const producturl = params.get("url");

//   console.log(productname);
//   console.log(producthandle);
//   console.log(producturl);

//   // document.getElementById("102523-name").value = productname;
//   document.getElementById("102523-text-2").value = productname;

//   if( params.has('name') ) {
//     document.getElementById("contact_product-info_area").classList.add("contact_product-info_area_block");
//     document.getElementById("102523-url").value = originurl + producturl;
//   }

// }



