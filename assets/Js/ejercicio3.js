'use strict'
let resultado = document.getElementById('aprobar')

function aprobar()
{
let nombre = document.getElementById('nombre').value
let edad = document.getElementById('edad').value
let sexo = document.getElementById('sexo').value
edad = parseFloat (edad)
if(edad >= 18 && sexo == 1)
{
 alert(`Su nombre es ${nombre} su edad son ${edad} años y su sexo es Masculino`)
}
}