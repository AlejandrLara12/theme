
var main = function() {
  smoothScroll(600);

  //codes goes here

  function smoothScroll(duration) {
    $('a[href^="#"]').on('click',function(event) {

      var target =  $( $(this).attr('href') );
      if( target.length ){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        },duration);
      }
    });
  }
};
$(document).ready(main);
// $(function(){
//   smoothScroll(600);
// });
//
//   //codes goes here
//
//   function smoothScroll(duration) {
//     $('a[href^="#"]').on('click',function(event) {
//
//       var target =  $( $(this).attr('href') );

//       if( target.length ){
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         },duration);
//       }
//     });
//   }
