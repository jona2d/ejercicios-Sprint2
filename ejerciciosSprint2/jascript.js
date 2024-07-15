// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento del cuadrado por su ID
    const cuadrado = document.getElementById('cuadrado');
    
    // Selecciona el botón por su ID
    const botonCambiarColor = document.getElementById('botonCambiarColor');

    // Lista de colores y sus nombres
    const colores = [
        { clase: 'bg-blue-300', nombre: 'Azul Claro' },
        { clase: 'bg-red-500', nombre: 'Rojo' },
    ];

    // Índice para rastrear el color actual
    let indiceColorActual = 0;

    // Agrega un event listener al botón para manejar el evento click
    botonCambiarColor.addEventListener('click', () => {
        // Cambia al siguiente color en la lista
        indiceColorActual = (indiceColorActual + 1) % colores.length;

        // Actualiza la clase y el texto del cuadrado
        cuadrado.className = `w-48 h-48 flex items-center justify-center text-white text-xl font-bold ${colores[indiceColorActual].clase}`;
        cuadrado.textContent = colores[indiceColorActual].nombre;
    });
});

// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento del cuadrado por su ID
    const cuadrado = document.getElementById('cuadrado1');
    
    // Selecciona la entrada de texto por su ID
    const entradaTexto = document.getElementById('entradaTexto');
    
    // Selecciona el botón de borrar por su ID
    const botonBorrar = document.getElementById('botonBorrar');

    // Agrega un event listener a la entrada de texto para manejar el evento input
    entradaTexto.addEventListener('input', () => {
        // Actualiza el contenido del cuadrado con el valor de la entrada de texto
        cuadrado.textContent = entradaTexto.value;
    });

    // Agrega un event listener al botón para manejar el evento click
    botonBorrar.addEventListener('click', () => {
        // Limpia el contenido del cuadrado
        cuadrado.textContent = '';
        
        // Limpia la entrada de texto
        entradaTexto.value = '';
    });
});




// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los elementos por su ID
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');
    const botonCalcular = document.getElementById('botonCalcular');
    const resultadoInput = document.getElementById('resultado');

    // Agrega un event listener al botón para manejar el evento click
    botonCalcular.addEventListener('click', () => {
        // Obtiene los valores de altura y peso
        const altura = parseFloat(alturaInput.value) / 100; // Convertir cm a metros
        const peso = parseFloat(pesoInput.value);

        // Verifica si los valores son números válidos
        if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultadoInput.value = 'Por favor, ingrese valores válidos';
            return;
        }

        // Calcula el IMC
        const imc = peso / (altura * altura);

        // Muestra el resultado en el campo de resultado
        resultadoInput.value = imc.toFixed(2);
    });
});

//ejercicio 4

let boton = document.getElementById('botonEnviar');

boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    let monto = document.getElementById('monto')
    let valorDeInput = monto.value / 500;   

    let inputDolares = document.getElementById('inputDeDolaress')

    inputDolares.value = valorDeInput.toFixed(2);  
});

//otro evento
let botonBorrar = document.getElementById('borrar')
botonBorrar.addEventListener('click',(event)=>{
    event.preventDefault();
    let inputPESOSS = document.getElementById('monto')
    let inputDolaressss = document.getElementById('inputDeDolaress')
    inputPESOSS.value = "";
    inputDolaressss.value = "";
    })

    //ejercicio 5

    function filtrarCervezas(beers,PartNameChosen,minIBU){ 
        return beers.filter(beer =>
            beer.name.toLocaleLowerCase().includes(PartNameChosen.toLocaleLowerCase())&& beer.ibu > minIBU

        )
        
    }
    const PartNameChosen = "a";
    const MINIBU = 10;
    const cervezaFiltradass = filtrarCervezas(beers,PartNameChosen,MINIBU)
    console.log(cervezaFiltradass);


    


