let dluserName = document.querySelector('#mingzi')
// console.log(dluserName);
let dlpassWord= document.querySelector('#mima')
// console.log(dlpassWord);
let dlbtn = document.querySelector('.item4 input')
// console.log(dlbtn);
let userNameP3 = document.querySelector('.usernamemsg3')
let passwordP3 = document.querySelector('.pswmsg3')
let userNameP2 = document.querySelector('.usernamemsg2')
let passwordP2 = document.querySelector('.pswmsg2')

let checkNulldluserName = () => {
    if (dluserName.value == '') {
        userNameP3.innerHTML = '用户名不能为空!'
        userNameP2.innerHTML = ''

        return false
    } else {
        userNameP2.innerHTML = ''
        userNameP3.innerHTML = ''

        return true
    }
}
let checkNulldlpassWord = () => {
    if (dluserName.value == '') {
        passwordP3.innerHTML = '密码不能为空!'
        passwordP2.innerHTML = ''
        return false
    } else {
        passwordP2.innerHTML = ''

        return true
    }
}
let dlcheckPassword = () => {
    let reg = /[A-Z][a-zA-Z0-9]{7,}/
    if (!reg.test(dlpassWord.value)) {
        passwordP3.innerHTML = '密码必须是大写字母开头,是字母和数字组合，至少8位'
        return false
    } else {
        passwordP2.innerHTML = ''
        passwordP3.innerHTML = ''

        return true
    }
}


dlbtn.onclick = function(){
    let ischeckNulldluserName = checkNulldluserName()
    let ischeckNulldlpassWord = checkNulldlpassWord()
    if(!ischeckNulldluserName || !ischeckNulldlpassWord){
        return
    }
    let isdlcheckPassword = dlcheckPassword()
    if(!isdlcheckPassword){
        return
    }
    let users = localStorage.getItem('user')
    let userss = JSON.parse(users)
    console.log(userss);
    // users.forEach(ele => {
    //     ele.value
    // });
    let yhm = ''
    let state = false;
    for(let item in userss){
        // console.log(item,userss[item][0]);
        if(dluserName.value == item && dlpassWord.value == userss[item][0]){
            alert('登录成功')
        window.location.href = './index.html'
        state = true;
        yhm = dluserName.value
        localStorage.setItem('dlyhm' ,yhm)

        return
        }
        // if(dluserName.value != item ||dlpassWord.value !=userss[item][0]){
        //     // alert('用户名或密码错误')
        // }
        // if(dlpassWord.value !=userss[item][0]){
        //     alert('用户名或密码错误');
        //     // return;
        // }

        
            
        
    }
    // console.log(dluserName.value);
    // console.log(dlpassWord.value);
    if(!state){
       alert('用户名或密码错误');
       return
    }

}

dluserName.onblur = function (){
    // console.log(111);
    checkNulldluserName()
}
dlpassWord.onblur = function (){
    let ischeckNulldlpassWord = checkNulldlpassWord()
    
    if(!ischeckNulldlpassWord){
        return
    }
    dlcheckPassword()
}
