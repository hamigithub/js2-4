/**
 * Created by Administrator on 2017/6/12 0012.
 */
var pesonsArray=JSON.parse(sessionStorage.getItem("persons"));
var date=JSON.parse(sessionStorage.getItem('day'));
console.log(date);

$(document).ready(function(){

  for (var i=1;i<=date;i++){
    $('.main').append('<div class="day">'+'第'+i+'天' +'<span class="downdrop"></span></div> <div class="gameflow-wrap"> <span class="sun"></span> <div class="gameflow killerpage"><span class="trigon"></span>杀手杀人</div> <div class="dead-wrap"> <span class="moon"></span> <div class="gameflow dead"><span class="trigon"></span>亡灵发表遗言</div> </div> <div class="gameflow player"><span class="trigon"></span>玩家依次发言</div> <div class="gameflow vote"><span class="trigon"></span>投票</div> </div>')
  }

    $('.killerpage').click(function(){
        if ($(this).css('background')!=='rgb(0, 0, 0)'){
            window.location.href="js4-2.html";
        }
        else {
            alert ("请按正确游戏步骤执行！");
        }
        $(this).css('background-color','#000');
        $(this).find('span').css('border-right-color','#000');


    })//点击杀手杀人跳转


















})