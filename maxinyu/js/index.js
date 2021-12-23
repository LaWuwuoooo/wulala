let a = document.querySelectorAll('#loginp a')[0]
console.log(a);
let b = document.querySelectorAll('#loginp a')[1]
console.log(b);
let c = document.querySelectorAll('#loginp a')[2]
console.log(c);
let userb = localStorage.getItem('dlyhm')
// let userab = JSON.parse(userb)
console.log(userb);
if (userb) {
    a.innerHTML = userb + '，已登录'
    b.innerHTML = '退出'
    c.innerHTML = '购物车'
    // return
} else {
    a.innerHTML = '登录'
    b.innerHTML = '注册'
    c.innerHTML = '联系我们'

}

b.onclick = function () {
    if (b.innerHTML == '退出') {
        localStorage.removeItem('dlyhm');
        localStorage.removeItem('cart')
        a.innerHTML = '登录'
        b.innerHTML = '注册'
        window.location.href = './index.html'
    } else {
        window.location.href = './login.html'
    }
}

a.onclick = function () {
    if (a.innerHTML == userb + '，已登录') {
        return
    } else {
        window.location.href = './login.html'
    }
}
c.onclick = function(){
    if(c.innerHTML == '联系我们'){
        return
    }else{
        window.location.href = './shopCar.html'

    }
}

// for(let insd in userab){
//     if(state = true){
//         b.innerHTML = '退出'
//         // window.location.href = './login.html'
//     }
// }

// let bOclick = () =>{
//     state = false;
//     window.location.href = './login.html';
// }