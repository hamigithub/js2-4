/**
 * Created by Chris Chen on 2017/5/6.
 */
//获取上一页的数据
//存活的玩家
var theKiller = sessionStorage.aliveKiller;
var aliveKiller = JSON.parse(theKiller);
var theCivilian = sessionStorage.aliveCivilian;
var aliveCivilian = JSON.parse(theCivilian);
//state
var sState = sessionStorage.state;
var state = JSON.parse(sState);
//天数
var dates = sessionStorage.dates;
//test
console.log(aliveKiller);
console.log(aliveCivilian);
console.log(state);
console.log("days:"+dates);

var n = 0, m = 0;
var killerNum = [];
var civilianNum = [];
//杀手和平民的数量
for(var i=0; i<state.length; i++){
    if(state[i].role == "杀手"){
        killerNum[n] = state[i];
        n++;
    }
    else if(state[i].role == "平民"){
        civilianNum[m] = state[i];
        m++;
    }
}
jQuery.inArray("");
//具体信息
$(document).ready(function () {
    //赢家
    if(aliveKiller.length >= aliveCivilian.length){
        $(".top h3").text("杀手胜利");
    }
    else if(aliveKiller.length == 0){
        $(".top h3").text("平民胜利");
    }
    //本轮玩家人数
    $(".role").append("<span>杀  手"+killerNum.length+"人</span><span>平  民"+civilianNum.length+"人</span>");
    //游戏天数
    for(var j=1; j<=dates; j++){
        $(".details").append('<div class="wrap"><h3 class="time">第'+j+'天<h3></div>');
        for(var k=0; k<state.length; k++){
            if(state[k].deadDay == j && state[k].life == "killed"){
                $(".wrap").eq(j-1).append("<p>晚上："+state[k].num+"号被杀手杀死，真实身份是"+state[k].role+"</p>");
            }
        }
        for(var k=0; k<state.length; k++){
            if(state[k].deadDay == j && state[k].life == "voted"){
                $(".wrap").eq(j-1).append("<p>白天："+state[k].num+"号被投票投死，真实身份是"+state[k].role+"</p>");
            }
        }
    }
});

$(".again").click(function () {
   location.href = "js-task2-1.html";
});