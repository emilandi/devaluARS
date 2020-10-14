
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
        
        //importe
        monedas = calcula(this.value);    
        
        //conversion
        var mNac = monedas[0];
        var pLey = monedas[1];
        var pArg = monedas[2];
        var aust = monedas[3]; 

        //formateo valores monedas 
        var mNacValue = accounting.formatMoney(mNac, "", 2, ".", ","); 
        var pLeyValue = accounting.formatMoney(pLey, "", 2, ".", ","); 
        var pArgValue = accounting.formatMoney(pArg, "", 2, ".", ","); 
        var austValue = accounting.formatMoney(aust, "", 2, ".", ","); 
                
        //formateo monedas notacion miles/millones/trillones
        var mNacNot = numeral(mNac).format('$0.00a');
        var pLeyNot  = numeral(pLey).format('$0.00a');
        var pArgNot = numeral(pArg).format('$0.00a');
        var austNot = numeral(aust).format('$0.00a');            
        console.log(mNacNot)

        //string mensaje salida
        // var strMnac = mNacValue + ' Pesos Moneda Nacional (1881 - 1969)';        
        // var strPley = pLeyValue + ' Pesos Ley 18.188 (1970 - 1983)';
        // var strParg = pArgValue + ' Pesos Argentinos (1983 - 1985)';
        // var strAust = austValue + ' Australes (1985 - 1991)';       
        
        var strMnac = mNacValue;
        var strPley = pLeyValue;
        var strParg = pArgValue;
        var strAust = austValue;    
        

        //mostrar
        document.getElementById('r1').innerText=strMnac;
        document.getElementById('r2').innerText=strPley;
        document.getElementById('r3').innerText=strParg;
        document.getElementById('r4').innerText=strAust;
    
    })


    $('div.billetes a ').click(function(event) {        
        event.preventDefault();                        
        $(this).siblings('.desc').fadeToggle('fast');
    });


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