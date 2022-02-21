var a = Number(500)
//samiyotta borib kelish puli $500
var b = Number(250) 
//mehmonhona to'lovi $250
var y = Number(120)
//muzey va ko'ngilochar joylar uchun 120 yevro
a=a*10.900;
b=b*10.900;
y=y*12272,64;
var add=Number((a+b+y))
console.log(add)
var summed = prompt("pulni kriting")
if(summed>=add){
    console.log("alisher pulingiz yetadi gazini bosing");
}else{
    console.log("brat yana azgina ishlirkansiz");
}