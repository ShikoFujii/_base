//グローバルナビゲーション
$(function () {
    /* ハンバーガーメニューの表示・非表示 */
    $('#hamburger-btn').click(function () {
        $('#hamburger-menu').addClass('active');
    });
    $('.close-hamburger').click(function () {
        $('#hamburger-menu').removeClass('active');
    });
});

//アンカーリンクスムーズスクロール
$('a[href^="#"]').click(function(){
    var adjust = 50;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top  - adjust;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
});

//slick
$(".slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: 'slide-dots',
  })