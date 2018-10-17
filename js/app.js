var acum=0;
var oper="";
var haycoma=false;

var ceroz = document.getElementById("0");
var unoz = document.getElementById("1");
var dosz = document.getElementById("2");
var tresz = document.getElementById("3");
var cuatroz = document.getElementById("4");
var cincoz = document.getElementById("5");
var seisz = document.getElementById("6");
var sietez = document.getElementById("7");
var ochoz = document.getElementById("8");
var nuevez = document.getElementById("9");
var onz = document.getElementById("on");
var signz = document.getElementById("sign");
var raizz = document.getElementById("raiz");
var divididoz = document.getElementById("dividido");
var porz = document.getElementById("por");
var menosz = document.getElementById("menos");
var puntoz = document.getElementById("punto");
var igualz = document.getElementById("igual");
var masz = document.getElementById("mas");

ceroz.addEventListener("mousedown",function(){
            ceroz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        ceroz.addEventListener("mouseup",function(){
            ceroz.setAttribute("style","transform:scale(1,1)")
        })

unoz.addEventListener("mousedown",function(){
            unoz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        unoz.addEventListener("mouseup",function(){
            unoz.setAttribute("style","transform:scale(1,1)")
        })

dosz.addEventListener("mousedown",function(){
            dosz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        dosz.addEventListener("mouseup",function(){
            dosz.setAttribute("style","transform:scale(1,1)")
        })

tresz.addEventListener("mousedown",function(){
            tresz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        tresz.addEventListener("mouseup",function(){
            tresz.setAttribute("style","transform:scale(1,1)")
        })

cuatroz.addEventListener("mousedown",function(){
            cuatroz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cuatroz.addEventListener("mouseup",function(){
            cuatroz.setAttribute("style","transform:scale(1,1)")
        })

cincoz.addEventListener("mousedown",function(){
            cincoz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        cincoz.addEventListener("mouseup",function(){
            cincoz.setAttribute("style","transform:scale(1,1)")
        })

seisz.addEventListener("mousedown",function(){
            seisz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        seisz.addEventListener("mouseup",function(){
            seisz.setAttribute("style","transform:scale(1,1)")
        })

sietez.addEventListener("mousedown",function(){
            sietez.setAttribute("style","transform:scale(0.85,0.85)")
        })
        sietez.addEventListener("mouseup",function(){
            sietez.setAttribute("style","transform:scale(1,1)")
        })

ochoz.addEventListener("mousedown",function(){
            ochoz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        ochoz.addEventListener("mouseup",function(){
            ochoz.setAttribute("style","transform:scale(1,1)")
        })

nuevez.addEventListener("mousedown",function(){
            nuevez.setAttribute("style","transform:scale(0.85,0.85)")
        })
        nuevez.addEventListener("mouseup",function(){
            nuevez.setAttribute("style","transform:scale(1,1)")
        })

onz.addEventListener("mousedown",function(){
            onz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        onz.addEventListener("mouseup",function(){
            onz.setAttribute("style","transform:scale(1,1)")
        })

signz.addEventListener("mousedown",function(){
            signz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        signz.addEventListener("mouseup",function(){
            signz.setAttribute("style","transform:scale(1,1)")
        })

raizz.addEventListener("mousedown",function(){
            raizz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        raizz.addEventListener("mouseup",function(){
            raizz.setAttribute("style","transform:scale(1,1)")
        })

divididoz.addEventListener("mousedown",function(){
            divididoz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        divididoz.addEventListener("mouseup",function(){
            divididoz.setAttribute("style","transform:scale(1,1)")
        })

porz.addEventListener("mousedown",function(){
            porz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        porz.addEventListener("mouseup",function(){
            porz.setAttribute("style","transform:scale(1,1)")
        })

menosz.addEventListener("mousedown",function(){
            menosz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        menosz.addEventListener("mouseup",function(){
            menosz.setAttribute("style","transform:scale(1,1)")
        })

puntoz.addEventListener("mousedown",function(){
            puntoz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        puntoz.addEventListener("mouseup",function(){
            puntoz.setAttribute("style","transform:scale(1,1)")
        })

igualz.addEventListener("mousedown",function(){
            igualz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        igualz.addEventListener("mouseup",function(){
            igualz.setAttribute("style","transform:scale(1,1)")
        })

masz.addEventListener("mousedown",function(){
            masz.setAttribute("style","transform:scale(0.85,0.85)")
        })
        masz.addEventListener("mouseup",function(){
            masz.setAttribute("style","transform:scale(1,1)")
        })

function uno()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";

  }

}
function dos()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";

  }

}
function tres()
{

  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";

  }

}
function cuatro()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";

  }

}
function cinco()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";

  }

}
function seis()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";

  }

}
function siete()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";

  }

}
function ocho()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";

  }
}

function nueve()
{
  if(document.getElementById("display").innerHTML == 0){
    document.getElementById("display").innerHTML =""
  }
  if(document.getElementById("display").innerHTML.length < 8){
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";

  }
}

function cero()
{
 if(document.getElementById("display").innerHTML==0){

 }else{
   if(document.getElementById("display").innerHTML.length < 8){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";

   }
 }

}
function coma()
{
 if (!haycoma)
 {
   if (document.getElementById("display").innerHTML=="")
    document.getElementById("display").innerHTML="0";
    document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+".";
    haycoma=true ;

 }
}
function c(){
 document.getElementById("display").innerHTML="0";
 haycoma=false;
 acum = 0;
}
function masmenos()
{
 document.getElementById("display").innerHTML=(-1*(parseFloat(document.getElementById("display").innerHTML)));
}


function mas(){
  igual();
  acum=parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML="";
  oper="+";
  haycoma=false;
 }

function menos(){
 igual();
 acum=parseFloat(document.getElementById("display").innerHTML);
 document.getElementById("display").innerHTML="";
 oper="-";
 haycoma=false;
}

function por(){
 if(acum !==0){igual();}
 acum=parseFloat(document.getElementById("display").innerHTML);
 document.getElementById("display").innerHTML="";
 oper="*";
 haycoma=false;
}

function entre(){
  if(acum !==0){igual();}
  acum=parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML="";
  oper="/";
  haycoma=false;
}

function raiz(){

  var r = Math.sqrt(parseFloat(document.getElementById("display").innerHTML));
  var rs = r.toString().substring(0, 8);
  document.getElementById("display").innerHTML = rs;
}

function igual(){

 var r = 0;
 switch (oper)

 {
  case "+":
        var r = acum+parseFloat(document.getElementById("display").innerHTML);
        var rs = r.toString().substring(0, 8);
        document.getElementById("display").innerHTML = rs;
        acum=0;
   break;
  case "-":
        var r =acum-parseFloat(document.getElementById("display").innerHTML);
        var rs = r.toString().substring(0, 8);
        document.getElementById("display").innerHTML = rs;
        acum=0;
   break;
  case "*":
        var r =acum*parseFloat(document.getElementById("display").innerHTML);
        var rs = r.toString().substring(0, 8);
        document.getElementById("display").innerHTML = rs;
        acum=0;
   break;
  case "/":
        var r = acum/parseFloat(document.getElementById("display").innerHTML);
        var rs = r.toString().substring(0, 8);
        document.getElementById("display").innerHTML = rs;
        acum=0;
 }
}
