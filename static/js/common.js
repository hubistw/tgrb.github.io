var addCart_=1,AddPaymentInfo_=1,InitiateCheckout_=1,Purchase_=1;function addCartEvent(){if(addCart_<=0){return false;}
fbq('track','AddToCart');addCart_--;}
function AddPaymentInfo(){if(AddPaymentInfo_<=0){return false;}
fbq('track','AddPaymentInfo');AddPaymentInfo_--;}
function InitiateCheckout(){if(InitiateCheckout_<=0){return false;}
fbq('track','InitiateCheckout');InitiateCheckout_--;}
function Purchase(value,currency){if(Purchase_<=0){return false;}
fbq('track','Purchase',{value:value,currency:currency,});Purchase_--;}
function ViewContent(){fbq('track','ViewContent');}
function zone_freight(){if(further_zone===undefined||further_zone.length==0){return;}
var zone_state='',zone_city='',zone_dis='',zone_address='';if($("select[name='city']:visible").length>0){zone_city=$("select[name='city']:visible option:selected").html();};if($("select[name='district']:visible").length>0){zone_dis=$("select[name='district']:visible option:selected").html();};match_str=zone_city+zone_dis;var has_freight=false;for(var i in further_zone){if(match_str.indexOf(further_zone[i].zone)!=-1){has_freight=true;break;}}
if(has_freight===true){$("input[name='zone_freight']").val(further_zone_freight);}else{$("input[name='zone_freight']").val(0);}}