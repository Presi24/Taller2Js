'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let kilo = parseInt (document.getElementById('kilo').value)
let tipo = document.getElementById('tipo').value
let tamaño = parseInt (document.getElementById('tamaño').value)
let precioKilo = 2000

if(tipo == "A")
{
    if(tamaño==1)
    {
    let precio = precioKilo + 2000 * kilo
    alert(`Debera pagar ${precio}`)
    }
    if(tamaño==2)
    {
    let precio = precioKilo + 1000 * kilo
    alert(`Debera pagar ${precio}`)
    }
}
if(tipo == "B")
    {
        if(tamaño==1)
        {
        let precio = precioKilo + 500 * kilo
        alert(`Debera pagar ${precio}`)
        }
        if(tamaño==2)
        {
        let precio = precioKilo + 900 * kilo
        alert(`Debera pagar ${precio}`)
        }
    }
}