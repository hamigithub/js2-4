/**
 * Created by Administrator on 2017/6/10 0010.
 */
var pesonsArray=JSON.parse(sessionStorage.getItem("persons"));
var day=1;
sessionStorage.setItem('day',JSON.stringify(day));
var date=JSON.parse(sessionStorage.getItem('day'));

$(document).ready(function(){

    $(".back").click(function(){
        window.location.href="task7-5.HTML";
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


    var bib=document.getElementsByClassName("col-xs-4");


    for (var i=0;i<pesonsArray.length;i++){
        var bibl="<div class='olo'><p class='lol'></p><div class='endd'></div></div>";
        bib[i].innerHTML=bibl;
    }//按人数生成相应数量的盒子

    $(".olo").click(function(){
        $(this).find('div').toggle();
    });//点击盒子将覆盖的图片隐藏，将身份显示出来，鼠标移开后重新覆盖掉身份



    var ini=$(".olo");
    var nin=$(".lol");
    var o=1;
    //console.log(ini);
    for (var i=0;i<pesonsArray.length;i++){
        ini[i].prepend(pesonsArray[i]);
        nin[i].append(o+"号");
        o++;
    }//遍历生成的盒子，给盒子添加人数数组里面的字符串，给盒子里面的P标签添加序号



    $("#btn").click(function(){


        window.location.href="js4-1.html"
    })
})