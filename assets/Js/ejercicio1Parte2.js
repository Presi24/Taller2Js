'use strict'
let resultado = document.getElementById('aprobar')

function aprobar()
{
let estrato =parseInt (document.getElementById('estrato').value)
let largo =parseInt (document.getElementById('largo').value)
let ancho =parseInt (document.getElementById('ancho').value)
let alto =parseInt (document.getElementById('alto').value)
let metrosCubicos = (largo*ancho)*alto

if( estrato == 1)
{
    let valorPagar=metrosCubicos*5000
    alert(`Usted debera pagar un total de ${valorPagar}`)
}
if( estrato == 2)
{
    let valorPagar=metrosCubicos*6500
    alert(`Usted debera pagar un total de ${valorPagar}`)
}
if( estrato == 3)
{
    let valorPagar=metrosCubicos*7000
    alert(`Usted debera pagar un total de ${valorPagar}`)
}
if( estrato == 4)
{
    let valorPagar=metrosCubicos*8000
    alert(`Usted debera pagar un total de ${valorPagar}`)
}
if( estrato == 5)
{
    let valorPagar=metrosCubicos*9200
    alert(`Usted debera pagar un total de ${valorPagar}`)
}
}