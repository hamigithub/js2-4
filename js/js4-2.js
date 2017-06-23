/**
 * Created by Administrator on 2017/6/10 0010.
 */

$(document).ready(function(){
    var pesonsArray=JSON.parse(sessionStorage.getItem("persons"));
    var deadArrayLocal=JSON.parse(sessionStorage.getItem('deadArray'));//获取本地存储的死者身份;
    var deadNumArrayLocal=JSON.parse(sessionStorage.getItem('deadNumArray'));//获取本地死者的ID；
    var deadIdLocal=JSON.parse(sessionStorage.getItem('deadId'))//获取本地死者盒子ID；
    var date=JSON.parse(sessionStorage.getItem('day'));
    var deadArray=[];//储存死者身份
    var deadNumArray=[];//储存死者ID
    var deadId=[];
    var trr;
    function uyu(){
        if (deadArrayLocal!==null){
            for (var i=0;i<deadArrayLocal.length;i++)
                deadArray.push(deadArrayLocal[i]);
        }

    }//将本地死者身份储存到页面数组，解决清空本地死者数据时，点击杀人报错
    function yuy(){
        if(deadNumArrayLocal!==null){
            for (var i=0;i<deadNumArrayLocal.length;i++){
                deadNumArray.push(deadNumArrayLocal[i]);
            }
        }
    }//将本地死者ID储存到页面数组，解决清空本地死者数据时，点击杀人报错
    function yyu(){
        if(deadIdLocal!==null){
            for (var i=0;i<deadIdLocal.length;i++){
                deadId.push(deadIdLocal[i]);
            }
        }
    }
    uyu();
    yuy();
    yyu();


    var killed=true;//判断是否已杀人
    console.log(killed);


    for (var i=0;i<pesonsArray.length/3;i++){
        var objdiv = document.createElement("div");//创建div
        objdiv.className="row clm";
        $(".main").append(objdiv);
    }//按玩家人数生成行数；



    for (var i=0;i<3;i++){
        var b="<div class='col-xs-4'></div>";
        $(".row").append(b);
    };//按玩家人数生成列；


    var bib=$('.col-xs-4');//获取生成的列


    for (var i=0;i<pesonsArray.length;i++){
        var bibl="<div class='olo'><p class='lol'></p><div class='endd'></div></div>";
        bib[i].innerHTML=bibl;
    }//按人数生成相应数量的盒子


    $(".olo").bind({
        click:function(){$(this).find("div").show();},
        blur:function(){$(this).child(".endd").hide();}
    });//点击盒子将隐藏的小刀显示出来，鼠标移开后重新隐藏



    var ini=$(".olo");
    var nin=$(".lol");
    var o=1;
    //console.log(ini);
    for (var i=0;i<pesonsArray.length;i++){
        ini[i].prepend(pesonsArray[i]);
        ini[i].id=o;
        //console.log(ini[0].id);
        nin[i].append(o+"号");
        o++;
    }//遍历生成的盒子，给盒子添加人数数组里面的字符串，给盒子里面的P标签添加序号

    for (var i= 0;i<ini.length;i++){
        if(deadId.indexOf(ini[i].id)>-1){
            ini[i].style.backgroundColor="rgb(0, 0, 0)";
        }
    }




    //点击杀人按钮
    $('.endd').click(function(){
        if (killed==true&&$(this).parent('div').css('background-color')!=='rgb(0, 0, 0)'){
            var kill=$(this).parent('div').clone();
                kill.find(':nth-child(n)').remove();
            deadArray.push(kill.html());
            var num=$(this).prev('p').text();
            deadNumArray.push(num);
            sessionStorage.setItem('deadArray',JSON.stringify(deadArray));
            sessionStorage.setItem('deadNumArray',JSON.stringify(deadNumArray));
            $(this).parent('div').css('background','#000');
            trr=$(this).parent('div').attr('id');
            //console.log(trr);
            deadId.push(trr);
            sessionStorage.setItem('deadId',JSON.stringify(deadId));
            console.log(deadId);
            killed=false;
            console.log(killed);
        }
        else if(killed==false&&$(this).parent('div').css('background-color')!=='rgb(0, 0, 0)'){
            alert('一次怼一只!');
        }
        else {
            alert('请勿鞭尸!')
        }
    })







    $("#btn").click(function(){
        if(killed==false){

            localStorage.day=date+1;

            location.href="js4-1.html";
        }
        else {
            alert ("请先动手!")
        }

    })//确定按钮


    $(".back").click(function(){
        window.location.href="js4-1.html";
    })//点击返回上一页面

    $(".end").click(function () {
        var uiu=confirm("是否退出游戏？！")
        if (uiu==true){
            window.location.href="js2-1.html";
        }
        else {
            return false;
        }
    })//点击退出游戏
})

