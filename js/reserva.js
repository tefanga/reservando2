var Reserva = function(horario, personas, precio, codDesc) {
    this.horario = horario;
    this.personas = personas;
    this.precioXPersona = precio;
    this.codigoDescuento = codDesc;
};

// calcula el precio base de la reserva
Reserva.prototype.calculoPrecioBaseReserva = function () {
    return this.personas * this.precioXPersona;
};

// calcula el precio total de la reserva aplicando descuentos y adiciones
// el calculo es el precio base + adicional - descuento
// para adicional o descuento se hace el porcentaje de cada uno sobre el valor base y eso se suma al precio base
// ejemplo -> precioBase = 300 / adicion 5% + 10% / descuento 15% + 25%
// precioFinal = 300 + (300*0.05) + (300*0.10) - (300*0.15) - (300*0.25)
Reserva.prototype.calculoPrecioTotalReserva = function() {
    return this.calculoPrecioBaseReserva() + (this.calculoPrecioBaseReserva() * this.calculoAdicionalFinDeSemana()) + (this.calculoPrecioBaseReserva() * this.calculoAdicionalHorario()) - (this.calculoPrecioBaseReserva() * this.calculoDescuentoPorGrupo()) - (this.calculoPrecioBaseReserva() * this.calculoDescuentoPorCodigo());
};

// calcula el descuento por grupo devolviendo el porcentaje para ser multiplicado
Reserva.prototype.calculoDescuentoPorGrupo = function () {
    if(this.personas > 3 && this.personas < 7){
        return 0.5;
    }
    else if(this.personas > 6 && this.personas < 9){
        return 0.10;
    }else if ( this.personas > 8){
        return 0.15;
    }
    return 0;
};

// calcula el descuento por codigo devolviendo el porcentaje para ser multiplicado
Reserva.prototype.calculoDescuentoPorCodigo = function(){
    if(this.codigoDescuento != null){
        if(this.codigoDescuento == "DES15"){
            return 0.15;
        }
        // se obtiene el % de descuento del precioBase a descontar
        else if(this.codigoDescuento == "DES200"){
            return ((100 * 200) / this.calculoPrecioBaseReserva()) / 100;
        }
        // se obtiene el % de descuento del precio x persona a descontar
        else{
            return ((100 * this.precioXPersona) / this.calculoPrecioBaseReserva()) / 100;
        }
    }
    return 0;
};

// calcula las adiciones por fin de semana
// la semana empieza en domingo con 0 y sube hasta 6
Reserva.prototype.calculoAdicionalFinDeSemana = function() {
    if(this.horario.getDay() == 5 || this.horario.getDay() == 6 || this.horario.getDay() == 0 ){
        return 0.10;
    }
    return 0;
};

// calcula las adiciones por horario
Reserva.prototype.calculoAdicionalHorario = function() {
    if(this.horario.getHours() > 12 && this.horario.getHours() < 15 || this.horario.getHours() > 19 && this.horario.getHours() < 22){
        return 0.05;
    }
    return 0;
};