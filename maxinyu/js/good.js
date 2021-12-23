class Goods {
    constructor() {
        this.getGoods();

    }
    async getGoods() {
        // 发送请求,回去json数据
        let cont = document.querySelector('#content1 ul')
        let data = await axios.get({
            url: './js/goods.json',
            data: ''
        });
        // console.log(data);

        // 遍历追加到页面中
        let html = '';
        data.forEach(goods => {
            html += `<li><button onclick="Goods.addCart(${goods.id},1)">加入购物车</button><div class="pic1"><img src="${goods.src}"></div><div class="name"><a herf="shopDetail.html">${goods.name}</a></div><div>¥${goods.price}</div></li>`
        });
        // console.log(html);
        cont.innerHTML = html;
    }
    static addCart(id, num) {
        let cartGoods = localStorage.getItem('cart');
        console.log(cartGoods);

        if (cartGoods) {
            cartGoods = JSON.parse(cartGoods);
            for (let attr in cartGoods) {
                attr == id && (num = num + cartGoods[attr]);

            }
            cartGoods[id] = num;
            localStorage.setItem('cart', JSON.stringify(cartGoods))
        } else {
            cartGoods = {
                [id]: num
            };
            localStorage.setItem('cart', JSON.stringify(cartGoods))
        }

    }


}
new Goods;