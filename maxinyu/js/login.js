$(function(){
	//登录点击
	$('#switch_qlogin').click(function(){
		$('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_bottom').animate({left:'0px',width:'70px'});
		$('#qlogin').css('display','none');
		$('#web_qr_login').css('display','block');
		});
	//注册点击	
	$('#switch_login').click(function(){
		
		$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
		$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
		$('#switch_bottom').animate({left:'154px',width:'70px'});
		$('#qlogin').css('display','block');
		$('#web_qr_login').css('display','none');
		});
if(getParam("a")=='0')
{
	$('#switch_login').trigger('click');
}

	});
	
// function logintab(){
// 	scrollTo(0);
// 	$('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
// 	$('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
// 	$('#switch_bottom').animate({left:'154px',width:'96px'});
// 	$('#qlogin').css('display','none');
// 	$('#web_qr_login').css('display','block');
	
// }


// 根据参数名获得该参数 pname等于想要的参数名 
function getParam(pname) { 
    var Oparams = location.search.substr(1); // 获取参数 平且去掉？ 
    var OArrParam = Oparams.split('&'); 
    if (OArrParam.length == 1) { 
        //只有一个参数的情况 
        return Oparams.split('=')[1]; 
    } 
    else { 
         //多个参数参数的情况 
        for (var i = 0; i < OArrParam.length; i++) { 
            if (OArrParam[i].split('=')[0] == pname) { 
                return OArrParam[i].split('=')[1]; 
            } 
        } 
    } 
}  


// var reMethod = "GET",
// 	pwdmin = 6;

// $(document).ready(function() {


// 	$('#reg').click(function() {

// 		if ($('#user').val() == "") {
// 			$('#user').focus().css({
// 				border: "1px solid red",
// 				boxShadow: "0 0 2px red"
// 			});
// 			$('#userCue').html("<font color='red'><b>×用户名不能为空</b></font>");
// 			return false;
// 		}



// 		if ($('#user').val().length < 4 || $('#user').val().length > 16) {

// 			$('#user').focus().css({
// 				border: "1px solid red",
// 				boxShadow: "0 0 2px red"
// 			});
// 			$('#userCue').html("<font color='red'><b>×用户名位4-16字符</b></font>");
// 			return false;

// 		}
		


// 		if ($('#passwd').val().length < pwdmin) {
// 			$('#passwd').focus();
// 			$('#userCue').html("<font color='red'><b>×密码不能小于" + pwdmin + "位</b></font>");
// 			return false;
// 		}
// 		if ($('#passwd2').val() != $('#passwd').val()) {
// 			$('#passwd2').focus();
// 			$('#userCue').html("<font color='red'><b>×两次密码不一致！</b></font>");
// 			return false;
// 		}

// 		var sqq = /^[1-9]{1}[0-9]{4,9}$/;
// 		if (!sqq.test($('#qq').val()) || $('#qq').val().length < 5 || $('#qq').val().length > 12) {
// 			$('#qq').focus().css({
// 				border: "1px solid red",
// 				boxShadow: "0 0 2px red"
// 			});
// 			$('#userCue').html("<font color='red'><b>×QQ号码格式不正确</b></font>");return false;
// 		} else {
// 			$('#qq').css({
// 				border: "1px solid #D7D7D7",
// 				boxShadow: "none"
// 			});
			
// 		}

// 		$('#regUser').submit();
// 	});
	
// 	$("#login_form").submit(function(){
// 		if(""==$("#u").val() || ""==$("#p").val()){
// 			alert("账号或密码不能为空！")
// 			return false;
// 		}else{
// 			if("user1"==$("#u").val() && "123456"==$("#p").val()){
// 			alert("登录成功！")
// 			setCookie("user",1);
// 			return true;
// 		}else{
// 			alert("账号或密码错误！")
// 			return false;
// 		}
// 		}
// 	});

// function setCookie (name, value) {
//   if (value) {
//     var Days = 365;
//     var exp = new Date();
//     exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
//     document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
//   }
// }
// });

