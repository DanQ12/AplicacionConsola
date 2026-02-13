console.log("Bienvenido a la aplicacion de consola");
console.log("*".repeat(50));
console.log("Por favor ingrese que comando desea ejecutar");

//Estrucura de datos

const pokemon =[
    {
        titulo: "Rojo/Azul",
        medallas: 6,
        campeon: false,
        capturas: 92,
        pokedex: 151,
        generacion: "I",
        region: "Kanto",
        tipo: "Original"
    },
    {
        titulo: "Amarillo",
        medallas: 5,
        campeon: false,
        capturas: 106,
        pokedex: 151,
        generacion: "I",
        region: "Kanto",
        tipo: "Mejora"
    },
    {
        titulo: "Oro/plata",
        medallas: 2,
        campeon: false,
        capturas: 35,
        pokedex: 251,
        generacion: "II",
        region: "Johto",
        tipo: "Original"
    },
    {
        titulo: "Cristal",
        medallas: 8,
        campeon: true,
        capturas: 111,
        pokedex: 251,
        generacion: "II",
        region: "Johto",
        tipo: "Mejora"
    },
    {
        titulo: "Rubi/Zafiro",
        medallas: 2,
        campeon: false,
        capturas: 33,
        pokedex: 386,
        generacion: "III",
        region: "Hoenn",
        tipo: "Original"
    },
    {
        titulo: "Esmeralda",
        medallas: 6,
        campeon: false,
        capturas: 229,
        pokedex: 386,
        generacion: "III",
        region: "Hoenn",
        tipo: "Mejora"
    },
    {
        titulo: "Rojo Fuego/Verde Hoja",
        medallas: 0,
        campeon: false,
        capturas: 28,
        pokedex: 386,
        generacion: "III",
        region: "Kanto",
        tipo: "Remake"
    },
    {
        titulo: "Diamante/Perla",
        medallas: 5,
        campeon: false,
        capturas: 72,
        pokedex: 493,
        generacion: "IV",
        region: "Sinnoh",
        tipo: "Original"
    },
    {
        titulo: "Platino",
        medallas: 5,
        campeon: false,
        capturas: 180,
        pokedex: 493,
        generacion: "IV",
        region: "Sinnoh",
        tipo: "Mejora"
    },
    {
        titulo: "Oro HeartGold/Plata SoulSilver",
        medallas: 8,
        campeon: false,
        capturas: 325,
        pokedex: 493,
        generacion: "IV",
        region: "Johto",
        tipo: "Remake"
    },
    {
        titulo: "Blanco/Negro",
        medallas: 7,
        campeon: false,
        capturas: 215,
        pokedex: 649,
        generacion: "V",
        region: "Unova",
        tipo: "Original"
    },
    {
        titulo: "Blanco 2/Negro 2",
        medallas: 0,
        campeon: false,
        capturas:10,
        pokedex: 649,
        generacion: "V",
        region: "Unova",
        tipo: "Secuela"
    },
    {
        titulo: "X/Y",
        medallas: 7,
        campeon: false,
        capturas: 133,
        pokedex: 721,
        generacion: "VI",
        region: "Kalos",
        tipo: "Original"
    },
    {
        titulo: "Omega Ruby/Alfa Zafiro",
        generacion: "VI",
        medallas: 8,
        campeon: true,
        capturas: 405,
        pokedex: 721,
        region: "Hoenn",
        tipo: "Remake"
    }
]

let datos = pokemon;

//Operaciones matematicas entre 2 numeros
function operacionMatematica(){
    let n1 = parseFloat(prompt("Ingrese primer numero"));
    let n2 = parseFloat(prompt("Ingrese segundo numero"));
    let operador = prompt("Ingrese operacion a realizar (+, -, *, /)");

    if(isNaN(n1) || isNaN(n2)){
        return console.log("ERROR: Uno de los numeros ingresados no es valido");
    }

/*    switch(operador){
        case "+":
            return console.log(`${n1} + ${n2} = ${n1 + n2}`)
        
        case "-":
            return console.log(`${n1} - ${n2} = ${n1 - n2}`)

        case "*":
            return console.log(`${n1} * ${n2} = ${n1 * n2}`)

        case "/":
            return console.log(`${n1} / ${n2} = ${n1 / n2}`)
        
        default:
            return console.log("ERROR: Operacion no valida")
    }*/

    if(["+", "-", "*", "/"].includes(operador)){
        let operacion = `${n1} ${operador} ${n2}`;
        return console.log(`${operacion} = ${eval(operacion)}`);
    }

    else{
        return console.log("ERROR: Operacion invalida");
    }
}

//Mostrar datos de juegos
function datosJuego(juegos = datos){
    console.log("INFORMACION DE LOS JUEGOS");
    console.log("*".repeat(50));
    datos.forEach(game =>{
        console.log(`Juego: ${game.titulo}, Generacion: ${game.generacion}, Region: ${game.region}, Tipo de Juego: ${game.tipo}`)
    })
    console.log("*".repeat(50))
    console.log(`Total de juegos registrados: ${datos.length}`)
}

/**Obtener una medalla en el juego
 * @param {string} nombre - tituilo del juego
 * @returns {boolean} true - si se pudo, false - si no se pudo
 */
function gymBadge(nombre){
    console.log(`Registrando nueva medalla en: ${nombre}`)
    console.log("*".repeat(50));
    let juego = pokemon.find(item => item.titulo.toLocaleLowerCase() === nombre.toLocaleLowerCase());

    if(!juego){
        console.log("ERROR: no se pudo encontrar un juego con el titulo ", nombre);
        return false;
    }

    if(juego.medallas >= 8){
        console.log("ERROR: ya tienes el numero maximo de medallas en ", juego.titulo);
        return false;
    }

    juego.medallas++
    console.log(`Ahora tienes ${juego.medallas} medallas en ${juego.titulo}`);
    return true;
}

/**Derrotar a el/la campeon/a 
 * @param {string} nombre - titulo del juego
 * @returns {boolean} true - si se pudo, false - si no se pudo 
*/
function championWin(nombre){
    console.log("Registrandote como campeon en: ", nombre);
    console.log("*".repeat(50));

    let juego = pokemon.find(item => item.titulo.toLocaleLowerCase() === nombre.toLocaleLowerCase());

    if(!juego){
        console.log("ERROR: no se pudo encontrar un juego con el titulo ", nombre);
        return false;
    }

    if(juego.medallas !== 8){
        console.log("ERROR: no tienes suficientes medallas")
        return false
    }

    if(juego.campeon){
        console.log("ERROR: ya eres el/la campeon/a de este juego")
        return false;
    }

    juego.campeon = true;
    console.log("¡FELICIDADES! AHORA ERES EL/LA CAMPEON/A EN ", juego.titulo);
    return true
}

/**Nuevo pokemon capturado 
 * @param {string} nombre - titulo del juego
 * @returns {boolean} true - si se pudo, false - si no se pudo
*/
function pokemonCatch(nombre){
    console.log("Registrando nueva captura en", nombre);

    let juego = pokemon.find(item => item.titulo.toLocaleLowerCase() === nombre.toLocaleLowerCase());

    if(!juego){
        console.log("ERROR: no se pudo encontrar un juego con el titulo ", nombre);
        return false;
    }

    if(juego.capturas >= juego.pokedex){
        console.log("ERROR: ya tiene registrados todos los pokemon del juego")
        return false;
    }

    juego.capturas++;
    console.log(`Llevas ${juego.capturas} pokemon capturados de ${juego.pokedex}`);
    return true;
}

/**Filtro de juegos
 * @param {String} categoria - que categoria se filtrara (generacion, region, tipo)
 * @param {String} valor - valor que se busca
 */
function filtrarJuegos(categoria, valor){
    console.log(`Filtrando juegos con ${categoria}: ${valor}`)

    aux = pokemon.filter(item => item[categoria].toLowerCase() === valor.toLowerCase());

    if(aux.length === 0){
        console.log("ERROR: no se encontraron juegos dentro de esa categoria")
        return 
    }
    console.log("Se encontraron los siguientes juegos: ")
    aux.forEach(item => console.log(item.titulo))
    datos = aux;
    return
}

//limpiar filtros
function limpiarFiltro(){
    console.log("Limpiando los filtros")
    console.log("*".repeat(50))
    datos = pokemon;
    console.log("Los filtros han sido reiniciados, total juegos: ", datos.length);
    return
}

/**informacion de progreso de las medallas
 * @param {Array} juegos - que juegos se consideran, si no se especifican, se usa el ultimo filtro aplicado
 * @returns {Array} Array con la informacion de medallas totales, porcentaje de obtencion y promedio de medallas por juego
 */
function informacionMedallas(juegos = datos){

    let total = 0;
    juegos.forEach(game => total += game.medallas);

    let porcentaje = (total/(juegos.length * 8)) * 100;

    let promedio = total/juegos.length;

    return [total, porcentaje.toFixed(2), promedio.toFixed(2)]
}

/**informacion de progreso de campeones 
 * @param {Array} juegos -  que juegos se consideran, si no se especifican, se usa el ultimo filtro aplicado 
 * @returns {Array} Array con el total de campeones derrotedos y porcetnaje de progreso
*/
function informacionCampeon(juegos = datos){
    let titulos = juegos.filter(game => game.campeon);
    return[titulos.length, ((titulos.length/juegos.length)*100).toFixed(2)];
}

/**informacion de capturas
 * @param {Array} juegos -  que juegos se consideran, si no se especifican, se usa el ultimo filtro aplicado
 * @returns {Number} Porcentaje promedio de registros en la pokedex
*/
function informacionPokedex(juegos = datos){
    let porcentaje = 0;

    juegos.forEach(game => porcentaje += game.capturas/game.pokedex)

    return porcentaje/juegos.length;
}

//**Reporte de progreso

function datosProgreso(juegos = datos){
    console.log("REPORTE DE PROGRESO DE OBJETIVOS");
    console.log("*".repeat(50));

    juegos.forEach(game => console.log(`Juego: ${game.titulo}, Medallas: ${game.medallas}/8, Campeon: ${game.campeon?"si":"no"}, Pokedex: ${game.capturas}/${game.pokedex} (${((game.capturas/game.pokedex)*100).toFixed(2)}%)`))

    console.log("*".repeat(50));
    console.log("PROGRESO MEDALLAS");
    console.log("*".repeat(50));

    let medallas = informacionMedallas(juegos);

    console.log(`Tienes un total de ${medallas[0]}/${juegos.length *8} de las medallas de estos juegos`)
    console.log(`Eso equivale a un promedio de ${medallas[2]} por juego y un ${medallas[1]}% del total de medallas`)

    console.log("*".repeat(50));
    console.log("PROGRESO CAMPEONES");
    console.log("*".repeat(50));

    let campeones = informacionCampeon(juegos);

    console.log(`Has derrotado a ${campeones[0]}/${juegos.length} campeones, eso corresponde a un ${campeones[1]}% del total`)

    console.log("*".repeat(50));
    console.log("PROGRESO POKEDEX");
    console.log("*".repeat(50));

    let pokedex = (informacionPokedex(juegos) * 100).toFixed(2);

    console.log(`En promedio has completado un ${pokedex}% de la PokeDex en cada juego`);

    console.log("*".repeat(50));
    console.log("¡SIGUE ASI!");
    console.log("*".repeat(50));
}

function menu(){
    console.log("*".repeat(50));
    console.log("MENU PRINCIPAL - APLICACION CONSOLA")
    console.log("1. Ver datos de los juegos")
    console.log("2. Ver estadisticas de progreso")
    console.log("3. Añadir medalla de gimnasio")
    console.log("4. Añadir victoria contra campeon/a")
    console.log("5. Nuevo registro en la pokedex")
    console.log("6. Filtrar los juego")
    console.log("7. Limpiar los filtros")
    console.log("0. Salir")
}

function iniciarAplicacion(){
    console.log("LA APLICACION SE INICIO CON EXITO")
    console.log("*".repeat(50));

    menu()
}

iniciarAplicacion()