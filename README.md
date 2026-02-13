PROYECTO MODULO 3: APLICACION DE CONSOLA.

Esta es una aplicacion de consola, hecha como proyecto final del mosulo del Bootcamp de JS Fullstack 2026.

La aplicacion cuenta con 2 funciones principales:

1. Operaciones matematias basicas: 

Como se pidio, la aplicacion cuenta con una fuincion que lelva a cabo operaciones aritmeticas basicas, para activar esta funcion se debe llamar a la funcion OperacionMatematica(), esta procedera a pedir 2 numeros y una operacion mediante prompt(). Despues de us ingreso la funcion revisa si los valores entregados son numeros y si es una operacino valida, en caso de no serlo envia el mensaje de error correspondiente, pero si son validos se usa un console.log() para mostrar la operacion que se realiza y su resultado.

2. Ratreador de progreso de juegos Pokemon:

El proyecto pedia poder trabajar con una estructura de datos y usarlo para mostrar el entendimiento de la materia estudiada como arreglos, objetos, ciclos y funciones. 

2.1. Datos

Como no se especifico que tipos de datos iba a tener la estructura, se decidio llenarla ocn informacion de los juegos principales de pokemon hasta la sexta generacion, dentro de la estructura cada juego es un objeto con las siguientes proppiedades:

Titulo: el nombre del juego.

Medallas: el numero de medallas obtenidas hasta el momento en la partida (para simplificarlo, se consideran solo las primeras 8 medallas en los juegos de Johto, y no se contaron los juegos de la VII generacion en adelante).

Campeon: un booleano para identificar si el campeon/a ya a ha sido derrotado.

Capturas: el numero de pokemon capturados hasta el momento en la partida (se considera una captura nueva un nuevo registro en la pokedex, por lo que pokemon repetidos no cuentan, pero si evoluciones e intercambios)

Pokedex: cantidad total de pokemon diferentes disponibles en el juego.

Generacion: a que generacion pertenece el juego. 

Region: en que region ocurre el juego.

Tipo: que tipo de juego es

2.2 Funciones

Se puieden interactuar con la estructura usando las siguientes funciones

datosJuegos(Array): esta funcion muestra en consola la informacion para la identificacion de los juegos (titulo, generacion, region y tipo) y el total de juegos que se consideran

gymBadge(String), championWin(String) y pokemonCatch(): estas 3 funciones registran los distintos progresos, obtener medallas, derrotar al campeon/a de la liga y completar la pokedex. Cada recibe el titulo del juego en el que se logro el progreso y evalua si el progreso es valido (no se pueden tener mas de 8 medallas, se necesitan todas las medallas para llegar a la liga, el campeon aun no ha sideo derrotado, etc), imprimiendo el error correspondiente si hace falta, y si no cambia el valor del objeto correspondiente.

filtrarJuegos(String, String): el primer string corresponde al parametro que se evaluara, y el segundo es el valor. Se filtran los juegos que complen esas condiciones y si hay por lo menos 1, se guardan en la variable por defecto que reciben las funciones con aprametros Array. Solo se puede tener 1 fultro activo a la vez. Tambien muestra en la consola la lista de juegos que cumplen con los requisitos.

limpiarFiltros(): Reinicia la variable a todos los juegos.

informacionProgreso(Array): imprime en al consola un reporte de progreso de los juegos, comenzando por los objetivos completados por juegos (medallas, campeones y PokeDex).
    Despues de este se presenta la informacion de avance de las medallas (total de medallas conseguidas, procentaje de obtencion y promedio) ocn la ayuda de la funcion informacionMedallas(Array). Luego se imprime la informacion de campeones derrotados usando la funcion informacionCampeones(Array), por ultimo se consigue la informacion de progreso de la pokedex con informacionPokedex(Array).

iniciarAplicacion(): muestra un mensaje de que la aplicacion inicio correctamente y luego muestra un menu con las posibles acciones a tomar.

