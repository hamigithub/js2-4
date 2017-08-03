var killer = [];
var civilian = [];
var total = [];
var thePlayers;
var theDates = 1;
console.log(total);

//玩家配比
$(".set").click(function () {
    //清空显示内容
    $(".list").html("");
   //获取玩家人数
    total.length = parseInt($("#playersNum").val());
    console.log(total);
    //判断杀手人数
    if(total.length == 8){
        killer.length = 1;
    }
    else{
        killer.length = parseInt(total.length/4);
    }
    //选出杀手
    for(var i=0; i<killer.length; i++){
        killer[i] = "杀手";
    }
    //选出平民
    for(var j=0; j<(total.length-killer.length); j++){
        civilian[j] = "平民";
    }
    //把两个角色传入数组
    total = killer.concat(civilian);
    //随机排序
    total.sort(function () {
        return .5 - Math.random();
    });
    //再赋值
    total.length = parseInt($("#playersNum").val());
    //再清空
    $(".list").html = "";

    //玩家角色
    for(var k=0; k<total.length; k++){
        if(total[k] == "杀手") {
            $(".list").append('<li class="pant"><span class="orange"></span><span class="pant-name">' + (k + 1) + '号-' + total[k] + '</span></li>');
        }
        if(total[k] == "平民"){
            $(".list").append('<li class="pant"><span class="blue"></span><span class="pant-name">' + (k + 1) + '号-' + total[k] + '</span></li>');
        }
    }
    //转字符串 数据储存
    thePlayers = JSON.stringify(total);
    sessionStorage.total = thePlayers;
    dates = JSON.stringify(theDates);
    sessionStorage.dates = dates;
});

//翻牌按钮
$(".next").click(function () {
    if(total.length == 0){
        alert("请先进行玩家配比！");
    }
    else {
        location.href = "task3-1.html";
    }
});