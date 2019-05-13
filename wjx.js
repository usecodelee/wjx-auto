function main(){//随机选择答案的函数
function random(t,num){
    if(num){
        let res=[];
        for(let i=0;i<num;i++){
            var num1 = Math.random()*t;
            num1 = Math.floor(num1);
            if(res.indexOf(num1)==-1){
                res.push(num1);
            }
        }
        return res;
    }else{
        var num1 = Math.random()*t;
        num1 = Math.floor(num1);
        return num1;
    }
    
}
var load=document.getElementById('divLoadAnswer');
if(load.getElementsByTagName('a').length>0){
    // load.getElementsByTagName('a')[0].click();
    loadAnswer();
}else{
    //获取全部问题
var father = document.getElementsByClassName("field");
//循环遍历问题并随机选择答案
for(var i=0;i<father.length;i++){
    var f=father[i];
    var lises = f.getElementsByClassName("ui-controlgroup");//获取问题选项
    var checkbox=[];
    var radio=[];

    var txt=f.getElementsByClassName('ui-input-text');

    for(var j=0;j<lises.length;j++){
        if(lises[j].getElementsByClassName('ui-checkbox').length>0){
            checkbox.push(lises[j]);
        }
        if(lises[j].getElementsByClassName('ui-radio').length>0){
            radio.push(lises[j]);
        }
    }
    if(radio.length>0){
        for(var k=0;k<radio.length;k++){
            var rarr=radio[k].getElementsByClassName('ui-radio');
            var r=random(rarr.length);
            rarr[r].getElementsByClassName('jqradio')[0].click();
        }
    }
    if(checkbox.length>0){
        for(var l=0;l<checkbox.length;l++){
            var rarr=checkbox[l].getElementsByClassName('ui-checkbox');
            var r=random(rarr.length,2);
            for(let i=0;i<r.length;i++){
                rarr[r[i]].getElementsByClassName('jqcheck')[0].click();
            }
        }
    }
    if(txt.length>0){
        for(var l=0;l<txt.length;l++){
            txt[l].getElementsByTagName('input')[0].value=''
        }
    }
}
}

setTimeout(() => {
    document.getElementById("ctlNext").click();//提交
    setTimeout(() => {
        document.location="https://www.wjx.cn/m/38762782.aspx";//重定向问卷页面
    }, 1000);
}, 2000);

}

    main();
//说明，填写多少份问卷，自己可以编写一个for循环


