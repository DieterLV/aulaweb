const exerciseSets = {
  html: [
    {
      id: "html-texto",
      title: "Una página sobre ti",
      prompt: "Crea una página corta de presentación. Organiza el contenido usando títulos y una lista.",
      requirements: [
        "Incluye un título principal con h1.",
        "Incluye al menos un párrafo con p.",
        "Crea una lista ul con al menos dos elementos li."
      ],
      hint: "Empieza con <h1>Mi nombre</h1>, luego escribe un <p> y agrupa dos <li> dentro de <ul>.",
      html: "<main>\n  <h1>Mi primera página</h1>\n  <p>Estoy aprendiendo HTML.</p>\n</main>",
      solutionExplanation: "Usamos h1 para el tema principal, p para el texto y ul con li para una lista sin orden.",
      solutionHtml: "<main>\n  <h1>Sobre mí</h1>\n  <p>Me gusta aprender y crear cosas nuevas.</p>\n  <h2>Mis intereses</h2>\n  <ul>\n    <li>Lectura</li>\n    <li>Música</li>\n  </ul>\n</main>",
      solutionCss: "",
      check: ({ htmlDocument }) => [
        { label: "Hay un título principal h1.", passed: htmlDocument.querySelector("h1") !== null },
        { label: "Hay al menos un párrafo p.", passed: htmlDocument.querySelector("p") !== null },
        { label: "Hay una lista ul con dos o más elementos li.", passed: htmlDocument.querySelectorAll("ul li").length >= 2 }
      ]
    },
    {
      id: "html-secciones",
      title: "Navegación y secciones",
      prompt: "Crea una navegación con un enlace interno a una sección y coloca un artículo dentro de esa sección.",
      requirements: [
        "Incluye nav con un enlace que empiece con #.",
        "El destino del enlace existe como id de una sección.",
        "La sección contiene un article con un título."
      ],
      hint: "Haz que href=\"#noticias\" coincida con id=\"noticias\". El article debe quedar dentro de section.",
      html: "<header>\n  <h1>Mi sitio</h1>\n  <nav aria-label=\"Principal\">\n    <a href=\"#noticias\">Noticias</a>\n  </nav>\n</header>\n<main>\n  <section id=\"noticias\">\n    <h2>Noticias</h2>\n    <p>Contenido de la sección.</p>\n  </section>\n</main>",
      solutionExplanation: "El enlace de navegación apunta al id de la sección. El artículo representa una pieza de contenido independiente.",
      solutionHtml: "<header>\n  <h1>Mi sitio</h1>\n  <nav aria-label=\"Principal\"><a href=\"#noticias\">Noticias</a></nav>\n</header>\n<main>\n  <section id=\"noticias\">\n    <h2>Noticias</h2>\n    <article>\n      <h3>La biblioteca abre el sábado</h3>\n      <p>Este artículo cuenta una noticia.</p>\n    </article>\n  </section>\n</main>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const links = [...htmlDocument.querySelectorAll("nav a[href^='#']")];
        const hasDestination = links.some((link) => htmlDocument.getElementById(link.getAttribute("href").slice(1)));
        return [
          { label: "Hay un nav con un enlace interno.", passed: links.length > 0 },
          { label: "El enlace conduce a un elemento que tiene el mismo id.", passed: hasDestination },
          { label: "Una section contiene un article con título.", passed: [...htmlDocument.querySelectorAll("section article")].some((article) => article.querySelector("h2, h3, h4, h5, h6")) }
        ];
      }
    },
    {
      id: "html-formulario",
      title: "Formulario de contacto",
      prompt: "Construye un formulario con un campo para el nombre, otro para el correo y un botón para enviar.",
      requirements: [
        "Los campos están dentro de form.",
        "Un label está asociado a un campo mediante for e id.",
        "Hay un campo de correo electrónico y un botón de envío."
      ],
      hint: "Relaciona for=\"correo\" con id=\"correo\". El campo usa type=\"email\" y el botón type=\"submit\".",
      html: "<form>\n  <label for=\"nombre\">Nombre</label>\n  <input id=\"nombre\" name=\"nombre\" type=\"text\">\n\n  <label for=\"correo\">Correo</label>\n  <input id=\"correo\" name=\"correo\" type=\"email\" required>\n</form>",
      solutionExplanation: "Cada label identifica su control. El type email permite al navegador reconocer el tipo de dato y submit indica el botón de envío.",
      solutionHtml: "<form>\n  <label for=\"nombre\">Nombre</label>\n  <input id=\"nombre\" name=\"nombre\" type=\"text\" required>\n\n  <label for=\"correo\">Correo electrónico</label>\n  <input id=\"correo\" name=\"correo\" type=\"email\" required>\n\n  <button type=\"submit\">Enviar mensaje</button>\n</form>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const labels = [...htmlDocument.querySelectorAll("form label[for]")];
        const associatedLabel = labels.some((label) => htmlDocument.getElementById(label.htmlFor)?.closest("form"));
        return [
          { label: "Los campos están agrupados dentro de form.", passed: htmlDocument.querySelector("form input, form textarea") !== null },
          { label: "Al menos un label está asociado correctamente.", passed: associatedLabel },
          { label: "Hay un campo type=email y un botón type=submit.", passed: htmlDocument.querySelector("form input[type='email']") !== null && htmlDocument.querySelector("form button[type='submit'], form input[type='submit']") !== null }
        ];
      }
    },
    {
      id: "html-imagen",
      title: "Cuenta una historia con una imagen",
      prompt: "Añade una imagen a una página y acompáñala con un texto alternativo y un pie de imagen.",
      requirements: [
        "La imagen tiene un atributo src y un texto alt descriptivo.",
        "La imagen está dentro de figure.",
        "figure contiene figcaption con una descripción."
      ],
      hint: "Usa <figure><img src=\"...\" alt=\"...\"> <figcaption>...</figcaption></figure>. El texto alt describe la imagen.",
      html: "<main>\n  <h1>Un paisaje para recordar</h1>\n  <figure>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\">\n    <figcaption>Una tarde en la montaña.</figcaption>\n  </figure>\n</main>",
      solutionExplanation: "La etiqueta img muestra la imagen y su texto alt permite comprenderla si no se ve. figure y figcaption agrupan la imagen con su pie.",
      solutionHtml: "<main>\n  <h1>Un paisaje para recordar</h1>\n  <figure>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\">\n    <figcaption>Una tarde en la montaña.</figcaption>\n  </figure>\n</main>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const image = htmlDocument.querySelector("img[src][alt]");
        return [
          { label: "La imagen tiene src y un texto alt descriptivo.", passed: Boolean(image?.getAttribute("alt").trim()) },
          { label: "La imagen está dentro de figure.", passed: htmlDocument.querySelector("figure img") !== null },
          { label: "figure contiene un pie de imagen figcaption.", passed: htmlDocument.querySelector("figure figcaption") !== null }
        ];
      }
    },
    {
      id: "html-tabla",
      title: "Organiza un horario en una tabla",
      prompt: "Crea una tabla sencilla para mostrar actividades de dos días. Incluye un título y encabezados para sus columnas.",
      requirements: [
        "La tabla tiene un caption que explica su contenido.",
        "La tabla usa encabezados th dentro de thead.",
        "tbody incluye al menos dos filas de actividades."
      ],
      hint: "Organiza la tabla con caption, thead y tbody. Cada fila usa tr y las celdas de encabezado usan th.",
      html: "<table>\n  <caption>Mi horario de aprendizaje</caption>\n  <thead>\n    <tr><th scope=\"col\">Día</th><th scope=\"col\">Actividad</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Lunes</td><td>Practicar HTML</td></tr>\n  </tbody>\n</table>",
      solutionExplanation: "caption describe la tabla, thead agrupa sus encabezados y tbody contiene las filas con los datos.",
      solutionHtml: "<table>\n  <caption>Mi horario de aprendizaje</caption>\n  <thead>\n    <tr><th scope=\"col\">Día</th><th scope=\"col\">Actividad</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Lunes</td><td>Practicar HTML</td></tr>\n    <tr><td>Miércoles</td><td>Practicar CSS</td></tr>\n  </tbody>\n</table>",
      solutionCss: "",
      check: ({ htmlDocument }) => [
        { label: "La tabla incluye un caption descriptivo.", passed: htmlDocument.querySelector("table caption") !== null },
        { label: "Hay encabezados th dentro de thead.", passed: htmlDocument.querySelector("table thead th") !== null },
        { label: "tbody contiene dos o más filas.", passed: htmlDocument.querySelectorAll("table tbody tr").length >= 2 }
      ]
    },
    {
      id: "html-estructura",
      title: "Arma una página con secciones claras",
      prompt: "Organiza una página informativa con encabezado, navegación, contenido principal, una sección identificable y pie de página.",
      requirements: [
        "La página usa header, nav, main y footer.",
        "La navegación enlaza a una sección que existe.",
        "La sección tiene un título y un párrafo."
      ],
      hint: "Crea <section id=\"contacto\"> y enlázala desde nav con href=\"#contacto\".",
      html: "<header>\n  <h1>Club de lectura</h1>\n  <nav><a href=\"#contacto\">Contacto</a></nav>\n</header>\n<main>\n  <section id=\"contacto\">\n    <h2>Nos reunimos cada semana</h2>\n    <p>Ven a compartir tu próxima lectura.</p>\n  </section>\n</main>\n<footer><p>Club de lectura · 2026</p></footer>",
      solutionExplanation: "Las etiquetas semánticas separan las partes de la página. El enlace interno permite saltar directamente a la sección de contacto.",
      solutionHtml: "<header>\n  <h1>Club de lectura</h1>\n  <nav aria-label=\"Principal\"><a href=\"#contacto\">Contacto</a></nav>\n</header>\n<main>\n  <section id=\"contacto\">\n    <h2>Nos reunimos cada semana</h2>\n    <p>Ven a compartir tu próxima lectura.</p>\n  </section>\n</main>\n<footer><p>Club de lectura · 2026</p></footer>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const links = [...htmlDocument.querySelectorAll("nav a[href^='#']")];
        const hasDestination = links.some((link) => htmlDocument.getElementById(link.getAttribute("href").slice(1)));
        return [
          { label: "La página tiene header, nav, main y footer.", passed: ["header", "nav", "main", "footer"].every((tag) => htmlDocument.querySelector(tag) !== null) },
          { label: "La navegación apunta a una sección existente.", passed: hasDestination && htmlDocument.querySelector("main section") !== null },
          { label: "La sección contiene un título y un párrafo.", passed: [...htmlDocument.querySelectorAll("main section")].some((section) => section.querySelector("h2, h3") && section.querySelector("p")) }
        ];
      }
    },
    {
      id: "html-accesibilidad",
      title: "Haz una página más accesible",
      prompt: "Mejora la página para que las imágenes, la navegación y el formulario tengan nombres claros y relaciones correctas.",
      requirements: [
        "La navegación tiene un nombre accesible con aria-label.",
        "La imagen informativa tiene un texto alt descriptivo.",
        "El label del correo está asociado al campo por for e id."
      ],
      hint: "Añade aria-label al nav, describe la imagen con alt y haz coincidir for=\"correo\" con id=\"correo\".",
      html: "<header>\n  <h1>Huerto escolar</h1>\n  <nav>\n    <a href=\"#proyecto\">El proyecto</a>\n  </nav>\n</header>\n<main>\n  <section id=\"proyecto\">\n    <h2>Cultivamos juntos</h2>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='seagreen'/%3E%3C/svg%3E\">\n    <p>Aprendemos a cuidar las plantas.</p>\n  </section>\n  <form>\n    <label>Tu correo</label>\n    <input id=\"correo\" name=\"correo\" type=\"email\">\n  </form>\n</main>",
      solutionExplanation: "aria-label da un nombre a la navegación. alt comunica el propósito de la imagen. Un label conectado con for e id identifica el campo del formulario.",
      solutionHtml: "<header>\n  <h1>Huerto escolar</h1>\n  <nav aria-label=\"Navegación principal\">\n    <a href=\"#proyecto\">El proyecto</a>\n  </nav>\n</header>\n<main>\n  <section id=\"proyecto\">\n    <h2>Cultivamos juntos</h2>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Plantas jóvenes creciendo en el huerto escolar\">\n    <p>Aprendemos a cuidar las plantas.</p>\n  </section>\n  <form>\n    <label for=\"correo\">Tu correo</label>\n    <input id=\"correo\" name=\"correo\" type=\"email\" required>\n  </form>\n</main>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const label = htmlDocument.querySelector("form label[for='correo']");
        return [
          { label: "nav tiene un nombre accesible con aria-label.", passed: Boolean(htmlDocument.querySelector("nav[aria-label]")?.getAttribute("aria-label").trim()) },
          { label: "La imagen tiene un texto alternativo descriptivo.", passed: Boolean(htmlDocument.querySelector("img[src][alt]")?.getAttribute("alt").trim()) },
          { label: "El label está asociado al campo de correo.", passed: Boolean(label && htmlDocument.querySelector("form input#correo[type='email']")) }
        ];
      }
    },
    {
      id: "html-formulario-validado",
      title: "Valida una inscripción",
      prompt: "Construye un formulario accesible para inscribirse a un taller. Agrupa los datos y utiliza validación HTML nativa.",
      requirements: [
        "El formulario agrupa sus opciones con fieldset y legend.",
        "El correo tiene label asociado, type email y required.",
        "El campo de edad establece límites con min y max."
      ],
      hint: "Usa fieldset y legend. Para el correo, combina for/id con type=\"email\" y required; en edad, añade min y max.",
      html: "<form>\n  <fieldset>\n    <legend>Inscripción al taller</legend>\n    <label>Correo electrónico</label>\n    <input id=\"correo\" name=\"correo\" type=\"email\">\n    <label for=\"edad\">Edad</label>\n    <input id=\"edad\" name=\"edad\" type=\"number\">\n    <button type=\"submit\">Inscribirme</button>\n  </fieldset>\n</form>",
      solutionExplanation: "fieldset y legend agrupan y nombran controles relacionados. type, required, min y max permiten que el navegador aplique validación básica sin JavaScript.",
      solutionHtml: "<form>\n  <fieldset>\n    <legend>Inscripción al taller</legend>\n    <label for=\"correo\">Correo electrónico</label>\n    <input id=\"correo\" name=\"correo\" type=\"email\" required>\n    <label for=\"edad\">Edad</label>\n    <input id=\"edad\" name=\"edad\" type=\"number\" min=\"12\" max=\"99\" required>\n    <button type=\"submit\">Inscribirme</button>\n  </fieldset>\n</form>",
      solutionCss: "",
      check: ({ htmlDocument }) => {
        const email = htmlDocument.querySelector("form input#correo[type='email']");
        const age = htmlDocument.querySelector("form input#edad[type='number']");
        const label = htmlDocument.querySelector("form label[for='correo']");
        return [
          { label: "El formulario contiene fieldset con legend.", passed: htmlDocument.querySelector("form fieldset legend") !== null },
          { label: "El correo tiene label asociado, type=email y required.", passed: Boolean(email?.required && label && label.htmlFor === email.id) },
          { label: "La edad tiene límites min y max.", passed: Boolean(age?.hasAttribute("min") && age?.hasAttribute("max")) }
        ];
      }
    },
    {
      id: "html-tabla-accesible",
      title: "Aclara los encabezados de una tabla",
      prompt: "Repara una tabla de resultados: agrega un título y especifica qué encabezados describen columnas y cuáles identifican filas.",
      requirements: [
        "La tabla tiene un caption descriptivo.",
        "Los encabezados de columna tienen scope=\"col\".",
        "Los encabezados de fila tienen scope=\"row\"."
      ],
      hint: "Pon <caption> antes de thead. En los th usa scope=\"col\" para Día y scope=\"row\" para cada nombre.",
      html: "<table>\n  <thead>\n    <tr><th>Día</th><th>Actividad</th></tr>\n  </thead>\n  <tbody>\n    <tr><th>Lunes</th><td>HTML</td></tr>\n    <tr><th>Miércoles</th><td>CSS</td></tr>\n  </tbody>\n</table>",
      solutionExplanation: "caption nombra la tabla. scope=\"col\" asocia un encabezado con su columna, y scope=\"row\" con su fila, lo que ayuda a interpretar los datos.",
      solutionHtml: "<table>\n  <caption>Actividades del taller</caption>\n  <thead>\n    <tr><th scope=\"col\">Día</th><th scope=\"col\">Actividad</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope=\"row\">Lunes</th><td>HTML</td></tr>\n    <tr><th scope=\"row\">Miércoles</th><td>CSS</td></tr>\n  </tbody>\n</table>",
      solutionCss: "",
      check: ({ htmlDocument }) => [
        { label: "La tabla tiene un caption descriptivo.", passed: htmlDocument.querySelector("table caption") !== null },
        { label: "Los encabezados de thead especifican scope=col.", passed: htmlDocument.querySelectorAll("table thead th[scope='col']").length >= 2 },
        { label: "Los encabezados de fila especifican scope=row.", passed: htmlDocument.querySelectorAll("table tbody th[scope='row']").length >= 2 }
      ]
    },
    {
      id: "html-multimedia",
      title: "Añade audio y video con controles",
      prompt: "Completa una página de medios para que las personas puedan controlar la reproducción y encontrar subtítulos en el video.",
      requirements: [
        "El audio tiene controles y un nombre accesible.",
        "El video tiene controles y un nombre accesible.",
        "El video ofrece una pista de subtítulos con kind=\"captions\"."
      ],
      hint: "Añade controls y aria-label a audio y video. Dentro del video incluye <track kind=\"captions\" srclang=\"es\" label=\"Español\">.",
      html: "<main>\n  <h1>Sonidos del huerto</h1>\n  <audio>\n    <source src=\"sonidos-huerto.mp3\" type=\"audio/mpeg\">\n  </audio>\n  <h2>Cómo plantar una semilla</h2>\n  <video>\n    <source src=\"plantar-semilla.mp4\" type=\"video/mp4\">\n  </video>\n</main>",
      solutionExplanation: "Los controles nativos permiten pausar y ajustar la reproducción. El texto alternativo accesible nombra cada reproductor, y track ofrece subtítulos seleccionables.",
      solutionHtml: "<main>\n  <h1>Sonidos del huerto</h1>\n  <audio controls aria-label=\"Audio: sonidos del huerto\">\n    <source src=\"sonidos-huerto.mp3\" type=\"audio/mpeg\">\n  </audio>\n  <h2>Cómo plantar una semilla</h2>\n  <video controls aria-label=\"Video: cómo plantar una semilla\">\n    <source src=\"plantar-semilla.mp4\" type=\"video/mp4\">\n    <track kind=\"captions\" src=\"subtitulos-es.vtt\" srclang=\"es\" label=\"Español\">\n  </video>\n</main>",
      solutionCss: "",
      check: ({ htmlDocument }) => [
        { label: "El audio tiene controles y nombre accesible.", passed: Boolean(htmlDocument.querySelector("audio[controls][aria-label]")?.getAttribute("aria-label").trim()) },
        { label: "El video tiene controles y nombre accesible.", passed: Boolean(htmlDocument.querySelector("video[controls][aria-label]")?.getAttribute("aria-label").trim()) },
        { label: "El video incluye una pista de subtítulos.", passed: htmlDocument.querySelector("video track[kind='captions'][srclang][label]") !== null }
      ]
    }
  ],
  css: [
    {
      id: "css-apariencia",
      title: "Dale color a una tarjeta",
      prompt: "Personaliza la tarjeta: agrega un color de fondo, cambia el color del título y añade un borde redondeado.",
      requirements: [
        "La regla .tarjeta establece un color de fondo.",
        "Una regla h1 establece el color del título.",
        "La tarjeta tiene padding y un borde redondeado."
      ],
      hint: "Prueba .tarjeta { background-color: ...; padding: ...; border-radius: ...; } y luego h1 { color: ...; }.",
      html: "<main class='tarjeta'>\n  <p class='etiqueta'>MI ESPACIO</p>\n  <h1>Mi tarjeta</h1>\n  <p>Estoy aprendiendo a personalizar una página.</p>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.tarjeta {\n  max-width: 520px;\n  margin: 24px auto;\n  padding: 24px;\n  border: 2px solid #b9d8d0;\n}\n\nh1 {\n  color: #176b68;\n}",
      solutionExplanation: "La clase .tarjeta selecciona la caja y h1 selecciona el título. Las declaraciones de espacio y borde cambian la tarjeta.",
      solutionHtml: "<main class='tarjeta'>\n  <p class='etiqueta'>MI ESPACIO</p>\n  <h1>Mi tarjeta</h1>\n  <p>Estoy aprendiendo a personalizar una página.</p>\n</main>",
      solutionCss: ".tarjeta {\n  padding: 24px;\n  background-color: #e2f4ee;\n  border: 2px solid #176b68;\n  border-radius: 12px;\n}\n\nh1 {\n  color: #174a7e;\n}",
      check: ({ cssRules }) => {
        const card = getDeclarations(cssRules, ".tarjeta");
        const heading = getDeclarations(cssRules, "h1");
        return [
          { label: "La regla .tarjeta tiene background o background-color.", passed: hasDeclaration(card, ["background-color", "background"]) },
          { label: "Una regla h1 establece color.", passed: hasDeclaration(heading, ["color"]) },
          { label: "La tarjeta tiene padding y border-radius.", passed: hasDeclaration(card, ["padding"]) && hasDeclaration(card, ["border-radius"]) }
        ];
      }
    },
    {
      id: "css-centrar",
      title: "Centra una caja con Flexbox",
      prompt: "Centra la caja dentro del escenario. Usa Flexbox y alinea el contenido tanto horizontal como verticalmente.",
      requirements: [
        "La regla .escenario usa display: flex.",
        "Usa justify-content: center.",
        "Usa align-items: center."
      ],
      hint: "El contenedor es .escenario. Las tres declaraciones se escriben dentro de la misma regla CSS.",
      html: "<main class='escenario'>\n  <div class='caja'>\n    <h1>Estoy centrado</h1>\n    <p>El contenedor organiza su contenido.</p>\n  </div>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 20px;\n  font-family: Arial, sans-serif;\n  background-color: #f3f0fa;\n}\n\n.escenario {\n  display: flex;\n  min-height: 360px;\n  background-color: #e5dcf4;\n  border-radius: 12px;\n}\n\n.caja {\n  padding: 20px;\n  background-color: white;\n  border: 2px solid #9278ba;\n  border-radius: 10px;\n  text-align: center;\n}\n\nh1 {\n  color: #563b7d;\n}",
      solutionExplanation: "Flexbox centra los elementos hijos: justify-content los distribuye en el eje principal y align-items en el eje transversal.",
      solutionHtml: "<main class='escenario'>\n  <div class='caja'>\n    <h1>Estoy centrado</h1>\n    <p>El contenedor organiza su contenido.</p>\n  </div>\n</main>",
      solutionCss: ".escenario {\n  display: flex;\n  min-height: 360px;\n  justify-content: center;\n  align-items: center;\n}",
      check: ({ cssRules }) => {
        const stage = getDeclarations(cssRules, ".escenario");
        return [
          { label: "La regla .escenario usa display: flex.", passed: hasValue(stage, "display", "flex") },
          { label: "El contenido se centra horizontalmente con justify-content.", passed: hasValue(stage, "justify-content", "center") },
          { label: "El contenido se centra verticalmente con align-items.", passed: hasValue(stage, "align-items", "center") }
        ];
      }
    },
    {
      id: "css-columnas",
      title: "Organiza tarjetas en columnas",
      prompt: "Usa Grid para mostrar las tres tarjetas en dos columnas en una pantalla amplia y en una columna cuando la ventana sea estrecha.",
      requirements: [
        "La regla .columnas usa display: grid.",
        "Define al menos dos columnas para pantalla amplia.",
        "Una regla @media cambia a una columna en una pantalla estrecha."
      ],
      hint: "Usa grid-template-columns: repeat(2, 1fr). Para móvil, dentro de @media (max-width: 560px), cambia la regla a 1fr.",
      html: "<main class='pagina'>\n  <h1>Mis temas favoritos</h1>\n  <div class='columnas'>\n    <article class='tarjeta'><h2>Lectura</h2><p>Una historia para descubrir.</p></article>\n    <article class='tarjeta'><h2>Música</h2><p>Una canción para recordar.</p></article>\n    <article class='tarjeta'><h2>Naturaleza</h2><p>Un lugar para explorar.</p></article>\n  </div>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  color: #25334a;\n  background-color: #f1f4f9;\n}\n\n.columnas {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.tarjeta {\n  padding: 18px;\n  background-color: white;\n  border: 1px solid #d9e1eb;\n  border-radius: 10px;\n}",
      solutionExplanation: "Grid define las columnas de escritorio; la consulta de medios reemplaza el diseño por una columna en pantallas estrechas.",
      solutionHtml: "<main class='pagina'>\n  <h1>Mis temas favoritos</h1>\n  <div class='columnas'>\n    <article class='tarjeta'><h2>Lectura</h2><p>Una historia para descubrir.</p></article>\n    <article class='tarjeta'><h2>Música</h2><p>Una canción para recordar.</p></article>\n    <article class='tarjeta'><h2>Naturaleza</h2><p>Un lugar para explorar.</p></article>\n  </div>\n</main>",
      solutionCss: ".columnas {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 16px;\n}\n\n@media (max-width: 560px) {\n  .columnas {\n    grid-template-columns: 1fr;\n  }\n}",
      check: ({ cssRules }) => {
        const columns = getDeclarations(cssRules, ".columnas");
        const wideColumns = hasAtLeastColumns(columns);
        const narrowColumns = cssRules.some((rule) =>
          rule.media
          && rule.media.includes("max-width")
          && rule.selector === ".columnas"
          && hasValue(rule.declarations, "grid-template-columns", "1fr")
        );
        return [
          { label: "La regla .columnas usa display: grid.", passed: hasValue(columns, "display", "grid") },
          { label: "El diseño amplio tiene dos o más columnas.", passed: wideColumns },
          { label: "Una regla @media cambia la cuadrícula a una columna.", passed: narrowColumns }
        ];
      }
    },
    {
      id: "css-tipografia",
      title: "Haz que el texto se lea mejor",
      prompt: "Ajusta la tipografía de la página: elige una fuente para el título y mejora el tamaño y el espaciado del párrafo.",
      requirements: [
        "La regla h1 define una familia tipográfica.",
        "La regla .descripcion establece un tamaño de fuente.",
        "El párrafo usa una altura de línea para facilitar la lectura."
      ],
      hint: "Usa font-family en h1 y font-size junto a line-height en .descripcion.",
      html: "<main>\n  <h1>Ideas que crecen</h1>\n  <p class='descripcion'>Un buen texto se entiende mejor cuando la letra tiene un tamaño cómodo y suficiente espacio entre líneas.</p>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 28px;\n  color: #20243a;\n  background-color: #f5f1e7;\n}\n\nh1 {\n  color: #3448c5;\n}\n\n.descripcion {\n  max-width: 55ch;\n}",
      solutionExplanation: "font-family cambia la familia de letras. font-size controla el tamaño y line-height separa las líneas para que el párrafo sea cómodo de leer.",
      solutionHtml: "<main>\n  <h1>Ideas que crecen</h1>\n  <p class='descripcion'>Un buen texto se entiende mejor cuando la letra tiene un tamaño cómodo y suficiente espacio entre líneas.</p>\n</main>",
      solutionCss: "h1 {\n  font-family: Georgia, serif;\n}\n\n.descripcion {\n  font-size: 1.15rem;\n  line-height: 1.8;\n}",
      check: ({ cssRules }) => {
        const heading = getDeclarations(cssRules, "h1");
        const paragraph = getDeclarations(cssRules, ".descripcion");
        return [
          { label: "La regla h1 establece font-family.", passed: hasDeclaration(heading, ["font-family"]) },
          { label: "La regla .descripcion establece font-size.", passed: hasDeclaration(paragraph, ["font-size"]) },
          { label: "La regla .descripcion establece line-height.", passed: hasDeclaration(paragraph, ["line-height"]) }
        ];
      }
    },
    {
      id: "css-imagen",
      title: "Ajusta una imagen sin deformarla",
      prompt: "Prepara la imagen para una tarjeta: define su ancho, su alto y cómo se recorta para llenar el espacio.",
      requirements: [
        "La regla .foto establece un ancho y un alto.",
        "object-fit hace que la imagen llene el espacio sin deformarse.",
        "La imagen mantiene su texto alternativo en HTML."
      ],
      hint: "En .foto usa width, height y object-fit: cover. La imagen del ejemplo ya tiene un atributo alt.",
      html: "<article>\n  <h1>Un paisaje</h1>\n  <img class='foto' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\">\n</article>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.foto {\n  display: block;\n  border-radius: 12px;\n}",
      solutionExplanation: "width y height definen el espacio de la imagen. object-fit: cover llena ese espacio recortando lo necesario y conserva las proporciones.",
      solutionHtml: "<article>\n  <h1>Un paisaje</h1>\n  <img class='foto' src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\">\n</article>",
      solutionCss: ".foto {\n  width: 100%;\n  height: 240px;\n  object-fit: cover;\n  border-radius: 12px;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const image = getDeclarations(cssRules, ".foto");
        const alt = htmlDocument.querySelector(".foto[alt]");
        return [
          { label: "La regla .foto define width y height.", passed: hasDeclaration(image, ["width"]) && hasDeclaration(image, ["height"]) },
          { label: "La imagen usa object-fit: cover.", passed: hasValue(image, "object-fit", "cover") },
          { label: "La imagen conserva un texto alt descriptivo.", passed: Boolean(alt?.getAttribute("alt").trim()) }
        ];
      }
    },
    {
      id: "css-menu-flex",
      title: "Ordena un menú con Flexbox",
      prompt: "Convierte la lista de enlaces en un menú horizontal con espacio entre cada opción.",
      requirements: [
        "La lista .menu usa display: flex.",
        "Los enlaces tienen separación mediante gap.",
        "El menú distribuye sus elementos con justify-content."
      ],
      hint: "En .menu escribe display: flex, gap y justify-content: space-between.",
      html: "<nav aria-label='Secciones del curso'>\n  <ul class='menu'>\n    <li><a href='#inicio'>Inicio</a></li>\n    <li><a href='#lecciones'>Lecciones</a></li>\n    <li><a href='#contacto'>Contacto</a></li>\n  </ul>\n</nav>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f5f1e7;\n}\n\n.menu {\n  margin: 0;\n  padding: 16px;\n  list-style: none;\n  background-color: #20243a;\n}\n\n.menu a {\n  color: white;\n}",
      solutionExplanation: "display: flex coloca los elementos de la lista en una fila. gap añade espacio y justify-content distribuye el menú dentro de su ancho.",
      solutionHtml: "<nav aria-label='Secciones del curso'>\n  <ul class='menu'>\n    <li><a href='#inicio'>Inicio</a></li>\n    <li><a href='#lecciones'>Lecciones</a></li>\n    <li><a href='#contacto'>Contacto</a></li>\n  </ul>\n</nav>",
      solutionCss: ".menu {\n  display: flex;\n  gap: 24px;\n  justify-content: space-between;\n  margin: 0;\n  padding: 16px;\n  list-style: none;\n}",
      check: ({ cssRules }) => {
        const menu = getDeclarations(cssRules, ".menu");
        return [
          { label: "La lista .menu usa display: flex.", passed: hasValue(menu, "display", "flex") },
          { label: "El menú añade separación con gap.", passed: hasDeclaration(menu, ["gap", "column-gap", "row-gap"]) },
          { label: "El menú distribuye sus enlaces con justify-content.", passed: hasDeclaration(menu, ["justify-content"]) }
        ];
      }
    },
    {
      id: "css-especificidad",
      title: "Resuelve un conflicto de estilos",
      prompt: "El selector por id está ganando al de clase. Simplifica la regla para que el aviso use los colores definidos en .aviso.",
      requirements: [
        "La regla .aviso establece un color de texto.",
        "La regla .aviso establece un color de fondo.",
        "Se eliminó la regla #aviso que tenía mayor especificidad."
      ],
      hint: "Quita la regla #aviso y conserva las declaraciones de color y background-color en .aviso.",
      html: "<main>\n  <h1>Revisa las reglas</h1>\n  <p id='aviso' class='aviso'>El selector de id tiene prioridad sobre la clase.</p>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n#aviso {\n  color: #a83232;\n}\n\n.aviso {\n  padding: 16px;\n  background-color: #e4f2dc;\n}",
      solutionExplanation: "Los selectores de id tienen mayor especificidad que los de clase. Al quitar la regla de id, la clase puede controlar ambos colores.",
      solutionHtml: "<main>\n  <h1>Revisa las reglas</h1>\n  <p id='aviso' class='aviso'>El selector de id tiene prioridad sobre la clase.</p>\n</main>",
      solutionCss: ".aviso {\n  padding: 16px;\n  color: #245c45;\n  background-color: #e4f2dc;\n}",
      check: ({ cssRules }) => {
        const notice = getDeclarations(cssRules, ".aviso");
        return [
          { label: "La clase .aviso establece el color del texto.", passed: hasDeclaration(notice, ["color"]) },
          { label: "La clase .aviso establece el color de fondo.", passed: hasDeclaration(notice, ["background-color", "background"]) },
          { label: "Se quitó la regla #aviso de mayor especificidad.", passed: getDeclarations(cssRules, "#aviso").length === 0 }
        ];
      }
    },
    {
      id: "css-modelo-caja",
      title: "Haz predecible el ancho de una tarjeta",
      prompt: "La caja se desborda al sumar padding y borde. Configura border-box y limita su ancho al espacio disponible.",
      requirements: [
        "El selector universal usa box-sizing: border-box.",
        "La tarjeta tiene un ancho y un padding.",
        "La tarjeta tiene un max-width que limita su tamaño."
      ],
      hint: "Añade * { box-sizing: border-box; } y define width: 100%, max-width y padding en .tarjeta.",
      html: "<main>\n  <h1>Modelo de caja</h1>\n  <article class='tarjeta'>\n    <h2>Una tarjeta adaptable</h2>\n    <p>Su borde y espacio interior se cuentan dentro del ancho declarado.</p>\n  </article>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.tarjeta {\n  width: 500px;\n  padding: 30px;\n  border: 5px solid #3448c5;\n  background-color: #f5f1e7;\n}",
      solutionExplanation: "Con box-sizing: border-box, width incluye contenido, padding y borde. width: 100% y max-width permiten que la tarjeta se reduzca en contenedores estrechos.",
      solutionHtml: "<main>\n  <h1>Modelo de caja</h1>\n  <article class='tarjeta'>\n    <h2>Una tarjeta adaptable</h2>\n    <p>Su borde y espacio interior se cuentan dentro del ancho declarado.</p>\n  </article>\n</main>",
      solutionCss: "* {\n  box-sizing: border-box;\n}\n\n.tarjeta {\n  width: 100%;\n  max-width: 500px;\n  padding: 30px;\n  border: 5px solid #3448c5;\n  background-color: #f5f1e7;\n}",
      check: ({ cssRules }) => {
        const allElements = getDeclarations(cssRules, "*");
        const card = getDeclarations(cssRules, ".tarjeta");
        return [
          { label: "El selector universal define box-sizing: border-box.", passed: hasValue(allElements, "box-sizing", "border-box") },
          { label: "La tarjeta define width y padding.", passed: hasDeclaration(card, ["width"]) && hasDeclaration(card, ["padding"]) },
          { label: "La tarjeta limita su ancho con max-width.", passed: hasDeclaration(card, ["max-width"]) }
        ];
      }
    },
    {
      id: "css-adaptable",
      title: "Adapta una cuadrícula a móvil",
      prompt: "Muestra las tarjetas en dos columnas cuando hay espacio y cambia a una columna en pantallas estrechas.",
      requirements: [
        "La regla .tarjetas usa display: grid.",
        "El diseño inicial define al menos dos columnas.",
        "Una consulta @media cambia a una columna."
      ],
      hint: "Define grid-template-columns en .tarjetas y vuelve a definirlo como 1fr dentro de @media (max-width: 640px).",
      html: "<main>\n  <h1>Club de ciencias</h1>\n  <div class='tarjetas'>\n    <article><h2>Explorar</h2><p>Observamos el mundo.</p></article>\n    <article><h2>Probar</h2><p>Hacemos experimentos.</p></article>\n  </div>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.tarjetas {\n  display: grid;\n  gap: 16px;\n}\n\n.tarjetas article {\n  padding: 18px;\n  border: 1px solid #d7d0c0;\n  background-color: #f5f1e7;\n}",
      solutionExplanation: "Grid define las columnas para el espacio amplio. La consulta de medios reemplaza la plantilla por una columna en pantallas angostas.",
      solutionHtml: "<main>\n  <h1>Club de ciencias</h1>\n  <div class='tarjetas'>\n    <article><h2>Explorar</h2><p>Observamos el mundo.</p></article>\n    <article><h2>Probar</h2><p>Hacemos experimentos.</p></article>\n  </div>\n</main>",
      solutionCss: ".tarjetas {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n@media (max-width: 640px) {\n  .tarjetas {\n    grid-template-columns: 1fr;\n  }\n}",
      check: ({ cssRules }) => {
        const grid = getDeclarations(cssRules, ".tarjetas");
        const narrow = cssRules.some((rule) => rule.media && rule.media.includes("max-width") && rule.selector === ".tarjetas" && hasValue(rule.declarations, "grid-template-columns", "1fr"));
        return [
          { label: "La regla .tarjetas usa display: grid.", passed: hasValue(grid, "display", "grid") },
          { label: "El diseño amplio tiene dos o más columnas.", passed: hasAtLeastColumns(grid) },
          { label: "Una regla @media cambia a una columna.", passed: narrow }
        ];
      }
    },
    {
      id: "css-foco-visible",
      title: "Haz visible el foco del teclado",
      prompt: "Mejora los enlaces para que tengan un estado al pasar el ratón y un indicador visible cuando se navega con teclado.",
      requirements: [
        "Los enlaces tienen un estilo :hover.",
        "Los enlaces tienen un estilo :focus-visible.",
        "El foco incluye un contorno visible."
      ],
      hint: "Crea las reglas .menu a:hover y .menu a:focus-visible. En la segunda, usa outline con un grosor visible.",
      html: "<nav class='menu' aria-label='Navegación principal'>\n  <a href='#inicio'>Inicio</a>\n  <a href='#lecciones'>Lecciones</a>\n  <a href='#contacto'>Contacto</a>\n</nav>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.menu {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  background-color: #20243a;\n}\n\n.menu a {\n  padding: 8px;\n  color: white;\n}",
      solutionExplanation: ":hover permite reconocer la posición del ratón. :focus-visible muestra el enlace activo al recorrer con teclado; outline dibuja un indicador que no cambia el tamaño de la caja.",
      solutionHtml: "<nav class='menu' aria-label='Navegación principal'>\n  <a href='#inicio'>Inicio</a>\n  <a href='#lecciones'>Lecciones</a>\n  <a href='#contacto'>Contacto</a>\n</nav>",
      solutionCss: ".menu a:hover {\n  color: #20243a;\n  background-color: #f0c65e;\n}\n\n.menu a:focus-visible {\n  outline: 3px solid #e85d3f;\n  outline-offset: 2px;\n}",
      check: ({ cssRules }) => {
        const hover = getDeclarations(cssRules, ".menu a:hover");
        const focus = getDeclarations(cssRules, ".menu a:focus-visible");
        return [
          { label: "Hay un estilo para :hover.", passed: hover.length > 0 },
          { label: "Hay un estilo para :focus-visible.", passed: focus.length > 0 },
          { label: "El foco tiene un contorno visible.", passed: hasDeclaration(focus, ["outline", "outline-color", "outline-style", "outline-width"]) }
        ];
      }
    },
    {
      id: "css-posicion",
      title: "Superpone una etiqueta en una tarjeta",
      prompt: "Coloca la etiqueta NUEVO dentro de la esquina de la tarjeta y asegúrate de que aparezca por encima de la imagen.",
      requirements: [
        "La tarjeta usa position: relative como referencia.",
        "La etiqueta usa position: absolute.",
        "La etiqueta establece su posición y un z-index."
      ],
      hint: "Pon position: relative en .escena. En .etiqueta usa position: absolute, top, right y z-index.",
      html: "<article class='escena'>\n  <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Colinas verdes\">\n  <span class='etiqueta'>NUEVO</span>\n  <h1>Excursiones</h1>\n</article>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.escena {\n  max-width: 520px;\n  margin: 20px auto;\n}\n\n.escena img {\n  display: block;\n  width: 100%;\n}\n\n.etiqueta {\n  padding: 8px 12px;\n  color: white;\n  background-color: #e85d3f;\n}",
      solutionExplanation: "position: relative crea el contexto para ubicar la etiqueta absoluta con respecto a la tarjeta. z-index controla el orden de apilamiento dentro de ese contexto.",
      solutionHtml: "<article class='escena'>\n  <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Colinas verdes\">\n  <span class='etiqueta'>NUEVO</span>\n  <h1>Excursiones</h1>\n</article>",
      solutionCss: ".escena {\n  position: relative;\n  max-width: 520px;\n  margin: 20px auto;\n}\n\n.etiqueta {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 1;\n  padding: 8px 12px;\n  color: white;\n  background-color: #e85d3f;\n}",
      check: ({ cssRules }) => {
        const scene = getDeclarations(cssRules, ".escena");
        const tag = getDeclarations(cssRules, ".etiqueta");
        return [
          { label: "La tarjeta usa position: relative.", passed: hasValue(scene, "position", "relative") },
          { label: "La etiqueta usa position: absolute.", passed: hasValue(tag, "position", "absolute") },
          { label: "La etiqueta define coordenadas y z-index.", passed: hasDeclaration(tag, ["top"]) && hasDeclaration(tag, ["right"]) && hasDeclaration(tag, ["z-index"]) }
        ];
      }
    },
    {
      id: "css-desbordamiento",
      title: "Controla el contenido que se desborda",
      prompt: "Limita la altura del panel de comentarios y permite desplazarse dentro de él sin que el contenido invada el resto de la página.",
      requirements: [
        "El panel tiene una altura máxima definida.",
        "El panel controla el desbordamiento vertical.",
        "El panel mantiene su padding."
      ],
      hint: "En .comentarios añade max-height, overflow-y: auto y padding.",
      html: "<main>\n  <h1>Comentarios del club</h1>\n  <section class='comentarios'>\n    <p>La historia comienza en un pueblo junto al mar.</p>\n    <p>Mi personaje favorito cambia de opinión.</p>\n    <p>El final me hizo pensar en el primer capítulo.</p>\n    <p>Quiero recomendar este libro a mis amigos.</p>\n    <p>La próxima semana podemos conversar sobre los personajes.</p>\n  </section>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.comentarios {\n  width: 100%;\n  max-width: 520px;\n  border: 1px solid #d7d0c0;\n  background-color: #f5f1e7;\n}",
      solutionExplanation: "max-height limita el alto del panel. overflow-y: auto agrega desplazamiento vertical solo cuando el contenido supera ese límite.",
      solutionHtml: "<main>\n  <h1>Comentarios del club</h1>\n  <section class='comentarios'>\n    <p>La historia comienza en un pueblo junto al mar.</p>\n    <p>Mi personaje favorito cambia de opinión.</p>\n    <p>El final me hizo pensar en el primer capítulo.</p>\n    <p>Quiero recomendar este libro a mis amigos.</p>\n    <p>La próxima semana podemos conversar sobre los personajes.</p>\n  </section>\n</main>",
      solutionCss: ".comentarios {\n  max-width: 520px;\n  max-height: 180px;\n  overflow-y: auto;\n  padding: 16px;\n  border: 1px solid #d7d0c0;\n  background-color: #f5f1e7;\n}",
      check: ({ cssRules }) => {
        const panel = getDeclarations(cssRules, ".comentarios");
        return [
          { label: "El panel limita su altura con max-height.", passed: hasDeclaration(panel, ["max-height"]) },
          { label: "El panel controla el desbordamiento vertical.", passed: hasDeclaration(panel, ["overflow", "overflow-y"]) },
          { label: "El panel conserva espacio interior con padding.", passed: hasDeclaration(panel, ["padding"]) }
        ];
      }
    },
    {
      id: "css-variables-fluido",
      title: "Crea un título fluido con variables",
      prompt: "Define colores reutilizables y haz que el título crezca de forma fluida sin volverse demasiado pequeño o enorme.",
      requirements: [
        "La regla :root define una variable de color.",
        "El título usa la variable con var().",
        "El tamaño del título usa clamp()."
      ],
      hint: "En :root define --color-acento. En h1 usa color: var(--color-acento) y font-size: clamp(2rem, 6vw, 4rem).",
      html: "<main>\n  <p class='etiqueta'>EXPLORA Y APRENDE</p>\n  <h1>Ideas que ocupan espacio</h1>\n  <p>Estira o reduce el ancho de la vista previa para observar el título.</p>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n:root {\n  --color-acento: #3448c5;\n  --color-suave: #f0c65e;\n}\n\n.etiqueta {\n  color: var(--color-acento);\n  background-color: var(--color-suave);\n}\n\nh1 {\n  color: var(--color-acento);\n}",
      solutionExplanation: "Las variables CSS guardan valores reutilizables y se leen con var(). clamp() limita el tamaño fluido entre un mínimo y un máximo.",
      solutionHtml: "<main>\n  <p class='etiqueta'>EXPLORA Y APRENDE</p>\n  <h1>Ideas que ocupan espacio</h1>\n  <p>Estira o reduce el ancho de la vista previa para observar el título.</p>\n</main>",
      solutionCss: ":root {\n  --color-acento: #3448c5;\n}\n\nh1 {\n  color: var(--color-acento);\n  font-size: clamp(2rem, 6vw, 4rem);\n}",
      check: ({ cssRules }) => {
        const root = getDeclarations(cssRules, ":root");
        const heading = getDeclarations(cssRules, "h1");
        return [
          { label: ":root define una variable de color.", passed: root.some((declaration) => declaration.property.startsWith("--")) },
          { label: "El título usa var() para aplicar la variable.", passed: heading.some((declaration) => declaration.value.includes("var(")) },
          { label: "El tamaño del título usa clamp().", passed: heading.some((declaration) => declaration.property === "font-size" && declaration.value.includes("clamp(")) }
        ];
      }
    }
  ],
  combinado: [
    {
      id: "combo-perfil",
      title: "Crea una tarjeta de perfil",
      prompt: "Construye una tarjeta con HTML y personalízala con CSS. La tarjeta debe tener un título, una descripción y un estilo propio.",
      requirements: [
        "El HTML contiene un h1 y un párrafo.",
        "Un elemento HTML usa la clase tarjeta.",
        "La regla .tarjeta define fondo, padding y borde redondeado."
      ],
      hint: "Pon class=\"tarjeta\" en un contenedor. Después selecciónalo con .tarjeta en CSS.",
      html: "<main class='tarjeta'>\n  <p class='etiqueta'>MI PERFIL</p>\n  <h1>Hola, soy Alex</h1>\n  <p>Estoy aprendiendo a crear páginas web.</p>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #edf4f3;\n}\n\n.tarjeta {\n  max-width: 520px;\n  margin: 24px auto;\n  border: 2px solid #b9d8d0;\n}\n\nh1 {\n  color: #176b68;\n}",
      solutionExplanation: "El HTML crea la estructura y la clase tarjeta enlaza el contenido con su regla CSS.",
      solutionHtml: "<main class='tarjeta'>\n  <h1>Hola, soy Alex</h1>\n  <p>Me gusta aprender y compartir ideas.</p>\n</main>",
      solutionCss: ".tarjeta {\n  max-width: 520px;\n  margin: 24px auto;\n  padding: 24px;\n  background-color: #e2f4ee;\n  border: 2px solid #176b68;\n  border-radius: 12px;\n}\n\nh1 {\n  color: #174a7e;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const card = getDeclarations(cssRules, ".tarjeta");
        return [
          { label: "El HTML contiene un título h1 y un párrafo.", passed: htmlDocument.querySelector("h1") !== null && htmlDocument.querySelector("p") !== null },
          { label: "El HTML usa class=\"tarjeta\".", passed: htmlDocument.querySelector(".tarjeta") !== null },
          { label: "La tarjeta tiene fondo, padding y borde redondeado.", passed: hasDeclaration(card, ["background-color", "background"]) && hasDeclaration(card, ["padding"]) && hasDeclaration(card, ["border-radius"]) }
        ];
      }
    },
    {
      id: "combo-galeria",
      title: "Diseña una galería de tarjetas",
      prompt: "Escribe tres artículos con HTML y usa CSS Grid para distribuirlos en dos columnas en una pantalla amplia.",
      requirements: [
        "El HTML contiene al menos tres article.",
        "Los article están dentro de un elemento con clase galeria.",
        "La regla .galeria crea al menos dos columnas con Grid."
      ],
      hint: "Usa <div class=\"galeria\"> para agrupar los article y grid-template-columns: repeat(2, 1fr).",
      html: "<main>\n  <h1>Mi galería</h1>\n  <div class='galeria'>\n    <article><h2>Lectura</h2><p>Una historia nueva.</p></article>\n    <article><h2>Música</h2><p>Una canción favorita.</p></article>\n    <article><h2>Naturaleza</h2><p>Un lugar para explorar.</p></article>\n  </div>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f1f4f9;\n}\n\n.galeria {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.galeria article {\n  padding: 18px;\n  background-color: #ffffff;\n  border: 1px solid #d9e1eb;\n  border-radius: 10px;\n}\n\nh2 {\n  color: #315d9b;\n}",
      solutionExplanation: "Los article describen tarjetas independientes. La clase galeria las agrupa y Grid establece dos columnas.",
      solutionHtml: "<main>\n  <h1>Mi galería</h1>\n  <div class='galeria'>\n    <article><h2>Lectura</h2><p>Una historia nueva.</p></article>\n    <article><h2>Música</h2><p>Una canción favorita.</p></article>\n    <article><h2>Naturaleza</h2><p>Un lugar para explorar.</p></article>\n  </div>\n</main>",
      solutionCss: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.galeria article {\n  padding: 18px;\n  background-color: white;\n  border: 1px solid #d9e1eb;\n  border-radius: 10px;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const gallery = getDeclarations(cssRules, ".galeria");
        return [
          { label: "El HTML contiene tres o más article.", passed: htmlDocument.querySelectorAll("article").length >= 3 },
          { label: "Los article están dentro del elemento .galeria.", passed: htmlDocument.querySelectorAll(".galeria article").length >= 3 },
          { label: "La regla .galeria usa Grid y define al menos dos columnas.", passed: hasValue(gallery, "display", "grid") && hasAtLeastColumns(gallery) }
        ];
      }
    },
    {
      id: "combo-articulo",
      title: "Publica un artículo con navegación",
      prompt: "Crea una página con navegación interna, una sección de contenido y un artículo. Después dale estilo al artículo.",
      requirements: [
        "El enlace del nav apunta a una sección existente.",
        "La sección contiene un article con un título.",
        "La regla .articulo define padding, fondo y borde."
      ],
      hint: "Haz coincidir href=\"#historia\" con id=\"historia\". Añade class=\"articulo\" al article y crea la regla .articulo.",
      html: "<header>\n  <h1>Mi revista</h1>\n  <nav><a href='#historia'>Historia</a></nav>\n</header>\n<main>\n  <section id='historias'>\n    <h2>Historias</h2>\n    <article>\n      <h3>Un día para recordar</h3>\n      <p>Escribe aquí tu historia.</p>\n    </article>\n  </section>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  color: #283747;\n  background-color: #f5f2eb;\n}\n\n.articulo {\n  border: 1px solid #d9d2c4;\n}\n\nh1 {\n  color: #7b4e2d;\n}",
      solutionExplanation: "El enlace navega a una sección. El article contiene el tema independiente y su clase permite darle estilos.",
      solutionHtml: "<header>\n  <h1>Mi revista</h1>\n  <nav><a href=\"#historia\">Historia</a></nav>\n</header>\n<main>\n  <section id=\"historia\">\n    <h2>Historias</h2>\n    <article class=\"articulo\">\n      <h3>Un día para recordar</h3>\n      <p>Escribe aquí tu historia.</p>\n    </article>\n  </section>\n</main>",
      solutionCss: ".articulo {\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid #d9d2c4;\n  border-radius: 8px;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const anchors = [...htmlDocument.querySelectorAll("nav a[href^='#']")];
        const connectedAnchor = anchors.some((anchor) => htmlDocument.getElementById(anchor.getAttribute("href").slice(1)));
        const article = getDeclarations(cssRules, ".articulo");
        return [
          { label: "El enlace de navegación apunta a un id existente.", passed: connectedAnchor },
          { label: "Una section contiene un article con título.", passed: [...htmlDocument.querySelectorAll("section article")].some((item) => item.querySelector("h2, h3, h4, h5, h6")) },
          { label: "La regla .articulo define padding, fondo y borde.", passed: hasDeclaration(article, ["padding"]) && hasDeclaration(article, ["background-color", "background"]) && hasDeclaration(article, ["border"]) }
        ];
      }
    },
    {
      id: "combo-formulario",
      title: "Diseña un formulario de contacto",
      prompt: "Crea un formulario accesible para recibir mensajes y dale una apariencia clara usando una clase propia.",
      requirements: [
        "El HTML agrupa el formulario con la clase contacto.",
        "Incluye un label asociado, un campo de correo y un botón de envío.",
        "La regla .contacto define fondo, padding y borde redondeado."
      ],
      hint: "Relaciona for=\"correo\" con id=\"correo\". Agrega class=\"contacto\" al form y dale estilos a .contacto.",
      html: "<main>\n  <h1>Escríbenos</h1>\n  <form class='contacto'>\n    <label for='correo'>Tu correo</label>\n    <input id='correo' name='correo' type='email' required>\n    <label for='mensaje'>Mensaje</label>\n    <textarea id='mensaje' name='mensaje'></textarea>\n    <button type='submit'>Enviar mensaje</button>\n  </form>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f5f1e7;\n}\n\n.contacto {\n  max-width: 520px;\n  margin: 20px auto;\n}\n\n.contacto label,\n.contacto input,\n.contacto textarea,\n.contacto button {\n  display: block;\n  width: 100%;\n  margin-bottom: 12px;\n}",
      solutionExplanation: "Los label indican qué debe escribir cada persona. La clase contacto permite aplicar fondo, espacio interior y bordes al formulario.",
      solutionHtml: "<main>\n  <h1>Escríbenos</h1>\n  <form class='contacto'>\n    <label for='correo'>Tu correo</label>\n    <input id='correo' name='correo' type='email' required>\n    <label for='mensaje'>Mensaje</label>\n    <textarea id='mensaje' name='mensaje'></textarea>\n    <button type='submit'>Enviar mensaje</button>\n  </form>\n</main>",
      solutionCss: ".contacto {\n  max-width: 520px;\n  margin: 20px auto;\n  padding: 24px;\n  background-color: white;\n  border: 1px solid #d7d0c0;\n  border-radius: 12px;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const form = getDeclarations(cssRules, ".contacto");
        const labels = [...htmlDocument.querySelectorAll("form.contacto label[for]")];
        const associatedLabel = labels.some((label) => htmlDocument.getElementById(label.htmlFor)?.closest("form.contacto"));
        return [
          { label: "El formulario utiliza la clase .contacto.", passed: htmlDocument.querySelector("form.contacto") !== null },
          { label: "Hay un label asociado, un campo email y un botón submit.", passed: associatedLabel && htmlDocument.querySelector("form.contacto input[type='email']") !== null && htmlDocument.querySelector("form.contacto button[type='submit']") !== null },
          { label: "La regla .contacto define fondo, padding y borde redondeado.", passed: hasDeclaration(form, ["background-color", "background"]) && hasDeclaration(form, ["padding"]) && hasDeclaration(form, ["border-radius"]) }
        ];
      }
    },
    {
      id: "combo-galeria-fotos",
      title: "Crea una galería visual",
      prompt: "Construye una pequeña galería con imágenes accesibles y usa Grid para distribuirlas en dos columnas.",
      requirements: [
        "La galería incluye tres figuras con imagen y texto alternativo.",
        "Cada figura tiene un pie descriptivo.",
        "La regla .galeria usa Grid y crea al menos dos columnas."
      ],
      hint: "Agrupa figure dentro de <div class=\"galeria\">. Cada img necesita alt y cada figure puede incluir figcaption.",
      html: "<main>\n  <h1>Lugares que quiero conocer</h1>\n  <div class='galeria'>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\"><figcaption>La montaña</figcaption></figure>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Un valle con árboles\"><figcaption>El valle</figcaption></figure>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Una colina al atardecer\"><figcaption>El atardecer</figcaption></figure>\n  </div>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f5f1e7;\n}\n\n.galeria {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n}\n\n.galeria img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n}",
      solutionExplanation: "Cada figure reúne una imagen y su descripción. Grid organiza las figuras en columnas sin perder su significado ni los textos alternativos.",
      solutionHtml: "<main>\n  <h1>Lugares que quiero conocer</h1>\n  <div class='galeria'>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Montañas verdes bajo un cielo azul\"><figcaption>La montaña</figcaption></figure>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Un valle con árboles\"><figcaption>El valle</figcaption></figure>\n    <figure><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Una colina al atardecer\"><figcaption>El atardecer</figcaption></figure>\n  </div>\n</main>",
      solutionCss: ".galeria {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.galeria figure {\n  margin: 0;\n  padding: 12px;\n  background-color: white;\n}\n\n.galeria img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const gallery = getDeclarations(cssRules, ".galeria");
        const figures = [...htmlDocument.querySelectorAll(".galeria figure")];
        return [
          { label: "La galería tiene tres imágenes con texto alt.", passed: figures.length >= 3 && figures.every((figure) => Boolean(figure.querySelector("img[alt]")?.getAttribute("alt").trim())) },
          { label: "Cada figura incluye un pie de imagen.", passed: figures.length >= 3 && figures.every((figure) => figure.querySelector("figcaption") !== null) },
          { label: "La regla .galeria usa Grid y define al menos dos columnas.", passed: hasValue(gallery, "display", "grid") && hasAtLeastColumns(gallery) }
        ];
      }
    },
    {
      id: "combo-producto",
      title: "Presenta un producto",
      prompt: "Crea una ficha de producto con imagen, título, descripción y enlace. Después organiza sus elementos en una tarjeta.",
      requirements: [
        "Un article.producto contiene título, descripción e imagen con texto alt.",
        "La regla .producto organiza la ficha con Flexbox.",
        "La tarjeta tiene padding, fondo y borde."
      ],
      hint: "Usa <article class=\"producto\"> y dale display: flex, gap y estilos de tarjeta a .producto.",
      html: "<main>\n  <article class='producto'>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Cuaderno verde abierto sobre una mesa\">\n    <div><p>CUADERNO DE TALLER</p><h1>Ideas en papel</h1><p>Un cuaderno para dibujar, escribir y planear proyectos.</p><a href='#detalles'>Ver detalles</a></div>\n  </article>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f5f1e7;\n}\n\n.producto {\n  max-width: 760px;\n  margin: 20px auto;\n}\n\n.producto img {\n  width: 220px;\n  height: 180px;\n  object-fit: cover;\n}",
      solutionExplanation: "El article representa una ficha completa. Flexbox coloca la imagen y la información en una fila, mientras el fondo, el padding y el borde forman la tarjeta.",
      solutionHtml: "<main>\n  <article class='producto'>\n    <img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 320'%3E%3Crect width='640' height='320' fill='teal'/%3E%3Ccircle cx='480' cy='85' r='45' fill='gold'/%3E%3Cpath d='M0 280 180 110 320 280' fill='forestgreen'/%3E%3Cpath d='m210 280 210-180 220 180' fill='seagreen'/%3E%3C/svg%3E\" alt=\"Cuaderno verde abierto sobre una mesa\">\n    <div><p>CUADERNO DE TALLER</p><h1>Ideas en papel</h1><p>Un cuaderno para dibujar, escribir y planear proyectos.</p><a href='#detalles'>Ver detalles</a></div>\n  </article>\n</main>",
      solutionCss: ".producto {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  background-color: white;\n  border: 1px solid #d7d0c0;\n  border-radius: 12px;\n}\n\n.producto img {\n  width: 220px;\n  height: 180px;\n  object-fit: cover;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const product = getDeclarations(cssRules, ".producto");
        const image = htmlDocument.querySelector("article.producto img[alt]");
        return [
          { label: "La ficha contiene título, descripción e imagen accesible.", passed: htmlDocument.querySelector("article.producto h1, article.producto h2") !== null && htmlDocument.querySelector("article.producto p") !== null && Boolean(image?.getAttribute("alt").trim()) },
          { label: "La regla .producto usa display: flex.", passed: hasValue(product, "display", "flex") },
          { label: "La tarjeta define padding, fondo y borde.", passed: hasDeclaration(product, ["padding"]) && hasDeclaration(product, ["background-color", "background"]) && hasDeclaration(product, ["border"]) }
        ];
      }
    },
    {
      id: "combo-proyecto",
      title: "Proyecto final: portal de una biblioteca",
      prompt: "Construye un pequeño portal de biblioteca que combine navegación semántica, artículos accesibles, variables CSS y una cuadrícula adaptable.",
      requirements: [
        "La navegación apunta a una sección existente y tiene un nombre accesible.",
        "La sección contiene dos artículos con títulos e imágenes con alt.",
        "CSS usa una variable de color y una cuadrícula que cambia a una columna en móvil."
      ],
      hint: "Usa nav aria-label, section id, dos article con img alt, :root con --color-acento y .coleccion con Grid y una consulta @media.",
      html: "<header>\n  <h1>Biblioteca del barrio</h1>\n  <nav><a href=\"#recomendados\">Libros recomendados</a></nav>\n</header>\n<main>\n  <section id=\"recomendados\">\n    <h2>Lecturas de la semana</h2>\n    <div class=\"coleccion\">\n      <article><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='sienna'/%3E%3C/svg%3E\"><h3>El jardín secreto</h3><p>Una historia para descubrir.</p></article>\n      <article><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='steelblue'/%3E%3C/svg%3E\"><h3>Viaje a las estrellas</h3><p>Una aventura para imaginar.</p></article>\n    </div>\n  </section>\n</main>\n<footer><p>Biblioteca del barrio</p></footer>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.coleccion {\n  display: grid;\n  gap: 16px;\n}\n\n.coleccion article {\n  padding: 16px;\n  border: 1px solid #d7d0c0;\n}\n\n.coleccion img {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n}",
      solutionExplanation: "La navegación accesible conecta con la sección. Los article contienen libros independientes y sus imágenes se describen con alt. La variable guarda un color reutilizable y Grid se adapta al ancho de pantalla.",
      solutionHtml: "<header>\n  <h1>Biblioteca del barrio</h1>\n  <nav aria-label=\"Navegación principal\"><a href=\"#recomendados\">Libros recomendados</a></nav>\n</header>\n<main>\n  <section id=\"recomendados\">\n    <h2>Lecturas de la semana</h2>\n    <div class=\"coleccion\">\n      <article><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='sienna'/%3E%3C/svg%3E\" alt=\"Portada color marrón del libro El jardín secreto\"><h3>El jardín secreto</h3><p>Una historia para descubrir.</p></article>\n      <article><img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 50'%3E%3Crect width='80' height='50' fill='steelblue'/%3E%3C/svg%3E\" alt=\"Portada azul del libro Viaje a las estrellas\"><h3>Viaje a las estrellas</h3><p>Una aventura para imaginar.</p></article>\n    </div>\n  </section>\n</main>\n<footer><p>Biblioteca del barrio</p></footer>",
      solutionCss: ":root {\n  --color-acento: #3448c5;\n}\n\n.coleccion {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n\n.coleccion article {\n  padding: 16px;\n  color: var(--color-acento);\n  border: 1px solid #d7d0c0;\n}\n\n@media (max-width: 640px) {\n  .coleccion {\n    grid-template-columns: 1fr;\n  }\n}",
      check: ({ htmlDocument, cssRules }) => {
        const nav = htmlDocument.querySelector("nav[aria-label]");
        const links = [...htmlDocument.querySelectorAll("nav a[href^='#']")];
        const hasDestination = links.some((link) => htmlDocument.getElementById(link.getAttribute("href").slice(1)));
        const articles = [...htmlDocument.querySelectorAll("#recomendados .coleccion article")];
        const variables = getDeclarations(cssRules, ":root");
        const collection = getDeclarations(cssRules, ".coleccion");
        const mobileColumns = cssRules.some((rule) => rule.media && rule.media.includes("max-width") && rule.selector === ".coleccion" && hasValue(rule.declarations, "grid-template-columns", "1fr"));
        return [
          { label: "La navegación tiene nombre accesible y apunta a una sección.", passed: Boolean(nav?.getAttribute("aria-label").trim()) && hasDestination },
          { label: "Hay dos artículos con título e imagen con texto alternativo.", passed: articles.length >= 2 && articles.every((article) => article.querySelector("h3") && Boolean(article.querySelector("img[alt]")?.getAttribute("alt").trim())) },
          { label: "CSS define una variable, Grid y una columna para móvil.", passed: variables.some((declaration) => declaration.property.startsWith("--")) && hasValue(collection, "display", "grid") && hasAtLeastColumns(collection) && mobileColumns }
        ];
      }
    },
    {
      id: "combo-evento",
      title: "Publica una invitación adaptable",
      prompt: "Crea una invitación a un evento con detalles y un formulario validado. Usa variables y tamaños fluidos para darle estilo.",
      requirements: [
        "El HTML incluye fecha, fieldset y un correo obligatorio correctamente etiquetado.",
        "CSS define una variable de color y un título con tamaño clamp().",
        "El formulario presenta sus campos en una cuadrícula adaptable."
      ],
      hint: "Usa time datetime, fieldset/legend, label con for/id y required. En CSS agrega :root, clamp() y Grid con @media.",
      html: "<main class='invitacion'>\n  <p>ENCUENTRO DE LECTURA</p>\n  <h1>Una tarde entre libros</h1>\n  <time>Viernes a las 17:00</time>\n  <p>Trae un libro que quieras compartir con el grupo.</p>\n  <form class='registro'>\n    <fieldset>\n      <legend>Reserva tu lugar</legend>\n      <label>Tu correo</label>\n      <input id='correo' name='correo' type='email'>\n      <button type='submit'>Confirmar asistencia</button>\n    </fieldset>\n  </form>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n  background-color: #f5f1e7;\n}\n\n.invitacion {\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.registro fieldset {\n  display: grid;\n  gap: 12px;\n  padding: 20px;\n}",
      solutionExplanation: "time con datetime facilita interpretar la fecha. Los campos HTML validan la entrada y el CSS utiliza una variable, un título fluido y una cuadrícula que se adapta al espacio.",
      solutionHtml: "<main class='invitacion'>\n  <p>ENCUENTRO DE LECTURA</p>\n  <h1>Una tarde entre libros</h1>\n  <time datetime='2026-11-20T17:00'>Viernes 20 de noviembre a las 17:00</time>\n  <p>Trae un libro que quieras compartir con el grupo.</p>\n  <form class='registro'>\n    <fieldset>\n      <legend>Reserva tu lugar</legend>\n      <label for='correo'>Tu correo</label>\n      <input id='correo' name='correo' type='email' required>\n      <button type='submit'>Confirmar asistencia</button>\n    </fieldset>\n  </form>\n</main>",
      solutionCss: ":root {\n  --color-evento: #3448c5;\n}\n\n.invitacion h1 {\n  color: var(--color-evento);\n  font-size: clamp(2rem, 6vw, 4rem);\n}\n\n.registro fieldset {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 20px;\n}\n\n@media (max-width: 600px) {\n  .registro fieldset {\n    grid-template-columns: 1fr;\n  }\n}",
      check: ({ htmlDocument, cssRules }) => {
        const label = htmlDocument.querySelector("label[for='correo']");
        const email = htmlDocument.querySelector("input#correo[type='email']");
        const root = getDeclarations(cssRules, ":root");
        const heading = getDeclarations(cssRules, ".invitacion h1");
        const form = getDeclarations(cssRules, ".registro fieldset");
        const mobile = cssRules.some((rule) => rule.media && rule.media.includes("max-width") && rule.selector === ".registro fieldset" && hasValue(rule.declarations, "grid-template-columns", "1fr"));
        return [
          { label: "La fecha usa time y el formulario agrupa controles accesibles.", passed: htmlDocument.querySelector("time[datetime]") !== null && htmlDocument.querySelector("fieldset legend") !== null && Boolean(label && email?.required && label.htmlFor === email.id) },
          { label: "CSS define una variable de color y un título con clamp().", passed: root.some((declaration) => declaration.property.startsWith("--")) && heading.some((declaration) => declaration.property === "font-size" && declaration.value.includes("clamp(")) },
          { label: "Los campos usan Grid y se reorganizan en una columna en móvil.", passed: hasValue(form, "display", "grid") && hasAtLeastColumns(form) && mobile }
        ];
      }
    },
    {
      id: "combo-pista-ayuda",
      title: "Añade una pista que aparece al interactuar",
      prompt: "Crea un enlace de ayuda con una nota generada por CSS. La pista debe aparecer al pasar el ratón o al enfocar el enlace con teclado.",
      requirements: [
        "El enlace .ayuda tiene texto comprensible y un title descriptivo.",
        "La regla .ayuda::after crea contenido con attr(title).",
        "La pista se muestra con :hover y :focus-visible."
      ],
      hint: "Define .ayuda::after con content: attr(title) y visibility: hidden. Cambia a visible en .ayuda:hover::after y .ayuda:focus-visible::after.",
      html: "<main>\n  <h1>¿Necesitas ayuda?</h1>\n  <p>En el editor, pulsa <a class='ayuda' href='#requisitos' title='Un requisito describe lo que tu página debe incluir.'>¿Qué es un requisito?</a></p>\n  <section id='requisitos'><h2>Los requisitos</h2><p>Comprueba cada punto antes de enviar.</p></section>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.ayuda {\n  position: relative;\n}\n\n.ayuda::after {\n  content: attr(title);\n  visibility: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 240px;\n  padding: 10px;\n  color: white;\n  background-color: #20243a;\n}\n\n.ayuda:hover::after,\n.ayuda:focus-visible::after {\n  visibility: visible;\n}",
      solutionExplanation: "El pseudoelemento ::after añade una pista visual sin cambiar el HTML. attr(title) reutiliza el texto del atributo y los estados hover y focus-visible la hacen accesible con ratón y teclado.",
      solutionHtml: "<main>\n  <h1>¿Necesitas ayuda?</h1>\n  <p>En el editor, pulsa <a class='ayuda' href='#requisitos' title='Un requisito describe lo que tu página debe incluir.'>¿Qué es un requisito?</a></p>\n  <section id='requisitos'><h2>Los requisitos</h2><p>Comprueba cada punto antes de enviar.</p></section>\n</main>",
      solutionCss: ".ayuda {\n  position: relative;\n}\n\n.ayuda::after {\n  content: attr(title);\n  visibility: hidden;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 240px;\n  padding: 10px;\n  color: white;\n  background-color: #20243a;\n}\n\n.ayuda:hover::after,\n.ayuda:focus-visible::after {\n  visibility: visible;\n}",
      check: ({ htmlDocument, cssRules }) => {
        const link = htmlDocument.querySelector("a.ayuda[title]");
        const tooltip = getDeclarations(cssRules, ".ayuda::after");
        const visibleStates = cssRules
          .flatMap((rule) => rule.selector.split(",").map((selector) => ({
            selector: selector.trim(),
            declarations: rule.declarations
          })))
          .filter((rule) => [".ayuda:hover::after", ".ayuda:focus-visible::after"].includes(rule.selector));
        return [
          { label: "El enlace de ayuda tiene texto y un title descriptivo.", passed: Boolean(link?.textContent.trim() && link?.getAttribute("title").trim()) },
          { label: "::after genera la pista usando attr(title).", passed: tooltip.some((declaration) => declaration.property === "content" && declaration.value.includes("attr(title)")) },
          { label: "La pista se muestra al usar hover y focus-visible.", passed: [".ayuda:hover::after", ".ayuda:focus-visible::after"].every((selector) => visibleStates.some((rule) => rule.selector === selector && hasValue(rule.declarations, "visibility", "visible"))) }
        ];
      }
    },
    {
      id: "combo-capa-panel",
      title: "Construye un panel con capas y desplazamiento",
      prompt: "Diseña un panel de anuncio con una etiqueta superpuesta y texto que pueda desplazarse dentro de un alto limitado.",
      requirements: [
        "El panel establece position: relative y contiene un elemento position: absolute.",
        "La etiqueta superpuesta define z-index.",
        "El texto del panel tiene max-height y overflow-y."
      ],
      hint: "En .panel usa position: relative. En .sello usa position: absolute y z-index. Limita .detalle con max-height y overflow-y: auto.",
      html: "<main>\n  <article class='panel'>\n    <span class='sello'>NUEVO</span>\n    <h1>Festival de historias</h1>\n    <div class='detalle'>\n      <p>Habrá lectura en voz alta, intercambio de libros y talleres para compartir historias.</p>\n      <p>La actividad se realizará en la biblioteca del barrio durante toda la tarde. Las familias pueden traer una manta, agua y un libro para intercambiar.</p>\n      <p>Inscríbete con anticipación para ayudar a organizar los grupos.</p>\n    </div>\n  </article>\n</main>",
      css: "body {\n  margin: 0;\n  padding: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.panel {\n  max-width: 520px;\n  margin: 24px auto;\n  padding: 24px;\n  border: 1px solid #d7d0c0;\n  background-color: #f5f1e7;\n}\n\n.sello {\n  padding: 8px;\n  color: white;\n  background-color: #e85d3f;\n}\n\n.detalle {\n  padding: 12px;\n}",
      solutionExplanation: "La posición relativa establece el contexto para el sello absoluto; z-index lo coloca por encima. El área de detalle limita su alto y habilita desplazamiento cuando hay más texto.",
      solutionHtml: "<main>\n  <article class='panel'>\n    <span class='sello'>NUEVO</span>\n    <h1>Festival de historias</h1>\n    <div class='detalle'>\n      <p>Habrá lectura en voz alta, intercambio de libros y talleres para compartir historias.</p>\n      <p>La actividad se realizará en la biblioteca del barrio durante toda la tarde. Las familias pueden traer una manta, agua y un libro para intercambiar.</p>\n      <p>Inscríbete con anticipación para ayudar a organizar los grupos.</p>\n    </div>\n  </article>\n</main>",
      solutionCss: ".panel {\n  position: relative;\n  max-width: 520px;\n  margin: 24px auto;\n  padding: 24px;\n  border: 1px solid #d7d0c0;\n  background-color: #f5f1e7;\n}\n\n.sello {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 1;\n  padding: 8px;\n  color: white;\n  background-color: #e85d3f;\n}\n\n.detalle {\n  max-height: 120px;\n  overflow-y: auto;\n  padding: 12px;\n}",
      check: ({ cssRules }) => {
        const panel = getDeclarations(cssRules, ".panel");
        const seal = getDeclarations(cssRules, ".sello");
        const detail = getDeclarations(cssRules, ".detalle");
        return [
          { label: "El panel usa position: relative y el sello position: absolute.", passed: hasValue(panel, "position", "relative") && hasValue(seal, "position", "absolute") },
          { label: "El sello define z-index.", passed: hasDeclaration(seal, ["z-index"]) },
          { label: "El texto limita el alto y controla overflow vertical.", passed: hasDeclaration(detail, ["max-height"]) && hasDeclaration(detail, ["overflow", "overflow-y"]) }
        ];
      }
    }
  ]
};

function getDeclarations(rules, selector, media = "") {
  return rules
    .filter((rule) => rule.selector === selector && rule.media === media)
    .flatMap((rule) => rule.declarations);
}

function hasDeclaration(declarations, properties) {
  return declarations.some((declaration) => properties.some((property) => {
    if (declaration.property === property) {
      return true;
    }
    if (property === "padding" || property === "background") {
      return declaration.property.startsWith(`${property}-`);
    }
    if (property === "border") {
      return /^border-(top|right|bottom|left)-/.test(declaration.property);
    }
    if (property === "border-radius") {
      return /^border-(top|bottom)-(left|right)-radius$/.test(declaration.property);
    }
    return false;
  }));
}

function hasValue(declarations, property, value) {
  return declarations.some((declaration) => declaration.property === property && declaration.value.toLowerCase() === value);
}

function parseCss(css) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(css);
  const rules = [];

  function collect(cssRules, media = "") {
    [...cssRules].forEach((rule) => {
      if (rule instanceof CSSStyleRule) {
        rules.push({
          selector: rule.selectorText,
          declarations: [...rule.style].map((property) => ({
            property,
            value: rule.style.getPropertyValue(property).trim()
          })),
          media
        });
      } else if (rule instanceof CSSMediaRule) {
        collect(rule.cssRules, rule.conditionText);
      }
    });
  }

  collect(sheet.cssRules);
  return rules;
}

function hasAtLeastColumns(declarations) {
  const columns = declarations.find((declaration) => declaration.property === "grid-template-columns")?.value;
  if (!columns) {
    return false;
  }

  const repeatMatch = columns.match(/repeat\(\s*(\d+)/i);
  if (repeatMatch) {
    return Number(repeatMatch[1]) >= 2;
  }

  return columns.split(/\s+/).filter((value) => value && value !== "/").length >= 2;
}

function safeParseHtml(html) {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  parsed.querySelectorAll("script, iframe, object, embed, base").forEach((element) => element.remove());
  parsed.querySelectorAll("*").forEach((element) => {
    [...element.attributes].forEach((attribute) => {
      if (attribute.name.toLowerCase().startsWith("on")) {
        element.removeAttribute(attribute.name);
      }
    });
  });
  return parsed;
}

function initializeExerciseApp(app) {
  const course = app.dataset.course;
  const exercises = exerciseSets[course];
  if (!exercises) {
    return;
  }

  const select = app.querySelector("[data-exercise-select]");
  const htmlEditor = app.querySelector("[data-html-editor]");
  const cssEditor = app.querySelector("[data-css-editor]");
  const preview = app.querySelector("[data-preview]");
  const previewStatus = app.querySelector("[data-preview-status]");
  const feedback = app.querySelector("[data-feedback]");
  const hintPanel = app.querySelector("[data-hint-panel]");
  const solutionPanel = app.querySelector("[data-solution-panel]");
  const storageKey = `aula-web-ejercicios-${course}-v1`;
  const savedProgress = loadProgress(storageKey);
  let progress = savedProgress.progress;
  let storageWarning = savedProgress.warning;
  let timer;

  exercises.forEach((exercise, index) => {
    const option = document.createElement("option");
    option.value = exercise.id;
    option.textContent = `Reto ${index + 1}: ${exercise.title}`;
    select.append(option);
  });

  function currentExercise() {
    return exercises.find((exercise) => exercise.id === select.value) || exercises[0];
  }

  function renderProgress() {
    const completed = exercises.filter((exercise) => progress[exercise.id]?.score === 100).length;
    const scores = exercises.map((exercise) => progress[exercise.id]?.score).filter(Number.isFinite);
    const average = scores.length
      ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
      : null;
    const text = `${completed} de ${exercises.length} retos completos`;
    app.querySelector("[data-progress]").textContent = `${average === null
      ? `${text} · aún sin nota`
      : `${text} · promedio actual: ${average}%`}${storageWarning ? ` · ${storageWarning}` : ""}`;
  }

  function renderExercise() {
    const exercise = currentExercise();
    const index = exercises.indexOf(exercise);
    app.querySelector("[data-exercise-number]").textContent = `RETO ${index + 1} DE ${exercises.length}`;
    app.querySelector("[data-title]").textContent = exercise.title;
    app.querySelector("[data-prompt]").textContent = exercise.prompt;

    const requirements = app.querySelector("[data-requirements]");
    requirements.replaceChildren();
    exercise.requirements.forEach((requirement) => {
      const item = document.createElement("li");
      item.textContent = requirement;
      requirements.append(item);
    });

    if (htmlEditor) {
      htmlEditor.value = exercise.html;
    }
    if (cssEditor) {
      cssEditor.value = exercise.css;
    }

    feedback.hidden = true;
    hintPanel.hidden = true;
    solutionPanel.hidden = true;
    app.querySelector("[data-hint-text]").textContent = exercise.hint;
    app.querySelector("[data-solution-explanation]").textContent = exercise.solutionExplanation;
    if (course === "combinado") {
      app.querySelector("[data-solution-html]").textContent = exercise.solutionHtml;
      app.querySelector("[data-solution-css]").textContent = exercise.solutionCss;
    } else {
      app.querySelector("[data-solution-code]").textContent = course === "html" ? exercise.solutionHtml : exercise.solutionCss;
    }

    updatePreview();
    renderProgress();
  }

  function updatePreview() {
    const styles = cssEditor ? cssEditor.value.replace(/<\/style/gi, "<\\/style") : "";
    const sourceHtml = htmlEditor ? htmlEditor.value : currentExercise().html;
    const html = safeParseHtml(sourceHtml).body.innerHTML;
    previewStatus.textContent = "Actualizando…";
    preview.srcdoc = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; object-src 'none'; base-uri 'none'; form-action 'none'">
  <style>
    body { margin: 0; padding: 28px; color: #263746; background: #fff; font-family: Arial, sans-serif; line-height: 1.6; }
    img { max-width: 100%; height: auto; }
    input, textarea, select, button { max-width: 100%; font: inherit; }
    ${styles}
  </style>
</head>
<body>${html}</body>
</html>`;
  }

  function schedulePreview() {
    previewStatus.textContent = "Actualizando…";
    window.clearTimeout(timer);
    timer = window.setTimeout(updatePreview, 220);
  }

  function reviewAnswer() {
    const exercise = currentExercise();
    let checks;

    try {
      const sourceHtml = htmlEditor ? htmlEditor.value : exercise.html;
      const htmlDocument = safeParseHtml(sourceHtml);
      const cssRules = cssEditor ? parseCss(cssEditor.value) : [];
      checks = exercise.check({ htmlDocument, cssRules });
    } catch (error) {
      feedback.hidden = false;
      app.querySelector("[data-score]").textContent = "—";
      const results = app.querySelector("[data-results]");
      results.replaceChildren();
      const item = document.createElement("li");
      item.className = "requisito-fallido";
      item.textContent = "No se pudo revisar el CSS. Comprueba que las llaves y los puntos y coma estén completos.";
      results.append(item);
      return;
    }

    const score = Math.round(checks.filter((check) => check.passed).length / checks.length * 100);
    progress[exercise.id] = { score };
    if (!saveProgress(storageKey, progress)) {
      storageWarning = "el progreso no se pudo guardar en este navegador";
    }

    const results = app.querySelector("[data-results]");
    results.replaceChildren();
    checks.forEach((check) => {
      const item = document.createElement("li");
      item.className = check.passed ? "requisito-cumplido" : "requisito-fallido";
      item.textContent = `${check.passed ? "✓" : "○"} ${check.label}`;
      results.append(item);
    });

    const scoreLabel = score === 100 ? "¡Excelente!" : score > 0 ? "Buen avance" : "Sigue intentando";
    app.querySelector("[data-score]").textContent = `${score}% · ${scoreLabel}`;
    feedback.hidden = false;
    renderProgress();
  }

  app.querySelector("[data-reset]").addEventListener("click", renderExercise);
  app.querySelector("[data-check]").addEventListener("click", reviewAnswer);
  app.querySelector("[data-hint]").addEventListener("click", () => {
    hintPanel.hidden = !hintPanel.hidden;
  });
  app.querySelector("[data-solution]").addEventListener("click", () => {
    solutionPanel.hidden = !solutionPanel.hidden;
  });
  app.querySelector("[data-load-solution]").addEventListener("click", () => {
    const exercise = currentExercise();
    if (htmlEditor) {
      htmlEditor.value = exercise.solutionHtml;
    }
    if (cssEditor) {
      cssEditor.value = exercise.solutionCss;
    }
    feedback.hidden = true;
    updatePreview();
  });
  select.addEventListener("change", renderExercise);
  htmlEditor?.addEventListener("input", schedulePreview);
  cssEditor?.addEventListener("input", schedulePreview);

  [htmlEditor, cssEditor].filter(Boolean).forEach((editor) => {
    editor.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") {
        return;
      }
      event.preventDefault();
      editor.setRangeText("  ", editor.selectionStart, editor.selectionEnd, "end");
      schedulePreview();
    });
  });

  preview.addEventListener("load", () => {
    previewStatus.textContent = "Vista actualizada";
  });

  renderExercise();
}

function loadProgress(key) {
  try {
    const saved = localStorage.getItem(key);
    const progress = saved ? JSON.parse(saved) : {};
    return {
      progress: progress && typeof progress === "object" && !Array.isArray(progress) ? progress : {},
      warning: ""
    };
  } catch {
    return {
      progress: {},
      warning: "no se pudo leer el progreso guardado"
    };
  }
}

function saveProgress(key, progress) {
  try {
    localStorage.setItem(key, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

document.querySelectorAll("[data-exercise-app]").forEach(initializeExerciseApp);
