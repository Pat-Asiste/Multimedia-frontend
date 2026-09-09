// Array de objetos con los nombres capitalizados
const catalogoPeliculas = [
    {
        nombre: "Terminator",
        anio: 1984,
        genero: "Acción / Ciencia ficción",
        portada: "peliculas/terminator.jpeg",
        linkMp4: "peliculas/terminator.mp4"
    },
    {
        nombre: "Misión Imposible",
        anio: 1996,
        genero: "Acción / Espionaje",
        portada: "peliculas/mision-imposible.webp",
        linkMp4: "peliculas/mision-imposible.mp4"
    },
    {
        nombre: "Matrix",
        anio: 1999,
        genero: "Acción / Ciencia ficción",
        portada: "peliculas/matrix.jpeg",
        linkMp4: "peliculas/matrix.mp4"
    },
    {
        nombre: "Volver al Futuro",
        anio: 1985,
        genero: "Ciencia ficción / Aventura",
        portada: "peliculas/volver-al-futuro.jpeg",
        linkMp4: "peliculas/volver-al-futuro.mp4"
    },
    {
        nombre: "Avengers: Endgame",
        anio: 2019,
        genero: "Acción / Sci-Fi",
        portada: "peliculas/avengers-endgame.jpeg",
        linkMp4: "peliculas/avengers-endgame.mp4"
    },
    {
        nombre: "La Odisea",
        anio: 1997,
        genero: "Aventura / Drama",
        portada: "peliculas/la-odisea.jpeg",
        linkMp4: "peliculas/la-odisea.mp4"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedorCatalogo = document.getElementById("catalogo");
    const buscador = document.getElementById("buscador");
    const sinResultados = document.getElementById("sin-resultados");

    // Función para renderizar el catálogo en el HTML
    function renderizarPeliculas(lista) {
        contenedorCatalogo.innerHTML = "";

        if (lista.length === 0) {
            sinResultados.style.display = "block";
            return;
        }

        sinResultados.style.display = "none";

        lista.forEach(pelicula => {
            const article = document.createElement("article");
            article.classList.add("pelicula");

            article.innerHTML = `
                <img src="${pelicula.portada}" alt="${pelicula.nombre}" loading="lazy">
                <div class="informacion">
                    <h2>${pelicula.nombre}</h2>
                    <p>${pelicula.anio} · ${pelicula.genero}</p>
                    <a class="boton" href="${pelicula.linkMp4}">▶ Ver película</a>
                </div>
            `;

            contenedorCatalogo.appendChild(article);
        });
    }

    // Renderizar todas las películas al cargar
    renderizarPeliculas(catalogoPeliculas);

    // Evento para filtrar el catálogo dinámicamente
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase().trim();
        const peliculasFiltradas = catalogoPeliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(texto)
        );

        renderizarPeliculas(peliculasFiltradas);
    });
});
