/**
 * Created by Administrator on 2017/5/30 0030.
 */
sessionStorage.clear();
var back=document.getElementById("back");
back.onclick=function (){
    var y = confirm('你确定要结束本次游戏？');
    if(y==true){
        window.location.href="js2-1.html";
    }else{
        return false;
    }
}//判断页面跳转
var watermen=[];
var killers=[];
var persons=[];
var toggle=document.getElementById("toggle");
var killer=document.getElementsByClassName("identity")[0];
var civilian=document.getElementsByClassName("civilian")[0];
var range=document.getElementById("range");//获取滑块对象
var num=document.getElementById("number");//获取input对象；
var setting=document.getElementById("setting");//通过ID获取设置人数按钮；
var leftbtn=document.getElementById("leftbtn");
var rightbtn=document.getElementById("rightbtn");


//点击配置人数和角色
toggle.innerHTML="";//隐藏页面的子元素；
setting.onclick=function () {
    var number=Number(num.value);//局部变量，将获取到的input的值转化成数值类型;

    if (6 <= number && number <= 8) {

        killers.length = 1;
    }
    else if (9 <= number && number <= 11) {

        killers.length = 2;
    }
    else if (12 <= number && number <= 15) {

        killers.length = 3;
    }
    else if (16 <= number && number <= 18) {

        killers.length = 4;
    }//根据获得的number长度判断杀手的长度；

    watermen.length=number-killers.length;//水民的长度等于获得的number减去杀手的长度；

    for(var i=0;i<killers.length;i++){
        killers[i]="杀手";
    }//将数组的项赋值为杀手；
    for (var j=0;j<watermen.length;j++){
        watermen[j]="水民";
    }//将数组的项赋值为水民；

    persons=watermen.concat(killers);//将水民和杀手合并



    for(var i=0;i<persons.length;i++){

        var index=Math.floor(Math.random()*persons.length);
        persons.push(persons[index]);
        persons.splice(index,1);
        console.log(index);
    }//洗牌乱序算法，随机将项移到最后面，并删除数组项原始值迭代。

    var ibi=[];
    ibi=persons;
    sessionStorage.setItem('persons',JSON.stringify(ibi));

    var ke="<span class='killer'><span></span>  杀手 1人</span>"
    var bi="<span class='civilian'><span></span>水民 1人</span>"
    for (var i=0;i<persons.length;i++){
        if(persons[i]=="杀手"){
            persons[i]=ke;
        }
        else{
            persons[i]=bi;
        }
    }
    var personsString="";
    for(var i=0;i<persons.length;i++){
        personsString=personsString+persons[i];
    }//遍历persons数组项并连接成一个元素字符串
    toggle.innerHTML=personsString;//将元素字符串添加到toggle中




};







    //range滑块
    function aaa(a,b){
        if (a.value >= 6 && a.value <= 18) {
            b.value=a.value;
        }
        else{
            alert("建议玩家数量6~18");
            a.value=6;
            b.value=6;
        }
        toggle.innerHTML="";
    };

    num.onblur=function(){
        aaa(num,range);
    }

    range.onchange=function(){
        num.value=range.value;
        toggle.innerHTML="";
    }

    leftbtn.onclick=function(){
        num.value--;
        aaa(num,range);
    }

    rightbtn.onclick=function(){
        num.value++;
        aaa(num,range);
    }




var goto=document.getElementById("goto");

    goto.onclick= function () {
        if(toggle.innerHTML==""){
            alert ("请先设置玩家数量");
            return false;
        }
        else{
        window.location.href="js3-1.html"
        }
    }


