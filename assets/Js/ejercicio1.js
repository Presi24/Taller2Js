'use strict'
let resultado = document.getElementById('aprobar')

function aprobar()
{
let nombre = document.getElementById('nombre').value
let edad = document.getElementById('edad').value
edad = parseFloat (edad)
if(edad >= 18)
{
 alert(`Su nombre es ${nombre} y su edad ${edad}`)
}
}