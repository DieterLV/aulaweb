const ejemplos = {
  tarjeta: {
    html: `<main class="tarjeta">
  <span class="etiqueta">MI ESPACIO</span>
  <h1>Hola, soy Alex</h1>
  <p>Estoy aprendiendo a crear páginas web con HTML y CSS.</p>
  <a href="#sobre-mi">Conoce más sobre mí</a>
</main>`,
    css: `body {
  margin: 0;
  padding: 2rem;
  background-color: #edf4f3;
  font-family: Arial, sans-serif;
}

.tarjeta {
  max-width: 420px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 12px 30px #173a3518;
}

.etiqueta {
  color: #176b68;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.12em;
}

h1 {
  color: #183b3a;
}

a {
  color: #176b68;
}`
  },
  articulo: {
    html: `<article class="articulo">
  <p class="categoria">VIDA AL AIRE LIBRE</p>
  <h1>Un paseo por la montaña</h1>
  <p>Caminar al aire libre es una buena forma de descubrir nuevos lugares y disfrutar de la naturaleza.</p>
  <a href="#consejos">Leer los consejos</a>
</article>`,
    css: `body {
  margin: 0;
  padding: 2rem;
  background-color: #f5f0e9;
  font-family: Georgia, serif;
  color: #30362f;
}

.articulo {
  max-width: 620px;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: #fffdf8;
  border-left: 6px solid #d27b45;
}

.categoria {
  color: #a5532c;
  font-family: Arial, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
}

h1 {
  font-size: 2.2rem;
}

a {
  color: #a5532c;
}`
  },
  columnas: {
    html: `<main class="pagina">
  <h1>Mis temas favoritos</h1>
  <div class="columnas">
    <article class="tarjeta">
      <h2>Lectura</h2>
      <p>Siempre hay una historia nueva por descubrir.</p>
    </article>
    <article class="tarjeta">
      <h2>Música</h2>
      <p>Una canción puede cambiar el día.</p>
    </article>
    <article class="tarjeta">
      <h2>Naturaleza</h2>
      <p>Me gusta conocer lugares al aire libre.</p>
    </article>
  </div>
</main>`,
    css: `body {
  margin: 0;
  padding: 2rem;
  background-color: #f1f4f9;
  font-family: Arial, sans-serif;
  color: #25334a;
}

.pagina {
  max-width: 850px;
  margin: 0 auto;
}

.columnas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.tarjeta {
  padding: 1.25rem;
  background-color: white;
  border: 1px solid #d9e1eb;
  border-radius: 12px;
}

h2 {
  color: #315d9b;
}

@media (max-width: 560px) {
  .columnas {
    grid-template-columns: 1fr;
  }
}`
  }
};

const selectorEjemplo = document.querySelector("#ejemplo");
const codigoHtml = document.querySelector("#codigo-html");
const codigoCss = document.querySelector("#codigo-css");
const vistaPrevia = document.querySelector("#vista-previa");
const estadoVista = document.querySelector("#estado-vista");
const panelesEditor = document.querySelectorAll(".editor-panel");
const pestanasEditor = document.querySelectorAll(".pestana-editor");
let temporizador;

function mostrarVista() {
  const estilos = codigoCss.value.replace(/<\/style/gi, "<\\/style");
  vistaPrevia.srcdoc = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>${estilos}</style>
</head>
<body>${codigoHtml.value}</body>
</html>`;
  estadoVista.textContent = "Vista actualizada";
}

function programarActualizacion() {
  estadoVista.textContent = "Actualizando…";
  window.clearTimeout(temporizador);
  temporizador = window.setTimeout(mostrarVista, 250);
}

function cargarEjemplo(nombre) {
  const ejemplo = ejemplos[nombre];
  if (!ejemplo) {
    return;
  }

  codigoHtml.value = ejemplo.html;
  codigoCss.value = ejemplo.css;
  mostrarVista();
}

function cambiarPestana(pestanaActiva) {
  pestanasEditor.forEach((pestana) => {
    const seleccionada = pestana === pestanaActiva;
    pestana.classList.toggle("activa", seleccionada);
    pestana.setAttribute("aria-selected", String(seleccionada));
    pestana.tabIndex = seleccionada ? 0 : -1;
  });

  panelesEditor.forEach((panel) => {
    panel.hidden = panel.id !== pestanaActiva.getAttribute("aria-controls");
  });
}

document.querySelector("#restablecer").addEventListener("click", () => {
  cargarEjemplo(selectorEjemplo.value);
  estadoVista.textContent = "Ejemplo restablecido";
});

selectorEjemplo.addEventListener("change", () => {
  cargarEjemplo(selectorEjemplo.value);
});

codigoHtml.addEventListener("input", programarActualizacion);
codigoCss.addEventListener("input", programarActualizacion);

pestanasEditor.forEach((pestana, indice) => {
  pestana.addEventListener("click", () => cambiarPestana(pestana));
  pestana.addEventListener("keydown", (evento) => {
    if (evento.key !== "ArrowLeft" && evento.key !== "ArrowRight") {
      return;
    }

    evento.preventDefault();
    const siguienteIndice = evento.key === "ArrowRight"
      ? (indice + 1) % pestanasEditor.length
      : (indice - 1 + pestanasEditor.length) % pestanasEditor.length;
    pestanasEditor[siguienteIndice].focus();
    cambiarPestana(pestanasEditor[siguienteIndice]);
  });
});

[codigoHtml, codigoCss].forEach((editor) => {
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
});

cargarEjemplo(selectorEjemplo.value);
