//footerの高さを#body-wrapperのpaddingに設定
$(function () {
    var padding_top = $('#header').innerHeight();
    var padding_bottom = $('#footer').innerHeight();
    $('#body-wrapper').css({
        'padding-top': padding_top + "px",
        'padding-bottom': padding_bottom + "px"
    });
});

//グローバルナビゲーション
$(function () {
    /* ハンバーガーメニューの表示・非表示 */
    $('#hamburger-btn').click(function () {
        $('#hamburger-btn').addClass('close-hamburger');
        $('#hamburger-btn').addClass('active');
        $('.header-nav').addClass('active');
        $('.cover').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $('.close-hamburger').click(function () {
        $('#hamburger-btn').removeClass('active');
        $('#hamburger-btn').removeClass('close-hamburger');
        $('.header-nav').removeClass('active');
        $('.cover').removeClass('active');
        $('body').css('overflow', 'auto');
    });
});

//アンカーリンクスムーズスクロール
$('a[href^="#"]').click(function(){
    var adjust = 50;
    var speed = 500;
    var href= $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top  - adjust;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//スクロールしたら表示されるTOPへ戻るボタン
$(function() {
    var topBtn = $('#gototop');
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.addClass('active');
        } else {
            topBtn.removeClass('active');
        }
    });
});


//slick
/*$('.slider').slick({
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
  })*/