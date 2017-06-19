/**
 * Created by Administrator on 2017/6/6 0006.
 */

var pesonsArray=JSON.parse(localStorage.getItem("persons"));
console.log(pesonsArray);
$(document).ready(function(){
    $(".back").click(function(){
        window.location.href="js2-2.html";
    })//返回上一页

    $(".end").click(function(){
        var a=confirm("确认退出游戏？")
        if (a==true){
            window.location.href="js2-1.html";
        }
        else {
            return false;
        }
    })//确认是否结束游戏


    var c=2;
    var b=0;
    var i=0;
    var h=1;
    var j=0;
    $("#parts-wrap").hide()

    function cba(){
        if(b%2==0&&b<pesonsArray.length*2){
            $(".number").text(c++);

        }
        else {
            return false;
        }
    }

    function cbb(){
        if(b%2!==0&&b<pesonsArray.length*2-2){

            $(".btn").text("隐藏并传递给"+ ++h +"号");

        }
        else {
            $(".btn").text("查看"+ h +"号的身份");
        }
        //console.log(h);
    }

    function cac(){
        if (b==pesonsArray.length*2-1){
            $(".btn").text("查看法官日志")
        }
        else if(b>pesonsArray.length*2-1){
            $(".btn").click(window.location.href="js3-2.html")
        }
        else{
            return false;
        }
    }

    $(".btn").click(function(){
        b++;
        console.log(b);

        if (i<1){
            $("#hdfp").hide();
            $("#parts-wrap").show();
            $(".persons-title").text(pesonsArray[j]);
            i++;
            j++;
        }
        else if(i==1){
            $("#hdfp").show();
            $("#parts-wrap").hide();
            i--;
        }

        cba();
        cbb();
        cac();
    });



});