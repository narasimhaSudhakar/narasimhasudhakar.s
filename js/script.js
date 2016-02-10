$(document).ready(function(){
		var pro_1 = $('#project-1');
		var pro_2 = $('#project-2');
		var pro_3 = $('#project-3');
		var pro_4 = $('#project-4');
		var pro_5 = $('#project-5');
			
		$('.works-gallery').css({'top':'91%','overflow':'hidden','height':'8%'});
		
		$('.contents').hide()
		
		$(pro_1).css({'left':'0%','width':'20.50%','z-index':'4'})
		$(pro_2).css({'left':'20%','width':'20.50%','z-index':'4'})
		$(pro_3).css({'left':'40%','width':'20.50%','z-index':'4'})
		$(pro_4).css({'left':'60%','width':'20.50%','z-index':'4'})
		$(pro_5).css({'left':'80%','width':'20.50%','z-index':'4'})
		$('section a').click(function(e){
			e.preventDefault();
		})
		
		$('#header').on('mouseenter',function(){
			//$('.year').stop().animate({'opacity':'0','left':'-80%'},500)
			//$('.mail').stop().animate({'left':'33.1%'},400).fadeIn(500)
			$('.phone,.slide-in').stop().slideDown(800)
			$('.works-gallery').stop().animate({'top':'91%','height':'8%'},1000,'easeInQuad')
			$('.slide-out').stop().slideUp(800)
			//$('.name').fadeOut(2222)
		})
		
		$('#header').on('mouseleave',function(){
			//$('.name').fadeIn()
			$('.slide-out').stop().slideDown(800)
			$('.phone,.slide-in').stop().slideUp(800)
			//$('.mail').stop().fadeOut(500)
			//$('.year').stop().animate({'opacity':'1','left':'-60%'},400)
		})
		
		$('.works-gallery').on('mouseenter',function(){
		$('.works-gallery').stop().animate({'top':'26%','height':'73%'},800)
			$(pro_1).find('.project-icon img').stop().animate({'width':'25%','height':'25%'},500,'easeInQuint')
			$(pro_2).find('.project-icon img').stop().animate({'width':'25%','height':'25%'},500,'easeInQuint')
			$(pro_3).find('.project-icon img').stop().animate({'width':'25%','height':'25%'},500,'easeInQuint')
			$(pro_5).find('.project-icon img').stop().animate({'width':'25%','height':'25%'},500,'easeInQuint')
			$(pro_4).find('.project-icon img').stop().animate({'width':'25%','height':'25%'},500,'easeInQuint')
			$('.arrow').fadeOut()
			$('a.projects').css({'cursor':'pointer'})
		})
	
		//$('.works-gallery').on('mouseleave',function(){})
		$(pro_1).on('mouseenter',function(){
		$(pro_1).stop().animate({'width':'40.5%','z-index':'5'},500,'easeInSine')
		$(pro_2).stop().animate({'left':'40%','width':'25.50%','z-index':'4'},500,'easeInSine')
		$(pro_3).stop().animate({'left':'65%','width':'15.50%','z-index':'4'},500,'easeInSine')
		$(pro_4).stop().animate({'left':'80%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_5).stop().animate({'left':'90%','width':'10.50%','z-index':'4'},500,'easeInSine')
		
		$(pro_1).find('h3').stop().animate({'font-size':'2.4em'},500,'easeInSine')
		$(pro_2).find('h3').stop().animate({'font-size':'1.8em'},500,'easeInSine')
		$(pro_3).find('h3').stop().animate({'font-size':'1.0em'},500,'easeInSine')
		$(pro_4).find('h3').stop().animate({'font-size':'0.8em'},500,'easeInSine')
		$(pro_5).find('h3').stop().animate({'font-size':'0.6em'},500,'easeInSine')		
		
		})
		
		$(pro_2).on('mouseenter',function(){
		$(pro_2).stop().animate({'width':'40.5%','z-index':'5','left':'20%'},500,'easeInSine')
		$(pro_1).stop().animate({'left':'0%','width':'20.50%','z-index':'4'},500,'easeInSine')
		$(pro_3).stop().animate({'left':'60%','width':'20.50%','z-index':'4'},500,'easeInSine')
		$(pro_4).stop().animate({'left':'80%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_5).stop().animate({'left':'90%','width':'10.50%','z-index':'4'},500,'easeInSine')
		
		$(pro_1).find('h3').stop().animate({'font-size':'1.6em'},500,'easeInSine')
		$(pro_2).find('h3').stop().animate({'font-size':'2.4em'},500,'easeInSine')
		$(pro_3).find('h3').stop().animate({'font-size':'1.6em'},500,'easeInSine')
		$(pro_4).find('h3').stop().animate({'font-size':'0.8em'},500,'easeInSine')
		$(pro_5).find('h3').stop().animate({'font-size':'0.6em'},500,'easeInSine')
		
		})
		
		$(pro_3).on('mouseenter',function(){
		$(pro_3).stop().animate({'width':'40.5%','z-index':'5','left':'30%'},500,'easeInSine')
		$(pro_1).stop().animate({'left':'0%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_2).stop().animate({'left':'10%','width':'20.50%','z-index':'4'},500,'easeInSine')
		$(pro_4).stop().animate({'left':'70%','width':'20.50%','z-index':'4'},500,'easeInSine')
		$(pro_5).stop().animate({'left':'90%','width':'10.50%','z-index':'4'},500,'easeInSine')
		
		$(pro_1).find('h3').stop().animate({'font-size':'0.8em'},500,'easeInSine')
		$(pro_2).find('h3').stop().animate({'font-size':'1.6em'},500,'easeInSine')
		$(pro_3).find('h3').stop().animate({'font-size':'2.4em'},500,'easeInSine')
		$(pro_4).find('h3').stop().animate({'font-size':'1.6em'},500,'easeInSine')
		$(pro_5).find('h3').stop().animate({'font-size':'0.8em'},500,'easeInSine')
		})
		
		$(pro_4).on('mouseenter',function(){
		$(pro_4).stop().animate({'width':'40.5%','z-index':'5','left':'40%'},500,'easeInSine')
		$(pro_1).stop().animate({'left':'0%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_2).stop().animate({'left':'10%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_3).stop().animate({'left':'20%','width':'20.50%','z-index':'4'},500,'easeInSine')
		$(pro_5).stop().animate({'left':'80%','width':'20.50%','z-index':'4'},500,'easeInSine')
		
		$(pro_1).find('h3').stop().animate({'font-size':'0.6em'},500,'easeInSine')
		$(pro_2).find('h3').stop().animate({'font-size':'1.0em'},500,'easeInSine')
		$(pro_3).find('h3').stop().animate({'font-size':'1.6em'},500,'easeInSine')
		$(pro_4).find('h3').stop().animate({'font-size':'2.4em'},500,'easeInSine')
		$(pro_5).find('h3').stop().animate({'font-size':'0.6em'},500,'easeInSine')
		})
		
		$(pro_5).on('mouseenter',function(){
		$(pro_5).stop().animate({'width':'40.5%','z-index':'5','left':'60%'},500,'easeInSine')
		$(pro_1).stop().animate({'left':'0%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_2).stop().animate({'left':'10%','width':'10.50%','z-index':'4'},500,'easeInSine')
		$(pro_3).stop().animate({'left':'20%','width':'15.50%','z-index':'4'},500,'easeInSine')
		$(pro_4).stop().animate({'left':'35%','width':'25.50%','z-index':'4'},500,'easeInSine')
		
		$(pro_1).find('h3').stop().animate({'font-size':'0.6em'},500,'easeInSine')
		$(pro_2).find('h3').stop().animate({'font-size':'0.8em'},500,'easeInSine')
		$(pro_3).find('h3').stop().animate({'font-size':'1.0em'},500,'easeInSine')
		$(pro_4).find('h3').stop().animate({'font-size':'1.8em'},500,'easeInSine')
		$(pro_5).find('h3').stop().animate({'font-size':'2.4em'},500,'easeInSine')
		})
		
		$('a.projects').on('mouseleave',function(){
		$('a.projects').stop().animate({'width':'20%','z-index':'4'},800)
		$('.works-gallery').stop().animate({'height':'73%','top':'26%'},800)
		$('#project-1').stop().animate({'left':'0%','width':'20.50%','z-index':'4'})
		$('#project-2').stop().animate({'left':'20%','width':'20.50%','z-index':'4'})
		$('#project-3').stop().animate({'left':'40%','width':'20.50%','z-index':'4'})
		$('#project-4').stop().animate({'left':'60%','width':'20.50%','z-index':'4'})
		$('#project-5').stop().animate({'left':'80%','width':'20.50%','z-index':'4'})
		$('.contents').hide()
		$('.project-icon').show()
		$('.home-btn').hide()
		})
		
		$('a.projects').find('.project-icon img').on('mouseenter',function(){
	
			$(pro_1).find('.project-icon img').stop().animate({'width':'20%','height':'20%'},800)
			$(pro_2).find('.project-icon img').stop().animate({'width':'20%','height':'20%'},800)
			$(pro_3).find('.project-icon img').stop().animate({'width':'20%','height':'20%'},800)
			$(pro_4).find('.project-icon img').stop().animate({'width':'20%','height':'20%'},800)
			$(pro_5).find('.project-icon img').stop().animate({'width':'20%','height':'20%'},800)
		
		})
		
		
		
		$(pro_1).click(function(){
			$('#works-gallery').stop().animate({'overflow':'scroll','top':'0%','height':'350%'})
			$(pro_1).stop().animate({'top':'0%','left':'0%','width':'100%','overflow':'scroll'})	
			$('.project-content-1').show()
			$('.project-icon').hide()
			$('.project-content-1 .img-1,.project-content-1 .img-2,.project-content-1 .img-3')
			.css({'background-image':'url("images/Darsh-page-1.png")','height':'20em'})
			//$('.project-content-1 .nav-arrows').fadeIn(1888)
			$('.home-btn').fadeIn(400)
		})
		
		$(pro_2).click(function(){
			$('#works-gallery').stop().animate({'overflow':'scroll','top':'0%','height':'350%'})
			$(pro_2).stop().animate({'top':'0%','left':'0%','width':'100%','height':'400%','overflow':'scroll'})	
			$('.project-content-2').show()
			$('.project-icon').hide()
			$('.project-content-2 .img-1,.project-content-2 .img-2,.project-content-2 .img-3')
			.css({'background-image':'url("images/media-page-1.png")','height':'20em'})
			//$('.project-content-2 .nav-arrows').fadeIn(1888)
			$('.home-btn').fadeIn(400)
		})
		
		$(pro_3).click(function(){
			$('#works-gallery').stop().animate({'overflow':'scroll','top':'0%','height':'350%'})
			$(pro_3).stop().animate({'top':'0%','left':'0%','width':'100%','height':'400%','overflow':'scroll'})	
			$('.project-content-3').show()
			$('.project-icon').hide()
			$('.project-content-3 .img-1,.project-content-3 .img-2,.project-content-3 .img-3')
			.css({'background-image':'url("images/best-page-1.png")','height':'20em'})
			//$('.project-content-3 .nav-arrows').fadeIn(1888)
			$('.home-btn').fadeIn(400)
		})
		
		$(pro_4).click(function(){
			$('#works-gallery').stop().animate({'overflow':'scroll','top':'0%','height':'350%'})
			$(pro_4).stop().animate({'top':'0%','left':'0%','width':'100%','height':'400%','overflow':'scroll'})	
			$('.project-content-4').show()
			$('.project-icon').hide()
			$('.project-content-4 .img-1,.project-content-4 .img-2,.project-content-4 .img-3')
			.css({'background-image':'url("images/3d-page-1.png")','height':'20em'})
			//$('.project-content-4 .nav-arrows').fadeIn(1888)
			$('.home-btn').fadeIn(400)
		})
		
		$(pro_5).click(function(){

			$('#works-gallery').stop().animate({'overflow':'scroll','top':'0%','height':'350%'})
			$(pro_5).stop().animate({'top':'0%','left':'0%','width':'100.3%','height':'400%','overflow':'scroll'})	
			$('.project-content-5').show()
			$('.project-icon').hide()
			$('.project-content-5 .img-1,.project-content-5 .img-2,.project-content-5 .img-3')
			.css({'background-image':'url("images/pen-page-1.png")','height':'20em'})
			//$('.project-content-5 .nav-arrows').fadeIn(1888)
			$('.home-btn').fadeIn(400)
		})
		$('a.projects').click(function(){
			$('.project-details').stop().animate({'width':'102%'})
			$(this).css({'cursor':'context-menu'})
		})
		/*RESPONSIVE*/
		
		$('ul li').hide()
		$('.mobile-menu h2').click(function(){
			$('ul li').slideToggle(1000);
			$('.projects-r').slideUp(2000)
		})
		
		$('.projects-r').hide()
		$('.mobile-menu ul li').click(function(){
			
			var x = $(this).attr('class')
			$('.projects-r').slideUp(600)
			$('.'+x).next('div .'+x).slideDown(1000)
			
			
		})
		
		
	})
	
	
	