// /*
//   本网站效果由昆明天度网络IRIS原创制作，未经同意不得转载
//   商城用商品展示放大镜效果
// */
// jQuery.ljsGlasses = {
//     pcGlasses:function(_obj){
// 		var Obox = $("#"+_obj.boxid);
// 		var Osum = $("#"+_obj.sumid);
// 		var Olast,Onext;
// 		var Oimgarr = Obox.find("img");
// 		var Olength = Oimgarr.length;
// 		var Oindex = 0;
// 		var Oarr = new Array();
// 		Osum.append("<p style='position:absolute;left:0;top:0;'></p>");
// 		var Osumbox = Osum.find("p");
		
// 		for(var i=0;i<Olength;i++){
// 			Oarr[i] = new Array();
// 			Oarr[i][0] = Oimgarr.eq(i).attr("src");
// 			Oarr[i][1] = Oimgarr.eq(i).attr("width");
// 			Oarr[i][2] = Oimgarr.eq(i).attr("height");
// 			var _scale = Oarr[i][1]/Oarr[i][2];
// 			if(_scale == 1){
// 				Oarr[i][3] = _obj.boxw;//width
// 				Oarr[i][4] = _obj.boxh;//height
// 				Oarr[i][5] = 0;//top
// 				Oarr[i][6] = 0;//left
// 				Oarr[i][7] = _obj.boxw/2;
// 				Oarr[i][8] = _obj.boxw*2;//width
// 				Oarr[i][9] = _obj.boxh*2;//height
// 				Osumbox.append("<span><img src='"+Oimgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' height='"+_obj.sumh+"' /></span>");
// 				}
// 			if(_scale > 1){
// 				Oarr[i][3] = _obj.boxw;//width
// 				Oarr[i][4] = _obj.boxw/_scale;
// 				Oarr[i][5] = (_obj.boxh-Oarr[i][4])/2;
// 				Oarr[i][6] = 0;//left
// 				Oarr[i][7] = Oarr[i][4]/2;
// 				Oarr[i][8] = _obj.boxh*2*_scale;//width
// 				Oarr[i][9] = _obj.boxh*2;//height
// 				var Oplace = _obj.sumh - (_obj.sumw/_scale);
// 				Oplace = Oplace/2;
// 				Osumbox.append("<span><img src='"+Oimgarr.eq(i).attr("src")+"' width='"+_obj.sumw+"' style='top:"+Oplace+"px;' /></span>");
// 				}
// 			if(_scale < 1){
// 				Oarr[i][3] = _obj.boxh*_scale;//width
// 				Oarr[i][4] = _obj.boxh;//height
// 				Oarr[i][5] = 0;//top
// 				Oarr[i][6] = (_obj.boxw-Oarr[i][3])/2;
// 				Oarr[i][7] = Oarr[i][3]/2;
// 				Oarr[i][8] = _obj.boxw*2;//width
// 				Oarr[i][9] = _obj.boxw*2/_scale;
// 				var Oplace = _obj.sumw - (_obj.sumh*_scale);
// 				Oplace = Oplace/2;
// 				Osumbox.append("<span><img src='"+Oimgarr.eq(i).attr("src")+"' height='"+_obj.sumh+"' style='left:"+Oplace+"px;' /></span>");
// 				}
// 		}
// 		Oimgarr.remove();
		
// 		Osum.append("<div style='clear:both;width:100%;'></div>");
// 		var Osumarr = Osum.find("span");
// 		var Osumimg = Osum.find("img");
// 		Osumarr.eq(Oindex).addClass(_obj.sumsel);
// 		var Oborder = _obj.sumborder*2 + _obj.sumh;
// 		var Osumwidth = (Oborder+_obj.sumi)*_obj.sums;
// 		var Osumboxwidth = (Oborder+_obj.sumi)*Olength;
// 		Osum.css({
// 			"overflow":"hidden",
// 			"height":Oborder+"px",
// 			"width":Osumwidth+"px",
// 			"position":"relative"
// 			});
// 		Osumbox.css({
// 			"width":Osumboxwidth+"px"
// 			});
// 		Osumarr.css({
// 			"float":"left",
// 			"margin-left":_obj.sumi+"px",
// 			"width":_obj.sumw+"px",
// 			"height":_obj.sumh+"px",
// 			"overflow":"hidden",
// 			"position":"relative"
// 			});
// 		Osumimg.css({
// 			"max-width":"100%",
// 			"max-height":"100%",
// 			"position":"relative"
// 			});
		
// 		Obox.append("<div style='position:relative;'><b style='display:block;'><img style='display:block;' src='' /></b><span style='position:absolute;left:0;top:0;display:none;z-index:5;'></span></div><p style='position:absolute;overflow:hidden;top:0;display:none;'><img style='max-width:none;max-height:none;position:relative;left:0;top:0;' src='' /></p>");
// 		var Oglass = Obox.find("span");
// 		var Oboximg = Obox.find("b img");
// 		var Oimgout = Obox.find("div");
// 		var Oshowbox = Obox.find("p");
// 		var Oshowimg = Obox.find("p img");

// 		Obox.css({
// 			"width":_obj.boxw+"px",
// 			"height":_obj.boxh+"px",
// 			"position":"relative"
// 			});
// 		var Oshowboxleft = _obj.boxw + 10;
// 		Oshowbox.css({
// 			"width":_obj.boxw+"px",
// 			"height":_obj.boxh+"px",
// 			"left":Oshowboxleft+"px"
// 			});
		
// 		var imgPlaces = function(){
// 			Oshowimg.attr("src",Oarr[Oindex][0]);
// 			Oboximg.attr("src",Oarr[Oindex][0]);
// 			Oboximg.css({
// 			    "width":Oarr[Oindex][3]+"px",
// 			    "height":Oarr[Oindex][4]+"px"
// 			});
// 			Oimgout.css({
// 				"width":Oarr[Oindex][3]+"px",
// 			    "height":Oarr[Oindex][4]+"px",
// 			    "top":Oarr[Oindex][5]+"px",
// 			    "left":Oarr[Oindex][6]+"px",
// 			    "position":"relative"
// 			});
// 			Oglass.css({
// 			    "width":Oarr[Oindex][7]+"px",
// 			    "height":Oarr[Oindex][7]+"px"
// 			});
// 			Oshowimg.css({
// 				"width":Oarr[Oindex][8]+"px",
// 			    "height":Oarr[Oindex][9]+"px"
// 			});
			
// 		};
// 		imgPlaces();
		
// 		Oimgout.mousemove(function(e){
// 			var Ogl_w = Oglass.width()/2;
// 			var Ogl_w = Oimgout.width() - Ogl_w;
// 			var OmaxY = Oimgout.height() - Ogl_w;
// 			var OmoveX = 0,_moveY = 0;
// 			var OnowX = e.pageX - Oimgout.offset().left;
// 		    var OnowY = e.pageY - Oimgout.offset().top;
// 			var OmoveX = OnowX-Ogl_w,_moveY = OnowY-Ogl_w;
			
// 			if(OnowX <= Ogl_w){ OmoveX = 0; }
// 			if(OnowX >= Ogl_w){ OmoveX = Ogl_w-Ogl_w; }
// 			if(OnowY <= Ogl_w){ _moveY = 0;}
// 			if(OnowY >= OmaxY){ _moveY = OmaxY-Ogl_w;}
// 			Oglass.css({"left":OmoveX+"px","top":_moveY+"px"});

// 			var OimgX = -OmoveX*Oshowbox.width()/Oglass.width();
// 			var OimgY = -_moveY*Oshowbox.width()/Oglass.width();
// 			Oshowimg.css({"left":OimgX+"px","top":OimgY+"px"});
	
// 		});//mouse END
		
// 		Oimgout.mouseenter(function(){
// 			Oglass.css("display","block");
// 			Oshowbox.css("display","block");
// 			});
// 		Oimgout.mouseleave(function(){
// 			Oglass.css("display","none");
// 			Oshowbox.css("display","none");
// 			});
		
// 		//列表部分
// 		var Onextbtn = $("#"+_obj.nextid);
// 		var Olastbtn = $("#"+_obj.lastid);
// 		var Omoveindex = 0;//索引移动
		
// 		var OsumListMove = function(){
// 			var _leftmove = -Omoveindex*(Oborder+_obj.sumi);
// 			if(Osumbox.is(":animated")){Osumbox.stop(true,true);}
// 			Osumbox.animate({left:_leftmove+"px"},300);
// 			Osumarr.eq(Oindex).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
// 			imgPlaces();
// 		};//fun END
		
// 		if(Olength <= _obj.sums){
// 			var Oplace = (_obj.sums-Olength)*Oborder/2;
// 			Osumbox.css("left",Oplace+"px");
// 			Onextbtn.click(function(){
// 				Oindex++;
// 				if(Oindex >= Olength){ Oindex=Olength-1;}
// 				Osumarr.eq(Oindex).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
// 			    imgPlaces();
// 			});
// 			Olastbtn.click(function(){
// 				Oindex--;
// 				if(Oindex <= 0){ Oindex=0;}
// 				Osumarr.eq(Oindex).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
// 			    imgPlaces();
// 			});
// 		}else{
// 			var _maxNum = Olength-_obj.sums;
// 			Onextbtn.click(function(){
// 			   Omoveindex++;
// 			   if(Omoveindex >= _maxNum){ Omoveindex=_maxNum; }
// 			   if(Oindex <= Omoveindex){ Oindex=Omoveindex;}
// 			   OsumListMove();
// 		    });
// 			Olastbtn.click(function(){
// 				Omoveindex--;
// 				if(Omoveindex <= 0){ Omoveindex=0;}
// 				if(Oindex >= Omoveindex+_obj.sums){ Oindex=Omoveindex+_obj.sums-1;}
// 				OsumListMove();
// 			});
// 		}//if END

// 		Osumarr.hover(function(){
// 			Oindex = $(this).index();
// 			Osumarr.eq(Oindex).addClass(_obj.sumsel).siblings().removeClass(_obj.sumsel);
// 			imgPlaces();
// 		});
	
//   }//pcGlasses END
// }//ljsGlasses END
let smallBox = document.querySelector('.showall .showbot #showbox')
let mask = document.querySelector('.sp')
let bigBox = document.querySelector('#showsum')
let pic = document.querySelector('#showsum>img')
//当鼠标划入到smallBox里面时，让隐藏的元素显示
console.log(smallBox)
smallBox.onmouseover = function(){
	mask.style.display = 'block'
	bigBox.style.display = 'block'
	console.log(pic);
}
//当鼠标划到smallBox外面时，让显示的元素隐藏
smallBox.onmouseout = function(){
	mask.style.display = 'none'
	bigBox.style.display = 'none'
}
//当鼠标移入到smallBox里面时让鼠标进行跟随
smallBox.onmousemove = function(e){
	e = e || window.event
	//获取鼠标的坐标
	let x = e.clientX - smallBox.offsetParent.offsetLeft - mask.offsetWidth/2 
	let y = e.clientY - smallBox.offsetParent.offsetTop - mask.offsetHeight/2
	//边界值判断
	if(x<=0){
		x = 0
	}else if(x>=smallBox.offsetWidth - mask.offsetWidth){
		x = smallBox.offsetWidth - mask.offsetWidth
	}
	if(y<=0) {
		y = 0
	}else if (y>=smallBox.offsetHeight - mask.offsetHeight) {
		y = smallBox.offsetHeight - mask.offsetHeight
	}
	//进行赋值
	mask.style.left = x + 'px'
	mask.style.top = y + 'px'

	//计算比例
	let w = x / (smallBox.offsetWidth - mask.offsetWidth)
	let h = y / (smallBox.offsetHeight - mask.offsetHeight)
	//给大图进行赋值操作
	pic.style.left = -w * (pic.offsetWidth - bigBox.offsetWidth) + 'px'
	pic.style.top = -h * (pic.offsetHeight - bigBox.offsetHeight) + 'px'
}