// JavaScript Document
//获取元素
var oWrap = document.getElementsByClassName("wrap")[0];
var aBanner = oWrap.getElementsByClassName("banner");
var oBtn = document.getElementsByClassName("btn")[0];
var aSpan = oBtn.getElementsByTagName("span");
var num = 0;
//初始化
aBanner[0].style.opacity = "1";
aSpan[0].className = "on";
//点击按钮		
let timer = null
let nmm = -1;
for (var i = 0; i < aSpan.length; i++) {
	aSpan[i].index = i;
	aSpan[i].onclick = function () {
		num = this.index;
		for (var j = 0; j < aSpan.length; j++) {
			aBanner[j].style.opacity = 0;
			aSpan[j].className = "";
		}
		aBanner[num].style.opacity = "1";
		this.className = "on";
		// clearInterval(timer)
		nmm = num-1;
	}
}
function auto() {
	timer = setInterval(function () {
		// console.log(nmm);
		nmm++;
		for (var j = 0; j < aSpan.length; j++) {
			aBanner[j].style.opacity = 0;
			aSpan[j].className = "";
		}
		aBanner[nmm].style.opacity = "1";
		aSpan[nmm].className = "on";
		if(nmm ==aSpan.length-1){
			nmm = -1;
		}
		

	}, 2500)
}
auto()
oWrap.onmouseover = function () {
	clearInterval(timer)
}
oWrap.onmouseout = function () {
	auto()
}