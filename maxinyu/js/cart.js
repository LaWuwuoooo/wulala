// class Cart {
//   constructor() {
//     this.getCartGoods();
//     this.checkAll();
//     this.d$('#caatTable tbody').addEvenListener('click', this.clickBubbleFn.bind(this))
//   }
//   clickBubbleFn(event) {
//     let tar = event.target;
//     tar.classList.contains('check-one') && this.oneCheckFn(tar);
//     tar.classList.contains('add') && this.addClickFn(tar);
//     tar.classList.contains('delete') && this.delClickFn(tar);
//   }
//   // 获取数据
//   async getCartGoods() {
//     let cartGoods = localStorage.getItem('cart');
//     if (!cartGoods) return;
//     cartGoods = JSON.parse(cartGoods)

//     let goodsData = await axios.get({
//       url: './js/goods.json'
//     });
//     let existsCartGoods = goodsData.filter(item => {
//       return cartGoods[item.id];
//     });
//     this.render(existsCartGoods, cartGoods)
//   }
//   render(goodsData, cg) {
//     let template = '';
//     goodsData.forEach(ele => {
//       template += `<tr goods-id="${ele.id}">
//       <td class="checkbox">
//         <input class="check-one check" type="checkbox" />
//       </td>
//       <td class="goods">
//         <img src="${ele.src}" alt="" />
//         <span>${ele.name}</span>
//       </td>
//       <td class="price">${ele.price}</td>
//       <td class="count">
//         <span class="reduce"></span>
//         <input class="count-input" type="text" value="${cg[ele.id]}" />
//         <span class="add">+</span>
//       </td>
//       <td class="subtotal">${ele.price * cg[ele.id]}</td>
//       <td class="operation">
//         <span class="delete">删除</span>
//       </td>
//     </tr>`
//     });
//     this.d$('#cartTable tbody').innnerHTML = template;

//   }
//   checkAll() {
//     let allObj = this.$$('.check-all');
//     allObj[0].addEvenListener('click', this.addClickFn.bind(this, 1))
//     allObj[1].addEvenListener('click', this.addClickFn.bind(this, 0))
//   }
//   allClickFn(checkAllIndex, event) {
//     let status = event.target.checked;
//     this.$$('.check-all')[checkAllIndex].checked = status;
//     this.oneChecked(status);
//     this.subTotal(status)
//   }
//   oneChecked(status) {
//     this.$$('.check-one').forEach(one => {
//       one.checked = status;
//     })
//   }
//   oneCheckFn (target){
//     this.subTotal();
//   }




//   d$(ele) {
//     return document.querySelector(ele)
//   }
//   $$(ele) {
//     return document.querySelectorAll(ele)
//   }
// }

class Cart {
  constructor() {

    this.getCartGoods();
    this.checkAll();

    this._$('#cartTable tbody').addEventListener('click', this.clickBubbleFn.bind(this))
  }
  clickBubbleFn (event) {
    let tar = event.target;
    tar.classList.contains('check-one') && this.oneCheckFn(tar);
    tar.classList.contains('add') && this.addClickFn(tar);
    tar.classList.contains('delete') && this.delClickFn(tar);
    console.log(this);
  }


  async getCartGoods () {
    let cartGoods = localStorage.getItem('cart');
    if (!cartGoods) return;
    cartGoods = JSON.parse(cartGoods)
    let goodsData = await axios.get({ url: './js/goods.json' });
    let existsCartGoods = goodsData.filter(item => {
      return cartGoods[item.id];
    });

    this.render(existsCartGoods, cartGoods)
  }
  render (goodsData, cg) {
    let template = '';
    goodsData.forEach(ele => {
      template += `<tr goods-id="${ele.id}">
      <td class="checkbox">
        <input class="check-one check" type="checkbox" />
      </td>
      <td class="goods">
        <img src="${ele.src}" alt="" />
        <span>${ele.name}</span>
      </td>
      <td class="price">${ele.price}</td>
      <td class="count">
        <span class="reduce"></span>
        <input class="count-input" type="text" value="${cg[ele.id]}" />
        <span class="add">+</span>
      </td>
      <td class="subtotal">${ele.price * cg[ele.id]}</td>
      <td class="operation">
        <span class="delete">删除</span>
      </td>
    </tr>`
    });

    this._$('#cartTable tbody').innerHTML = template;
  }
  checkAll(){
    let allObj = this.$$('.check-all');
    allObj[0].addEventListener('click', this.allClickFn.bind(this, 1))
    allObj[1].addEventListener('click', this.allClickFn.bind(this, 0))
    console.log(allObj[0]);
    console.log(this);
  }
  allClickFn (checkAllIndex,event){
    let status = event.target.checked;
    this.$$('.check-all')[checkAllIndex].checked = status;
    this.oneChecked(status)
    this.subTobal(status);
  }
  oneChecked (status) {
    this.$$('.check-one').forEach(one =>{
      one.checked = status;
    })
  }
  oneCheckFn(target) {
    this.subTotal();
    if (!target.checked){
      this.$$('.check-all')[0].checked = false;
      this.$$('.check-all')[1].checked = false;
      return;
    }
    let count = 0;
    this.$$('.check-one').forEach(v =>{
      v.checked && count++
      console.log(count);
    }) 
    if(count == this.$$('.check-one').length){
      this.$$('.check-all')[0].checked = true;
      this.$$('.check-all')[1].checked = true;
    }
  }
   //总价
  subTotal (sta = true){
    let totalNum = 0,totalPrice = 0;
    sta && this.$$('.check-one').forEach(ele =>{
      if (ele.checked){
        let trObj = ele.parentNode.parentNode;
        totalNum += (trObj.querySelector('.count input').value - 0);
        totalPrice += (trObj.querySelector('.subtotal').innerHTML - 0);
      }
    })
    this._$('#priceTotal').innerHTML = totalPrice;
    this._$('#selectedTotal').innerHTML = totalNum;
  }

  addClickFn (target) {
    let num = target.previousElementSibling;
    num.value = num.value - 0 + 1;
    let sub = target.parentNode.nextElementSibling;
    let price = target.parentNode.previousElementSibling.innerHTML;
    sub.innerHTML = parseInt((num.value * price) * 100) / 100;
    let tr = target.parentNode.parentNode
    tr.querySelector('.check-one').checked && this.subTotal();
    this.modifyLocal(tr.getAttribute('goods-id'), num.value -0)
    console.log(this);

  }
  delClickFn (target) {
    let that = this;
    console.log(this);
    let tr = target.parentNode.parentNode;
    layer.open({
      title: '确认删除框'
      , content: '确认删除?',
      btn: ['取消', '确认']
      , btn2: function (index, layero) {
        tr.remove();
        tr.querySelector('.check-one').checked && that.subTotal();
        console.log(that);
      }
    });

    this.modifyLocal(tr.getAttribute('goods-id'))
  }

  modifyLocal (id, num = 0) {
    console.log(id, num);
    let cartGoods = localStorage.getItem('cart');
    // console.log(cartGoods);
    if (!cartGoods) return;
    cartGoods = JSON.parse(cartGoods);
    num == 0 && delete cartGoods[id];
    num != 0 && (cartGoods[id] = num);
    localStorage.setItem('cart', JSON.stringify(cartGoods));
  }


  _$ (ele) {
    return document.querySelector(ele)
  }
  $$ (ele) {
    return document.querySelectorAll(ele)
  }


}

new Cart;