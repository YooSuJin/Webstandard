     

     //라이트박스
     
     $(".lightgallery").lightGallery();

     
     //윈도우 팝업
     $(".window").click(function(e){
        e.preventDefault();
         //window.open("파일명","파일이름","옵션설정")
         //옵션 : left , top , width, height, status , toolvar, location, menubar, scrollbars,fullscreen
     window.open("sample_popup.html","popup_01","width=800,height=590,left=50,top=50,scrollbars=0,toolbar=0")
     });
     
     //레이어 팝업
     $(".layer").click(function(e){
         e.preventDefault();
         //$("#layer").css("display","block");
         //$("#layer").show();
         //$("#layer").fadein();
         $("#layer").slideDown();
         
     });
     
     $("#layer .close").click(function(e){
         e.preventDefault();
         //$("#layer").css("display","block");
         //$("#layer").show();
         //$("#layer").fadeout();
         $("#layer").slideUp();
         
     });

         //탭메뉴
     var $tap_list=$(".tap_menu");
     
     $tap_list.find("ul ul").hide();
     $tap_list.find("li.active>ul").show();
     function tapMenu(e){
         e.preventDefault();
         var $this = $(this);
         $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
     }
     $tap_list.find("ul>li>a").click("tabMenu").focus("tabMenu");
     
          
     
     //배너
$(".ban").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});
     
     //갤러리
     
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay")    
})
$(".peuse").click(function(){
    $(".gallery_img").slick("slickPeuse")    
})
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev")    
})
$(".next").click(function(){
    $(".gallery_img").slick("slickNext")    
})

     
    //버튼을 클릭하면 전체 메뉴를 보이게 하세요//
$(".tit .btn").click(function(e){
    e.preventDefault();
    //$("#cont_nav").css("display","block");
    //$("#cont_nav").show();
    //$("#cont_nav").fadeIn();
    //$("#cont_nav").slideDown();
    //$("#cont_nav").toggle();
    //$("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});