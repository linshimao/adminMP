/*$(document).ready(function () {
  var InterValObj; //timer变量,控制时间
  var count = 60; //间隔函数，一秒执行
  var curCount; //当前剩余秒数

  function sendMessage() {
    curCount = count;
    //设置button效果，开始计时
    $("#getCaptcha").attr("disabled", 'true');
    $("#getCaptcha").html(curCount + "后可再次发送验证码");
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //向后台发送处理数据
    $.ajax({
      type: "POST", //用POST方式传输
      dataType: "text", //数据格式json
      url: "Login.ashx", //目标地址
      data: "dealType=" + dealType + "&uid=" + uid + "&code=" + code,
      success: function (msg) {}
    });
  }
  //timer处理函数
  function setRemainTime() {
    if (curCount == 0) {
      window.clearInterval(InterValObj); //停止定时器
      $("#getCaptcha").removeAttr("disabled"); //启用按钮
      $("#getCaptcha").html("重新发送验证码");
    } else {
      curCount--;
      $("#getCaptcha").html(curCount + "后可再次发送验证码");
    }
  }
});*/