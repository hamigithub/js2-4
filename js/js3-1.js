/**
 * Created by Chris Chen on 2017/4/27.
 */
//获取任务2数据
var thePlayers = sessionStorage.total;
var total = JSON.parse(thePlayers);
console.log(total);

var clickRate = 1;
var countPlayers = 1;
console.log("clickRate"+clickRate);
console.log("countPlayers"+countPlayers);
//第一次点击：查看身份
$(document).ready(function () {
   if(countPlayers == 1){
        $(".role-num").text(countPlayers);
        $(".role-hidden, .role-text, .suggest").hide();
        $(".role-show").show();
        $("#check").text("查看"+countPlayers+"号身份");
   }
});
//按钮
$("#check").click(function () {
    if(countPlayers < total.length+1){
        $(".role-text").hide();
        $(".role-num").text(countPlayers);
        //奇数点击，隐藏并传递
        if(clickRate % 2 == 1){
            $(".role-num").text(countPlayers);
            $(".role-show").hide();
            $(".role-hidden, .role-text, .suggest").show();
            if(total[countPlayers-1] == "平民"){
                $(".role-text").text("平民");

            }
            else{
                $(".role-text").text("杀手");
            }
            if(countPlayers < total.length){
                $("#check").text("隐藏并传递给"+(countPlayers+1)+"号");
            }
            else{
                $("#check").text("查看法官日志");
            }
            countPlayers++;
        }
        //偶数点击，查看身份
        if(clickRate %2 == 0){
            $(".role-hidden, .role-text, .suggest").hide();
            $(".role-show").show();
            $("#check").text("查看"+countPlayers+"身份");
        }
        clickRate++;
    }
    else {
        location.href = "task3-2.html";
    }
});