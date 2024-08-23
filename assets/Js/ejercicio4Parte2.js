'use strict'
let resultado = document.getElementById('aprobar')
function aprobar()
{
let alumnos = parseInt (document.getElementById('alumnos').value)
if(alumnos >= 100 )
{
        let precioTotal =alumnos*6500
        alert(`el precio por alumno es de $6.500, el precio total a pagar es ${precioTotal}`)
}
if(alumnos >= 50 && alumnos<=99 )
    {
            let precioTotal =alumnos*7000
            alert(`el precio por alumno es de $7.000, el precio total a pagar es ${precioTotal}`)
    }
    if(alumnos >= 30 && alumnos<=49 )
        {
                let precioTotal =alumnos*9500
                alert(`el precio por alumno es de $9.500, el precio total a pagar es ${precioTotal}`)
        }
    else
    {
        let precioTotal = 1000000 / alumnos 
        alert(`el precio total a pagar es ${precioTotal}`)
    }
}