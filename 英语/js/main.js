const exam = {
    test: function(){
        const obj = record.Objname;
        record.word_all= Object.keys(obj);
        if(record.nouse_word.length==0){
            record.nouse_word =Object.keys(obj);
            record.yizhan = Object.keys(obj);
        }else{
            record.nouse_word = record.yizhan;
        }
        if(localStorage.length>0){
            for(let i=0;i<localStorage.length;i++){
              let key = localStorage.key(i)   ;   
              record.yizhan = exam.removeword(record.yizhan,localStorage.getItem(key));
              record.nouse_word = record.yizhan;
            }
        }
        this.changeword();
    },
    changeword: function(){ 
        const obj = record.Objname; 
        const nouseword = record.nouse_word;      
        const word =[];
        const zhongwei = [];
        for(let i=0;i<4;i++){
            word.push(nouseword[Math.round(Math.random()*nouseword.length)])
            zhongwei.push(obj[word[i]])
        }
        let tureword = word[Math.round(Math.random()*3)]
        record.true_word = tureword;
        $("#words").html(tureword);
        $(".word2").html(zhongwei[0]);
        $(".word3").html(zhongwei[1]);
        $(".word4").html(zhongwei[2]);
        $(".word5").html(zhongwei[3]);
    },
    judgment: function(chinese,id){
        const obj = record.Objname;
        let tureword = record.true_word;
        let english = $("#words").text();
        let idname = document.getElementById(id);
        if(obj[english]==chinese){
            idname.style.backgroundColor="#2BFF70";
            setTimeout(function(){
                idname.style.backgroundColor="#8CF0E8";
            },200)
            if(record.num != record.total){
                record.use_word.push(tureword);
                this.cannelword(tureword);
                record.recordnum(); 
                this.changeword(); 
            }
            else{
                $(".word").hide();
                $("#words").html("");
                $(".end").removeAttr("style");
                $("#finish_total").html(record.total);
                $("#finish_miss").html(record.miss);             
            }
            
        }else{
            idname.style.backgroundColor="red";
            setTimeout(function(){
                idname.style.backgroundColor="#8CF0E8";
            },200)
            record.recordmiss();
        }
    },
   cannelword: function(ture_word){
        const nouseword = record.nouse_word;
        nouseword.forEach(function(item, index, arr) {
            if(item == ture_word ) {
                arr.splice(index, 1);
            }
        });
        record.nouse_word = nouseword;
    }, 
    removeword: function(word,removeword){
        word.forEach(function(item, index, arr) {
            if(item == removeword ) {
                arr.splice(index, 1);
            }
        });
        return word;
    }
};
const record = {
    yizhan:[],
    total: "",//一轮总单词数
    num: 0 ,//当前回合数
    miss: 0,//记录失败的单词数
    Objname: "",    
    nouse_word:[],//在所有单词后去除斩单词后的和一轮中未使用的单词
    true_word:"",//当前页面的英文单词
    use_word:[],//当前页面用过的单词
    word_all:[],//所有单词
    changetotal: function(number){
        this.total = number;
    },
    changeobj: function(model){
        this.Objname = model;
    },
    recordnum:function(){
        this.num += 1;
        $("#num").html(this.num);
    },
    recordtotal:function(){
        $("#total").html(this.total);
    },
    recordmiss:function(){
        this.miss += 1;
        $("#miss").html(this.miss);
    },
    zhan:function(){
        if($("#words").text()!=""){
            let nowdate = Date.parse(new Date());
            let zhan = $("#words").text();
            this.nouse_word = exam.removeword(this.nouse_word,zhan);
            this.yizhan = exam.removeword(this.word_all,zhan);
            exam.changeword();
            localStorage.setItem(nowdate,zhan)
            console.log(localStorage.length);
            console.log(localStorage.key(0));
            console.log(this.nouse_word)
        }
    }
}
const final={
    keep: function(){
        $(".end").hide();
        $(".word").removeAttr("style");
        record.num = 1;
        record.miss = 0;
        record.nouse_word = Object.keys(record.Objname);
        record.use_word = [];
        $("#num").html(record.num);
        $("#miss").html(record.miss);
    },
    back: function(){
        $(".end").hide();
        $(".son").removeAttr("style");
        record.num = 0;
        record.miss = 0;
        record.total ="";
        record.nouse_word = Object.keys(record.Objname);
        record.use_word = [];
        $("#num").html(record.num);
        $("#miss").html(record.miss);
        $("#total").html(this.total);
    }
}
