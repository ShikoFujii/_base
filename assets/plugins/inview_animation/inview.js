// アニメーション(※anime.css使用前提 ※jquery.inview.js使用前提)
function inview_anime(){
  'use strict';
  $('.line-txtbox').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('active');
      setTimeout(function(){
        $('.line-txtbox p').addClass('animated');
        $('.line-txtbox p').addClass('fadeInUp');
      }, 400);
    }else{
/*        $(this).removeClass('active');
        $('.line-txtbox p').removeClass('fadeInUp');*/
    }
  });
  $('.InVzoomIn').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('zoomIn');
    }else{
/*      $(this).removeClass('zoomIn');*/
    }
  });
  $('.InVfadeIn').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeIn');
    }else{
        /*$(this).removeClass('fadeInUp');
    }
  });
  $('.InVfadeOut').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeOut');
    }else{
       /* $(this).removeClass('fadeInUp');*/
    }
  });
  $('.InVfadeInUp').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInUp');
    }else{
/*        $(this).removeClass('fadeInUp');
        $(this).css({'opacity':'0'});*/
    }
  });
  $('.box-shadow').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeIn');
    }
  });
  $('.InVfadeInDown').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInDown');
    }else{
       /* $(this).removeClass('fadeInDown');*/
    }
  });
  $('.InVfadeInRight').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInRight');
    }else{
        /*$(this).removeClass('fadeInRight');*/
    }
  });
  $('.InVfadeInLeft').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInLeft');
    }else{
        /*$(this).removeClass('fadeInLeft');*/
    }
  });
  $('.InVfadeInRight_re').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInRight');
    }else{
        $(this).removeClass('fadeInRight');
    }
  });
  $('.InVfadeInLeft_re').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeInLeft');
    }else{
        $(this).removeClass('fadeInLeft');
    }
  });
  $('.InVfadeOut').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeOut');
    }else{
/*        $(this).removeClass('fadeOutRight');
        $(this).addClass('fadeInRight');*/
    }
  });
  $('.InVfadeOutRight').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeOutRight');
    }else{
/*        $(this).removeClass('fadeOutRight');
        $(this).addClass('fadeInRight');*/
    }
  });
  $('.InVfadeOutLeft').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('fadeOutLeft');
    }else{
/*        $(this).removeClass('fadeOutLeft');
        $(this).addClass('fadeInLeft');*/
    }
  });
  $('.InVFlashIn').on('inview', function(event, isInView){
    if (isInView) {
      $(this).addClass('animated');
      $(this).addClass('flashIn');
    }else{
      /*$(this).removeClass('flashIn');*/
    }
  });
}

inview_anime();