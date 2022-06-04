$(document).ready(function(){
    $("#total").html(record.total);
    $("#miss").html(record.miss);
    $("#num").html(record.num);
    $(".son").eq(0).click(()=>{
        $("#ul").removeAttr("style");
        record.changeobj(dayin3);
        exam.test();
    });
    $(".son").eq(1).click(()=>{
        $("#ul").removeAttr("style");
        $("#ul").css("top","480px");
        record.changeobj(xueshuyinyu);
        exam.test();
    });
    $(".li").click(()=>{
        $(".son").hide();
        $("#ul").hide();
        $(".word").removeAttr("style");
    });
    $(".li").eq(0).click(()=>{
        record.changetotal(15);
        record.recordnum()
        record.recordtotal();
    });
    $(".li").eq(1).click(()=>{
        record.changetotal(30);
        record.recordnum()
        record.recordtotal();
    });
    $(".li").eq(2).click(()=>{
        record.changetotal(50);
        record.recordnum()
        record.recordtotal();
    });
    $("#keep").click(()=>{
        final.keep()
    })
    $("#return").click(()=>{
        final.back()
    })
    $("#zhan").click(()=>{
        record.zhan();
    })
    

    for(let i=0;i<4;i++){
        const chineseword = document.getElementsByClassName("chinese")
        chineseword[i].onclick = function(){
            let id = this.id;
            let chinese = document.getElementById(id).innerText;
            exam.judgment(chinese,id);
    }
}
});



