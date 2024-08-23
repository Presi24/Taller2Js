'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let numero1 = document.getElementById('numero1').value
numero1=parseFloat(numero1)
let numero2 = document.getElementById('numero2').value
numero2=parseFloat(numero2) 
let suma = numero1+numero2
alert (`La suma de ${numero1} y ${numero2} es ${suma}`)
}