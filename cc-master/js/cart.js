// var OcartContainer = $('<div class="mzContainer">\
//                             <div class= "check-container" >\
//                                 <div class="shop-cart-nav">\
//                                     <table>\
//                                         <tr>\
//                                             <td class="check-area">\
//                                                 <a href="javascript:;" class="check-label check-all">\
//                                                     <i class="checkbox">\
//                                                         <span class="check-mark"></span>\
//                                                     </i>\
//                                                     <em class="check-name">全选</em>\
//                                                 </a>\
//                                             </td>\
//                                             <td class="singal-price">\
//                                                 单价(元)\
//                                             </td>\
//                                             <td class="volumes">\
//                                                 数量\
//                                             </td>\
//                                             <td class="small-total">\
//                                                 小计(元)\
//                                             </td>\
//                                             <td class="edit-area">\
//                                                 <span class="edit">编辑</span>\
//                                             </td>\
//                                         </tr>\
//                                     </table>\
//                                 </div>\
//                                 <ul class="goods-ul">\
//                                 </ul>\
//                             </div >\
//                             <div class="shop-cart-footer">\
//                                 <div class="cart-foot clearfix">\
//                                     <div class="cart-foot-left">\
//                                         <a href="javascript:;" class="check-label check-all">\
//                                             <i class="checkbox">\
//                                                 <span class="check-mark"></span>\
//                                             </i>\
//                                             <em class="check-name">全选</em>\
//                                         </a>\
//                                         <em class="goods-delete">删除选中的商品</em>\
//                                         <em class="goods-num">\
//                                             共<span class="sum"></span>件商品，\
//                                             已选择&nbsp;<span class="sum-selected"></span>&nbsp;件\
//                                         </em>\
//                                     </div>\
//                                     <div class="cart-foot-right">\
//                                         <em class="total-bill">\
//                                             合计(不含运费)：\
//                                         <span class="bill-price"></span>\
//                                         </em>\
//                                         <a href="orderDetail.html" class="order-btn ban-order">去结算</a>\
//                                     </div>\
//                                 </div>\
//                             </div>\
//                         </div >');

// $(".header").after(OcartContainer);

// var Odatas = {

//     '酒庄系列': [
//         {
//             'name': '玫瑰山庄园红酒',
//             "img": 'image/a2.jpg',
//             'goodTip': '预约 十单元 8699起',
//             'singalPrice': '￥200.00'
//         }
//     ],

//     '优选系列': [
//         {
//             'name': '泸州老窖',
//             "img": 'image/h1.jpg',
//             'goodTip': '中国名酒 驰名商标',
//             'singalPrice': '￥1499.00'
//         },
//         {
//             'name': '阿玛罗尼',
//             "img": 'image/k2.jpg',
//             'goodTip': '2009年雷诺帝酒庄阿玛罗尼经典红葡萄酒',
//             'singalPrice': '￥2699.00'
//         },
//         {
//             'name': '人头马XO',
//             "img": 'image/h3.jpg',
//             'goodTip': '人头马XO 干邑白兰地  700ml',
//             'singalPrice': '￥2999.00'
//         },
//         {
//             'name': '雷司令1+伊诺奥塔维',
//             "img": 'image/i2.jpg',
//             'goodTip': '【名庄口感】雷司令1+伊诺奥塔维',
//             'singalPrice': '￥2499.00'
//         }

//     ]

// };
// $.each(Odatas, function (i, e) {
//     var OnewTr = '';
//     var OnewLi = $('<li class="goods-list">\
//                         <table class= "goods-header" >\
//                             <tr>\
//                                 <td colspan="5">\
//                                     <a href="javascript:;" class="check-label check-local-part">\
//                                         <i class="checkbox">\
//                                             <span class="check-mark"></span>\
//                                         </i>\
//                                         <em class="check-name">' + i + '</em>\
//                                     </a>\
//                                 </td>\
//                             </tr>\
//                         </table >\
//                         <table class="goods-body">\
//                         </table>\
//                     </li>');

//     $(e).each(function (i, e) {
//         OnewTr += '<tr>\
//                         <td class="goods-col-select">\
//                             <a href="javascript:;" class="check-label check-product">\
//                                 <i class="checkbox">\
//                                     <span class="check-mark"></span>\
//                                 </i>\
//                             </a>\
//                             <a href="javascript:;" class="goods-img">\
//                                 <img src="'+ e.img + '"\
//                                     alt="">\
//                             </a>\
//                             <a href="javascript:;" class="goods-info">\
//                                 <h4 class="goods-info-title">'+ e.name + '</h4>\
//                                 <p class="goods-info-tips">'+ e.goodTip + '</p>\
//                             </a>\
//                         </td>\
//                         <td class="goods-col-price">\
//                             <span>'+ e.singalPrice + '</span>\
//                         </td>\
//                         <td class="goods-col-volumes">\
//                             <div class="num-ctrl-area clearfix">\
//                                 <button class="minus">-</button>\
//                                 <input type="text" value="1" class="input">\
//                                 <button class="plus">+</button>\
//                                 <em class="hint">限购10件</em>\
//                             </div>\
//                         </td>\
//                         <td class="goods-col-total">\
//                             <span></span>\
//                         </td>\
//                         <td class="goods-col-ctrl">\
//                             <span>- -</span>\
//                             <i class="del-product">\
//                                 <span class="line-left"></span>\
//                                 <span class="line-right"></span>\
//                             </i>\
//                         </td>\
//                     </tr>';
//     });

//     OnewLi.children("table.goods-body").append(OnewTr);
//     OnewLi.appendTo($("ul.goods-ul"));

// });


// (function (win, undefined) {
//     var OShopCart = function () {
//         this.judge = '';
//         this.curUnitBtn = null;
//         this.fixedObj();
//         this.dynamic1Obj();
//         this.calcInfo();
//         this.singalDel();
//         this.globalDel();
        
//         this.orderBtnCss();
//         this.twoBtn();
//         this.floatDelBtn();
//         this.checkBox();
//         this.inputChange();
//         this.fixed();
//         this.init();
//     };
//     OShopCart.prototype = {
//         constructor: OShopCart,
//         //初始化事件
//         init: function () {
//             var OshopCart = this;

//             this.input.each(function (i, e) {
//                 var $thisButton = $(e).parent().find(OshopCart.button);
//                 OshopCart.buttonCss($thisButton, $(e).val());
//             });

//             /*编辑按钮*/
//             this.editBtn.parent().on("click", function () {

//                 OshopCart.editBtn.toggleClass(OshopCart.edit);
//                 if (OshopCart.editBtn.hasClass(OshopCart.edit)) {
//                     OshopCart.editBtn.text("编辑");
//                     OshopCart.delCtrl.show().siblings().fadeOut(100);
//                 } else {
//                     OshopCart.editBtn.text("完成");
//                     OshopCart.delCtrl.hide().siblings().fadeIn(100);
//                 };
//             });
//             /*弹出框取消按钮*/
//             this.cancelBtn.on("click", function () {
//                 OshopCart.floatBox.fadeOut(200);
//             });
//             /*弹出框关闭按钮*/
//             this.closeBtn.on("click", function () {
//                 OshopCart.floatBox.fadeOut(200);
//             });

//             $(window).on("resize scroll", function () {
//                 OshopCart.fixed();
//             });
//         },

//         //获取固定的元素
//         fixedObj: function () {
//             this.mzContainer = $(".mzContainer");
//             this.cartFoot = this.mzContainer.find("div.shop-cart-footer");
//             this.checkAll = this.mzContainer.find("a.check-all");//全选按钮
//             this.sum = this.mzContainer.find("span.sum");//总件数
//             this.sumed = this.mzContainer.find("span.sum-selected");//已选总件数
//             this.billPrice = this.mzContainer.find("span.bill-price");//合计价格
//             this.orderBtn = this.mzContainer.find("a.order-btn");//结算按钮
//             this.editBtn = this.mzContainer.find("td.edit-area>span.edit");//编辑按钮
//             this.delSelected = this.mzContainer.find("em.goods-delete");//删除选中商品按钮
//             //悬浮提示框区域
//             this.floatBox = $(".float-box");
//             this.delBtn = this.floatBox.find("a.delete");
//             this.cancelBtn = this.floatBox.find("a.cancel");
//             this.closeBtn = this.floatBox.find("i.close-btn");
//             this.confirmTitle = this.floatBox.find("h4.confirm-title>span");
//             this.confirmCon = this.floatBox.find("div.confirm-content");
//             //class样式
//             this.checked = 'checked';
//             this.forbid = 'forbid';
//             this.fixSite = 'fixed';
//             this.banOrder = 'banOrder';
//             this.edit = 'edit';
//         },
//         //获取当存在删除添加商品时的变动元素
//         dynamic1Obj: function () {
//             this.checkLabelAll = $("a.check-label");
//             this.checkContainer = $(".check-container");
//             this.cartNav = this.checkContainer.children(".shop-cart-nav");
//             this.goodsList = this.checkContainer.find("li.goods-list");
//             this.goodsHeader = this.goodsList.children("table.goods-header");
//             this.goodsBody = this.goodsList.children("table.goods-body");
//             this.checkLocalPart = this.goodsHeader.find("a.check-local-part");//某个品类的头部按钮
//             this.goodsTr = this.goodsBody.find("tr");//商品卡片
//             this.checkProduct = this.goodsBody.find("a.check-product");//单个商品勾选按钮
//             this.button = this.goodsBody.find("button");
//             this.plus = this.goodsBody.find(".plus");//加号按钮
//             this.minus = this.goodsBody.find(".minus");//减号按钮
//             this.input = this.goodsBody.find(".input");//输入框
//             this.singalPrice = this.goodsBody.find("td.goods-col-price>span");//单价
//             this.smallTotal = this.goodsBody.find("td.goods-col-total>span");//小计
//             this.delCtrl = this.goodsBody.find("td.goods-col-ctrl>span");//小计后面的编辑区
//             this.delProduct = this.goodsBody.find("i.del-product");
//         },

//         //获取选中与未选中变化时的元素
//         dynamic2Obj: function () {
//             this.checkLocalPartEd = $("a.check-local-part.checked");//某个品类中已经选中的全选按钮
//             this.checkProductEd = $("a.check-product.checked");//单个商品中已经选中的勾选按钮
//         },
//         //总计、总件数、已选件数、小计计算
//         calcInfo: function () {
//             var OshopCart = this;
//             this.dynamic2Obj();
//             var sum = 0,
//                 sumed = 0,
//                 total = 0;
//             this.goodsTr.each(function (i, e) {
//                 var $e = $(e),
//                     numVal = parseInt($e.find(OshopCart.input).val()),//输入框值
//                     unitPrice = parseInt($e.find(OshopCart.singalPrice).text().slice(1)),//单价
//                     $smalltotalTxt = $e.find(OshopCart.smallTotal);//小计
//                 sum += numVal;//计算总件数
//                 $smalltotalTxt.text("￥" + (numVal * unitPrice).toFixed(2));//计算小计价格
//             });
//             this.checkProductEd.closest(OshopCart.goodsTr).each(function (i, e) {
//                 var $e = $(e),
//                     numVal = parseInt($e.find(OshopCart.input).val()),
//                     unitPrice = parseInt($e.find(OshopCart.singalPrice).text().slice(1));//单价
//                 sumed += numVal;//已选总件数
//                 total += unitPrice * numVal;//计算总价价格
//             });
//             this.sum.text(sum);
//             this.sumed.text(sumed);
//             this.billPrice.text('￥' + total.toFixed(2));
//         },
//         //当输入框的值<=1或者>=10时，旁边的button变成禁止样式
//         buttonCss: function (button, value) {
//             var OshopCart = this;
//             button.each(function () {
//                 $(this).removeClass(OshopCart.forbid);
//             });
//             if (value == 1) {
//                 button.eq(0).addClass(OshopCart.forbid);
//             };
//             if (value == 10) {
//                 button.eq(1).addClass(OshopCart.forbid);
//             };
//         },
//         //button按钮的点击事件
//         twoBtn: function () {
//             var OshopCart = this;
//             OshopCart.plus.on("click", function () {
//                 var $this = $(this);
//                 var value = parseInt($this.prev().val());
//                 value++;
//                 if (value > 10) {
//                     return;
//                 };
//                 OshopCart.buttonCss($this.parent().find(OshopCart.button), value);
//                 $this.prev().val(value);
//                 OshopCart.calcInfo();
//             });

//             /*减号按钮*/
//             OshopCart.minus.on("click", function () {
//                 var $this = $(this);
//                 var value = parseInt($this.next().val());
//                 value--;
//                 if (value < 1) {
//                     return;
//                 };
//                 OshopCart.buttonCss($this.parent().find(OshopCart.button), value);
//                 $this.next().val(value);
//                 OshopCart.calcInfo();
//             });
//         },
//         //输入框改变事件
//         inputChange: function () {
//             var OshopCart = this;
//             this.input.on("change", function () {
//                 var $this = $(this),
//                     $thisVal = parseInt($this.val());
//                 if ($thisVal > 10) {
//                     $this.val(10);
//                 } else if ($thisVal < 1 || isNaN($thisVal)) {
//                     $this.val(1);
//                 } else {
//                     $this.val($thisVal);
//                 };
//                 OshopCart.calcInfo();
//                 console.log($this.parent().find(OshopCart.button))
//                 OshopCart.buttonCss($this.parent().find(OshopCart.button), parseInt($this.val()));
//             });
//         },
//         //结算按钮样式变化
//         orderBtnCss: function () {
//             if (parseInt(this.sumed.text()) != 0) {
//                 this.orderBtn.removeClass(this.banOrder);
//             } else {
//                 this.orderBtn.addClass(this.banOrder);
//             };
//         },
//         //删除选中商品的点击事件
//         globalDel: function () {
//             var OshopCart = this;
//             this.delSelected.on("click", function () {
//                 OshopCart.judge = "global";
//                 OshopCart.floatBox.fadeIn(200);
//                 if (OshopCart.checkProductEd.length != 0) {
//                     OshopCart.confirmTitle.text("删除");
//                     OshopCart.confirmCon.text("您确定要删除选中商品吗？");
//                     OshopCart.delBtn.show();
//                     OshopCart.cancelBtn.text("取消");
//                 } else {
//                     OshopCart.confirmTitle.text("提示");
//                     OshopCart.confirmCon.text("请选择您要删除的商品");
//                     OshopCart.delBtn.hide();
//                     OshopCart.cancelBtn.text("确定");
//                 };
//             });
//         },
//         //删除单个商品的点击事件
//         singalDel: function () {
//             var OshopCart = this;
//             this.delProduct.on("click", function () {
//                 OshopCart.judge = "singal";
//                 OshopCart.curUnitBtn = $(this);
//                 OshopCart.floatBox.fadeIn(200);
//                 OshopCart.confirmTitle.text("删除");
//                 OshopCart.confirmCon.text("您确定要删除该商品吗？");
//                 OshopCart.delBtn.show();
//                 OshopCart.cancelBtn.text("取消");
//             });
//         },
//         //悬浮提示框中的确定删除点击事件
//         floatDelBtn: function () {
//             var OshopCart = this;
//             OshopCart.delBtn.on("click", function () {
//                 OshopCart.floatBox.fadeOut(200);
//                 if (OshopCart.judge == "global") {
//                     OshopCart.checkProductEd.closest(OshopCart.goodsTr).remove();
//                     if (OshopCart.checkLocalPart.hasClass(OshopCart.checked)) {
//                         OshopCart.checkLocalPartEd.closest(OshopCart.goodsList).remove();
//                         if (OshopCart.checkAll.hasClass(OshopCart.checked)) {
//                             OshopCart.mzContainer.html("").css("height", '25rem');
//                         };
//                     };
//                 } else if (OshopCart.judge == "singal") {
//                     var curLiIndex = OshopCart.curUnitBtn.closest(OshopCart.goodsList).index();
//                     OshopCart.curUnitBtn.closest(OshopCart.goodsTr).remove();

//                     if (OshopCart.goodsList.eq(curLiIndex).find(OshopCart.goodsTr).length == 0) {
//                         console.log(1)
//                         OshopCart.goodsList.eq(curLiIndex).remove();
//                     };
//                 };
//                 OshopCart.dynamic1Obj();
//                 OshopCart.dynamic2Obj();
//                 OshopCart.calcInfo();
//                 OshopCart.orderBtnCss();
//                 OshopCart.fixed();
//                 if (OshopCart.goodsTr.length == 0) {
//                     OshopCart.mzContainer.html("").css("height", '25rem');
//                 };
//             });
//         },
//         //checkbox勾选框点击事件
//         checkBox: function () {
//             var OshopCart = this;
//             /*全选按钮*/
//             OshopCart.checkAll.on("click", function () {
//                 var $this = $(this);
//                 $this.toggleClass(OshopCart.checked);
//                 OshopCart.dynamic2Obj();
//                 if ($this.hasClass(OshopCart.checked)) {
//                     OshopCart.checkLabelAll.addClass(OshopCart.checked);
//                 } else {
//                     OshopCart.checkLabelAll.removeClass(OshopCart.checked);
//                 };
//                 OshopCart.calcInfo();
//                 OshopCart.orderBtnCss();
//             });

//             /*分类勾选按钮*/
//             OshopCart.checkLocalPart.on("click", function () {
//                 var $this = $(this);
//                 $this.toggleClass(OshopCart.checked);
//                 OshopCart.dynamic2Obj();
//                 var $thisChildCheck = $this.closest(OshopCart.goodsList).find(OshopCart.checkProduct);//某一品类的单个商品勾选按钮
//                 if ($this.hasClass(OshopCart.checked)) {
//                     $thisChildCheck.addClass(OshopCart.checked);
//                 } else {
//                     $thisChildCheck.removeClass(OshopCart.checked);
//                 };
//                 if (OshopCart.checkLocalPartEd.length == OshopCart.checkLocalPart.length) {
//                     OshopCart.checkAll.addClass(OshopCart.checked);
//                 } else {
//                     OshopCart.checkAll.removeClass(OshopCart.checked);
//                 }
//                 OshopCart.calcInfo();
//                 OshopCart.orderBtnCss();
//             });
//             /*具体商品勾选按钮*/
//             OshopCart.checkProduct.on("click", function () {
//                 var $this = $(this);
//                 $this.toggleClass(OshopCart.checked);
//                 OshopCart.dynamic2Obj();
//                 var $siblings = $this.closest(OshopCart.goodsBody).find(OshopCart.checkProduct),
//                     $siblingsEd = $this.closest(OshopCart.goodsBody).find(OshopCart.checkProductEd),
//                     $thisPart = $this.closest(OshopCart.goodsList).find(OshopCart.checkLocalPart);
//                 if ($siblings.length == $siblingsEd.length) {
//                     $thisPart.addClass(OshopCart.checked);
//                 } else {
//                     $thisPart.removeClass(OshopCart.checked);
//                 };
//                 if (OshopCart.checkProduct.length == OshopCart.checkProductEd.length) {
//                     OshopCart.checkAll.addClass(OshopCart.checked);
//                 } else {
//                     OshopCart.checkAll.removeClass(OshopCart.checked);
//                 };
//                 OshopCart.calcInfo();
//                 OshopCart.orderBtnCss();
//             });
//         },
//         //foot结算区域位置变化
//         fixed: function () {
//             var offsetHeight = this.checkContainer.offset().top + this.checkContainer.outerHeight() + this.cartFoot.outerHeight() - $(window).height();
//             if (offsetHeight >= $(document).scrollTop()) {
//                 this.cartFoot.addClass(this.fixSite);
//             } else {
//                 this.cartFoot.removeClass(this.fixSite);
//             };
//         }
//     }
//     window.OShopCart = OShopCart;
// }(window));
// var OshopCart = new OShopCart();

