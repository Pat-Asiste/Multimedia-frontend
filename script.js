// Compatibilidad estricta para webOS antiguo
var catalogoPeliculas = [
    {
        nombre: "Terminator",
        anio: 1984,
        genero: "Acción / Ciencia ficción",
        portada: "peliculas/terminator.jpeg",
        linkMp4: "videos/terminator.mp4"
    },
    {
        nombre: "Misión Imposible",
        anio: 1996,
        genero: "Acción / Espionaje",
        portada: "peliculas/mision-imposible.jpg", // Cambiado de .webp a .jpg
        linkMp4: "videos/mision-imposible.mp4"
    },
    {
        nombre: "Matrix",
        anio: 1999,
        genero: "Acción / Ciencia ficción",
        portada: "peliculas/matrix.jpeg",
        linkMp4: "videos/matrix.mp4"
    },
    {
        nombre: "Volver al Futuro",
        anio: 1985,
        genero: "Ciencia ficción / Aventura",
        portada: "peliculas/volver-al-futuro.jpeg",
        linkMp4: "videos/volver-al-futuro.mp4"
    },
    {
        nombre: "Avengers: Endgame",
        anio: 2019,
        genero: "Acción / Sci-Fi",
        portada: "peliculas/avengers-endgame.jpeg",
        linkMp4: "videos/avengers-endgame.mp4"
    },
    {
        nombre: "La Odisea",
        anio: 1997,
        genero: "Aventura / Drama",
        portada: "peliculas/la-odisea.jpeg",
        linkMp4: "videos/la-odisea.mp4"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    var contenedorCatalogo = document.getElementById("catalogo");
    var buscador = document.getElementById("buscador");
    var sinResultados = document.getElementById("sin-resultados");

    function renderizarPeliculas(lista) {
        contenedorCatalogo.innerHTML = "";

        if (lista.length === 0) {
            sinResultados.style.display = "block";
            return;
        }

        sinResultados.style.display = "none";

        for (var i = 0; i < lista.length; i++) {
            var pelicula = lista[i];
            var article = document.createElement("article");
            article.className = "pelicula";

            article.innerHTML = 
                '<img src="' + pelicula.portada + '" alt="' + pelicula.nombre + '">' +
                '<div class="informacion">' +
                    '<h2>' + pelicula.nombre + '</h2>' +
                    '<p>' + pelicula.anio + ' · ' + pelicula.genero + '</p>' +
                    '<a class="boton" href="' + pelicula.linkMp4 + '">▶ Ver película</a>' +
                '</div>';

            contenedorCatalogo.appendChild(article);
        }
    }

    renderizarPeliculas(catalogoPeliculas);

    buscador.addEventListener("input", function () {
        var texto = buscador.value.toLowerCase().replace(/^\s+|\s+$/g, '');
        var peliculasFiltradas = [];

        for (var j = 0; j < catalogoPeliculas.length; j++) {
            if (catalogoPeliculas[j].nombre.toLowerCase().indexOf(texto) !== -1) {
                peliculasFiltradas.push(catalogoPeliculas[j]);
            }
        }

        renderizarPeliculas(peliculasFiltradas);
    });
});
