// ハンバーガーメニューのopen/close
$(".hum-icon").on("click", function() {
  $(".nav-pc").toggleClass("hum-open");
});

var height = window.innerHeight;
var width = window.innerWidth;

$(window).resize(function() {
  height = window.innerHeight;
  width = window.innerWidth;
});
//  四角の波打ち
// 画面縦or横2分割の左からnum番目(num = 0, 1)
function makeWave(num) {
  var x_1, y_1, x_2, y_2, x_3, y_3, r_12, theta_12, r_23, theta_23;
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function convertVhIntoPx(vh) {
    return (height / 100) * vh;
  }
  if (height < width) {
    x_1 = getRandomArbitrary((width / 2) * num, (width / 2) * (num + 1));
    y_1 = getRandomArbitrary(0, height);
  } else {
    x_1 = getRandomArbitrary(0, width);
    y_1 = getRandomArbitrary((height / 2) * num, (height / 2) * (num + 1));
  }

  r_12 = getRandomArbitrary(convertVhIntoPx(15), convertVhIntoPx(40));
  theta_12 = getRandomArbitrary(0, 2 * Math.PI);
  x_2 = x_1 + r_12 * Math.cos(theta_12);
  y_2 = y_1 + r_12 * Math.sin(theta_12);

  r_23 = getRandomArbitrary(convertVhIntoPx(10), convertVhIntoPx(30));
  theta_23 = getRandomArbitrary(0, Math.PI);
  x_3 = x_2 + r_23 * Math.cos(Math.PI / 2 - (theta_12 + theta_23));
  y_3 = y_2 + r_23 * Math.sin(Math.PI / 2 - (theta_12 + theta_23));

  return [x_1, y_1, x_2, y_2, x_3, y_3];
}

setInterval(function() {
  var coordinate = makeWave(0);
  $(".square-wave1 .square-large").css({
    left: coordinate[0] + "px",
    top: coordinate[1] + "px"
  });
  $(".square-wave1 .square-medium").css({
    left: coordinate[2] + "px",
    top: coordinate[3] + "px"
  });
  $(".square-wave1 .square-small").css({
    left: coordinate[4] + "px",
    top: coordinate[5] + "px"
  });

  $(".square-wave1 .square-large").toggleClass("sl-move");
  $(".square-wave1 .square-medium").toggleClass("sm-move");
  $(".square-wave1 .square-small").toggleClass("ss-move");
}, 1200);

setInterval(function() {
  var coordinate = makeWave(1);
  $(".square-wave2 .square-large").css({
    left: coordinate[0] + "px",
    top: coordinate[1] + "px"
  });
  $(".square-wave2 .square-medium").css({
    left: coordinate[2] + "px",
    top: coordinate[3] + "px"
  });
  $(".square-wave2 .square-small").css({
    left: coordinate[4] + "px",
    top: coordinate[5] + "px"
  });

  $(".square-wave2 .square-large").toggleClass("sl-move");
  $(".square-wave2 .square-medium").toggleClass("sm-move");
  $(".square-wave2 .square-small").toggleClass("ss-move");
}, 1500);

// .center-lineのheightを#check-endで設定
// var targetElement = document.getElementById("check-end");
// var clientRect = targetElement.getBoundingClientRect();
// var py = window.pageYOffset + clientRect.top - height;
// $(".center-line").css({ height: py + "px" });

// portraitのときのmember-pタグ削除(自己紹介長い人用)
if (height > width) {
  var descriptionArray = ["takedasuzu", "kazu", "ans"];
  for (var i = 0; i < descriptionArray.length; i++) {
    var description = $("." + descriptionArray[i] + " p").text();
    $("." + descriptionArray[i]).text(description);
  }
}

// ローディング画面
// window.onload = function() {
//   $(".loader-container").addClass("loaded");
// }

// if (height > width) {
//   //スクロール表示・非表示
//   var pos = 0;
//   $(window).on("scroll", function() {
//     // 下スクロール
//     if ($(this).scrollTop() > pos + 40) {
//       $(".nav-sp").addClass("hide-nav-sp");
//     } else {
//       $(".nav-sp").removeClass("hide-nav-sp");
//     }
//     pos = $(this).scrollTop();
//   });
// }