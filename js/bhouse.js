$(".responsive").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});

// $(".style_house_sec02_slide_list").slick({
//   dots: false,
//   slidesToShow: 5,
//   slidesToScroll: 3,
//   infinite: true,
//   // centerMode: true,
//   arrows: false,
//   prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left" style="font-size: 32px;color: #CC7DB7;transform: translateY(-10px);"></i></button>',
//   nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right" style="font-size: 32px;color: #CC7DB7;transform: translateY(-10px);"></i></button>'
// });
// function img_size() {
//   $('.slide_img').each(function () { //jquery.each()循環讀取所有圖片
//     var height = $(this).height();
//     var width = $(this).width();
//     console.log(height)
//     if (height > 200) {
//       $(this).css({
//         'width': 100 + 'px',
//         "margin": 'auto',
//       });
//     }
//     else {
//       $(this).css({
//         "margin-top": '30px',
//       });
//     }
//   });
// }
// img_size();

$(document).on("click", ".article__readMore", function (event) {
  $('.bhouseweb_loc_sec02').css('height', 'auto');
  $('.article__readMore').hide();

});

$(document).on("click", ".bhouseweb_loc_type>a", function (event) {
  $(this).siblings().removeClass('select');

  $(this).toggleClass("select");

});

$(".bt_slogan_portfolio").click(function () {
  $(".bt_slogan_portfolio").fadeOut();
});


$(".bt_slogan").click(function () {
  $(".bt_slogan_portfolio").fadeIn();
});

// Navbar Icon
function changeIcon(e) {
  const item = document.querySelector('[data-toggle-class]');
  item.className === "close-btn" ? item.className = "navbar-toggler-icon" : item.className = "close-btn";
}
