jQuery(document).ready(function () {

  /*
      Fullscreen background
  */
  $.backstretch("assets/img/backgrounds/1.jpg");

  /*
      Form validation
  */
  $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
    $(this).removeClass('input-error');
  });

  $('.login-form').on('submit', function (e) {

    $(this).find('input[type="text"], input[type="password"], textarea').each(function () {
      if ($(this).val() == "") {
        e.preventDefault();
        $(this).addClass('input-error');
      } else {
        $(this).removeClass('input-error');
      }
    });

  });
  //  获取验证码
  $(function () {
    /*仿刷新：检测是否存在cookie*/
    if ($.cookie("captcha")) {
      var count = $.cookie("captcha");
      var btn = $('#getCaptcha');
      btn.val("(" + count + ")" + '秒重新获取').attr('disabled', true).css('cursor', 'not-allowed');
      var resend = setInterval(function () {
        count--;
        if (count > 0) {
          btn.val("(" + count + ")" + '秒重新获取').attr('disabled', true).css('cursor', 'not-allowed');
          $.cookie("captcha", count, {
            path: '/',
            expires: (1 / 86400) * count
          });
        } else {
          clearInterval(resend);
          btn.val("获取验证码").removeClass('disabled').removeAttr('disabled style');
        }
      }, 1000);
    }

    /*点击改变按钮状态，已经简略掉ajax发送短信验证的代码*/
    $('#getCaptcha').click(function () {
      var btn = $(this);
      var count = 60;
      var resend = setInterval(function () {
        count--;
        if (count > 0) {
          btn.val("(" + count + ")" + "秒后可重新获取");
          $.cookie("captcha", count, {
            path: '/',
            expires: (1 / 86400) * count
          });
        } else {
          clearInterval(resend);
          btn.val("获取验证码").removeAttr('disabled style');
        }
      }, 1000);
      btn.attr('disabled', true).css('cursor', 'not-allowed');
    });

  });
});