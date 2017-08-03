/**
 * Created by Chris Chen on 2017/5/5.
 */
//获取上一页的数据
var sState = sessionStorage.state;
var state = JSON.parse(sState);
var dates = sessionStorage.dates;
var visit = sessionStorage.visit;
console.log(state);
console.log("days:"+dates);

//输出玩家身份
for(var i=0; i<state.length; i++){
    var gamePlayers = '<div class="wrap"><div class="box"><div class="role">'+state[i].role+'</div><div class="number">'+(i+1)+'号</div></div><span class="weapon"></span></div>';
    $(".content").append(gamePlayers);
}
//标记已死或现投死的玩家
for(var j=0; j<state.length; j++){
    if(state[j].life == "killed" || state[j].life == "voted"){
        $(".role").eq(j).css("background-color","#83b09a");
    }
}
var voteNum = null;
//投票，role变色
$(".wrap").click(function () {
    //一次一直能投死一个玩家
    for(var n=0; n<state.length; n++){
        if(state[n].life == "alive"){
            $(".role").eq(n).css("background-color","");
        }
    }
    //已死的玩家不能再次选中
    if(state[$(this).index()].life != "alive"){
        alert("玩家已死，有事请烧纸！");
        window.location.reload();
    }
    //被投死的玩家变色
    else {
        $($(this).find(".role")).css("background-color","#000");
        console.log($(this).find(".role"));
        //被投死玩家的序号
        voteNum = $(this).index();
        console.log(voteNum);
    }
});

//按钮判断
var aliveKiller = [];
var aliveCivilian = [];
$("footer botton").click(function () {
    if(voteNum != null){
        var n = 0;
        var m = 0;
        //改变投死的玩家
        state[voteNum].life = "voted";
        state[voteNum].deadDay = dates;
        //访问为0
        visit = 0;
        //传送数据
        sState = JSON.stringify(state);
        sessionStorage.state = sState;
        sessionStorage.visit = visit;
        //把存活的杀手和平民存入两个数组
        for(var k=0; k<state.length; k++){
            if(state[k].role == "杀手" && state[k].life == "alive"){
                aliveKiller[n] = state[k];
                n++;
            }
            else if(state[k].role == "平民" && state[k].life == "alive"){
                aliveCivilian[m] = state[k];
                m++;
            }
        }
        console.log(aliveKiller);
        console.log(aliveCivilian);
        //判断是否游戏结束
        if(aliveKiller.length == 0 || aliveKiller.length >= aliveCivilian.length){
            if(confirm("本轮游戏已结束，是否查看游戏结果？")){
                //玩家存活状态传到下一页
                theKiller = JSON.stringify(aliveKiller);
                theCivilian = JSON.stringify(aliveCivilian);
                sState = JSON.stringify(state);
                sessionStorage.aliveKiller = theKiller;
                sessionStorage.aliveCivilian = theCivilian;
                sessionStorage.state = sState;
                //跳转游戏结束页面
                location.href = "task4-4.html";
            }
            else{}
        }
        //投票后，天数+1
        else{
            dates++;
            sessionStorage.dates = dates;
            console.log(sessionStorage.dates);
            //跳转
            location.href = "task4-1.html";
        }
    }
    else {
        alert("请选择要投死的玩家");
    }
});