document.addEventListener('DOMContentLoaded',init);

function init() {
    
    console.log('ready!');
    document.getElementById('txtcantidad').focus();

    document.getElementById("txtcantidad").addEventListener('keyup',function () {
        
        var importe = this.value;
        var result =  document.getElementById("result");
        
        if (importe==0 || importe==null){            
           result.style.display='none';            
        }else{
           result.style.display='block';
        }
        
        monedas =  calcula(this.value);    
        
        console.log(monedas);
    
        var strMnac = monedas[0] + ' Pesos Moneda Nacional';
        var strPley = monedas[1] + ' Pesos Ley 18.188';
        var strParg = monedas[2] + ' Pesos Argentinos';
        var strAust = monedas[3] + ' Australes';

        document.getElementById('r1').innerText=strMnac;
        document.getElementById('r2').innerText=strPley;
        document.getElementById('r3').innerText=strParg;
        document.getElementById('r4').innerText=strAust;
    
    })

}

function calcula(importe) {

/*

1peso Conervible = 

Peso Moneda Nacional 10.000.000.000.000
Peso Ley 18.188  100.000.000.000
Peso Argentino  10.000.000
Austral    10.000

*/
var arrMonedas = [];

var mNac = importe * 10000000000000;
var pLey = importe * 100000000000;
var pArg = importe * 10000000;
var aust = importe * 10000;

arrMonedas = [mNac,pLey,pArg,aust];

return arrMonedas;

}