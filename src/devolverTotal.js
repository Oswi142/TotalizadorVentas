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
    if(estado=="UT")
    {
        total=(precio*cantidad)*1.665;
    }
    if(estado=="NV")
    {
        total=(precio*cantidad)*1.8;
    }
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

function devolverImpuesto(estado) {
    switch (estado) {
        case "UT":
            return 6.65;
        case "NV":
            return 8.00;
        case "TX":
            return 6.25;
        case "AL":
            return 4.00;
        case "CA":
            return 8.25;
        default:
            return 0;
    }
}

export {devolverPrecio,devolverCantidad,devolverTotal,devolverEstado,devolverImpuesto};