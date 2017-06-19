/**
 * Created by Administrator on 2017/6/10 0010.
 */
var pesonsArray=JSON.parse(localStorage.getItem("persons"));
var deadArrayLocal=JSON.parse(localStorage.getItem('deadArray'));//获取本地存储的死者身份;
var deadNumArrayLocal=JSON.parse(localStorage.getItem('deadNumArray'));//获取本地死者的ID；
var deadArray=[];//储存死者身份
var deadNumArray=[];//储存死者ID
function uyu(){
    if (deadArrayLocal!==null){
    for (var i=0;i<deadArrayLocal.length;i++)
            deadArray.push(deadArrayLocal[i]);
    }
    else {
        return false;
    }
}//将本地死者身份储存到页面数组，解决清空本地死者数据时，点击杀人报错
function yuy(){
    if(deadNumArrayLocal!==null){
        for (var i=0;i<deadNumArrayLocal.length;i++){
            deadNumArray.push(deadNumArrayLocal[i]);
        }
    }
}//将本地死者ID储存到页面数组，解决清空本地死者数据时，点击杀人报错
uyu();
yuy();


var trr;




$(document).ready(function(){

    $(".back").click(function(){
        window.location.href="js4-1.html";
    })//点击返回上一页面

    $(".end").click(function () {
        var uiu=confirm("是否退出游戏？！")
        if (uiu==true){
            window.location.href="js2-1.html";
        }
        else {
            return false;
        }
    })//点击退出游戏


    for (var i=0;i<pesonsArray.length/3;i++){
        var objdiv = document.createElement("div");//创建div
        objdiv.className="row clm";
        $(".main").append(objdiv);
    }//按玩家人数生成行数；



    for (var i=0;i<3;i++){
        var b="<div class='col-xs-4'></div>";
        $(".row").append(b);
    };//按玩家人数生成列；


    var bib=$('.col-xs-4');//获取生成的列


    for (var i=0;i<pesonsArray.length;i++){
        var bibl="<div class='olo'><p class='lol'></p><div class='endd'></div></div>";
        bib[i].innerHTML=bibl;
    }//按人数生成相应数量的盒子


    $(".olo").on({
        click:function(){$(this).find("div").show();},
        mouseleave:function(){$(this).find("div").hide();}
    });//点击盒子将隐藏的小刀显示出来，鼠标移开后重新隐藏



    var ini=$(".olo");
    var nin=$(".lol");
    var o=1;
    //console.log(ini);
    for (var i=0;i<pesonsArray.length;i++){
        ini[i].prepend(pesonsArray[i]);
        nin[i].append(o+"号");
        o++;
    }//遍历生成的盒子，给盒子添加人数数组里面的字符串，给盒子里面的P标签添加序号






    //点击杀人按钮
    $('.endd').click(function(){
        if ($(this).parent('div').css('background-color')!==('rgb(0, 0, 0)')){
            var kill=$(this).parent('div').clone();
                kill.find(':nth-child(n)').remove();
            deadArray.push(kill.html());
            var num=$(this).prev('p').text();
            deadNumArray.push(num);
            localStorage.setItem('deadArray',JSON.stringify(deadArray));
            localStorage.setItem('deadNumArray',JSON.stringify(deadNumArray));
            $(this).parent('div').css('background','#000');
            trr=$(this).parent('div');
            localStorage.setItem('colorbox',JSON.stringify(trr));
        }
        else{
            alert('请勿鞭尸!');
        }
    })



    $("#btn").click(function(){


        window.location.href="js4-1.html"
    })//确定按钮


})

