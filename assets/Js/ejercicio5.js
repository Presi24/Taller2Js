'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let numero = document.getElementById('numero1').value
numero=parseFloat(numero)
if(numero<0)
{
    alert(`la raiz cuadrada del numero ${numero} es imaginaria`)
}
else
{
let raiz = Math.sqrt(numero)
alert(`la raiz de ${numero} es ${raiz}`)
}
}