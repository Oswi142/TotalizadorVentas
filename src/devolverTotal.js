function devolverPrecio(precio)
{
    return precio;
}

function devolverCantidad(cantidad)
{
    return cantidad;
}

function devolverTotal(precio,cantidad,estado)
{
    let total=0;
    if(estado=="AL")
    {
        total=(precio*cantidad)*1.4;
    }
    if(estado=="TX")
    {
        total=(precio*cantidad)*1.625;
    }
    if(estado=="CA")
    {
        total=(precio*cantidad)*1.825;
    }
    return total;
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
        return 4.00;
    }
    if(estado=="CA")
    {
        return 8.25;
    }
}

export {devolverPrecio,devolverCantidad,devolverTotal,devolverEstado,devolverImpuesto};