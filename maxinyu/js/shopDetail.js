
let smallBox = document.querySelector('.showall .showbot #showbox')
let mask = document.querySelector('.sp')
let bigBox = document.querySelector('#showsum')
let pic = document.querySelector('#showsum img')
let xtp = document.querySelectorAll('.showpage div')
let dtp = document.querySelectorAll('.showbot #showbox img')
let cdtp = document.querySelectorAll('#showsum img')
// console.log(smallBox)
// console.log(pic);
// console.log(xtp);
// console.log(dtp);
smallBox.onmouseover = function(){
	mask.style.display = 'block'
	bigBox.style.display = 'block'
	// console.log(pic);

}
smallBox.onmouseout = function(){
	mask.style.display = 'none'
	bigBox.style.display = 'none'
}
smallBox.onmousemove = function(e){
	e = e || window.event
	let x = e.pageX - smallBox.offsetParent.offsetLeft - 220
	let y = e.pageY - smallBox.offsetTop - 260
	// console.log(x);
	// console.log(y);
	if(x<=0){
		x = 0
	}else if(x>=smallBox.offsetParent.offsetWidth - mask.offsetWidth){
		x = smallBox.offsetWidth - mask.offsetWidth
	}
	if(y<=0) {
		y = 0
	}else if (y>=smallBox.offsetParent.offsetHeight - mask.offsetHeight) {
		y = smallBox.offsetHeight - mask.offsetHeight
	}
	mask.style.left = x + 'px'
	mask.style.top = y + 'px'
	// 获取当前显示的大图
	let cdpic = document.querySelector('#showsum .v')
	let w = x / (smallBox.offsetWidth - mask.offsetWidth)
	let h = y / (smallBox.offsetHeight - mask.offsetHeight)
	// 将移动的距离赋值给大图
	cdpic.style.left = -w * (cdpic.offsetWidth - bigBox.offsetWidth) + 'px'
	cdpic.style.top = -h * (cdpic.offsetHeight - bigBox.offsetHeight) + 'px'
}

for(let i=0; i<xtp.length; i++){
	// xtp[i].setAttribute('index', i)
	xtp[i].onclick = function(){	
		qc();
		// xs();
		dtp[i].style.display = 'block'
		cdtp[i].style.display = 'block'
		// 选中的给大图设置一个类名v
		cdtp[i].className = 'v'
        // console.log(dtp.length,i);
		// console.log(xtp[i]);
       
	}

}

function qc(){
	for(let i=0;i<dtp.length;i++){
		// 每次点击清楚类名
		dtp[i].style.display = 'none'
		cdtp[i].style.display = 'none'
		// 每次点击清楚类名
		cdtp[i].className = ''
	    // xtp[i].style.display = 'none'
	}
}
