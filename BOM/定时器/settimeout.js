// 2秒之后 揍刘家成
var timer = setTimeout(function () {
  console.log('枪毙半小时');
  clearTimeout(timer);
}, 5000);
//
var i = 0;
var timer1 = setInterval(function () {
  i++;
  if (i > 10) {
    console.log('枪毙完成');
    clearInterval(timer1);
  } else {
    console.log('枪毙一次');
  }
}, 2000);
