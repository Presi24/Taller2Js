'use strict'
let resultado = document.getElementById('aprobar')

function aprobar()
{
let numero = document.getElementById('numero').value
numero = parseFloat (numero)
alert(`el numero que usted ingreso fue el ${numero}`)
if(numero < 0)
{
numero = numero*-1
alert (`y el valor absoluto de este numero es ${numero}`)
}
else
{
alert (`y el valor absoluto de este numero es ${numero}`)
}
}