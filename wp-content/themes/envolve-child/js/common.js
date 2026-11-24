jQuery(document).ready(function($) {
	$('.wpml-ls-item a').removeAttr('title');
	
	
	$('.cerfi-img a').hover(function() {
		$(this).css('cursor','zoom-in');
	})
	/*
	$('.owl-item a').click(function(e) {
		e.preventDefault();
	})
	

	$('.owl-stage div').each(function(index, item) {
		
		if($(this).hasClass('cloned')){
			$(this).find('a').removeClass('list_'+index);
		} else {
			$(this).find('a').addClass('list_'+index);
		}
		
		var test;
		
		$('.owl-stage a').click(function() {
			test = true
			
			if(test == true) {
				console.log( $(this).attr('class') );
			}
			
		})
	})
	
	
	$('.owl-stage a.list_81').click(function(){
		alert('클릭이다')
	})
	*/
	
});


jQuery(document).ready(function($){
	
	 
	$('.swiper-button-next, .swiper-button-prev').css('background-image', 'inherit');
	$('.swiper-button-next, .swiper-button-prev').css('color', 'white');



	/* 한국어 소개 페이지 폼 한글 번역 */
	$('.page-id-8411 .form-group input[type=email]').attr('placeholder','이메일 입력하세요');
	$('.page-id-8411 .form-group .btn-title').html('보내기');
	
});

/* 메인 이미지 클릭시 팝업 이미지 슬라이드 */

      var swiper = new Swiper(".mySwiper", {
		slidesPerView : 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		autoplay : {
			delay:3000,
		},
		loop: true
		
		
      });
