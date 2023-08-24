function devolverPrecio(precio)
{
    return precio;
}

function devolverCantidad(cantidad)
{
    return cantidad;
}

function devolverTotal(precio,cantidad)
{
    return precio*cantidad;
}

function devolverEstado(estado)
{
    return estado;
}
function devolverImpuesto(estado)
{
    if(estado=="UT")
    {
        return 6.65;
    }
    if(estado=="NV")
    {
        return 8.00;
    }
    if(estado=="TX")
    {
        return 6.25;
    }
    if(estado=="AL")
    {
        return 4;
    }
    if(estado=="CA")
    {
        return 8.25;
    }
}

export {devolverPrecio,devolverCantidad,devolverTotal,devolverEstado,devolverImpuesto};