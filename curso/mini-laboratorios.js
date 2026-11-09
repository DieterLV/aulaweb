const htmlExamples = {
  texto: {
    html: `<main>
  <h1>Mi primera página</h1>
  <h2>Sobre mí</h2>
  <p>Hola, estoy aprendiendo HTML.</p>
  <p>HTML organiza el contenido de una página.</p>
</main>`
  },
  secciones: {
    html: `<header>
  <h1>Mi sitio</h1>
  <nav aria-label="Principal">
    <a href="#noticias">Noticias</a>
    <a href="#acerca">Acerca de</a>
  </nav>
</header>
<main>
  <section id="noticias">
    <h2>Noticias</h2>
    <article>
      <h3>Una noticia</h3>
      <p>Este artículo tiene un tema propio.</p>
    </article>
  </section>
  <section id="acerca">
    <h2>Acerca de</h2>
    <p>Otra sección de la página.</p>
  </section>
</main>`
  },
  lista: {
    html: `<main>
  <h1>Mis lugares favoritos</h1>
  <p>Esta es una lista sin orden:</p>
  <ul>
    <li>La biblioteca</li>
    <li>El parque</li>
    <li>Mi casa</li>
  </ul>
  <p><a href="#contacto">Ir a contacto</a></p>
  <footer id="contacto">Escríbeme pronto.</footer>
</main>`
  },
  formulario: {
    html: `<main>
  <h1>Formulario de contacto</h1>
  <form>
    <label for="nombre">Tu nombre</label>
    <input id="nombre" name="nombre" type="text">

    <label for="mensaje">Tu mensaje</label>
    <textarea id="mensaje" name="mensaje"></textarea>

    <button type="button">Enviar</button>
  </form>
</main>`
  },
  accesibilidad: {
    html: `<header>
  <h1>Club de lectura</h1>
  <nav aria-label="Navegación principal">
    <a href="#libro">Libro del mes</a>
    <a href="#contacto">Contacto</a>
  </nav>
</header>
<main>
  <section id="libro">
    <h2>Libro del mes</h2>
    <figure>
      <img src="../imagenes/paisaje.svg" alt="Montañas verdes junto a un lago">
      <figcaption>Una historia para conversar.</figcaption>
    </figure>
  </section>
  <section id="contacto">
    <h2>Contacto</h2>
    <form>
      <label for="correo">Correo electrónico</label>
      <input id="correo" name="correo" type="email" required>
      <button type="submit">Enviar</button>
    </form>
  </section>
</main>
<footer><p>Club de lectura</p></footer>`
  }
};

const cssExamples = {
  colores: {
    html: `<main class="muestra">
  <p class="etiqueta">MI ESPACIO</p>
  <h1>Una tarjeta personal</h1>
  <p>Cambia el color, el tamaño del texto, el borde o el fondo.</p>
  <a href="#mas">Conoce más</a>
</main>`,
    css: `body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  background-color: #edf4f3;
  color: #263c3a;
}

.muestra {
  max-width: 420px;
  margin: 24px auto;
  padding: 24px;
  background-color: white;
  border: 2px solid #b9d8d0;
  border-radius: 12px;
}

.etiqueta {
  color: #176b68;
  font-size: 13px;
  font-weight: bold;
}

h1 {
  color: #18433f;
}

a {
  color: #176b68;
}`
  },
  centrar: {
    html: `<main class="escenario">
  <div class="caja">
    <h1>Estoy centrado</h1>
    <p>El contenedor organiza su contenido.</p>
  </div>
</main>`,
    css: `body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f3f0fa;
}

.escenario {
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
  background-color: #e5dcf4;
  border-radius: 12px;
}

.caja {
  padding: 20px;
  background-color: white;
  border: 2px solid #9278ba;
  border-radius: 10px;
  text-align: center;
}

h1 {
  color: #563b7d;
}`
  },
  columnas: {
    html: `<main class="pagina">
  <h1>Mis temas favoritos</h1>
  <div class="columnas">
    <article class="tarjeta">
      <h2>Lectura</h2>
      <p>Una historia para descubrir.</p>
    </article>
    <article class="tarjeta">
      <h2>Música</h2>
      <p>Una canción para recordar.</p>
    </article>
    <article class="tarjeta">
      <h2>Naturaleza</h2>
      <p>Un lugar para explorar.</p>
    </article>
  </div>
</main>`,
    css: `body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  color: #25334a;
  background-color: #f1f4f9;
}

.columnas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tarjeta {
  padding: 16px;
  background-color: white;
  border: 1px solid #d9e1eb;
  border-radius: 10px;
}

h2 {
  color: #315d9b;
}

@media (max-width: 560px) {
  .columnas {
    grid-template-columns: 1fr;
  }
}`
  },
  cascada: {
    html: `<main>
  <h1>La cascada de estilos</h1>
  <p id="aviso" class="aviso">Este texto tiene dos selectores en competencia.</p>
  <p class="nota">Prueba qué pasa si quitas el selector de id.</p>
</main>`,
    css: `body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
}

#aviso {
  color: #a83232;
}

.aviso {
  padding: 16px;
  color: #245c45;
  background-color: #e4f2dc;
}

.nota {
  color: #444;
}`
  },
  caja: {
    html: `<main>
  <h1>Calcula el tamaño de la caja</h1>
  <div class="caja">
    <strong>Una caja predecible</strong>
    <p>El ancho incluye contenido, padding y borde.</p>
  </div>
</main>`,
    css: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
  background-color: #f5f1e7;
}

.caja {
  width: 100%;
  max-width: 420px;
  padding: 24px;
  border: 4px solid #3448c5;
  background-color: white;
}`
  },
  adaptable: {
    html: `<main>
  <h1>Una página para cada pantalla</h1>
  <nav class="menu" aria-label="Navegación principal">
    <a href="#inicio">Inicio</a>
    <a href="#lecciones">Lecciones</a>
    <a href="#contacto">Contacto</a>
  </nav>
  <section class="tarjetas">
    <article><h2>HTML</h2><p>Estructura el contenido.</p></article>
    <article><h2>CSS</h2><p>Presenta los elementos.</p></article>
    <article><h2>Práctica</h2><p>Prueba cada cambio.</p></article>
  </section>
</main>`,
    css: `body {
  margin: 0;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px;
  background-color: #20243a;
}

.menu a {
  color: white;
  padding: 8px;
}

.menu a:hover,
.menu a:focus-visible {
  color: #20243a;
  background-color: #f0c65e;
  outline: 3px solid #e85d3f;
}

.tarjetas {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;
}

@media (max-width: 700px) {
  .tarjetas {
    grid-template-columns: 1fr;
  }
}`
  }
};

function initializeMiniLab(laboratorio) {
  const modo = laboratorio.dataset.mode;
  const ejemplos = modo === "html" ? htmlExamples : cssExamples;
  const selector = laboratorio.querySelector("[data-example]");
  const editor = laboratorio.querySelector("[data-editor]");
  const vista = laboratorio.querySelector("[data-preview]");
  const estado = laboratorio.querySelector("[data-status]");
  let temporizador;

  function actualizarVista() {
    const ejemplo = ejemplos[selector.value];
    const contenido = modo === "html" ? editor.value : ejemplo.html;
    const estilos = modo === "css" ? editor.value.replace(/<\/style/gi, "<\\/style") : "";

    vista.srcdoc = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { margin: 0; padding: 28px; color: #263746; background: #fff; font-family: Arial, sans-serif; line-height: 1.6; }
    main { max-width: 100%; }
    img { max-width: 100%; height: auto; }
    input, textarea, select, button { max-width: 100%; font: inherit; }
    ${estilos}
  </style>
</head>
<body>${contenido}</body>
</html>`;
  }

  vista.addEventListener("load", () => {
    estado.textContent = "Vista actualizada";
  });

  vista.addEventListener("error", () => {
    estado.textContent = "No se pudo actualizar la vista previa.";
  });

  function programarActualizacion() {
    estado.textContent = modo === "html"
      ? "Actualizando estructura…"
      : "Actualizando estilos…";
    window.clearTimeout(temporizador);
    temporizador = window.setTimeout(actualizarVista, 200);
  }

  function cargarEjemplo() {
    const ejemplo = ejemplos[selector.value];
    editor.value = modo === "html" ? ejemplo.html : ejemplo.css;
    actualizarVista();
  }

  selector.addEventListener("change", cargarEjemplo);
  laboratorio.querySelector("[data-reset]").addEventListener("click", () => {
    cargarEjemplo();
    estado.textContent = "Ejemplo restablecido";
  });
  editor.addEventListener("input", programarActualizacion);
  editor.addEventListener("keydown", (evento) => {
    if (evento.key !== "Tab") {
      return;
    }

    evento.preventDefault();
    const inicio = editor.selectionStart;
    const fin = editor.selectionEnd;
    editor.setRangeText("  ", inicio, fin, "end");
    programarActualizacion();
  });

  cargarEjemplo();
}

document.querySelectorAll("[data-mini-lab]").forEach(initializeMiniLab);
