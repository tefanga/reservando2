var expect = chai.expect;

// se testea la funcion reservarHorario(horario)
describe('Testing de reservarHorario(horario)', function(){
	it('Cuando se reserva, el horario correspondiente se elimina',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        resto.reservarHorario("14:30");
        expect(resto.horarios.length).to.equal(2);
    })
    it('Cuando se reserva un horario inexistente el arreglo se mantiene igual',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        resto.reservarHorario("14:31");
        expect(resto.horarios.length).to.equal(3);
    })
    it('Si no se le pasa parametro a la funcion de reservarHorario el arreglo se mantiene igual',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        resto.reservarHorario("");
        expect(resto.horarios.length).to.equal(3);
    })
})

// se testea la funcion obtenerPuntuacion()
describe('Testing de obtenerPuntuacion', function(){
	it('Se comprueba que el calculo de promedio sea correcto dadas ciertas puntuaciones',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        var promedio = resto.obtenerPuntuacion();
        expect(promedio).to.equal(7.6);
    })
    it('Se comprueba que de "0" en promedio al no tener calificaciones el restaurante',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", []);
        var promedio = resto.obtenerPuntuacion();
        expect(promedio).to.equal(0);
    })
})

// se testea la funcion calificar()
describe('Testing de calificar', function(){
	it('Se comprueba que al agregar una calificacion valida esta sea agregado al arreglo de calificaciones',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        var promedio = resto.calificar(8);
        expect(resto.calificaciones.length).to.equal(6);
    })
    it('Se comprueba que al agregar una calificacion invalida no se agregue al array',function(){
        var resto = new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]);
        var promedio = resto.calificar(11);
        expect(resto.calificaciones.length).to.equal(5);
    })
})

// se testea la funcion buscarRestaurante(id) de Listado

describe('Testing de buscarRestaurante(id)', function(){
    it('Se prueba que al darle un id inexistente devuelva que no se ha encontrado ningun restaurante',function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes);

        var resultado = listado.buscarRestaurante(5);

        expect(resultado).to.equal("No se ha encontrado ningún restaurant");
    })
    it('Se prueba que al darle un id existente devuelva dicho objeto',function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes);

        var resultado = listado.buscarRestaurante(2);
        var resultado2 = new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]);

        expect(resultado).to.eql(resultado2);
    })
})

// se testea la funcion obtenerRestaurantes()
describe('Testing de obtenerRestaurantes()', function(){
    it('Se prueba que filtre correctamente de un array de 6 debe devolver 2 con los filtros y ser equivalente',function() {
        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7])
        ];
        var listado = new Listado(listadoDeRestaurantes);

        var resultado = listado.obtenerRestaurantes("Asiática", "Nueva York", "13:00", "15:30", "18:00" );
        var resultado2 = [ 
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(5, "Jolly", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7])    
        ];

        expect(resultado).to.eql(resultado2);

    });

});

// se testea los requerimientos nuevos para reservado
describe('Testing de reserva', function(){
    it('Se prueba que una reserva calcule correctamente su precio base',function() {
        // año 2018 mes 7= agosto dia 24 hora 11hs 00 minutos
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        var precioBase = reserva1.calculoPrecioBaseReserva();

        expect(precioBase).to.eql(2800);
    });

    it('Se prueba que una reserva calcule correctamente su precio final',function() {
        // año 2018 mes 7= agosto dia 27 hora 15hs 40 minutos
        var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        var precioFinal = reserva2.calculoPrecioTotalReserva();

        expect(precioFinal).to.eql(99.99999999999997);
    });

});