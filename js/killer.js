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

var killerNum = null;
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
//杀手杀人，role变色
$(".wrap").click(function () {
    //获取玩家角色
    var roleName = $($(this).find(".role")).text();
    //一次只能杀一个玩家
    for(var n=0; n<state.length; n++){
        if(state[n].life == "alive"){
            $(".role").eq(n).css("background-color","");
        }
    }
    //杀手不能杀杀手
    if(roleName == "杀手"){
        alert("请勿轻生！");
        window.location.reload();
    }
    //已死的玩家不能再次选中
    else if(state[$(this).index()].life != "alive"){
        alert("请勿鞭尸！");
        window.location.reload();
    }
    //被杀的变色
    else {
        $($(this).find(".role")).css("background-color","#000");
        console.log($(this).find(".role"));
        //被杀玩家的序号
        killerNum = $(this).index();
        console.log(killerNum);
    }
});


//按钮判断
$("footer botton").click(function () {
    if(killerNum != null){
        //改变被杀的玩家
        state[killerNum].life = "killed";
        state[killerNum].deadDay = dates;
        //传送数据
        sState = JSON.stringify(state);
        sessionStorage.state = sState;
        //改变访问次数
        visit = 1;
        sessionStorage.visit = visit;
        console.log(sState);
        console.log("visit:"+visit);
        //跳转回游戏流程页面
        location.href = "task4-1.html";
    }
    else {
        alert("请选择要杀死的玩家");
    }
});