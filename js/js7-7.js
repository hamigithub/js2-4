/**
 * Created by Administrator on 2017/6/12 0012.
 */
var pesonsArray=JSON.parse(localStorage.getItem("persons"));
var day=1;//记录游戏当前天数;



$(document).ready(function(){
    $(".back").click(function(){

        window.location.href="js3-2.html"

    });//返回上一页

    $(".end").click(function(){
        var clc=confirm("确定离开游戏吗?");
        if(clc==true){
            window.location.href="js2-1.html";
        }
        else{
            return false;
        }
    });//结束游戏


    $('.day').click(function(){
        $(this).next().fadeToggle();
    })//点击切换隐藏、显示天数内容



    $('.killerpage').click(function(){
        //if ($(this).css('background')!=='rgb(0, 0, 0)'){
        //    window.location.href="js4-2.html";
        //}
        //else {
        //    alert ("请按正确游戏步骤执行！");
        //}
        $(this).css('background-color','#000');
        $(this).find('span').css('border-right-color','#000');


    })//点击杀手杀人跳转



    $('.dead').click(function(){
        if ($('.killerpage').css('background-color')=='rgb(0, 0, 0)'&&$(this).css('background-color')!=='rgb(0, 0, 0)'){
            $(this).css('background-color','#000');
            $(this).find('span').css('border-right-color','#000');
            alert("请死者发言！");
        }else {
            alert("请按正确游戏步骤执行！");
        }
    })//点击亡灵发言，先判断上一个是否已执行

    $('.player').click(function(){
        if ($('.dead').css('background-color')=='rgb(0, 0, 0)'&&$(this).css('background-color')!=='rgb(0, 0, 0)'){
            $(this).css('background-color','#000');
            $(this).find('span').css('border-right-color','#000');
            alert("请玩家依次发言！");
        }else{
            alert("请按正确游戏步骤执行！")
        }
    })//点击玩家发言，先判断上一个是否已执行

    $('.vote').click(function(){
        if ($('.player').css('background-color')=='rgb(0, 0, 0)'&&$(this).css('background-color')!=='rgb(0, 0, 0)'){
            $(this).css('background-color','#000');
            $(this).find('span').css('border-right-color','#000');
            window.location.href="js4-2.html";

        }
        else {
            alert("请按正确游戏步骤执行！")
        }
    })//点击玩家发言，先判断上一个是否已执行











})