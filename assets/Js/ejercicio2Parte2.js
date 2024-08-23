'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let comensales = parseInt (document.getElementById('comensales').value)
if(comensales > 200 && comensales <= 300)
{
        let precioTotal =comensales*11000 
        alert(`el precio por persona es de $11.000, el precio total a pagar es ${precioTotal}`)
}
if( comensales > 300)
    {
        let precioTotal =comensales*9000 
        alert(`el precio por persona es de $9.000, el precio total a pagar es ${precioTotal}`)
    }
    else
    {
        let precioTotal =comensales*14000 
        alert(`el precio por persona es de $14.000, el precio total a pagar es ${precioTotal}`)
    }
}