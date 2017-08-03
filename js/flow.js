/**
 * Created by Chris Chen on 2017/4/30.
 */
//本页需求：
//1、输出游戏天数。
//2、杀手杀人按钮奇数次点击直接进入杀人页面，偶数次点击变色。
//3、游戏步骤不能跳，要依次完成。
//4、在本页完成游戏结束判断，即杀手人数≥平明人数，或者杀手人数为0，则游戏结束。

//获取上一页的玩家存活状态以及天数
var sState = sessionStorage.state;
var state = JSON.parse(sState);
var dates = sessionStorage.dates;
var visit = sessionStorage.visit;
console.log(state);
console.log("days:"+dates);
console.log("visit"+visit);

//游戏天数,以及折叠的内容
for(var j=1; j<=dates; j++){
    $(".playtime").append('<div class="wrap"><h3 class="theDay">第'+j+'天</h3><div>');
    for(var k=0; k<state.length; k++){
        if(state[k].deadDay == j && state[k].life == "killed"){
            $(".wrap").eq(j-1).append('<div class="detail"><div class="tri"></div><p>晚上：'+state[k].num+'号被杀手杀死，真实身份是'+state[k].role+'</p></div>');
            //杀手按钮下的信息
            $(".message1").last(j).text('晚上：'+state[k].num+'号被杀手杀死，真实身份是'+state[k].role);
        }
    }
    for(var l=0; l<state.length; l++){
        if(state[l].deadDay == j && state[l].life == "voted"){
            $(".detail").eq(j-1).append('<p>白天：'+state[l].num+'号被投票投死，真实身份是'+state[l].role+'</p>');
            //投票按钮下的信息
            $(".message2").last(j).text('白天：'+state[l].num+'号被投票投死，真实身份是'+state[l].role);
        }
    }
}
//点击箭头折叠按钮
$(".theDay").click(function () {
    console.log($(this).siblings(".detail").css("display"));
    if($(this).siblings(".detail").css("display") == "none"){
        $(this).siblings(".detail").show();
    }
    else {
        $(this).siblings(".detail").hide();
    }
});
//判断杀手杀人按钮是否变色
$(document).ready(function () {
   if(visit == 1){
       $(".btnKiller").css("background-color","#83b09a");
       $(".btnKiller").siblings("i").css("border-color","transparent #83b09a transparent transparent");
   }
   else {}
});
//判断杀手杀人按钮是否或跳转至杀人页面
$(".btnKiller").click(function () {
    if(visit == 1){
    alert("请不要重复操作！根据游戏流程依次进行。");
    }
    else{
        location.href = "task4-2.html";
    }
});
//点击亡灵发表遗言并判断
$(".words").click(function () {
    if($(".btnKiller").css("background-color") == "rgb(131, 176, 154)"){
        $(this).css("background-color","#83b09a");
        $(this).siblings("i").css("border-color","transparent #83b09a transparent transparent");
        alert("请死者亮明身份并发表遗言");
    }
    else {
        alert("请先杀人！");
    }
});
//点击玩家依次发言并判断
$(".speak").click(function () {
    var killerColor = $(".btnKiller").css("background-color");
    var wordsColor = $(".words").css("background-color");
    if(wordsColor != "rgb(131, 176, 154)" && killerColor != "rgb(131, 176, 154)") {
        alert("请先杀人！");
    }
    else if(wordsColor != "rgb(131, 176, 154)"){
        alert("请先进行亡灵发表遗言。")
    }
    else{
        $(this).css("background-color","#83b09a");
        $(this).siblings("i").css("border-color","transparent #83b09a transparent transparent");
        alert("玩家依次发言讨论");
    }
});
//点击投票按钮并判断是否跳转至投票页面
$(".btnVote").click(function () {
    var killerColor = $(".btnKiller").css("background-color");
    var wordsColor = $(".words").css("background-color");
    var speakColor = $(".speak").css("background-color");

    if(killerColor != "rgb(131, 176, 154)" && wordsColor != "rgb(131, 176, 154)" && speakColor != "rgb(131, 176, 154)") {
        alert("请先进行杀手杀人。");
    }
    else if(wordsColor != "rgb(131, 176, 154)" && speakColor != "rgb(131, 176, 154)"){
        alert("请先进行亡灵发表遗言。")
    }
    else if(speakColor != "rgb(131, 176, 154)"){
        alert("请先进行玩家依次发言。");
    }
    else{
        $(this).css("background-color","#83b09a");
        $(this).siblings("i").css("border-color","transparent #83b09a transparent transparent");
        location.href = "task4-3.html";
    }
});

var i;
var k = 0;
var c = 0;
var aliveKiller = [];
var aliveCivilian = [];
$(document).click(function () {
    //把存活的杀手和平民存入数组
    for(i=0; i<state.length; i++){
        if(state[i].role == "杀手" && state[i].life == "alive"){
            aliveKiller[k] = state[i];
            k++;
        }
        if(state[i].role == "平民" && state[i].life == "alive"){
            aliveCivilian[c] = state[i];
            c++;
        }
    }
    console.log(aliveKiller);
    console.log(aliveCivilian);
    //判断游戏是否结束，即杀手人数≥平明人数，或者杀手人数为0。
    if(aliveKiller.length == 0 || aliveKiller.length >= aliveCivilian.length){
        if(confirm("本轮游戏已结束，是否查看游戏结果？")){
            //把游戏数据传递到下一页
            theKiller = JSON.stringify(aliveKiller);
            theCivilian = JSON.stringify(aliveCivilian);
            sState = JSON.stringify(state);
            sessionStorage.aliveKiller = theKiller;
            sessionStorage.aliveCivilian = theCivilian;
            sessionStorage.state = sState;
            //跳转至游戏结束页面
            location.href = "task4-4.html";
        }
        else{}
    }
    else{}
});

//把游戏数据传递到下一页
theKiller = JSON.stringify(aliveKiller);
theCivilian = JSON.stringify(aliveCivilian);
sessionStorage.aliveKiller = theKiller;
sessionStorage.aliveCivilian = theCivilian;

//结束按钮判断是否结束游戏
$(".gameOver").click(function () {
    if(confirm("游戏正在进行中，确定结束游戏？")){
        location.href = "js-task2-1.html";
    }
});