var toTicket = Number(500)
//samiyotta borib kelish puli $500
var toHotel = Number(250) 
//mehmonhona to'lovi $250
var toWollking = Number(120)
//muzey va ko'ngilochar joylar uchun 120 yevro
toTicket = toTicket*10900;
toHotel = toHotel*10900;
toWollking = toWollking*12272,64;
var add=Number((toTicket+toHotel+toWollking))
console.log(add)
var summed = prompt("pulni kriting")
if(summed>=add){
    console.log("alisher pulingiz yetadi gazini bosing");
}
else if (summed <= "  " ) {
    console.log("alisher kimni aldavossiz bu son emasku");
}else if (summed <= 0 ) {
    console.log("alisher minusdasiz ");
}
else{
    console.log("brat puliz yetmadi keyingi safar");
}