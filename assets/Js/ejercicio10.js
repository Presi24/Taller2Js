'use strict'
let resultado = document.getElementById('aprobar')

function aprobar()
{
let numero = document.getElementById('numero').value
numero = parseFloat(numero)
let porcentaje =(numero*5)/100
alert(`El 5% de ${numero} es ${porcentaje}`)
}