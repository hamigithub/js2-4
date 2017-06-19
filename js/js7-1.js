/**
 * Created by Administrator on 2017/6/6 0006.
 */
var jump=document.getElementById("jump-easy");
jump.onclick=function (){

        window.location.href="js2-2.html";

}//页面直接跳转

//++i是先i自加1，然后在使用i的值
//i++是先用i的值，在i自加1
////比如

//i++返回的是自增之前的值，++i返回的则是自增后的值。
//如：
//var i = 1;
//var a = i++;  //a = 1;  此时i为2，但赋给a的是1
//var b = ++i;  //b = 3
//
//++在后，就是先赋值，再运算，++在前就是先运算再赋值，--同上