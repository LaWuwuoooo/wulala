class Cart{
  constructor() {
    this.huoqushuju();
    this.d$('#caatTable tbody').addEvenListener('click', this.clickBubbleFn.bind(this))
  }
  clickBubbleFn(event) {
    let tar = event.target;
    tar.classList.contains('check-one') && this.oneCheckFn(tar);
    tar.classList.contains('add') && this.addClickFn(tar);
    tar.classList.contains('delete') && this.delClickFn(tar);
  }
  // 获取数据
  async huoqushuju (){
    let gwcshuju = localStorage.getItem('cart');
    if(!gwcshuju) return;
    gwcshuju = JSON.parse(gwcshuju)

    let spshuju = await axios.get({ url: './js/goods.json'});
    let czshuju = spshuju.filter(item =>{
      return gwcshuju[item.id];
    });
    this.render(czshuju, gwcshuju)
  }
  render (spshuju, cg) {
    let template = '';
    spshuju.forEach(ele => {
      template +=`<tr goods-id="${ele.id}">
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
    this.d$('#cartTable tbody').innnerHTML = template;

  }

  d$(ele) {
    return document.querySelector(ele)
  }
  $$(ele) {
    return document.querySelectorAll(ele)
  }
}

