document.onselectstart = function(){return false;};

var clicks=0

var table=[]
function losowanie(){
    clicks=0
    document.getElementById("caly").innerHTML='<div id="k0" class="kwadrat"></div><div id="k1" class="kwadrat"></div><div id="k2" class="kwadrat"></div><div id="k3" class="kwadrat"></div><div id="k4" class="kwadrat"> </div> <div id="k5" class="kwadrat"></div><div id="k6" class="kwadrat"></div><div id="k7" class="kwadrat"></div><div id="k8" class="kwadrat"> </div><div id="k9" class="kwadrat"></div><div id="k10" class="kwadrat"></div><div id="k11" class="kwadrat"></div><div id="k12" class="kwadrat"></div> <div id="k13" class="kwadrat"></div><div id="k14" class="kwadrat"></div><div id="k15" class="kwadrat"></div>';
    document.getElementById("caly").style.color="white";
    document.getElementById("caly").style.backgroundColor="";
    document.getElementById("k0").innerHTML="";
    document.getElementById("k1").innerHTML="";
    document.getElementById("k2").innerHTML="";
    document.getElementById("k3").innerHTML="";
    document.getElementById("k4").innerHTML="";
    document.getElementById("k5").innerHTML="";
    document.getElementById("k6").innerHTML="";
    document.getElementById("k7").innerHTML="";
    document.getElementById("k8").innerHTML="";
    document.getElementById("k9").innerHTML="";
    document.getElementById("k10").innerHTML="";
    document.getElementById("k11").innerHTML="";
    document.getElementById("k12").innerHTML="";
    document.getElementById("k13").innerHTML="";
    document.getElementById("k14").innerHTML="";
    document.getElementById("k15").innerHTML="";
    table=[]
    var liczby = document.getElementById("liczby").value;
    if(liczby<=0 || liczby>16){
        document.getElementById("caly").innerHTML="<br> <br>WPISANO NIEPOPRAWNĄ WARTOŚĆ";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
        liczby=3
    }
    else{
            
    var czas = document.getElementById("czas").value;

    czas= czas*1000

    setTimeout(() => {
        document.getElementById("caly").style.color="#A4243B";

        document.getElementById("caly").innerHTML='<div id="k0" class="kwadrat" onclick="guzior0()"></div><div id="k1" class="kwadrat" onclick="guzior1()"></div><div id="k2" class="kwadrat" onclick="guzior2()"></div><div id="k3" class="kwadrat" onclick="guzior3()"></div><div id="k4" class="kwadrat" onclick="guzior4()"> </div> <div id="k5" class="kwadrat" onclick="guzior5()"></div><div id="k6" class="kwadrat" onclick="guzior6()"></div><div id="k7" class="kwadrat" onclick="guzior7()"></div><div id="k8" class="kwadrat" onclick="guzior8()"> </div><div id="k9" class="kwadrat" onclick="guzior9()"></div><div id="k10" class="kwadrat" onclick="guzior10()"></div><div id="k11" class="kwadrat" onclick="guzior11()"></div><div id="k12" class="kwadrat" onclick="guzior12()"></div> <div id="k13" class="kwadrat" onclick="guzior13()"></div><div id="k14" class="kwadrat" onclick="guzior14()"></div><div id="k15" class="kwadrat" onclick="guzior15()"></div>';
      }, czas);

      
    ok= Math.floor(Math.random()*16);
    console.log("1: "+ok)
    document.getElementById("k"+ok).innerHTML=1;
    table.push(ok)
    
    for(let i=2;i<=liczby; i++){

        ok= Math.floor(Math.random()*16);

        var dzialajace=0

        while(true){
            for(let b=0; b< table.length; b++){
                if(ok==table[b]){
                    ok= Math.floor(Math.random()*16);
                    dzialajace=0
                    break
                }
                else{
                    dzialajace+=1
                }

            }
            if(dzialajace==table.length){
                break
            }
        }

        table.push(ok)
        console.log(i+ ": "+ok)

        document.getElementById("k"+ok).innerHTML=i;
        
    }
    console.log("")
    }
    }

function guzior0(){
    if(table[clicks]==0){
        document.getElementById("k0").style.backgroundColor="#2F8E3A";
        document.getElementById("k0").innerHTML=clicks+1;
        document.getElementById("k0").style.color="white";
    }
    if(table[clicks]!=0){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
        
    }
    clicks+=1;
}

function guzior1(){
    if(table[clicks]==1){
        document.getElementById("k1").style.backgroundColor="#2F8E3A";
        document.getElementById("k1").innerHTML=clicks+1;
        document.getElementById("k1").style.color="white";
    }
    if(table[clicks]!=1){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior2(){
    if(table[clicks]==2){
        document.getElementById("k2").style.backgroundColor="#2F8E3A";
        document.getElementById("k2").innerHTML=clicks+1;
        document.getElementById("k2").style.color="white";
    }
    if(table[clicks]!=2){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior3(){
    if(table[clicks]==3){
        document.getElementById("k3").style.backgroundColor="#2F8E3A";
        document.getElementById("k3").innerHTML=clicks+1;
        document.getElementById("k3").style.color="white";
    }
    if(table[clicks]!=3){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior4(){
    if(table[clicks]==4){
        document.getElementById("k4").style.backgroundColor="#2F8E3A";
        document.getElementById("k4").innerHTML=clicks+1;
        document.getElementById("k4").style.color="white";
    }
    if(table[clicks]!=4){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior5(){
    if(table[clicks]==5){
        document.getElementById("k5").style.backgroundColor="#2F8E3A";
        document.getElementById("k5").innerHTML=clicks+1;
        document.getElementById("k5").style.color="white";
        
    }
    if(table[clicks]!=5){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior6(){
    if(table[clicks]==6){
        document.getElementById("k6").style.backgroundColor="#2F8E3A";
        document.getElementById("k6").innerHTML=clicks+1;
        document.getElementById("k6").style.color="white";
    }
    if(table[clicks]!=6){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior7(){
    if(table[clicks]==7){
        document.getElementById("k7").style.backgroundColor="#2F8E3A";
        document.getElementById("k7").innerHTML=clicks+1;
        document.getElementById("k7").style.color="white";
    }
    if(table[clicks]!=7){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior8(){
    if(table[clicks]==8){
        document.getElementById("k8").style.backgroundColor="#2F8E3A";
        document.getElementById("k8").innerHTML=clicks+1;
        document.getElementById("k8").style.color="white";
    }
    if(table[clicks]!=8){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior9(){
    if(table[clicks]==9){
        document.getElementById("k9").style.backgroundColor="#2F8E3A";
        document.getElementById("k9").innerHTML=clicks+1;
        document.getElementById("k9").style.color="white";
    }
    if(table[clicks]!=9){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior10(){
    if(table[clicks]==10){
        document.getElementById("k10").style.backgroundColor="#2F8E3A";
        document.getElementById("k10").innerHTML=clicks+1;
        document.getElementById("k10").style.color="white";
    }
    if(table[clicks]!=10){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior11(){
    if(table[clicks]==11){
        document.getElementById("k11").style.backgroundColor="#2F8E3A";
        document.getElementById("k11").innerHTML=clicks+1;
        document.getElementById("k11").style.color="white";
    }
    if(table[clicks]!=11){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior12(){
    if(table[clicks]==12){
        document.getElementById("k12").style.backgroundColor="#2F8E3A";
        document.getElementById("k12").innerHTML=clicks+1;
        document.getElementById("k12").style.color="white";
    }
    if(table[clicks]!=12){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior13(){
    if(table[clicks]==13){
        document.getElementById("k13").style.backgroundColor="#2F8E3A";
        document.getElementById("k13").innerHTML=clicks+1;
        document.getElementById("k13").style.color="white";
    }
    if(table[clicks]!=13){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior14(){
    if(table[clicks]==14){
        document.getElementById("k14").style.backgroundColor="#2F8E3A";
        document.getElementById("k14").innerHTML=clicks+1;
        document.getElementById("k14").style.color="white";
    }
    if(table[clicks]!=14){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}

function guzior15(){
    if(table[clicks]==15){
        document.getElementById("k15").style.backgroundColor="#2F8E3A";
        document.getElementById("k15").innerHTML=clicks+1;
        document.getElementById("k15").style.color="white";
    }
    if(table[clicks]!=15){
        document.getElementById("caly").innerHTML="<br> <br> <br> PRZEGRAŁEŚ!";
        document.getElementById("caly").style.fontSize="80px";
        document.getElementById("caly").style.color="white";
        document.getElementById("caly").style.backgroundColor="#A4243B";
    }
    clicks+=1;
}
