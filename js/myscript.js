	$(function(){
				//home 페이지----------------------------------------------
				var gnb=$("#home #gnb li");
				var lnb=$("#home #lnb li");
				var homeBtn01=$("#home .event_btn");
				var homeBtn02=$("#home .youtube_btn");
				var video=$("#home iframe");
				var board=$("#home .playboard");
				var ho_x_btn=$("#home .ho_x_btn");
				var store=$("#home .coffee");
				var light=$("#home .light");
				var black_bg=$(".black_bg");

				var width =$(window).width();

				$(window).resize(function(){
					width =$(window).width();
					//alert(width); 1920&1137
				})
				gnb.click(function(){
					var tg=$(this);
					var i=tg.index();
					var nowpage=width*i
					//alert(i);01234

					 $("html,body").animate({scrollLeft:nowpage},500,"linear");
					 gnb.removeClass("active");
					 tg.addClass("active");

					$("#event .event_carousel li").eq(0).trigger("click");
				})//gnb 내가 선택한 메뉴 활성화+페이지이동/이벤트 버튼 초기화
				lnb.click(function(){
					var tg=$(this);
					var i=tg.index();
					var nowpage=width*(i+1);
					//alert(i);01234

					 $("html,body").animate({scrollLeft:nowpage},400,"linear");

				})//lnb 페이지 이동
				homeBtn01.click(function(){
					var now=width*3
					$("html,body").animate({scrollLeft:now},400,"linear");
					$("#event .event_carousel li").eq(1).trigger("click");

				})//이벤트 페이지로 이동하며 해당 내용이 보이게
				board.hide();
				video.hide();

				homeBtn02.click(function(){
					store.hide();
					light.hide();
					board.show();
					video.show();
					black_bg.show();
				})//youtube영상 불러오기

				ho_x_btn.click(function(){
					board.hide();
					video.hide();
					black_bg.hide();
					store.show();
					light.show();	
				})//colse 버튼 클릭시

				black_bg.click(function(){
					board.hide();
					video.hide();
					black_bg.hide();
					store.show();
					light.show();
				})//검은 배경 클릭 시

				$("section").on("mousewheel",function(event,delta){
					if(ev_scrollbox.css("display")=="block"){
						return 0;
					}//event 스크롤 페이지 오픈 시 마우스 휠 방지
					else if(delta>0){
						var prev = $(this).prev().offset().left;
						$("html,body").stop().animate({"scrollLeft":prev},500,"linear");
					}else if(delta<0){
						var next = $(this).next().offset().left;
						$("html,body").stop().animate({"scrollLeft":next},500,"linear");
					}
				})//마우스 휠에 반응하여 페이지 이동

				$(window).scroll(function(){
					var myScrollpage=$(window).scrollLeft();
				
					if(myScrollpage>=0 && myScrollpage<width){
						gnb.removeClass("active");
						gnb.eq(0).addClass("active");
					}else if(myScrollpage>=0 && myScrollpage<width*2){
						gnb.removeClass("active");
						gnb.eq(1).addClass("active");
					}
					else if(myScrollpage>=0 && myScrollpage<width*3){
						gnb.removeClass("active");
						gnb.eq(2).addClass("active");
					}
					else if(myScrollpage>=0 && myScrollpage<width*4){
						gnb.removeClass("active");
						gnb.eq(3).addClass("active");
					}else{
						gnb.removeClass("active");
						gnb.eq(4).addClass("active");
					}
				})//스크롤시 해당 메뉴 활성화

				//aboutus페이지----------------------------------------------
				var frame=$("#aboutus .photo");//액자
				var ab_modal_bg=$("#aboutus .ab_modal_bg");//모달창 배경
				var ab_modal01=$("#aboutus .ab_modal_bg .ab_modal");
				var ab_modal02=$("#aboutus .ab_modalpage");
				var frameinBtn=$("#aboutus .ab_btn");
				var man=$("#aboutus .man");
				var talk=$("#aboutus .talk");
				var ab_x_btn1=$("#aboutus .ab_modal_bg .ab_x_btn01"); //close버튼
				var ab_x_btn2=$("#aboutus .ab_x_btn02");//2depth x버튼
		
					ab_modal_bg.hide();
					ab_modal02.hide();
					black_bg.hide();

					frame.click(function(){
						var tg=$(this);
						var i=tg.index();

						ab_modal_bg.show();
						ab_modal01.hide();
						ab_modal02.hide();
						black_bg.show();
						frame.hide();
						man.hide();
						talk.hide();
						ab_modal01.eq(i).show();
					})//액자 클릭시 모달창 활성화
					frameinBtn.click(function(){
						ab_modal_bg.hide();
						ab_modal01.hide();
						frame.hide();
						man.hide();
						talk.hide();
						ab_modal02.show();
						black_bg.show();
					})//3번 액자안에 버튼(잘 안보임)
					ab_x_btn1.click(function(){
						ab_modal_bg.hide();
						ab_modal02.hide();
						black_bg.hide();
						frame.show();
						man.show();
						talk.show();
					})//액자 모달 close버튼 
					ab_x_btn2.click(function(){
						ab_modal_bg.hide();
						ab_modal01.hide();
						ab_modal02.hide();
						black_bg.hide();
						frame.show();
						man.show();
						talk.show();
					})//2depth 모달  close버튼 
					black_bg.click(function(){
						ab_modal_bg.hide();
						ab_modal02.hide();
						black_bg.hide();
						frame.show();
						man.show();
						talk.show();
					})//검은 배경 클릭시 close 활성화
				//product 페이지----------------------------------------------
				var pr_menu=$("#product .wood div");//메뉴판
				var pr_modal_bg=$("#product .pr_modal_bg");//모달창
				var pr_content=$("#product ul.woods");
				var pr_contentList1=$("#product ul.wood-1 li");
				var pr_contentList2=$("#product ul.wood-2 li");
				var pr_contentList3=$("#product ul.wood-3 li");//상품이미지
				var pr_x_btn=$("#product .fa-times-circle");
				var pr_carousel=$("#product .pr_carousel .square div");

					pr_modal_bg.hide();
			
					pr_menu.click(function(){
				 		var tg=$(this);
						var i=tg.index();
				 
						pr_menu.hide();
						pr_modal_bg.show();
						pr_content.hide();
						
						pr_carousel.eq(0).trigger("click");	
						pr_carousel.eq(2).trigger("click");
						pr_carousel.eq(4).trigger("click");

						// pr_carousel.eq(3).click(function(){
						// 	alert("3번째");
						// })->원하는 eq값을 지정할 때 요렇게 해보자!!선생님 tip!

						pr_content.eq(i).show();
						black_bg.show();
				})//wood 클릭시 모달창 활성화
				pr_current=0;
				pr_carousel.click(function(){

				var tg = $(this);
				var i = tg.index();
				var current=0;

				pr_carousel.eq(0).addClass("active");
				pr_carousel.eq(2).addClass("active");
				pr_carousel.eq(4).addClass("active");
				if(pr_current==i) return 0;//움직이지 않겠다
				
				move(i);

				function move(i){
						
					var pr_currentImg1 =pr_contentList1.eq(pr_current);
					var pr_nextImg1 =pr_contentList1.eq(i);
					var pr_currentImg2 =pr_contentList2.eq(pr_current);
					var pr_nextImg2 =pr_contentList2.eq(i);
					var pr_currentImg3 =pr_contentList3.eq(pr_current);
					var pr_nextImg3 =pr_contentList3.eq(i);

					pr_currentImg1.css("left",0).animate({"left":"-100%"});
					pr_nextImg1.css("left","100%").animate({"left":0});
					pr_currentImg2.css("left",0).animate({"left":"-100%"});
					pr_nextImg2.css("left","100%").animate({"left":0});
					pr_currentImg3.css("left",0).animate({"left":"-100%"});
					pr_nextImg3.css("left","100%").animate({"left":0});
					pr_current=i;
				}//캐로셀 클릭 시 상품이미지 동작

				pr_carousel.removeClass("active");
				tg.addClass("active");
				})//모달창 캐로셀
				
				pr_x_btn.click(function(){
					pr_menu.show();
					pr_modal_bg.hide();
				 	black_bg.hide();
				 	pr_menu.show();
				})//product 모달창 close 클릭시
				black_bg.click(function(){
					pr_menu.show();
					pr_modal_bg.hide();
				 	black_bg.hide();
				})//검은 배경 클릭시 close 활성화

				//event 페이지----------------------------------------------
				var ev_banner=$("#event .s-border .banner");
				var ev_carousel=$("#event .event_carousel li");
				var bannerBtn=$("#event .banner div");
				var ev_scrollpage=$("#event .scrollpage ul");
				var ev_scrollbox=$("#event div.scrollpage");
				var ev_scrollImg=$("#event .scrollpage li.ev_scroll");
				var ev_x_btn=$("#event .scrollpage .fa-times");
				var ev_current=0;

				ev_scrollpage.hide();
				ev_scrollImg.hide();
				ev_scrollbox.hide();

				ev_current=0;
				ev_carousel.click(function(){
					var tg = $(this);
					var i = tg.index();

					if(ev_current==i) return 0;
		
					move(i);

					function move(i){

						var currentImg =ev_banner.eq(ev_current);
						var nextImg=ev_banner.eq(i);

						currentImg.css("left",0).animate({"left":"-100%"});
						nextImg.css("left","100%").animate({"left":0});
						ev_current=i;
					
					}//동작구현 함수
					ev_carousel.removeClass("active");
					tg.addClass("active");

				})//이벤트 캐로셀 버튼 클릭시
				bannerBtn.eq(0).click(function(){
					ev_scrollbox.show();
					ev_scrollpage.show();
					ev_scrollImg.hide();
					ev_scrollImg.eq(0).show();
					black_bg.show();
				})
				bannerBtn.eq(1).click(function(){
					ev_scrollbox.css("background-image","url(img/sub/event/modalBg02.png)").show();
					ev_scrollpage.show();
					ev_scrollImg.hide();
					ev_scrollImg.eq(1).show();
					ev_x_btn.css("color","#F5A043");
					black_bg.show();
				})
				bannerBtn.eq(2).click(function(){
					ev_scrollbox.css("background-image","url(img/sub/event/modalBg03.png)").show();
					ev_scrollpage.show();
					ev_scrollImg.hide();
					ev_scrollImg.eq(2).show();
					black_bg.show();	
				})//banner안에 버튼을 각각 클릭 시
				
				ev_x_btn.click(function(){
					ev_scrollbox.css("");
					ev_scrollpage.hide();
					ev_scrollbox.hide();
					ev_x_btn.css("color","");
					black_bg.hide();
					ev_scrollbox.off("scroll touchmove mousewheel");

				})//close 버튼 실행

				black_bg.click(function(){
					ev_scrollbox.hide();
					ev_scrollpage.hide();
					black_bg.hide();
					ev_scrollImg.hide();
				})//검은 배경 클릭 시

				//recipe 페이지----------------------------------------------
				var book=$("#recipe .book");
				var memo=$("#recipe .memo");//말주머니
				var guide=$("#recipe .guide");//캐릭터
				var bookTab=$("#recipe .mark li");
				var showBook=$("#recipe #book_border");
				var re_menu=$("#recipe #book_border .big_bk ul");
				var re_menuList1=$("#recipe .big_bk #dalgona li");//달고나
				var re_menuList2=$("#recipe .big_bk #soi li");//소이
				var re_menuList3=$("#recipe .big_bk #ice li");//아이스크림라떼
				var re_menuList4=$("#recipe .big_bk #greentea li");//녹차라떼
				var re_carousel=$("#recipe .big_bk .re_carousel div");
				var re_x_Btn=$("#recipe #book_border .big_bk .fa-times");
				var memo_leftBtn=$("#recipe .memo .fa-angle-left");//말주머니 버튼
				var memo_rightBtn=$("#recipe .memo .fa-angle-right");//말주머니 버튼
				var guide_speech=$("#recipe .memo li");//말주머니 안에 텍스트
				var re_current=0;	
				
				showBook.hide();
				memo_leftBtn.hide();

				book.click(function(){
					var tg=$(this);
					var i=tg.index();

					memo.hide();
					guide.hide();
					book.hide();
					re_menu.hide();
					re_menu.eq(i).show();
					showBook.show();
					black_bg.show();

					bookTab.removeClass("active");
					bookTab.eq(i).addClass("active");
				})//책장의 책 클릭 시 + 해당 레시피 탭 활성화
				bookTab.click(function(){
					var tg=$(this);
					var i=tg.index();

					re_menu.hide();
					re_menu.eq(i).show(); 
					re_carousel.eq(0).trigger("click");

					bookTab.removeClass("active");
					tg.addClass("active");//클릭 시 색깔변화
					
				})//모달 탭 클릭 시
				re_carousel.click(function(){
					var tg=$(this);
					re_i=tg.index();

					if(re_current==re_i) return 0;

					move(re_i);


					function move(re_i){
					 	var currentImg1=re_menuList1.eq(re_current);
					 	var nextImg1=re_menuList1.eq(re_i);
					 	var currentImg2 =re_menuList2.eq(re_current);
					 	var nextImg2=re_menuList2.eq(re_i);
					 	var currentImg3 =re_menuList3.eq(re_current);
					 	var nextImg3=re_menuList3.eq(re_i);
					 	var currentImg4 =re_menuList4.eq(re_current);
					 	var nextImg4=re_menuList4.eq(re_i);

						currentImg1.css("left",0).animate({"left":"-100%"});
						nextImg1.css("left","100%").animate({"left":0});
						currentImg2.css("left",0).animate({"left":"-100%"});
						nextImg2.css("left","100%").animate({"left":0});
						currentImg3.css("left",0).animate({"left":"-100%"});
						nextImg3.css("left","100%").animate({"left":0});
						currentImg4.css("left",0).animate({"left":"-100%"});
						nextImg4.css("left","100%").animate({"left":0});
						re_current=re_i;
					}//동작구현 함수
					
					re_carousel.removeClass("active");
					tg.addClass("active");//클릭 시 색깔변화
				})//recipe 캐로셀

				memo_rightBtn.click(function(){
					var re_currentImg=guide_speech.eq(0);
					var re_nextImg=guide_speech.eq(1);

					re_currentImg.css("left",0).animate({"left":"-100%"});
					re_nextImg.css("left","100%").animate({"left":0});

					memo_leftBtn.show();
					memo_rightBtn.hide();
				})//말주머니 안 next 버튼
				memo_leftBtn.click(function(){
					var re_currentImg=guide_speech.eq(1);
					var re_prevImg=guide_speech.eq(0);
					
					re_currentImg.css("left",0).animate({"left":"100%"});
					re_prevImg.css("left","-100%").animate({"left":0});
				
					memo_rightBtn.show();
					memo_leftBtn.hide();
				})//말주머니 안 prev 버튼
				re_x_Btn.click(function(){
					showBook.hide();
					black_bg.hide();
					memo.show();
					guide.show();
					book.show();
				})//big_bk close버튼 클릭 시
				black_bg.click(function(){
					showBook.hide();
					black_bg.hide();
					memo.show();
					guide.show();
					book.show();
				})//검은 배경 클릭 
			})