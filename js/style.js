$(document).ready(function () {
  $(window).scroll(function () {
    sct = $(window).scrollTop();

    if (sct >= 100) {
      $(".top_btn").fadeIn(500);
    } else if (sct < 100) {
      $(".top_btn").fadeOut(500);
    }
  });

  $(".top_btn").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });

  $(window).scroll(function () {
    sct = $(window).scrollTop();

    if (sct > 200 && sct < 1000) {
      $(".r_box").animate(
        {
          left: "50%",
        },
        1000,
        "easeOutBounce"
      );
    } else if (sct > 1000) {
      $(".b_box").animate(
        {
          top: "50%",
        },
        1000,
        "easeInOutBounce"
      );
    }
  });

  // *가속도
  // => 가속도 플러그인 사용(jQuery Easing Plugin)
  // => 가속도 들어가는 명령어 뒤에 가속도 명 표기
  // (가속도명: 'Easing 함수 치트 시트' 검색 )
}); //end
