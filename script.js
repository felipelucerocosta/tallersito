
    const STATE = {
      name: 'Piloto', rank: 'RECLUTA',
      level: 1, unlocked: 1, completed: [],
      editor: null, typewriterTimer: null,
      timerVal: 0, timerInterval: null,
      hintCount: 0, energy: 100,
      rankProgress: ['RECLUTA', 'CABO', 'SARGENTO', 'TENIENTE', 'CAPITÁN', 'COMANDANTE', 'GENERAL', 'ALMIRANTE']
    };

    function updateStatusVisuals(levelId, isSolved) {
      console.log(`Level ${levelId} status: ${isSolved ? 'FIXED' : 'ISSUE'}`);
    }

const missions = [
  {
    "id": 1,
    "type": "JS",
    "timer": null,
    "title": "Protocolo: Despertar de la Hércules",
    "sarge": "¡RECLUTA! No te me duermas en la guardia. La IA de la estación está en coma profundo. Inyecta vida en el kernel cambiando el 'innerHTML' de 'sarge-text' a '<b>ENLACE_ESTABLECIDO</b>'. ¡QUE SE HAGA LA LUZ!",
    "starter": "// Estableciendo conexión con el intercomunicador...\nconst t = document.getElementById('sarge-text');\n",
    "hints": [
      "Busca el elemento usando document.getElementById('sarge-text').",
      "Asigna el nuevo contenido a la propiedad .innerHTML.",
      "Asegúrate de incluir las etiquetas HTML <b> dentro de las comillas."
    ],
    "solution": "document.getElementById('sarge-text').innerHTML = '<b>ENLACE_ESTABLECIDO</b>';",
    "validate": () => document.getElementById('sarge-text').innerHTML.includes('ENLACE_ESTABLECIDO')
  },
  {
    "id": 2,
    "type": "JS",
    "timer": null,
    "title": "Velo de Plasma: Cortafuegos Solar",
    "sarge": "¡RADIACIÓN GAMMA DETECTADA! El escudo térmico tiene una fisura. Marca el sector 'hud-fuel' con un 'borderColor' rojo para que el equipo de soldadura sepa dónde intervenir. ¡CIERRA ESA BRECHA!",
    "starter": "// Marcando sector de error en el firewall...\n",
    "hints": [
      "Accede a los estilos del elemento con .style.",
      "La propiedad específica es .borderColor.",
      "El color debe ser la cadena 'red'."
    ],
    "solution": "document.getElementById('hud-fuel').style.borderColor = 'red';",
    "validate": () => document.getElementById('hud-fuel').style.borderColor === 'red'
  },
  {
    "id": 3,
    "type": "JS",
    "timer": 120,
    "title": "Salto al Vacío: Motor Warp",
    "sarge": "¡FLOTA ENEMIGA EN EL RADAR! Necesitamos saltar al Hiperespacio. Alinea el 'hud-warp' moviéndolo al '80%' de su eje lateral (left). ¡SI FALLAS, SEREMOS CHATARRA ESPACIAL!",
    "starter": "// Ajustando posición del módulo Warp...\n",
    "hints": [
      "Selecciona 'hud-warp' y accede a .style.",
      "Cambia el valor de la propiedad .left.",
      "Recuerda que el valor debe ser un porcentaje: '80%'."
    ],
    "solution": "document.getElementById('hud-warp').style.left = '80%';",
    "validate": () => document.getElementById('hud-warp').style.left === '80%'
  },
  {
    "id": 4,
    "type": "JS",
    "timer": 120,
    "title": "Sigilo: Capa de Invisibilidad",
    "sarge": "¡NOS ESTÁN ESCANEANDO! Reduce la opacidad del 'user-rank' a un tenue 0.2. Debemos ser invisibles entre las estrellas para que no detecten nuestra jerarquía militar.",
    "starter": "// Aplicando máscara de datos al rango...\n",
    "hints": [
      "Localiza 'user-rank' en el DOM.",
      "Usa .style.opacity para el efecto de transparencia.",
      "Asigna el valor numérico 0.2 (o '0.2')."
    ],
    "solution": "document.getElementById('user-rank').style.opacity = '0.2';",
    "validate": () => document.getElementById('user-rank').style.opacity === '0.2'
  },
  {
    "id": 5,
    "type": "JS",
    "timer": 60,
    "title": "SOBRECARGA DEL KERNEL",
    "sarge": "¡LA OSCURIDAD SE ACERCA! Un pulso de energía nos golpea. Ejecuta el protocolo 'activarAlerta()' y reduce el ancho ('width') de 'hud-fuel' a '50px' para concentrar energía en los escudos.",
    "starter": "// ¡DEPURACIÓN DE EMERGENCIA!...\n",
    "hints": [
      "Primero escribe activarAlerta(); en una línea sola.",
      "Luego busca 'hud-fuel' y accede a .style.width.",
      "Establece el ancho como '50px'."
    ],
    "solution": "activarAlerta();\ndocument.getElementById('hud-fuel').style.width = '50px';",
    "validate": () => document.getElementById('hud-fuel').style.width === '50px'
  },
  {
    "id": 6,
    "type": "JS",
    "timer": null,
    "title": "Telemetría del Casco",
    "sarge": "¡IMPACTO DE ASTEROIDES! Dos meteoros golpearon el casco. Suma ambos impactos (50+50) y actualiza el 'innerText' del 'hud-hull' para que los ingenieros sepan la magnitud del daño.",
    "starter": "// Normalizando sensores de integridad...\n",
    "hints": [
      "Usa document.getElementById('hud-hull').",
      "Usa la propiedad .innerText para cambiar el texto visible.",
      "Asigna el valor de la operación 50 + 50."
    ],
    "solution": "document.getElementById('hud-hull').innerText = 50 + 50;",
    "validate": () => document.getElementById('hud-hull').innerText === '100'
  },
  {
    "id": 7,
    "type": "JS",
    "timer": null,
    "title": "Refactorización de Interfaz",
    "sarge": "¡EL VISOR ESTÁ DESACTUALIZADO! Cambia el 'borderRadius' de 'sarge-wrapper' al '50%' para activar el Modo Lente. ¡QUIERO VER EL UNIVERSO CON CLARIDAD!",
    "starter": "// Puliendo la UI del intercomunicador...\n",
    "hints": [
      "Accede a 'sarge-wrapper' en el DOM.",
      "La propiedad de estilo es .style.borderRadius.",
      "Usa el valor '50%' para hacerlo circular."
    ],
    "solution": "document.getElementById('sarge-wrapper').style.borderRadius = '50%';",
    "validate": () => document.getElementById('sarge-wrapper').style.borderRadius === '50%'
  },
  {
    "id": 8,
    "type": "JS",
    "timer": null,
    "title": "Variables y Scope de Memoria",
    "sarge": "¡FUGA EN EL SECTOR 7! El nivel de oxígeno es crítico (30). Crea un sensor que detecte si es menor a 50 y lo reasigne a 100 usando los tanques de reserva. ¡SALVA A LA TRIPULACIÓN!",
    "starter": "// Optimizando búffer de soporte vital...\nlet oxigeno = 30;\n",
    "hints": [
      "Usa un condicional: if (oxigeno < 50).",
      "Dentro del bloque { }, cambia el valor: oxigeno = 100;",
      "Esto simula una recarga automática de los tanques."
    ],
    "solution": "if (oxigeno < 50) {\n  oxigeno = 100;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('if') && code.includes('oxigeno = 100'); }
  },
  {
    "id": 9,
    "type": "JS",
    "timer": null,
    "title": "Event Listener de Consola",
    "sarge": "¡CONFIGURACIÓN DE ATAQUE! Agrega un listener de 'click' al botón 'btn-next-level'. Cuando se pulse, debe imprimir 'SISTEMA_OK' en la consola. ¡ES EL BOTÓN DE PÁNICO!",
    "starter": "// Conectando periféricos de entrada...\n",
    "hints": [
      "Usa document.getElementById('btn-next-level').",
      "Llama al método .addEventListener('click', () => { ... }).",
      "Dentro de la función, escribe console.log('SISTEMA_OK');"
    ],
    "solution": "document.getElementById('btn-next-level').addEventListener('click', () => {\n  console.log('SISTEMA_OK');\n});",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('addEventListener') && code.includes('SISTEMA_OK'); }
  },
  {
    "id": 10,
    "type": "JS",
    "timer": 90,
    "title": "Protocolo: Inyección de Alertas",
    "sarge": "¡ATAQUE HACKER DETECTADO! Crea un 'div', dale la clase 'hud-warning', ponle el texto 'ERROR_KERNEL' y agrégalo al 'terminal' con 'appendChild'. ¡RÁPIDO O PERDEMOS EL CONTROL!",
    "starter": "// Defendiendo el terminal...\n",
    "hints": [
      "Crea el elemento: const div = document.createElement('div');",
      "Cambia su clase: div.className = 'hud-warning';",
      "Usa .appendChild(...) para insertarlo en el terminal."
    ],
    "solution": "const div = document.createElement('div');\ndiv.className = 'hud-warning';\ndiv.innerText = 'ERROR_KERNEL';\ndocument.getElementById('terminal').appendChild(div);",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('createElement') && code.includes('appendChild') && code.includes('ERROR_KERNEL'); }
  },
  {
    "id": 11,
    "type": "JS",
    "timer": null,
    "title": "Bucle de Escaneo de Sectores",
    "sarge": "¡BARRIDO DE SENSORES! Recorre el array de 'sectores' con un bucle 'for' y muestra cada uno en la terminal. ¡NO PODEMOS DEJAR NI UN RADICAL SIN DETECTAR!",
    "starter": "const sectores = ['MOTOR', 'HANGAR', 'PUENTE'];\n",
    "hints": [
      "Estructura del bucle: for (let i=0; i < sectores.length; i++).",
      "Para acceder al sector actual, usa sectores[i].",
      "Imprímelo usando console.log()."
    ],
    "solution": "for (let i = 0; i < sectores.length; i++) {\n  console.log(sectores[i]);\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('for') && code.includes('sectores[i]'); }
  },
  {
    "id": 12,
    "type": "JS",
    "timer": null,
    "title": "Acceso: Firma de Comandante",
    "sarge": "¡PROTOCOLOS MULTILINEALES! Crea la función 'validarAcceso(perfil)'. Si el perfil incluye 'ADMIN' Y tiene más de 5 letras, retorna true. ¡QUIERO ORDEN EN EL PUENTE!",
    "starter": "// Configurando guardia de protocolos...\n",
    "hints": [
      "Define la función: function validarAcceso(perfil) { ... }.",
      "Usa includes('ADMIN') y .length > 5 en el condicional.",
      "Retorna true si se cumplen ambas condiciones."
    ],
    "solution": "function validarAcceso(perfil) {\n  return perfil.includes('ADMIN') && perfil.length > 5;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('function') && code.includes('ADMIN') && code.includes('length > 5'); }
  },
  {
    "id": 13,
    "type": "JS",
    "timer": null,
    "title": "Filtro: Residuos de Supernova",
    "sarge": "¡DATOS CORRUPTOS! Filtra los 'logs' buscando solo los que tengan 'critico: true'. Por cada uno, imprime '¡PELIGRO!' antes de devolverlo. ¡LIMPIA ESE BUFFER!",
    "starter": "const logs = [{id:1, critico:true}, {id:2, critico:false}, {id:3, critico:true}];\n",
    "hints": [
      "El método .filter() toma una función: logs.filter(l => { ... }).",
      "Dentro, usa console.log('PELIGRO') si l.critico es verdadero.",
      "No olvides retornar l.critico para completar el filtro."
    ],
    "solution": "const f = logs.filter(l => {\n  if (l.critico) {\n    console.log('PELIGRO');\n    return true;\n  }\n  return false;\n});",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('PELIGRO'); }
  },
  {
    "id": 14,
    "type": "JS",
    "timer": null,
    "title": "Misión: El Vórtice de Datos",
    "sarge": "¡TRANSMISIÓN MULTIDIMENSIONAL! Filtra datos válidos (valid: true) y luego usa '.map' para sumarle 50 a cada valor 'v'. ¡CADA UNIDAD DE ENERGÍA CUENTA!",
    "starter": "const stream = [{v:10, valid:true}, {v:50, valid:false}, {v:30, valid:true}];\n",
    "hints": [
      "Encadena los métodos: stream.filter(s => s.valid).map(s => ...).",
      "En el .map(), devuelve el valor s.v + 50.",
      "Esto transformará la lista original en una de nuevos valores."
    ],
    "solution": "const result = stream.filter(s => s.valid).map(s => s.v + 50);",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('.map') && code.includes('+ 50'); }
  },
  {
    "id": 15,
    "type": "JS",
    "timer": 120,
    "title": "Cápsula: La Caja de Pandora",
    "sarge": "¡DESCOMPRESIÓN DE DATOS! Desestructura 'lat' y 'long' del GPS. Si la latitud es menor a 0, imprime 'SECTOR_SUR'. ¡IDENTIFICA NUESTRA POSICIÓN!",
    "starter": "const gps = { lat: -34.6, long: -58.4 };\n",
    "hints": [
      "Sintaxis de desestructuración: const { lat, long } = gps;.",
      "Luego usa un condicional if (lat < 0).",
      "Finalmente, llama a console.log('SECTOR_SUR')."
    ],
    "solution": "const { lat, long } = gps;\nif (lat < 0) {\n  console.log('SECTOR_SUR');\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('{ lat, long }') && code.includes('SECTOR_SUR'); }
  },
  {
    "id": 16,
    "type": "JS",
    "timer": null,
    "title": "Misión: El Árbol de Decisiones",
    "sarge": "¡RUMBOS GALÁCTICOS! Crea un 'switch' para la variable 'prioridad'. Si es 'ALTA', llama a 'activarAlerta()'. Si es 'BAJA', imprime 'STATUS_VERDE'. ¡DECIDE EL DESTINO!",
    "starter": "let prioridad = 'ALTA';\n",
    "hints": [
      "Estructura: switch(prioridad) { ... }.",
      "Usa case 'ALTA': activarAlerta(); break;.",
      "Y case 'BAJA': console.log('STATUS_VERDE'); break;."
    ],
    "solution": "switch(prioridad) {\n  case 'ALTA': activarAlerta(); break;\n  case 'BAJA': console.log('STATUS_VERDE'); break;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('switch') && code.includes('activarAlerta'); }
  },
  {
    "id": 17,
    "type": "JS",
    "timer": null,
    "title": "Factory: Forja de Nanobots",
    "sarge": "¡REPARACIÓN AUTÓNOMA! Crea el constructor 'Modulo' con id y status. Incluye un método 'actualizar' que cambie su estado. ¡LA ESTACIÓN DEBE RECONSTRUIRSE SOLA!",
    "starter": "// Diseñando unidad de reparación...\n",
    "hints": [
      "Usa la palabra clave function Modulo(id, status) { ... }.",
      "Dentro, asigna this.id = id; y this.status = status;.",
      "Añade un método: this.actualizar = (n) => this.status = n;"
    ],
    "solution": "function Modulo(id, status) {\n  this.id = id;\n  this.status = status;\n  this.actualizar = (n) => this.status = n;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('this.status') && code.includes('this.actualizar'); }
  },
  {
    "id": 18,
    "type": "JS",
    "timer": null,
    "title": "Mando: El Enjambre Spica",
    "sarge": "¡DRONES DE DEFENSA! Crea la 'class Dron' con un constructor para el ID y un método 'operar()' que loguee 'DRON_ACTIVO'. ¡SI NOS ABORDAN, NO HABRÁ PIEDAD!",
    "starter": "// Levantando framework de mando...\n",
    "hints": [
      "Estructura moderna: class Dron { ... }.",
      "El constructor recibe id: constructor(id) { this.id = id; }.",
      "El método operar() va fuera del constructor."
    ],
    "solution": "class Dron {\n  constructor(id) { this.id = id; }\n  operar() { console.log('DRON_ACTIVO'); }\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('class') && code.includes('constructor') && code.includes('operar'); }
  },
  {
    "id": 19,
    "type": "JS",
    "timer": null,
    "title": "Sincro: El Eco de Europa",
    "sarge": "¡LLAMADA AL ABISMO! Conecta con la API central. Usa 'fetch', procesa el JSON y usa '.catch' para reportar errores. ¡QUE NO SE PIERDA LA SEÑAL!",
    "starter": "// Sincronizando con la base lunar...\n",
    "hints": [
      "Inicia con fetch('https://api.stark.os').",
      "Usa .then(r => r.json()) para procesar la respuesta.",
      "Termina con .catch(e => console.error(e)) para la seguridad."
    ],
    "solution": "fetch('https://api.stark.os')\n  .then(r => r.json())\n  .catch(e => console.error(e));",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('fetch') && code.includes('.catch'); }
  },
  {
    "id": 20,
    "type": "JS",
    "timer": 150,
    "title": "Misión: El Aliento de Io",
    "sarge": "¡TIEMPO DE ESPERA! Crea la función asíncrona 'fetchStatus()'. Usa 'await' para obtener los datos y retorna el campo 'valid'. ¡LA COORDINACIÓN ES VITAL!",
    "starter": "// Acceso asíncrono al núcleo...\n",
    "hints": [
      "Usa las palabras reservadas: async function fetchStatus() { ... }.",
      "Dentro, usa const res = await fetch('url');.",
      "Convierte a JSON y retorna el campo específico."
    ],
    "solution": "async function fetchStatus() {\n  const r = await fetch('url');\n  const d = await r.json();\n  return d.valid;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('async') && code.includes('await'); }
  },
  {
    "id": 21,
    "type": "JS",
    "timer": null,
    "title": "Evento: El Terminal de Phobos",
    "sarge": "¡INTERACCIÓN CRÍTICA! Escucha clicks en el terminal. Si el objetivo es un 'SPAN', píntalo de 'green'. ¡CADA DATO DEBE DESTACAR EN LA OSCURIDAD!",
    "starter": "document.getElementById('terminal').addEventListener('click', (e) => {\n  // Filtrando eventos...\n});\n",
    "hints": [
      "Usa e.target para referirte al elemento clicado.",
      "Comprueba si e.target.tagName === 'SPAN'.",
      "Si es cierto, asigna e.target.style.color = 'green';"
    ],
    "solution": "document.getElementById('terminal').addEventListener('click', (e) => {\n  if (e.target.tagName === 'SPAN') {\n    e.target.style.color = 'green';\n  }\n});",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('tagName') && code.includes('SPAN') && code.includes('green'); }
  },
  {
    "id": 22,
    "type": "JS",
    "timer": null,
    "title": "Persistencia: El Diario de Deimos",
    "sarge": "¡MEMORIA ETERNA! Guarda el objeto 'oficial' en localStorage. Usa 'JSON.stringify' para que el kernel pueda leerlo tras un apagón. ¡NADA SE OLVIDA!",
    "starter": "const oficial = { id: 1, rank: 'GENERAL' };\n",
    "hints": [
      "Llama al método localStorage.setItem(clave, valor).",
      "La clave es la cadena 'oficial'.",
      "El valor debe ser transformado con JSON.stringify(oficial)."
    ],
    "solution": "localStorage.setItem('oficial', JSON.stringify(oficial));",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('localStorage') && code.includes('stringify'); }
  },
  {
    "id": 23,
    "type": "JS",
    "timer": null,
    "title": "Misión: El Código Enigma",
    "sarge": "¡SEGURIDAD REGEX! El código debe empezar por 'STARK-', tener 4 dígitos y acabar en '!'. ¡SI UN SOLO BIT FALLA, ES UN TRAIDOR INFILTRADO!",
    "starter": "const regex = /^STARK-\\d{4}!$/;\n",
    "hints": [
      "Usa el método .test() de la expresión regular.",
      "Prueba con una cadena válida como 'STARK-1234!'.",
      "Puedes loguear el resultado con console.log()."
    ],
    "solution": "console.log(regex.test('STARK-1234!'));",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('.test') && code.includes('/^STARK'); }
  },
  {
    "id": 24,
    "type": "JS",
    "timer": null,
    "title": "Cápsula: El Secreto de Saturno",
    "sarge": "¡ENCAPSULAMIENTO TOTAL! Crea 'crearContador' usando Closures para proteger 'count'. Debe retornar un objeto con 'sumar' y 'ver'. ¡PRIVACIDAD MILITAR!",
    "starter": "function crearContador() {\n  let count = 0;\n  // Tu lógica aquí...\n}\n",
    "hints": [
      "Debes devolver un objeto literal { ... }.",
      "Incluye sumar: () => count++.",
      "E incluye ver: () => count."
    ],
    "solution": "function crearContador() {\n  let count = 0;\n  return {\n    sumar: () => count++,\n    ver: () => count\n  };\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('return {') && code.includes('count++'); }
  },
  {
    "id": 25,
    "type": "JS",
    "timer": 120,
    "title": "Pulsar: El Latido Infinito",
    "sarge": "¡GENERADORES ACTIVOS! Crea un generador que emita códigos 'X-0', 'X-1'... infinitamente usando 'yield'. ¡EL FLUJO DE ENERGÍA NO PUEDE PARAR!",
    "starter": "function* pulsar() {\n  let i = 0;\n  // Generando...\n}\n",
    "hints": [
      "Usa un bucle infinito: while(true) { ... }.",
      "Dentro del bucle, usa yield 'X-' + i++;.",
      "El asterisco en function* es fundamental."
    ],
    "solution": "function* pulsar() {\n  let i = 0;\n  while(true) {\n    yield 'X-' + i++;\n  }\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('function*') && code.includes('yield'); }
  },
  {
    "id": 26,
    "type": "JS",
    "timer": null,
    "title": "Caché: El Eco de Neptuno",
    "sarge": "¡RECUPERACIÓN DE DATOS! Parsea la telemetría de la caché (localStorage). Si detectas un 'vortex', activa la alerta de inmediato. ¡RÁPIDO, PILOTO!",
    "starter": "const raw = localStorage.getItem('telemetry');\n",
    "hints": [
      "Convierte la cadena JSON en objeto: const data = JSON.parse(raw);.",
      "Comprueba si existe: if (data && data.vortex).",
      "Si la condición se cumple, llama a activarAlerta();."
    ],
    "solution": "const data = JSON.parse(raw);\nif (data && data.vortex) {\n  activarAlerta();\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('JSON.parse') && code.includes('activarAlerta'); }
  },
  {
    "id": 27,
    "type": "JS",
    "timer": null,
    "title": "Sesión: El Token de Urano",
    "sarge": "¡SEGURIDAD VOLÁTIL! Guarda la clave 'STARK_ACCESS' en sessionStorage. Si reiniciamos, este secreto debe desaparecer para siempre. ¡REGLAS DE SEGURIDAD!",
    "starter": "// Datos temporales...\n",
    "hints": [
      "Usa sessionStorage.setItem(clave, valor).",
      "La clave es 'access' y el valor es 'STARK_ACCESS'.",
      "Esto asegura persistencia solo durante la sesión actual."
    ],
    "solution": "sessionStorage.setItem('access', 'STARK_ACCESS');",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('sessionStorage.setItem'); }
  },
  {
    "id": 28,
    "type": "JS",
    "timer": null,
    "title": "Radar: El Ojo de Tritón",
    "sarge": "¡VIGILANCIA ABSOLUTA! Usa IntersectionObserver. Si el 'sarge-container' está al 100% visible, imprime 'OBJETIVO_FIJADO'. ¡NO LES QUITES EL OJO!",
    "starter": "const radar = new IntersectionObserver((entries) => {\n  // Vigilando...\n});\n",
    "hints": [
      "Dentro de la función, usa if (entries[0].intersectionRatio === 1).",
      "Haz el console.log('OBJETIVO_FIJADO') ahí dentro.",
      "No olvides iniciar el radar: radar.observe(document.getElementById('sarge-container'));"
    ],
    "solution": "const radar = new IntersectionObserver((entries) => {\n  if (entries[0].intersectionRatio === 1) {\n    console.log('OBJETIVO_FIJADO');\n  }\n});\nradar.observe(document.getElementById('sarge-container'));",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('IntersectionObserver') && code.includes('observe'); }
  },
  {
    "id": 29,
    "type": "JS",
    "timer": null,
    "title": "Navegación: El Mapa de Plutón",
    "sarge": "¡COORDENADAS OCULTAS! Extrae el parámetro 'coord' de la URL usando URLSearchParams. ¡NECESITAMOS SABER NUESTRA POSICIÓN EXACTA!",
    "starter": "const params = new URLSearchParams(window.location.search);\n",
    "hints": [
      "Usa el método params.get('coord').",
      "Asigna el resultado a una constante para validarlo.",
      "Esto lee datos directamente de la URL del terminal."
    ],
    "solution": "const coord = params.get('coord');\nconsole.log(coord);",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('URLSearchParams') && code.includes('get('); }
  },
  {
    "id": 30,
    "type": "JS",
    "timer": null,
    "title": "Proxy: El Escudo de Eris",
    "sarge": "¡INTERCEPCIÓN TÁCTICA! Usa un Proxy para que la potencia del escudo nunca baje de 50. ¡PROTECCIÓN TOTAL INQUEBRANTABLE!",
    "starter": "const target = { power: 100 };\nconst proxy = new Proxy(target, {\n  // Tu trampa de seguridad...\n});\n",
    "hints": [
      "El 'handler' del Proxy debe tener un método 'set'.",
      "Sintaxis: set(objeto, propiedad, valor) { ... }.",
      "Si el valor es < 50, fuérzalo a 50 antes de asignarlo."
    ],
    "solution": "const proxy = new Proxy(target, {\n  set: (t, p, v) => {\n    if (v < 50) v = 50;\n    t[p] = v;\n    return true;\n  }\n});",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('new Proxy') && code.includes('set:'); }
  },
  {
    "id": 31,
    "type": "JS",
    "timer": null,
    "title": "Aborto: La Señal de Ceres",
    "sarge": "¡MISIÓN ABORTADA! Si la señal tarda demasiado, usa AbortController para cancelar el fetch. ¡NO ARRIESGUES LA INTEGRIDAD DE LA ESTACIÓN!",
    "starter": "const url = 'https://api.stark.os/vortex';\nconst controller = new AbortController();\n// Inicia el fetch con signal...\n",
    "hints": [
      "Pasa el objeto de opciones como segundo argumento a fetch.",
      "La propiedad es { signal: controller.signal }.",
      "Esto vincula el fetch con el controlador de aborto."
    ],
    "solution": "fetch(url, { signal: controller.signal });",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('AbortController') && code.includes('signal'); }
  },
  {
    "id": 32,
    "type": "JS",
    "timer": null,
    "title": "Blob: El Manifiesto Haumea",
    "sarge": "¡LOGS FÍSICOS! Crea un Blob con el reporte 'STARK_OK' y genera su URL. ¡NECESITAMOS UN REGISTRO TANGIBLE DE ESTA BATALLA!",
    "starter": "const data = 'REPORTE_OFICIAL_STARK_OS';\n",
    "hints": [
      "Crea el Blob: const b = new Blob([data], { type: 'text/plain' });.",
      "Usa URL.createObjectURL(b) para obtener la dirección.",
      "No olvides envolver la data en un array [data]."
    ],
    "solution": "const blob = new Blob([data], { type: 'text/plain' });\nconst url = URL.createObjectURL(blob);",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('new Blob') && code.includes('createObjectURL'); }
  },
  {
    "id": 33,
    "type": "JS",
    "timer": null,
    "title": "Espía: El Sensor Makemake",
    "sarge": "¡ALERTA DE SEGURIDAD! Usa MutationObserver para detectar si alguien borra un log del terminal. ¡VIGILA CADA CAMBIO EN EL REGISTRO!",
    "starter": "const obs = new MutationObserver((list) => {\n  console.log('CAMBIO_DETECTADO');\n});\n",
    "hints": [
      "Debes 'observar' el elemento del terminal.",
      "Usa obs.observe(document.getElementById('terminal'), { ... }).",
      "La opción necesaria es { childList: true }."
    ],
    "solution": "obs.observe(document.getElementById('terminal'), { childList: true });",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('MutationObserver') && code.includes('childList'); }
  },
  {
    "id": 34,
    "type": "JS",
    "timer": null,
    "title": "Clon: El Espejo de Vega",
    "sarge": "¡REPLICACIÓN PERFECTA! Crea una copia profunda de los 'planos' usando 'structuredClone'. ¡UN ERROR DE COPIA SIGNIFICA EL FIN!",
    "starter": "const planos = { core: 101, sub: { id: 2 } };\n",
    "hints": [
      "A diferencia de la copia simple, structuredClone copia sub-objetos.",
      "Solo necesitas una línea: const clone = structuredClone(planos);.",
      "Prueba imprimiendo el clon en consola."
    ],
    "solution": "const clone = structuredClone(planos);",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('structuredClone'); }
  },
  {
    "id": 35,
    "type": "JS",
    "timer": 300,
    "title": "CORE: El Corazón del Hércules",
    "sarge": "¡MULTITAREA GALÁCTICA! Despierta al Worker de seguridad 'sec.js' y envíale el mensaje 'OPERAR'. ¡APROVECHA CADA CICLO DE CPU!",
    "starter": "// Iniciando trabajador externo...\n",
    "hints": [
      "Crea el trabajador: const w = new Worker('sec.js');.",
      "Usa w.postMessage('OPERAR') para darle órdenes.",
      "Los workers liberan carga del hilo principal de la nave."
    ],
    "solution": "const worker = new Worker('sec.js');\nworker.postMessage('OPERAR');",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('new Worker') && code.includes('postMessage'); }
  },
  {
    "id": 36,
    "type": "TS",
    "timer": null,
    "title": "TS: El Rigor de Sirio",
    "sarge": "¡BLINDAJE DE TIPOS! Asigna 'string' y 'number' a las constantes de acceso en TypeScript. ¡LA DISCIPLINA ES NUESTRA SALVACIÓN!",
    "starter": "let id = 'SEC-01';\nlet val = 100;\n",
    "hints": [
      "Debes añadir los tipos después de los nombres.",
      "Usa ': string' para id.",
      "Usa ': number' para val."
    ],
    "solution": "let id: string = 'SEC-01';\nlet val: number = 100;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes(': string') && code.includes(': number'); }
  },
  {
    "id": 37,
    "type": "TS",
    "timer": null,
    "title": "TS: El Contrato de Vega",
    "sarge": "¡ESTRICTA INTERFAZ! Define 'Station' con nombre (string) y capacidad (number). ¡TODO COMPONENTE DEBE CUMPLIR EL PLANO!",
    "starter": "interface Station {\n  // Planos estructurales...\n}\n",
    "hints": [
      "Crea la propiedad 'name: string'.",
      "Crea la propiedad 'capacity: number'.",
      "Las interfaces no se terminan con igual (=)."
    ],
    "solution": "interface Station {\n  name: string;\n  capacity: number;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('interface') && code.includes('name: string'); }
  },
  {
    "id": 38,
    "type": "TS",
    "timer": null,
    "title": "TS: El Sello de Betelgeuse",
    "sarge": "¡DATOS INAMOVIBLES! Usa 'readonly' en la temperatura del reactor. ¡NI EL GENERAL PUEDE CAMBIAR LO QUE LA TELEMETRÍA REGISTRÓ!",
    "starter": "interface CoreData {\n  // temperatura inmutable...\n}\n",
    "hints": [
      "La sintaxis es 'readonly nombre: tipo;'.",
      "Usa readonly temp: number;.",
      "Esto impide reasignar el valor una vez creado."
    ],
    "solution": "interface CoreData {\n  readonly temp: number;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('readonly'); }
  },
  {
    "id": 39,
    "type": "TS",
    "timer": null,
    "title": "TS: El Código de Rigel",
    "sarge": "¡ENUMERACIÓN TÁCTICA! Define los niveles de alerta: LOW, MEDIUM, CRITICAL. ¡ASIGNA EL NIVEL MÁXIMO A TU ESTADO ACTUAL!",
    "starter": "enum Warning { LOW, MEDIUM, CRITICAL }\n",
    "hints": [
      "Crea una variable: let status = ...;.",
      "Asigna el valor del enum: Warning.CRITICAL;.",
      "Los enums son excelentes para estados finitos."
    ],
    "solution": "let status = Warning.CRITICAL;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('enum') && code.includes('Warning.CRITICAL'); }
  },
  {
    "id": 40,
    "type": "TS",
    "timer": 120,
    "title": "TS: La Conjunción Deneb",
    "sarge": "¡INTERSECCIÓN DE PODER! Une 'Armor' y 'Shield' con el operador '&'. ¡JUNTOS SOMOS INVULNERABLES ANTE CUALQUIER ATAQUE!",
    "starter": "type Armor = { v: number };\ntype Shield = { p: number };\n",
    "hints": [
      "Crea un nuevo tipo: type FullDef = Armor & Shield;.",
      "El símbolo & es el operador de intersección.",
      "Esto crea un tipo que tiene propiedades de ambos."
    ],
    "solution": "type FullDef = Armor & Shield;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('&'); }
  },
  {
    "id": 41,
    "type": "TS",
    "timer": null,
    "title": "TS: El Secreto de Arcturus",
    "sarge": "¡PRIVACIDAD ABSOLUTA! Crea la clase RadioClient con una propiedad 'private' para la frecuencia. ¡SI DESCUBREN EL CANAL, LA GUERRA TERMINA!",
    "starter": "class RadioClient {\n  // Clave privada...\n}\n",
    "hints": [
      "Usa el modificador de acceso 'private'.",
      "Sintaxis: private freq: string;.",
      "Las propiedades privadas solo existen dentro de la clase."
    ],
    "solution": "class RadioClient {\n  private freq: string;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('private'); }
  },
  {
    "id": 42,
    "type": "TS",
    "timer": null,
    "title": "TS: El Recipiente Spica",
    "sarge": "¡INGENIERÍA ADAPTATIVA! Crea una Interface 'Box<T>' que acepte cualquier carga genérica. ¡LA FLEXIBILIDAD ES NUESTRA MEJOR ARMA!",
    "starter": "// Generics de flota...\n",
    "hints": [
      "Usa los corchetes angulares para el genérico: Box<T>.",
      "Define una propiedad que use ese tipo: data: T;.",
      "Esto permite que la caja guarde cualquier cosa."
    ],
    "solution": "interface Box<T> {\n  data: T;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('<T>'); }
  },
  {
    "id": 43,
    "type": "TS",
    "timer": null,
    "title": "TS: El Linaje de Antares",
    "sarge": "¡HERENCIA DE FUERZA! PulseLaser extiende Laser y sobrecarga 'fire()' llamando a 'super.fire()'. ¡CONCENTRA TODA LA POTENCIA!",
    "starter": "class Laser { fire() { console.log('PIU'); } }\n",
    "hints": [
      "Usa la sintaxis extends Laser.",
      "Declara el método fire() { ... }.",
      "Dentro de fire, escribe super.fire();."
    ],
    "solution": "class PulseLaser extends Laser {\n  fire() {\n    super.fire();\n  }\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('extends') && code.includes('super'); }
  },
  {
    "id": 44,
    "type": "TS",
    "timer": null,
    "title": "TS: El Filtro de Fomalhaut",
    "sarge": "¡DISCRIMINACIÓN TÁCTICA! Usa un 'Type Guard' para comprobar si un valor es 'number'. ¡NO DEJES QUE EL RUIDO INTERFIERA CON LOS DATOS!",
    "starter": "function verify(val: string | number) {\n  // Type Guard...\n}\n",
    "hints": [
      "Usa if (typeof val === 'number') { ... }.",
      "Esto filtra el tipo específico en tiempo de ejecución.",
      "Es vital para manejar tipos 'union'."
    ],
    "solution": "function verify(val: string | number) {\n  if (typeof val === 'number') {\n    return true;\n  }\n  return false;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('typeof') && code.includes('number'); }
  },
  {
    "id": 45,
    "type": "TS",
    "timer": 150,
    "title": "TS: El Vórtice Pollux",
    "sarge": "¡RANGO DE COMANDO! Crea una función que reciba (...args: string[]) y los una. ¡QUIERO UNIDAD TOTAL EN LAS COMUNICACIONES!",
    "starter": "function processAll(...args: string[]) {\n  // Spread de comandos...\n}\n",
    "hints": [
      "Usa el método .join(', ') para unir el array.",
      "Los parámetros rest recogen todos los argumentos en una lista.",
      "Retorna el resultado de la unión."
    ],
    "solution": "function processAll(...args: string[]) {\n  return args.join(', ');\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('...') && code.includes('string[]'); }
  },
  {
    "id": 46,
    "type": "TS",
    "timer": null,
    "title": "TS: El Módulo Canopus",
    "sarge": "¡EXPORTACIÓN TÁCTICA! Exporta la clase 'Navigator' por defecto. ¡TODOS EN LA FLOTA DEBEN TENER NUESTRAS TABLAS DE NAVEGACIÓN!",
    "starter": "// Compartiendo protocolos...\n",
    "hints": [
      "Usa la sintaxis export default class Navigator { ... }.",
      "Esto permite importar la clase sin llaves.",
      "Es el estándar para módulos principales."
    ],
    "solution": "export default class Navigator {} ",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('export default'); }
  },
  {
    "id": 47,
    "type": "TS",
    "timer": null,
    "title": "TS: El Límite de Castor",
    "sarge": "¡GENÉRICOS CONTROLADOS! Tu función solo debe aceptar tipos que tengan una propiedad 'id: number'. ¡GARANTIZA EL ORDEN JERÁRQUICO!",
    "starter": "function sync<T extends {id: number}>(obj: T) {\n  //...\n}\n",
    "hints": [
      "Usa la cláusula extends en el genérico.",
      "Sintaxis: <T extends {id: number}>.",
      "Esto asegura que el objeto tenga al menos esa propiedad id."
    ],
    "solution": "function sync<T extends {id: number}>(obj: T) {\n  return obj.id;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('extends') && code.includes('id: number'); }
  },
  {
    "id": 48,
    "type": "TS",
    "timer": null,
    "title": "TS: El Seguro Procyon",
    "sarge": "¡BLOQUEO DE PARÁMETROS! Crea un Mapped Type que haga todas las propiedades 'readonly'. ¡INMUTABILIDAD ABSOLUTA EN LOS PLANOS!",
    "starter": "// Mapeo de seguridad...\n",
    "hints": [
      "Usa la sintaxis: type Safe<T> = { readonly [P in keyof T]: T[P] }.",
      "Esto itera sobre todas las claves del tipo T.",
      "Añade readonly antes para proteger cada propiedad."
    ],
    "solution": "type Safe<T> = {\n  readonly [P in keyof T]: T[P]\n};",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('readonly') && code.includes('keyof'); }
  },
  {
    "id": 49,
    "type": "TS",
    "timer": null,
    "title": "TS: El Vigía de Capella",
    "sarge": "¡VIGILANCIA DECORADA! Usa el decorador '@Log' en la clase. Debe informar de cada instancia creada. ¡NADA ESCAPA A MI MANDO!",
    "starter": "function Log(target: any) {}\n",
    "hints": [
      "Coloca @Log justo encima de la clase Pilot.",
      "Sintaxis: @Log class Pilot { ... }.",
      "Los decoradores son una forma avanzada de envolver clases."
    ],
    "solution": "function Log(target: any) {}\n\n@Log\nclass Pilot {}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('@Log'); }
  },
  {
    "id": 50,
    "type": "TS",
    "timer": 1200,
    "title": "TS: El Núcleo Unificado",
    "sarge": "¡ARQUITECTURA SUPREMA! Crea el Singleton 'MasterKernel' con instancia estática y constructor privado. ¡SÓLO PUEDE HABER UN LÍDER!",
    "starter": "class MasterKernel {\n  // Singleton...\n}\n",
    "hints": [
      "Usa private static instance: MasterKernel;.",
      "Define el constructor como private para evitar 'new'.",
      "Crea un método static getInstance() para obtener la instancia única."
    ],
    "solution": "class MasterKernel {\n  private static instance: MasterKernel;\n  private constructor() {}\n  public static getInstance() {\n    if (!this.instance) this.instance = new MasterKernel();\n    return this.instance;\n  }\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('static instance') && code.includes('constructor'); }
  },
  {
    "id": 51,
    "type": "TS",
    "timer": null,
    "title": "TS: El Parche Centauri",
    "sarge": "¡REPARACIÓN FRAGMENTADA! Usa 'Partial<Hull>' para aceptar actualizaciones parciales del casco. ¡AGILIDAD EN EL FRENTE DE BATALLA!",
    "starter": "interface Hull { dmg: number; sensor: boolean; }\n",
    "hints": [
      "La función debería verse así: update(p: Partial<Hull>).",
      "Partial<T> hace que todas las propiedades de T sean opcionales.",
      "Ideal para parches y actualizaciones parciales de estado."
    ],
    "solution": "function updateHull(p: Partial<Hull>) {\n  // Actualización parcial...\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('Partial<'); }
  },
  {
    "id": 52,
    "type": "TS",
    "timer": null,
    "title": "TS: El Filtro Bellatrix",
    "sarge": "¡EXTRACCIÓN TÁCTICA! Usa 'Pick' para capturar solo 'lat' y 'long' de los planos terrestres. ¡NO PIERDAS TIEMPO CON DATOS BASURA!",
    "starter": "interface Map { lat: number; long: number; bio: string; }\n",
    "hints": [
      "Define un nuevo tipo: type MinMap = Pick<Map, 'lat' | 'long'>;.",
      "Pasa el tipo base y las claves separadas por '|'.",
      "Esto 'recorta' las interfaces para que sean más ligeras."
    ],
    "solution": "type MinMap = Pick<Map, 'lat' | 'long'>;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('Pick<'); }
  },
  {
    "id": 53,
    "type": "TS",
    "timer": null,
    "title": "TS: El Olvido de Polaris",
    "sarge": "¡BORRADO DE SEÑAL! Usa 'Omit' para eliminar 'password' de los datos públicos. ¡EL ENEMIGO NO DEBE SABER CÓMO ENTRAMOS!",
    "starter": "interface User { id: number; password: string; }\n",
    "hints": [
      "Define el tipo: type PublicUser = Omit<User, 'password'>;.",
      "Omit es lo contrario de Pick (excluye propiedades).",
      "Esencial para seguridad y privacidad de datos."
    ],
    "solution": "type PublicUser = Omit<User, 'password'>;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('Omit<'); }
  },
  {
    "id": 54,
    "type": "TS",
    "timer": null,
    "title": "TS: El Diccionario Regulus",
    "sarge": "¡MAPEO DE PODER! Usa 'Record' para asociar rangos (string) con niveles (number). ¡QUIERO EL ORGANIGRAMA COMPLETO AHORA!",
    "starter": "// Mapeo militar...\n",
    "hints": [
      "Sintaxis: let m: Record<string, number> = { ... }.",
      "Define una cadena de mando coherente.",
      "Ideal para diccionarios tipados dinámicamente."
    ],
    "solution": "let military: Record<string, number> = {\n  'GENERAL': 100\n};",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('Record<'); }
  },
  {
    "id": 55,
    "type": "TS",
    "timer": null,
    "title": "TS: La Unión Draco",
    "sarge": "¡IDENTIDADES COMPLEJAS! Define 'Resp' como éxito {ok:true, data:string} o fallo {ok:false, error:string}. ¡FLUJOS SIN FISURAS!",
    "starter": "// Union Types...\n",
    "hints": [
      "Usa el símbolo | para unir las dos definiciones.",
      "Sintaxis: type Resp = { ... } | { ... }.;",
      "Esto permite que la variable cambie su forma según el estado."
    ],
    "solution": "type Resp = { ok: true, data: string } | { ok: false, error: string };",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('|'); }
  },
  {
    "id": 56,
    "type": "TS",
    "timer": null,
    "title": "TS: Los Colores de Lyra",
    "sarge": "¡ESTANDARIZACIÓN VISUAL! Tipo literal que empiece por '#HEX-'. ¡ORDEN Y ESTÉTICA EN LA PINTURA DE LOS CAZAS!",
    "starter": "type ShipColor = `#HEX-${string}`;\n",
    "hints": [
      "Usa las comillas invertidas (``) para definir el formato literario.",
      "Usa la interpolación de tipos: ${string};.",
      "Esto valida que cualquier cadena empiece por esa marca."
    ],
    "solution": "type ShipColor = `#HEX-${string}`;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('#HEX-'); }
  },
  {
    "id": 57,
    "type": "TS",
    "timer": null,
    "title": "TS: El Cristal de Aquila",
    "sarge": "¡ESTRUCTURAS PETRIFICADAS! Declara 'ENGINE_SPECS' como 'as const'. ¡QUE NI UN ÁTOMO SE MUEVA SIN MI AUTORIZACIÓN!",
    "starter": "const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 };\n",
    "hints": [
      "Añade 'as const' al final de la declaración del objeto.",
      "Esto congela el objeto haciéndolo inmutable a nivel de TS.",
      "Es más potente que readonly para objetos anidados."
    ],
    "solution": "const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('as const'); }
  },
  {
    "id": 58,
    "type": "TS",
    "timer": null,
    "title": "TS: El Índice Fomalhaut",
    "sarge": "¡DICCIONARIO DINÁMICO! Interface con 'Index Signature' para claves string y valores boolean. ¡CAPTURA TODOS LOS ECOS DEL RADAR!",
    "starter": "interface SensorLog {\n  // Índice dinámico...\n}\n",
    "hints": [
      "Usa la sintaxis: [key: string]: boolean;.",
      "Esto permite que la interfaz acepte cualquier clave de texto.",
      "Útil para sistemas que generan nombres de claves al azar."
    ],
    "solution": "interface SensorLog {\n  [key: string]: boolean;\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('[key:'); }
  },
  {
    "id": 59,
    "type": "TS",
    "timer": null,
    "title": "TS: La Llave Aquila",
    "sarge": "¡PRECISIÓN ABSOLUTA! Función genérica con <T, K extends keyof T>. ¡SI ACCEDES A LOS SECRETOS, LA CLAVE DEBE SER REAL!",
    "starter": "function getParam<T, K extends keyof T>(o: T, k: K) {\n  //...\n}\n",
    "hints": [
      "Simplemente retorna o[k];.",
      "TypeScript garantiza que 'k' es una llave válida de 'o'.",
      "Esto elimina errores de 'propiedad no encontrada'."
    ],
    "solution": "function getParam<T, K extends keyof T>(o: T, k: K) {\n  return o[k];\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('keyof'); }
  },
  {
    "id": 60,
    "type": "TS",
    "timer": 1500,
    "title": "TS FINAL: EL ALFA Y EL OMEGA",
    "sarge": "¡PUESTO DE GENERAL! Singleton + Interface + Genéricos + Async. Crea el SupremeKernel. ¡HAZLO POR EL HÉRCULES Y POR LA HUMANIDAD!",
    "starter": "// EL FINAL DE TU ENTRENAMIENTO MILITAR SUPREMO...\n",
    "hints": [
      "Implementa la interface IKernel con implements IKernel.",
      "Crea el Singleton con static instance y constructor privado.",
      "La función init() debe ser asíncrona: async init() { ... }."
    ],
    "solution": "interface IKernel { init(): Promise<void>; }\n\nclass SupremeKernel implements IKernel {\n  private static instance: SupremeKernel;\n  private constructor() {}\n  async init() { console.log('READY'); }\n  static getInstance() {\n    return this.instance || (this.instance = new SupremeKernel());\n  }\n}",
    "validate": () => { const code = STATE.editor.getValue(); return code.includes('implements') && code.includes('static') && code.includes('async'); }
  }
]

    function typeWriter(t, id, speed = 25, callback) {
      const el = document.getElementById(id);
      if (!el) return;
      if (STATE.typewriterTimer) clearTimeout(STATE.typewriterTimer);
      el.innerHTML = ''; let i = 0;
      function step() { if (i < t.length) { el.innerHTML = t.substring(0, i + 1); i++; STATE.typewriterTimer = setTimeout(step, speed); } else if (callback) callback(); }
      step();
    }

    function handlePresentation() {
        const nameInput = document.getElementById('user-name-input').value;
        const tokenInput = document.getElementById('recovery-token-input').value;
        
        let startLevel = 1;
        let isRecovery = false;
        
        if (tokenInput.trim() !== "") {
            try {
                const data = JSON.parse(atob(tokenInput));
                STATE.name = data.n || "RECLUTA";
                STATE.level = data.l || 1;
                STATE.unlocked = data.u || 1;
                STATE.completed = data.c || [];
                STATE.energy = data.e || 100;
                STATE.rank = data.r || "RECLUTA";
                startLevel = STATE.level;
                isRecovery = true;
                
                document.getElementById('user-name-display').innerText = STATE.name.toUpperCase();
                document.getElementById('user-rank').innerText = STATE.rank;
                document.getElementById('hud-fuel').innerText = STATE.energy + "%";
            } catch (e) {
                return alert("¡ERROR: TOKEN CORRUPTO O INVÁLIDO!");
            }
        } else {
            if (!nameInput) return alert("¡ID Piloto!");
            STATE.name = nameInput;
            document.getElementById('user-name-display').innerText = STATE.name.toUpperCase();
        }

        document.getElementById('id-input-area').style.display = 'none';
        
        const lines = isRecovery ? [
            `RECUPERANDO SESIÓN DEL PILOTO ${STATE.name.toUpperCase()}...`,
            "SINCRONIZANDO DATOS CON EL NÚCLEO HÉRCULES...",
            `PROTOCOLO ACTUAL: ${startLevel}`,
            "STATUS: ACCESO CONCEDIDO."
        ] : [
            `INICIALIZANDO PROTOCOLOS ESTELARES...`,
            `PILOTO ${STATE.name.toUpperCase()} RECONOCIDO POR EL GENERAL STARK.`, 
            "ESTADO: ENTRENAMIENTO DE ÉLITE ACTIVO.", 
            "60 PROTOCOLOS DE SEGURIDAD CARGADOS EN EL KERNEL.",
            "¡RECUERDA: CADA ÉXITO RECARGA TU ENERGÍA!"
        ];
        
        let lineIdx = 0;
        function nextLine() {
            if (lineIdx < lines.length) {
                typeWriter(lines[lineIdx], 'welcome-text', 15, () => {
                    setTimeout(() => {
                        lineIdx++;
                        nextLine();
                    }, 1200);
                });
            } else {
                setTimeout(() => {
                    document.getElementById('welcome-overlay').classList.add('hidden');
                    loadLevel(startLevel);
                }, 1000);
            }
        }
        nextLine();
    }

    function showHint() {
      if (STATE.energy < 5) return triggerFailUI("¡ERROR! ENERGÍA INSUFICIENTE PARA AUXILIO TÁCTICO.");
      
      const m = missions.find(x => x.id === STATE.level);
      if (!m) return;

      STATE.energy -= 5;
      document.getElementById('hud-fuel').innerText = STATE.energy + "%";
      document.getElementById('hud-fuel').style.width = STATE.energy + "%";

      STATE.hintCount = (STATE.hintCount || 0) + 1;
      
      // Combinamos las pistas con la solución final
      const allHints = [...(m.hints || [])];
      if (m.solution) {
        allHints.push("ENLACE DE DATOS COMPLETO. LA SOLUCIÓN TÉCNICA ES:\n\n" + m.solution);
      }

      const maxIdx = allHints.length - 1;
      const idx = Math.min(STATE.hintCount - 1, maxIdx);
      
      const isLast = idx === maxIdx;
      const hintPrefix = isLast ? ">>> [GENERAL] TRANSMISIÓN FINAL: " : `>>> [GENERAL] PISTA TÁCTICA ${idx + 1}/${allHints.length}: `;
      
      setSargePose('pose-radio');
      typeWriter(hintPrefix + allHints[idx], 'sarge-text', 15, () => {
        setTimeout(() => setSargePose('pose-idle'), 5000);
      });
    }

    function stopTimer() {
      if (STATE.timerInterval) clearInterval(STATE.timerInterval);
      const timerEl = document.getElementById('mission-timer');
      const alarm = document.getElementById('alarm-overlay');
      const body = document.getElementById('app-body');
      if (timerEl) timerEl.style.display = 'none';
      if (alarm) alarm.classList.remove('active');
      if (body) body.classList.remove('alarm-active');
    }

    function initEditor() {
      require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs' } });
      require(['vs/editor/editor.main'], function () {
        monaco.editor.defineTheme('greenPhosphor', {
          base: 'vs-dark', inherit: true,
          rules: [
            { token: '', foreground: '22c55e', background: '010409' },
            { token: 'comment', foreground: '166534', fontStyle: 'italic' },
            { token: 'keyword', foreground: '4ade80', fontStyle: 'bold' },
            { token: 'string', foreground: 'a7f3d0' },
            { token: 'number', foreground: 'fbbf24' },
          ],
          colors: {
            'editor.background': '#010409',
            'editor.foreground': '#22c55e',
            'editorCursor.foreground': '#22c55e',
            'editor.lineHighlightBackground': '#0d1117',
            'editorLineNumber.foreground': '#166534',
            'editorIndentGuide.background': '#0d1117',
          }
        });

        STATE.editor = monaco.editor.create(document.getElementById('editor'), {
          value: missions[0].starter,
          language: 'javascript',
          theme: 'greenPhosphor',
          fontSize: 14,
          fontFamily: 'JetBrains Mono',
          minimap: { enabled: false },
          automaticLayout: true,
          padding: { top: 10 },
          lineNumbersMinChars: 3,
          cursorBlinking: "smooth",
          scrollBeyondLastLine: false,
          scrollbar: { vertical: "visible", horizontal: "hidden" }
        });

        document.getElementById('btn-next-level').onclick = () => {
            document.getElementById('success-overlay').classList.add('hidden');
            document.getElementById('success-pulse').classList.remove('active');
            document.getElementById('app-body').classList.remove('success-alarm-active');
            
            const nextIdx = missions.findIndex(m => m.id === Number(STATE.level)) + 1;
            if (nextIdx < missions.length) {
                loadLevel(missions[nextIdx].id);
            }
        };

        loadLevel(1);
      });
    }

    function getSargeTone() {
      const rank = STATE.rank || 'RECLUTA';
      const tones = {
        'RECLUTA': '¡DESPIERTA, RECLUTA! - ',
        'CABO': 'Bien, Cabo. Escuche con atención: ',
        'SARGENTO': 'Sargento, informe de situación: ',
        'TENIENTE': 'Teniente, proceda con el protocolo: ',
        'CAPITÁN': 'Capitán, el éxito de la flota depende de usted: ',
        'COMANDANTE': 'Comandante, lidere el camino hacia la victoria: ',
        'GENERAL': 'General, la estación Hércules espera sus órdenes directas: ',
        'ALMIRANTE': 'Almirante, el destino del universo está en sus manos: '
      };
      return tones[rank] || '¡PILOTO! - ';
    }

    function setSargePose(id) {
      document.querySelectorAll('.sarge-visor img').forEach(img => img.classList.remove('active'));
      const t = document.getElementById(id);
      if (t) t.classList.add('active');
    }

    function loadLevel(id) {
      const m = missions.find(x => x.id === id);
      if (!m) return;
      STATE.level = id;
      STATE.hintCount = 0;
      
      if (STATE.editor) {
        const editorModel = STATE.editor.getModel();
        monaco.editor.setModelLanguage(editorModel, m.type === 'TS' ? 'typescript' : 'javascript');
        STATE.editor.setValue(m.starter || '');
      }
      
      document.getElementById('current-file').innerText = m.title.toUpperCase();
      document.getElementById('terminal').innerHTML = `<span style="color:var(--accent)">> CARGANDO PROTOCOLO: ${m.title}...</span><br>> STATUS: PENDIENTE INTERVENCIÓN...<br>`;
      
      if (m.timer) startTimer(m.timer); else stopTimer();

      // INICIALIZACIÓN DE ENTORNO ESPECIAL
      if (id === 26) {
        localStorage.setItem('telemetry', JSON.stringify({ vortex: true }));
      }

      const tone = getSargeTone();
      typeWriter(tone + m.sarge, 'sarge-text', 20);
      renderMissions();
    }

    function startTimer(sec) {
      stopTimer();
      if (!sec) return;
      STATE.timerVal = sec;
      const timerEl = document.getElementById('mission-timer');
      timerEl.style.display = 'block';
      document.getElementById('alarm-overlay').classList.add('active');
      document.getElementById('app-body').classList.add('alarm-active');
      
      STATE.timerInterval = setInterval(() => {
        STATE.timerVal--;
        const mins = Math.floor(STATE.timerVal / 60);
        const secs = STATE.timerVal % 60;
        timerEl.innerText = `TIEMPO: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
        
        if (STATE.timerVal <= 0) {
          stopTimer();
          // GAME OVER EXCLUSIVO PARA TEMPORIZADOR
          document.getElementById('game-over-overlay').classList.remove('hidden');
          setSargePose('pose-point');
          document.getElementById('terminal').innerHTML += `<span style="color:var(--error)">> [FALLO CRÍTICO]: TIEMPO AGOTADO. REINICIANDO PROTOCOLO DESDE EL NIVEL ANTERIOR...</span><br>`;
        }
      }, 1000);
    }

    function activarAlerta() {
      const a = document.getElementById('alarm-overlay');
      const b = document.getElementById('app-body');
      if (a) {
        a.classList.add('active');
        b.classList.add('alarm-active');
        setTimeout(() => { 
          if (!STATE.timerInterval) {
            a.classList.remove('active');
            b.classList.remove('alarm-active');
          }
        }, 5000);
      }
    }

    function runOperation() {
      const log = (msg) => {
        const t = document.getElementById('terminal');
        t.innerHTML += `> ${msg}<br>`;
        t.scrollTop = t.scrollHeight;
      };

      const m = missions.find(x => x.id === STATE.level);
      log(`EJECUTANDO: ${m.title}...`);
      
      try {
        let code = STATE.editor.getValue();
        let executableCode = code;

        // TRANSPILACIÓN SUCRASE SI ES TYPESCRIPT
        if (m.type === 'TS' && typeof sucrase !== 'undefined') {
          try {
            executableCode = sucrase.transform(code, { transforms: ["typescript"] }).code;
          } catch (te) {
            console.error("Transpilation Error:", te);
          }
        }

        const fn = new Function('console', 'activarAlerta', 'CODE', executableCode);
        fn({ log: (msg) => log(`<span style="color:#a7f3d0">OUT: ${msg}</span>`) }, activarAlerta, code);

        const isSolved = (typeof m.validate === 'function') ? m.validate() : eval(m.validate);
        
        if (isSolved) {
            stopTimer();
            document.getElementById('success-pulse').classList.add('active');
            document.getElementById('app-body').classList.add('success-alarm-active');
            
            const congrats = [
                "¡MISIÓN CUMPLIDA! El General Stark está impresionado.",
                "SISTEMA NOMINAL. Has salvado la estación, Piloto.",
                "CÓDIGO INTEGRADO. Recompensa de energía enviada.",
                "DATOS ENVIADOS. Siguiente sector desbloqueado.",
                "¡EXCELENTE TRABAJO! Has demostrado patriotismo estelar."
            ];
            const msg = congrats[Math.floor(Math.random() * congrats.length)];
            
            const oldRank = STATE.rank;
            let isPromoted = false;

            if (!STATE.completed.includes(STATE.level)) {
                STATE.completed.push(STATE.level);
                STATE.unlocked = Math.max(STATE.unlocked, STATE.level + 1);
                 
                // RECOMPENSA DE ENERGÍA +10%
                STATE.energy = Math.min(100, STATE.energy + 10);
                document.getElementById('hud-fuel').innerText = STATE.energy + "%";
                document.getElementById('hud-fuel').style.width = STATE.energy + "%";

                const rankIdx = Math.floor(STATE.completed.length / 5);
                if (rankIdx < STATE.rankProgress.length) {
                    STATE.rank = STATE.rankProgress[rankIdx];
                    document.getElementById('user-rank').innerText = STATE.rank;
                    isPromoted = (STATE.rank !== oldRank);
                }
            }

            setSargePose('pose-radio');
            typeWriter(`>>> [GENERAL STARK]: ${msg}`, 'sarge-text', 15, () => {
                setTimeout(() => {
                    if (!isPromoted) {
                      document.getElementById('success-overlay').classList.remove('hidden');
                    } else {
                        // CEREMONIA DE ASCENSO VISUAL
                        document.getElementById('new-rank-display').innerText = STATE.rank;
                        document.getElementById('promotion-overlay').classList.remove('hidden');
                        setSargePose('pose-point');
                        document.getElementById('terminal').innerHTML += `<br><span style="color:var(--success); font-size:14px; font-weight:800;">>>> [ALERTA DE SISTEMA]: ¡FELICITACIONES, PILOTO! HAS ASCENDIDO A ${STATE.rank}! <<<</span><br>`;
                    }
                    setSargePose('pose-idle');
                }, 1000);
            });
        } else {
            triggerFailUI("DIAGNÓSTICO: RESULTADO INSUFICIENTE. ¡ESFUÉRZATE MÁS!");
        }
      } catch (e) {
        triggerFailUI("FALLO DE NÚCLEO: " + e.message);
      }
    }

    function triggerFailUI(msg) {
        document.getElementById('terminal').innerHTML += `<span style="color:var(--error)">> ERROR: ${msg}</span><br>`;
        setSargePose('pose-point');
        activarAlerta();
        document.getElementById('app-body').classList.add('shaking');
        setTimeout(() => {
          setSargePose('pose-idle');
          document.getElementById('app-body').classList.remove('shaking');
        }, 2500);
    }

    function handleGameOverRestart() {
      const prevLevel = Math.max(1, STATE.level - 1);
      document.getElementById('game-over-overlay').classList.add('hidden');
      loadLevel(prevLevel);
    }

    function renderMissions() {
      const jsList = document.getElementById('js-list');
      const tsList = document.getElementById('ts-list');
      if (!jsList || !tsList) return;
      jsList.innerHTML = ''; tsList.innerHTML = '';
      
      missions.forEach(m => {
        const item = document.createElement('div');
        const locked = m.id > STATE.unlocked;
        item.className = `mission-item ${locked ? 'locked' : ''} ${m.id === STATE.level ? 'active' : ''}`;
        item.innerHTML = `${m.id}. ${m.title} ${STATE.completed.includes(m.id) ? '✓' : ''}`;
        if (!locked) item.onclick = () => loadLevel(m.id);
        if (m.type === 'JS') jsList.appendChild(item); else tsList.appendChild(item);
      });
      renderMissionHub();
    }

    function closePromotion() {
        document.getElementById('promotion-overlay').classList.add('hidden');
        document.getElementById('success-overlay').classList.remove('hidden');
        setSargePose('pose-idle');
    }

    function toggleManual() { document.getElementById('tech-manual').classList.toggle('open'); }
    function toggleMissionHub() {
        const hub = document.getElementById('mission-hub');
        hub.classList.toggle('hidden');
        renderMissions();
    }

    function copyRecoveryToken() {
        const data = {
            n: STATE.name,
            l: Number(STATE.level),
            u: Number(STATE.unlocked),
            c: STATE.completed,
            e: STATE.energy,
            r: STATE.rank
        };
        const token = btoa(JSON.stringify(data));
        navigator.clipboard.writeText(token).then(() => {
            const term = document.getElementById('terminal');
            term.innerHTML += `<span style="color:var(--success)">> [SISTEMA]: TOKEN DE ACCESO GENERADO Y COPIADO AL PORTAPAPELES.</span><br>`;
            term.innerHTML += `<span style="color:var(--secondary)">> [!] Este código te permite retomar tus misiones en cualquier terminal.</span><br>`;
            term.scrollTop = term.scrollHeight;
        }).catch(err => {
            alert("Error al copiar token: " + token);
        });
    }
    
    function renderMissionHub() {
      const grid = document.getElementById('hub-grid');
      if (!grid) return;
      grid.innerHTML = '';

      const line = document.createElement('div');
      line.className = 'timeline-line';
      grid.appendChild(line);

      const addHeader = (text) => {
        const h = document.createElement('div');
        h.style = "z-index:3; background:var(--accent); color:#000; padding:5px 20px; font-size:12px; font-weight:800; letter-spacing:3px; margin:20px 0;";
        h.innerText = text;
        grid.appendChild(h);
      };

      addHeader("FRENTE I: INGENIERÍA JS");

      missions.forEach((m, idx) => {
        if (m.id === 36) addHeader("FRENTE II: ARQUITECTURA TS");

        const locked = m.id > STATE.unlocked;
        const completed = STATE.completed.includes(m.id);
        
        const wrapper = document.createElement('div');
        wrapper.className = `timeline-item-wrapper ${idx % 2 === 0 ? 'left' : 'right'}`;

        const item = document.createElement('div');
        item.className = `hub-item ${locked ? 'locked' : ''} ${completed ? 'completed' : ''}`;
        item.innerHTML = `<div class="hub-badge">${m.id}</div><div class="hub-title">${m.title}</div>`;
        if (!locked) item.onclick = () => { loadLevel(m.id); toggleMissionHub(); };
        
        wrapper.appendChild(item);
        grid.appendChild(wrapper);
      });
    }

    window.onload = () => { if (typeof lucide !== 'undefined') lucide.createIcons(); initEditor(); };