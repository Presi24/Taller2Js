'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let numero1 = document.getElementById('numero1').value
numero1=parseFloat(numero1)
let numero2 = document.getElementById('numero2').value
numero2=parseFloat(numero2)
if(numero1>0 || numero2>0 )
{
    alert(` usted ingreso los numeros ${numero1} y ${numero2}`)
}
else
{
    alert(`no se ingresaron numeros positivos`)
}
}