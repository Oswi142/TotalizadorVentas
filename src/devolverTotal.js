function devolverPrecio(precio)
{
    return precio;
}

function devolverCantidad(cantidad)
{
    return cantidad;
}

function devolverPrecioNeto(precio,cantidad)
{
    return precio*cantidad;
}

function devolverTotal(precio,cantidad,estado)
{
    let total=0;
    if(estado=="UT")
    {
        total=(precio*cantidad)*1.0665;
    }
    if(estado=="NV")
    {
        total=(precio*cantidad)*1.08;
    }
    if(estado=="AL")
    {
        total=(precio*cantidad)*1.04;
    }
    if(estado=="TX")
    {
        total=(precio*cantidad)*1.0625;
    }
    if(estado=="CA")
    {
        total=(precio*cantidad)*1.0825;
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

function devolverTotalDef(precio,cantidad,estado)
{
    let total=0;
    total=devolverTotal(precio,cantidad,estado)
    if (total >= 1000 && total <= 2999) {
        total = total * 0.97;
    } else if (total >= 3000 && total <= 6999) {
        total = total * 0.95;
    } else if (total >= 7000 && total <= 9999) {
        total = total * 0.93;
    } else if (total >= 10000 && total <= 29999) {
        total = total * 0.90;
    } else if (total >= 30000) {
        total = total * 0.85;
    }
    return total;
}

function devolverDescuento(precio,cantidad,estado)
{
    let imp=0;
    let total=0;
    total=devolverTotal(precio,cantidad,estado)
    console.log(total+" total");
    if (total >= 1000 && total <= 2999) {
        imp=3;
    } else if (total >= 3000 && total <= 6999) {
        imp=5;
    } else if (total >= 7000 && total <= 9999) {
        imp=7;
    } else if (total >= 10000 && total <= 29999) {
        imp=10;
    } else if (total >= 30000) {
        imp=15;
    }
    return imp;
}

export {devolverPrecio,devolverCantidad,devolverTotal,devolverEstado,devolverImpuesto,devolverTotalDef,devolverPrecioNeto,devolverDescuento};