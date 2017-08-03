var playersNum = document.getElementById("playersNum");
var btnMin = document.getElementById("btnMin");
var sliderBlock = document.getElementById("sliderBlock");
var btnAdd = document.getElementById("btnAdd");

//输入框数和滑块值一致
playersNum.onchange = function () {
    sliderBlock.value = playersNum.value;
};
//滑块值改变，输入框的值也相应改变
sliderBlock.oninput = function () {
    playersNum.value = sliderBlock.value;
};
//规定玩家人数的范围
function num() {
    if(isNaN(Number(playersNum.value))) {
        alert("请输入数字");
        playersNum.value = 6;
    }
    else if(playersNum.value<6){
        alert("请输入正确的玩家人数\n(提示:6≤n≤18)");
        playersNum.value = 6;
    }
    else if(playersNum.value>18){
        alert("请输入正确的玩家人数\n(提示:6≤n≤18)");
    }
}
playersNum.addEventListener("change",num);

//按钮-
function minus() {
    playersNum.value--;
    if(playersNum.value<6){
        alert("玩家人数不能少于6哦!");
        playersNum.value = 6;
    }
    else{
        sliderBlock.value = playersNum.value;
    }
}
btnMin.addEventListener("click",minus);

//按钮+
function add() {
    playersNum.value++;
    if(playersNum.value>18){
        alert("玩家人数太多啦!(o^.^o)");
        playersNum.value = 18;
    }
    else{
        sliderBlock.value = playersNum.value;
    }
}
btnAdd.addEventListener("click",add);