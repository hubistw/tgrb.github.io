function manjianF(price){if(manjian===undefined||manjian.length==0){return;}
var product_discounts=0;for(var i in manjian){if(price>=manjian[i].sprice&&price<=manjian[i].price){product_discounts=manjian[i].discount_price;}
break;}
if(product_discounts>0){$("input[name='product_disaccounts']").val(product_discounts);}}
function freightF(price){if(website_freight===undefined||website_freight.length==0){return;}
var freight=0;for(var i in website_freight){if(price>=website_freight[i].sprice&&price<=website_freight[i].price){freight=website_freight[i].discount_price;}
break;}
if(freight>0){$("input[name='freight']").val(freight);}}