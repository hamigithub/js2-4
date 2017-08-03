/**
 * Created by Chris Chen on 2017/4/28.
 */
//获取数据
var thePlayers = sessionStorage.total;
var total = JSON.parse(thePlayers);
console.log(total);

var state = [];
var dates = 1;
var visit = 0;

for(var i=0; i<total.length; i++){
    $(".wrap").append('<div class="box"><div class="role">'+total[i]+'</div><div class="number">'+(i+1)+'号</div></div>');
    //赋值玩家存活状态，天数
    state[i] = {};
    state[i].num = i+1;
    state[i].role = total[i];
    state[i].life = "alive";
    state[i].deadDay = null;
}
console.log(state);
$("footer botton").click(function () {
    sState = JSON.stringify(state);
    sessionStorage.state = sState;
    dates = JSON.stringify(dates);
    sessionStorage.dates = dates;
    sessionStorage.visit = visit;
    location.href = "task4-1.html";
});

