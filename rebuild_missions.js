const fs = require('fs');
const src = fs.readFileSync('./script.js', 'utf8');

// Extract the functions part (after the missions array)
const funcStart = src.indexOf('function typeWriter(');
const functions = src.substring(funcStart);

// Build 40 missions
const missions = [
  // === FASE 0: BOOTCAMP (1-10) ===
  {id:1,type:"JS",timer:null,phase:"BOOTCAMP",title:"Tu Primera Orden: ¡Habla!",
   sarge:"¡BIENVENIDO A BORDO, RECLUTA! Antes de tocar NADA en esta estación, necesito saber que podés comunicarte. Escribí 'console.log' seguido de paréntesis y adentro el texto 'RECLUTA_LISTO' entre comillas. Eso imprime un mensaje en la terminal de abajo. ¡ES TU PRIMER ORDEN, NO LA ARRUINES!",
   starter:"// Tu primera misión: mostrar un mensaje en la terminal.\\n// Escribí tu código acá abajo:\\n\\n",
   hints:["💡 'console.log()' es como un MEGÁFONO DIGITAL. Lo que pongas adentro aparece en la terminal de abajo.","💡 Los textos en programación van SIEMPRE entre comillas. Ejemplo: 'HOLA' o \\\"HOLA\\\".","💡 La respuesta completa es:\\n\\nconsole.log('RECLUTA_LISTO');\\n\\n¡Copialo y dale a EJECUTAR!"],
   solution:"console.log('RECLUTA_LISTO');",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('console.log') && code.includes('RECLUTA_LISTO'); }"},

  {id:2,type:"JS",timer:null,phase:"BOOTCAMP",title:"Variables: Tu Caja de Datos",
   sarge:"¡BIEN, RECLUTA! Ahora necesito que guardes información. En programación usamos VARIABLES, que son como CAJAS con un nombre. Creá una variable llamada 'piloto' usando 'let' y guardá tu nombre adentro (entre comillas). ¡NECESITO SABER QUIÉN ESTÁ EN MI ESTACIÓN!",
   starter:"// Las variables guardan datos. Se crean así:\\n// let nombreDeLaCaja = 'valor';\\n\\n// Creá tu variable 'piloto' acá:\\n\\n",
   hints:["💡 'let' es la palabra mágica para CREAR una variable (una caja de datos).","💡 El formato es: let nombre = 'valor';  No te olvides del punto y coma (;).","💡 La respuesta es:\\n\\nlet piloto = 'TU_NOMBRE';\\n\\nReemplazá TU_NOMBRE por tu nombre real."],
   solution:"let piloto = 'Stark';",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('let piloto') && code.includes('='); }"},

  {id:3,type:"JS",timer:null,phase:"BOOTCAMP",title:"Números: El Combustible",
   sarge:"¡LA ESTACIÓN NECESITA CÁLCULOS! Los números NO llevan comillas. Creá una variable 'combustible' con el valor 100, y otra 'consumo' con valor 25. Después mostrá cuánto queda restando: console.log(combustible - consumo). ¡NECESITO SABER SI LLEGAMOS A MARTE!",
   starter:"// Los números NO llevan comillas.\\n// Ejemplo: let edad = 15;\\n\\n// Creá tus variables acá:\\n\\n\\n// Mostrá el resultado de la resta:\\n\\n",
   hints:["💡 Los números van SIN comillas: let combustible = 100; (no '100').","💡 Podés hacer cuentas directamente: console.log(combustible - consumo);","💡 La respuesta completa es:\\n\\nlet combustible = 100;\\nlet consumo = 25;\\nconsole.log(combustible - consumo);"],
   solution:"let combustible = 100;\\nlet consumo = 25;\\nconsole.log(combustible - consumo);",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('combustible') && code.includes('consumo') && code.includes('console.log'); }"},

  {id:4,type:"JS",timer:null,phase:"BOOTCAMP",title:"Textos: Unir Mensajes",
   sarge:"¡COMUNICACIONES ACTIVAS! En programación podemos UNIR textos con el signo +. Creá una variable 'rango' con el valor 'RECLUTA', y después mostrá un mensaje unido: console.log('Soy un ' + rango). ¡QUIERO VER TU PRESENTACIÓN EN LA TERMINAL!",
   starter:"// Unir textos se llama CONCATENAR.\\n// Se usa el signo + entre textos.\\n// Ejemplo: 'Hola ' + 'Mundo' = 'Hola Mundo'\\n\\n// Creá la variable 'rango':\\n\\n\\n// Mostrá el mensaje unido:\\n\\n",
   hints:["💡 Concatenar = unir textos con +. Ejemplo: 'Mi nombre es ' + nombre","💡 Cuidado con los espacios. 'Soy un ' tiene un espacio al final a propósito.","💡 La respuesta es:\\n\\nlet rango = 'RECLUTA';\\nconsole.log('Soy un ' + rango);"],
   solution:"let rango = 'RECLUTA';\\nconsole.log('Soy un ' + rango);",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('rango') && code.includes('+') && code.includes('console.log'); }"},

  {id:5,type:"JS",timer:null,phase:"BOOTCAMP",title:"Decisiones: ¿Sí o No?",
   sarge:"¡HORA DE DECIDIR, RECLUTA! En programación usamos 'if' para tomar decisiones. Es como preguntar: ¿ESTO ES VERDAD? Si sí, hacé algo. Tenés una variable 'oxigeno' con valor 30. Si el oxígeno es MENOR a 50, mostrá 'ALERTA_CRITICA' en la consola. ¡LA TRIPULACIÓN DEPENDE DE VOS!",
   starter:"// 'if' pregunta si algo es verdad.\\n// Dentro de los paréntesis va la PREGUNTA.\\n// Dentro de las llaves {} va LO QUE HACE si es verdad.\\n\\nlet oxigeno = 30;\\n\\n// Completá el if:\\n// if (oxigeno < 50) {\\n//   console.log('ALERTA_CRITICA');\\n// }\\n\\n",
   hints:["💡 'if' funciona así: if (pregunta) { lo que hace }. El signo < significa 'menor que'.","💡 30 es menor que 50, así que la condición ES VERDADERA y el código de adentro se ejecuta.","💡 La respuesta es:\\n\\nif (oxigeno < 50) {\\n  console.log('ALERTA_CRITICA');\\n}\\n\\n¡Sacá las barras // para descomentar!"],
   solution:"if (oxigeno < 50) {\\n  console.log('ALERTA_CRITICA');\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('if') && code.includes('oxigeno') && code.includes('ALERTA_CRITICA'); }"},

  {id:6,type:"JS",timer:null,phase:"BOOTCAMP",title:"If / Else: Dos Caminos",
   sarge:"¡AHORA CON DOS CAMINOS! A veces necesitás hacer una cosa SI se cumple la condición, y OTRA COSA si no se cumple. Eso es 'else'. Si la 'temperatura' es mayor a 100, mostrá 'PELIGRO'. Si no, mostrá 'ESTABLE'. ¡DECIDÍ EL DESTINO DEL REACTOR!",
   starter:"// if / else = SI pasa esto... SI NO, hace esto otro.\\n\\nlet temperatura = 150;\\n\\n// Completá:\\n// if (temperatura > 100) {\\n//   console.log('PELIGRO');\\n// } else {\\n//   console.log('ESTABLE');\\n// }\\n\\n",
   hints:["💡 'else' significa 'si no'. Se escribe justo después de la llave } del if.","💡 El signo > significa 'mayor que'. 150 > 100 es VERDADERO.","💡 La respuesta es:\\n\\nif (temperatura > 100) {\\n  console.log('PELIGRO');\\n} else {\\n  console.log('ESTABLE');\\n}"],
   solution:"if (temperatura > 100) {\\n  console.log('PELIGRO');\\n} else {\\n  console.log('ESTABLE');\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('if') && code.includes('else') && code.includes('PELIGRO'); }"},

  {id:7,type:"JS",timer:null,phase:"BOOTCAMP",title:"Funciones: Tu Primer Robot",
   sarge:"¡AUTOMATIZACIÓN! Las FUNCIONES son como pequeños robots: les das un nombre, les enseñás qué hacer, y después las podés usar las veces que quieras. Creá una función llamada 'saludar' que muestre 'SISTEMA_OPERATIVO' en la consola. Después, ¡LLAMALA para que se ejecute!",
   starter:"// Una función se CREA así:\\n// function nombre() {\\n//   lo que hace adentro\\n// }\\n//\\n// Y se LLAMA así:\\n// nombre();\\n\\n// Creá la función 'saludar':\\n\\n\\n// Llamala para que se ejecute:\\n\\n",
   hints:["💡 CREAR la función: function saludar() { ... }. LLAMARLA: saludar();","💡 Adentro de la función poné el console.log('SISTEMA_OPERATIVO');","💡 Respuesta completa:\\n\\nfunction saludar() {\\n  console.log('SISTEMA_OPERATIVO');\\n}\\nsaludar();"],
   solution:"function saludar() {\\n  console.log('SISTEMA_OPERATIVO');\\n}\\nsaludar();",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('function saludar') && code.includes('SISTEMA_OPERATIVO') && code.includes('saludar()'); }"},

  {id:8,type:"JS",timer:null,phase:"BOOTCAMP",title:"Arrays: Lista de Tripulación",
   sarge:"¡INVENTARIO! Un ARRAY es una LISTA de cosas. Se escribe con corchetes [] y cada elemento se separa con comas. Creá un array llamado 'tripulacion' con 3 nombres: 'STARK', 'NOVA', 'TITAN'. Después mostrá el PRIMERO con console.log(tripulacion[0]). ¡OJO: las listas empiezan en 0, no en 1!",
   starter:"// Un array es una LISTA.\\n// Se crea con corchetes: ['cosa1', 'cosa2', 'cosa3']\\n// Se accede por POSICIÓN: lista[0] = primero, lista[1] = segundo...\\n\\n// Creá el array 'tripulacion':\\n\\n\\n// Mostrá el primer elemento:\\n\\n",
   hints:["💡 Los arrays usan corchetes []. Cada elemento va entre comillas y separado por comas.","💡 ¡CUIDADO! En programación contamos desde 0. tripulacion[0] = 'STARK', tripulacion[1] = 'NOVA'...","💡 Respuesta:\\n\\nlet tripulacion = ['STARK', 'NOVA', 'TITAN'];\\nconsole.log(tripulacion[0]);"],
   solution:"let tripulacion = ['STARK', 'NOVA', 'TITAN'];\\nconsole.log(tripulacion[0]);",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('tripulacion') && code.includes('[') && code.includes('STARK'); }"},

  {id:9,type:"JS",timer:null,phase:"BOOTCAMP",title:"Bucle For: Repetir Tareas",
   sarge:"¡ESCANEO DE SECTORES! Un 'for' repite código varias veces automáticamente. Es como decir: 'hacé esto 3 veces'. Tenés un array de 'sectores'. Usá un for para mostrar CADA sector en la consola. ¡NO PODEMOS DEJAR NI UN SECTOR SIN REVISAR!",
   starter:"// El bucle FOR repite código.\\n// for (let i = 0; i < 3; i++) { lo que repite }\\n// 'i' empieza en 0, y sube de 1 en 1 hasta llegar a 3.\\n\\nlet sectores = ['MOTOR', 'PUENTE', 'HANGAR'];\\n\\n// Recorré el array con un for:\\n// for (let i = 0; i < sectores.length; i++) {\\n//   console.log(sectores[i]);\\n// }\\n\\n",
   hints:["💡 'sectores.length' te dice cuántos elementos tiene la lista (en este caso 3).","💡 'sectores[i]' accede al elemento en la posición 'i'. Como i va de 0 a 2, muestra los 3.","💡 Respuesta:\\n\\nfor (let i = 0; i < sectores.length; i++) {\\n  console.log(sectores[i]);\\n}\\n\\n¡Sacá las barras (//) para descomentar el for!"],
   solution:"for (let i = 0; i < sectores.length; i++) {\\n  console.log(sectores[i]);\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('for') && code.includes('sectores') && code.includes('console.log'); }"},

  {id:10,type:"JS",timer:null,phase:"BOOTCAMP",title:"¡Tocá la Pantalla! Tu Primer DOM",
   sarge:"¡AHORA SÍ, RECLUTA! Todo lo anterior fue entrenamiento básico. Ahora vas a TOCAR la pantalla real de la estación. Con 'document.getElementById' podés buscar un elemento de la pantalla por su nombre y cambiarle el TEXTO con '.innerText'. Cambiá el texto del visor 'sarge-text' a 'ENLACE_ESTABLECIDO'. ¡QUE SE HAGA LA LUZ!",
   starter:"// document.getElementById('nombre') busca un elemento en la pantalla.\\n// .innerText cambia lo que dice ese elemento.\\n// Ejemplo: document.getElementById('algo').innerText = 'nuevo texto';\\n\\n// Buscá 'sarge-text' y cambiá su texto:\\n\\n",
   hints:["💡 document.getElementById('sarge-text') busca el visor del sargento en la pantalla.","💡 .innerText = 'ENLACE_ESTABLECIDO' le cambia el texto que muestra.","💡 Respuesta:\\n\\ndocument.getElementById('sarge-text').innerText = 'ENLACE_ESTABLECIDO';"],
   solution:"document.getElementById('sarge-text').innerText = 'ENLACE_ESTABLECIDO';",
   validate:"() => document.getElementById('sarge-text').innerText.includes('ENLACE_ESTABLECIDO')"},

  // === FASE I: INGENIERÍA JS (11-25) ===
  {id:11,type:"JS",timer:null,title:"Velo de Plasma: Cortafuegos Solar",
   sarge:"¡RADIACIÓN GAMMA DETECTADA! El escudo térmico tiene una fisura. Marcá el sector 'hud-fuel' con un 'borderColor' rojo para que el equipo de soldadura sepa dónde intervenir. ¡CIERRA ESA BRECHA!",
   starter:"// Recordá: document.getElementById('nombre').style.propiedad = 'valor';\\n\\n",
   hints:["💡 Primero buscá el elemento: document.getElementById('hud-fuel')","💡 Después accedé a su estilo y propiedad: .style.borderColor","💡 Respuesta:\\n\\ndocument.getElementById('hud-fuel').style.borderColor = 'red';"],
   solution:"document.getElementById('hud-fuel').style.borderColor = 'red';",
   validate:"() => document.getElementById('hud-fuel').style.borderColor === 'red'"},

  {id:12,type:"JS",timer:null,title:"Salto al Vacío: Motor Warp",
   sarge:"¡FLOTA ENEMIGA EN EL RADAR! Necesitamos saltar al Hiperespacio. Alineá el 'hud-warp' moviéndolo al '80%' de su eje lateral (left). ¡SI FALLAS, SEREMOS CHATARRA ESPACIAL!",
   starter:"// Ajustando posición del módulo Warp...\\n// Usá .style.left para mover un elemento.\\n\\n",
   hints:["💡 Seleccioná 'hud-warp' y accedé a .style","💡 Cambiá el valor de la propiedad .left","💡 Respuesta:\\n\\ndocument.getElementById('hud-warp').style.left = '80%';"],
   solution:"document.getElementById('hud-warp').style.left = '80%';",
   validate:"() => document.getElementById('hud-warp').style.left === '80%'"},

  {id:13,type:"JS",timer:null,title:"Sigilo: Capa de Invisibilidad",
   sarge:"¡NOS ESTÁN ESCANEANDO! Reducí la opacidad del 'user-rank' a un tenue 0.2. Debemos ser invisibles entre las estrellas para que no detecten nuestra jerarquía militar.",
   starter:"// .style.opacity controla la transparencia (0 = invisible, 1 = visible)\\n\\n",
   hints:["💡 Localizá 'user-rank' en el DOM con getElementById.","💡 Usá .style.opacity para la transparencia.","💡 Respuesta:\\n\\ndocument.getElementById('user-rank').style.opacity = '0.2';"],
   solution:"document.getElementById('user-rank').style.opacity = '0.2';",
   validate:"() => document.getElementById('user-rank').style.opacity === '0.2'"},

  {id:14,type:"JS",timer:null,title:"SOBRECARGA DEL KERNEL",
   sarge:"¡LA OSCURIDAD SE ACERCA! Un pulso de energía nos golpea. Ejecutá el protocolo 'activarAlerta()' y reducí el ancho ('width') de 'hud-fuel' a '50px' para concentrar energía en los escudos.",
   starter:"// ¡DEPURACIÓN DE EMERGENCIA!\\n// Primero llamá a activarAlerta(); y después cambiá el width.\\n\\n",
   hints:["💡 Primero escribí activarAlerta(); en una línea.","💡 Luego buscá 'hud-fuel' y accedé a .style.width.","💡 Respuesta:\\n\\nactivarAlerta();\\ndocument.getElementById('hud-fuel').style.width = '50px';"],
   solution:"activarAlerta();\\ndocument.getElementById('hud-fuel').style.width = '50px';",
   validate:"() => document.getElementById('hud-fuel').style.width === '50px'"},

  {id:15,type:"JS",timer:null,title:"Telemetría del Casco",
   sarge:"¡IMPACTO DE ASTEROIDES! Dos meteoros golpearon el casco. Sumá ambos impactos (50+50) y actualizá el 'innerText' del 'hud-hull' para que los ingenieros sepan la magnitud del daño.",
   starter:"// Cambiá el texto de 'hud-hull' al resultado de 50 + 50\\n\\n",
   hints:["💡 Usá document.getElementById('hud-hull').","💡 La propiedad .innerText cambia el texto visible.","💡 Respuesta:\\n\\ndocument.getElementById('hud-hull').innerText = 50 + 50;"],
   solution:"document.getElementById('hud-hull').innerText = 50 + 50;",
   validate:"() => document.getElementById('hud-hull').innerText === '100'"},

  {id:16,type:"JS",timer:null,title:"Refactorización de Interfaz",
   sarge:"¡EL VISOR ESTÁ DESACTUALIZADO! Cambiá el 'borderRadius' de 'sarge-wrapper' al '50%' para activar el Modo Lente. ¡QUIERO VER EL UNIVERSO CON CLARIDAD!",
   starter:"// borderRadius redondea las esquinas. '50%' lo hace circular.\\n\\n",
   hints:["💡 Accedé a 'sarge-wrapper' en el DOM.","💡 La propiedad de estilo es .style.borderRadius.","💡 Respuesta:\\n\\ndocument.getElementById('sarge-wrapper').style.borderRadius = '50%';"],
   solution:"document.getElementById('sarge-wrapper').style.borderRadius = '50%';",
   validate:"() => document.getElementById('sarge-wrapper').style.borderRadius === '50%'"},

  {id:17,type:"JS",timer:null,title:"Event Listener de Consola",
   sarge:"¡CONFIGURACIÓN DE ATAQUE! Agregá un listener de 'click' al botón 'btn-next-level'. Cuando se pulse, debe imprimir 'SISTEMA_OK' en la consola. ¡ES EL BOTÓN DE PÁNICO!",
   starter:"// addEventListener escucha eventos como clicks.\\n// Ejemplo: elemento.addEventListener('click', () => { ... });\\n\\n",
   hints:["💡 Usá document.getElementById('btn-next-level').","💡 Llamá al método .addEventListener('click', () => { ... }).","💡 Respuesta:\\n\\ndocument.getElementById('btn-next-level').addEventListener('click', () => {\\n  console.log('SISTEMA_OK');\\n});"],
   solution:"document.getElementById('btn-next-level').addEventListener('click', () => {\\n  console.log('SISTEMA_OK');\\n});",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('addEventListener') && code.includes('SISTEMA_OK'); }"},

  {id:18,type:"JS",timer:null,title:"Protocolo: Inyección de Alertas",
   sarge:"¡ATAQUE HACKER DETECTADO! Creá un 'div' con createElement, dale la clase 'hud-warning', ponele el texto 'ERROR_KERNEL' y agregalo al 'terminal' con 'appendChild'. ¡RÁPIDO O PERDEMOS EL CONTROL!",
   starter:"// createElement crea un elemento nuevo.\\n// appendChild lo agrega dentro de otro elemento.\\n\\n",
   hints:["💡 Creá el elemento: const div = document.createElement('div');","💡 Asignale clase y texto: div.className = 'hud-warning'; div.innerText = 'ERROR_KERNEL';","💡 Respuesta:\\n\\nconst div = document.createElement('div');\\ndiv.className = 'hud-warning';\\ndiv.innerText = 'ERROR_KERNEL';\\ndocument.getElementById('terminal').appendChild(div);"],
   solution:"const div = document.createElement('div');\\ndiv.className = 'hud-warning';\\ndiv.innerText = 'ERROR_KERNEL';\\ndocument.getElementById('terminal').appendChild(div);",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('createElement') && code.includes('appendChild') && code.includes('ERROR_KERNEL'); }"},

  {id:19,type:"JS",timer:null,title:"Acceso: Firma de Comandante",
   sarge:"¡PROTOCOLOS MULTILINEALES! Creá la función 'validarAcceso(perfil)'. Si el perfil incluye 'ADMIN' Y tiene más de 5 letras, retorná true. ¡QUIERO ORDEN EN EL PUENTE!",
   starter:"// Creá una función que reciba un texto y lo valide.\\n// .includes('algo') pregunta si contiene ese texto.\\n// .length te dice cuántas letras tiene.\\n\\n",
   hints:["💡 Definí: function validarAcceso(perfil) { ... }.","💡 Usá includes('ADMIN') y .length > 5 en el condicional.","💡 Respuesta:\\n\\nfunction validarAcceso(perfil) {\\n  return perfil.includes('ADMIN') && perfil.length > 5;\\n}"],
   solution:"function validarAcceso(perfil) {\\n  return perfil.includes('ADMIN') && perfil.length > 5;\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('function') && code.includes('ADMIN') && code.includes('length > 5'); }"},

  {id:20,type:"JS",timer:null,title:"Filtro: Residuos de Supernova",
   sarge:"¡DATOS CORRUPTOS! Filtrá los 'logs' buscando solo los que tengan 'critico: true'. Por cada uno, imprimí '¡PELIGRO!' antes de devolverlo. ¡LIMPIÁ ESE BUFFER!",
   starter:"const logs = [{id:1, critico:true}, {id:2, critico:false}, {id:3, critico:true}];\\n// .filter() recorre la lista y se queda solo con los que cumplan la condición.\\n\\n",
   hints:["💡 El método .filter() toma una función: logs.filter(l => { ... }).","💡 Dentro, usá console.log('PELIGRO') si l.critico es verdadero.","💡 Respuesta:\\n\\nconst f = logs.filter(l => {\\n  if (l.critico) {\\n    console.log('PELIGRO');\\n    return true;\\n  }\\n  return false;\\n});"],
   solution:"const f = logs.filter(l => {\\n  if (l.critico) {\\n    console.log('PELIGRO');\\n    return true;\\n  }\\n  return false;\\n});",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('PELIGRO'); }"},

  {id:21,type:"JS",timer:null,title:"Misión: El Vórtice de Datos",
   sarge:"¡TRANSMISIÓN MULTIDIMENSIONAL! Filtrá datos válidos (valid: true) y después usá '.map' para sumarle 50 a cada valor 'v'. ¡CADA UNIDAD DE ENERGÍA CUENTA!",
   starter:"const stream = [{v:10, valid:true}, {v:50, valid:false}, {v:30, valid:true}];\\n// .filter() filtra, .map() transforma cada elemento.\\n\\n",
   hints:["💡 Encadená los métodos: stream.filter(s => s.valid).map(s => ...).","💡 En el .map(), devolvé el valor s.v + 50.","💡 Respuesta:\\n\\nconst result = stream.filter(s => s.valid).map(s => s.v + 50);"],
   solution:"const result = stream.filter(s => s.valid).map(s => s.v + 50);",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('.map') && code.includes('+ 50'); }"},

  {id:22,type:"JS",timer:null,title:"Cápsula: La Caja de Pandora",
   sarge:"¡DESCOMPRESIÓN DE DATOS! Desestructurá 'lat' y 'long' del GPS. Si la latitud es menor a 0, imprimí 'SECTOR_SUR'. ¡IDENTIFICÁ NUESTRA POSICIÓN!",
   starter:"const gps = { lat: -34.6, long: -58.4 };\\n// Desestructuración: sacar propiedades de un objeto a variables.\\n// const { prop1, prop2 } = objeto;\\n\\n",
   hints:["💡 Sintaxis de desestructuración: const { lat, long } = gps;","💡 Después usá un condicional if (lat < 0).","💡 Respuesta:\\n\\nconst { lat, long } = gps;\\nif (lat < 0) {\\n  console.log('SECTOR_SUR');\\n}"],
   solution:"const { lat, long } = gps;\\nif (lat < 0) {\\n  console.log('SECTOR_SUR');\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('{ lat, long }') && code.includes('SECTOR_SUR'); }"},

  {id:23,type:"JS",timer:null,title:"Misión: El Árbol de Decisiones",
   sarge:"¡RUMBOS GALÁCTICOS! Creá un 'switch' para la variable 'prioridad'. Si es 'ALTA', llamá a 'activarAlerta()'. Si es 'BAJA', imprimí 'STATUS_VERDE'. ¡DECIDÍ EL DESTINO!",
   starter:"let prioridad = 'ALTA';\\n// switch es como varios if/else juntos.\\n// switch(variable) { case 'valor': ... break; }\\n\\n",
   hints:["💡 Estructura: switch(prioridad) { ... }.","💡 Usá case 'ALTA': activarAlerta(); break;","💡 Respuesta:\\n\\nswitch(prioridad) {\\n  case 'ALTA': activarAlerta(); break;\\n  case 'BAJA': console.log('STATUS_VERDE'); break;\\n}"],
   solution:"switch(prioridad) {\\n  case 'ALTA': activarAlerta(); break;\\n  case 'BAJA': console.log('STATUS_VERDE'); break;\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('switch') && code.includes('activarAlerta'); }"},

  {id:24,type:"JS",timer:null,title:"Sincro: El Eco de Europa",
   sarge:"¡LLAMADA AL ABISMO! Conectá con la API central. Usá 'fetch', procesá el JSON con '.then' y usá '.catch' para reportar errores. ¡QUE NO SE PIERDA LA SEÑAL!",
   starter:"// fetch() pide datos a un servidor.\\n// .then() procesa la respuesta.\\n// .catch() atrapa errores.\\n\\n",
   hints:["💡 Iniciá con fetch('https://api.stark.os').","💡 Usá .then(r => r.json()) para procesar la respuesta.","💡 Respuesta:\\n\\nfetch('https://api.stark.os')\\n  .then(r => r.json())\\n  .catch(e => console.error(e));"],
   solution:"fetch('https://api.stark.os')\\n  .then(r => r.json())\\n  .catch(e => console.error(e));",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('fetch') && code.includes('.catch'); }"},

  {id:25,type:"JS",timer:null,title:"Persistencia: El Diario de Deimos",
   sarge:"¡MEMORIA ETERNA! Guardá el objeto 'oficial' en localStorage. Usá 'JSON.stringify' para que el kernel pueda leerlo tras un apagón. ¡NADA SE OLVIDA!",
   starter:"const oficial = { id: 1, rank: 'GENERAL' };\\n// localStorage guarda datos que sobreviven al cerrar la página.\\n// JSON.stringify convierte un objeto a texto.\\n\\n",
   hints:["💡 Llamá al método localStorage.setItem(clave, valor).","💡 La clave es 'oficial' y el valor debe ser JSON.stringify(oficial).","💡 Respuesta:\\n\\nlocalStorage.setItem('oficial', JSON.stringify(oficial));"],
   solution:"localStorage.setItem('oficial', JSON.stringify(oficial));",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('localStorage') && code.includes('stringify'); }"},

  // === FASE II: ARQUITECTURA TS (26-40) ===
  {id:26,type:"TS",timer:null,title:"TS: El Rigor de Sirio",
   sarge:"¡BLINDAJE DE TIPOS! En TypeScript le decimos al código QUÉ TIPO de dato tiene cada variable. Asigná 'string' y 'number' a las constantes de acceso. ¡LA DISCIPLINA ES NUESTRA SALVACIÓN!",
   starter:"// En TypeScript, agregamos : tipo después del nombre.\\n// Ejemplo: let nombre: string = 'Stark';\\n\\nlet id = 'SEC-01';\\nlet val = 100;\\n// Agregales los tipos :string y :number\\n",
   hints:["💡 Agregá ': string' después de 'id' y ': number' después de 'val'.","💡 Quedaría: let id: string = 'SEC-01';","💡 Respuesta:\\n\\nlet id: string = 'SEC-01';\\nlet val: number = 100;"],
   solution:"let id: string = 'SEC-01';\\nlet val: number = 100;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('id: string') && code.includes('val: number'); }"},

  {id:27,type:"TS",timer:null,title:"TS: El Contrato de Vega",
   sarge:"¡ESTRICTA INTERFAZ! Definí 'Station' con nombre (string) y capacidad (number). Una interface es como un PLANO: dice qué forma debe tener un objeto. ¡TODO COMPONENTE DEBE CUMPLIR EL PLANO!",
   starter:"// Una interface define la FORMA de un objeto.\\n// interface NombreDelPlano {\\n//   propiedad: tipo;\\n// }\\n\\ninterface Station {\\n  // Completá las propiedades...\\n}\\n",
   hints:["💡 Dentro de la interface escribí las propiedades con sus tipos.","💡 Formato: name: string; y capacity: number;","💡 Respuesta:\\n\\ninterface Station {\\n  name: string;\\n  capacity: number;\\n}"],
   solution:"interface Station {\\n  name: string;\\n  capacity: number;\\n}",
   validate:"() => { const code = STATE.editor.getValue().replace(/\\\\s+/g, ''); return code.includes('interface') && code.includes('name:string'); }"},

  {id:28,type:"TS",timer:null,title:"TS: El Sello de Betelgeuse",
   sarge:"¡DATOS INAMOVIBLES! Usá 'readonly' en la temperatura del reactor. ¡NI EL GENERAL PUEDE CAMBIAR LO QUE LA TELEMETRÍA REGISTRÓ!",
   starter:"// 'readonly' impide que una propiedad se modifique después de crearse.\\n\\ninterface CoreData {\\n  // Agregá readonly antes de temp: number;\\n}\\n",
   hints:["💡 La sintaxis es 'readonly nombre: tipo;'.","💡 Usá readonly temp: number;","💡 Respuesta:\\n\\ninterface CoreData {\\n  readonly temp: number;\\n}"],
   solution:"interface CoreData {\\n  readonly temp: number;\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('readonly'); }"},

  {id:29,type:"TS",timer:null,title:"TS: El Código de Rigel",
   sarge:"¡ENUMERACIÓN TÁCTICA! Un 'enum' define opciones fijas como niveles de alerta: LOW, MEDIUM, CRITICAL. ¡ASIGNÁ EL NIVEL MÁXIMO A TU ESTADO ACTUAL!",
   starter:"// Un enum es una lista de opciones fijas.\\n\\nenum Warning { LOW, MEDIUM, CRITICAL }\\n\\n// Creá una variable 'status' y asignale Warning.CRITICAL\\n",
   hints:["💡 Creá una variable: let status = ...;","💡 Asigná el valor del enum: Warning.CRITICAL;","💡 Respuesta:\\n\\nlet status = Warning.CRITICAL;"],
   solution:"let status = Warning.CRITICAL;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('enum') && code.includes('Warning.CRITICAL'); }"},

  {id:30,type:"TS",timer:null,title:"TS: La Conjunción Deneb",
   sarge:"¡INTERSECCIÓN DE PODER! Uní 'Armor' y 'Shield' con el operador '&'. Eso crea un tipo que tiene TODO de ambos. ¡JUNTOS SOMOS INVULNERABLES!",
   starter:"// El operador & une dos tipos en uno solo.\\n\\ntype Armor = { v: number };\\ntype Shield = { p: number };\\n\\n// Creá un tipo FullDef que combine ambos con &\\n",
   hints:["💡 Creá un nuevo tipo: type FullDef = Armor & Shield;","💡 El símbolo & es el operador de intersección.","💡 Respuesta:\\n\\ntype FullDef = Armor & Shield;"],
   solution:"type FullDef = Armor & Shield;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('&'); }"},

  {id:31,type:"TS",timer:null,title:"TS: El Recipiente Spica",
   sarge:"¡INGENIERÍA ADAPTATIVA! Creá una Interface 'Box<T>' que acepte cualquier carga genérica. La T se reemplaza por el tipo real cuando la usás. ¡FLEXIBILIDAD TOTAL!",
   starter:"// Genéricos: <T> es un comodín de tipo.\\n// Se define al crear y se reemplaza al usar.\\n\\n// Creá la interface Box<T> con una propiedad data: T\\n",
   hints:["💡 Usá los corchetes angulares para el genérico: Box<T>.","💡 Definí una propiedad que use ese tipo: data: T;","💡 Respuesta:\\n\\ninterface Box<T> {\\n  data: T;\\n}"],
   solution:"interface Box<T> {\\n  data: T;\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('<T>'); }"},

  {id:32,type:"TS",timer:null,title:"TS: El Filtro de Fomalhaut",
   sarge:"¡DISCRIMINACIÓN TÁCTICA! Usá un 'Type Guard' para comprobar si un valor es 'number'. Un typeof dentro de un if le dice a TypeScript qué tipo es. ¡NO DEJES QUE EL RUIDO INTERFIERA!",
   starter:"// typeof revisa el tipo de una variable en tiempo real.\\n\\nfunction verify(val: string | number) {\\n  // Usá typeof val === 'number' dentro de un if\\n}\\n",
   hints:["💡 Usá if (typeof val === 'number') { ... }.","💡 Esto filtra el tipo específico en tiempo de ejecución.","💡 Respuesta:\\n\\nfunction verify(val: string | number) {\\n  if (typeof val === 'number') {\\n    return true;\\n  }\\n  return false;\\n}"],
   solution:"function verify(val: string | number) {\\n  if (typeof val === 'number') {\\n    return true;\\n  }\\n  return false;\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('typeof') && code.includes('number'); }"},

  {id:33,type:"TS",timer:null,title:"TS: El Vórtice Pollux",
   sarge:"¡RANGO DE COMANDO! Creá una función que reciba (...args: string[]) y los una con .join(', '). Los tres puntos recogen TODOS los argumentos en un array. ¡UNIDAD TOTAL!",
   starter:"// Los '...' se llaman REST parameters.\\n// Recogen todos los argumentos en un array.\\n\\nfunction processAll(...args: string[]) {\\n  // Uní todos los args con .join(', ')\\n}\\n",
   hints:["💡 Usá el método .join(', ') para unir el array.","💡 Retorná el resultado de la unión.","💡 Respuesta:\\n\\nfunction processAll(...args: string[]) {\\n  return args.join(', ');\\n}"],
   solution:"function processAll(...args: string[]) {\\n  return args.join(', ');\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('...') && code.includes('string[]'); }"},

  {id:34,type:"TS",timer:null,title:"TS: El Parche Centauri",
   sarge:"¡REPARACIÓN FRAGMENTADA! Usá 'Partial<Hull>' para aceptar actualizaciones parciales del casco. Partial hace que TODAS las propiedades sean opcionales. ¡AGILIDAD EN BATALLA!",
   starter:"// Partial<T> hace todas las propiedades opcionales.\\n// Ideal para funciones que actualizan PARTE de un objeto.\\n\\ninterface Hull { dmg: number; sensor: boolean; }\\n\\n// Creá una función updateHull que reciba Partial<Hull>\\n",
   hints:["💡 La función: function updateHull(p: Partial<Hull>) { ... }","💡 Partial<T> hace que no sea obligatorio pasar todas las propiedades.","💡 Respuesta:\\n\\nfunction updateHull(p: Partial<Hull>) {\\n  // Actualización parcial...\\n}"],
   solution:"function updateHull(p: Partial<Hull>) {\\n  // Actualización parcial...\\n}",
   validate:"() => { const code = STATE.editor.getValue().replace(/\\\\s+/g, ''); return code.includes('Partial<'); }"},

  {id:35,type:"TS",timer:null,title:"TS: El Filtro Bellatrix",
   sarge:"¡EXTRACCIÓN TÁCTICA! Usá 'Pick' para capturar solo 'lat' y 'long' de los planos terrestres. Pick recorta una interface y se queda solo con lo que necesitás. ¡NO PIERDAS TIEMPO CON DATOS BASURA!",
   starter:"// Pick<Tipo, 'prop1' | 'prop2'> extrae solo esas propiedades.\\n\\ninterface Map { lat: number; long: number; bio: string; }\\n\\n// Creá un tipo MinMap con solo lat y long\\n",
   hints:["💡 Definí: type MinMap = Pick<Map, 'lat' | 'long'>;","💡 Pasá el tipo base y las claves separadas por '|'.","💡 Respuesta:\\n\\ntype MinMap = Pick<Map, 'lat' | 'long'>;"],
   solution:"type MinMap = Pick<Map, 'lat' | 'long'>;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('Pick<'); }"},

  {id:36,type:"TS",timer:null,title:"TS: El Olvido de Polaris",
   sarge:"¡BORRADO DE SEÑAL! Usá 'Omit' para eliminar 'password' de los datos públicos. Omit es lo contrario de Pick: QUITA propiedades. ¡EL ENEMIGO NO DEBE SABER CÓMO ENTRAMOS!",
   starter:"// Omit<Tipo, 'prop'> crea una copia SIN esa propiedad.\\n\\ninterface User { id: number; password: string; }\\n\\n// Creá un tipo PublicUser sin el password\\n",
   hints:["💡 Definí: type PublicUser = Omit<User, 'password'>;","💡 Omit es lo contrario de Pick (excluye propiedades).","💡 Respuesta:\\n\\ntype PublicUser = Omit<User, 'password'>;"],
   solution:"type PublicUser = Omit<User, 'password'>;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('Omit<'); }"},

  {id:37,type:"TS",timer:null,title:"TS: El Diccionario Regulus",
   sarge:"¡MAPEO DE PODER! Usá 'Record' para asociar rangos (string) con niveles (number). Record crea diccionarios tipados. ¡QUIERO EL ORGANIGRAMA COMPLETO!",
   starter:"// Record<TipoClave, TipoValor> crea un diccionario tipado.\\n\\n// Creá una variable military con Record<string, number>\\n",
   hints:["💡 Sintaxis: let m: Record<string, number> = { ... };","💡 Definí una cadena de mando: Record<string, number>.","💡 Respuesta:\\n\\nlet military: Record<string, number> = {\\n  'GENERAL': 100\\n};"],
   solution:"let military: Record<string, number> = {\\n  'GENERAL': 100\\n};",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('Record<'); }"},

  {id:38,type:"TS",timer:null,title:"TS: La Unión Draco",
   sarge:"¡IDENTIDADES COMPLEJAS! Definí 'Resp' como éxito {ok:true, data:string} o fallo {ok:false, error:string}. El | permite que un tipo tenga DOS formas posibles. ¡FLUJOS SIN FISURAS!",
   starter:"// Union Types: Tipo1 | Tipo2\\n// Una variable puede ser UNA u OTRA forma.\\n\\n// Creá el tipo Resp con dos formas posibles\\n",
   hints:["💡 Usá el símbolo | para unir las dos definiciones.","💡 Sintaxis: type Resp = { ... } | { ... };","💡 Respuesta:\\n\\ntype Resp = { ok: true, data: string } | { ok: false, error: string };"],
   solution:"type Resp = { ok: true, data: string } | { ok: false, error: string };",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('|'); }"},

  {id:39,type:"TS",timer:null,title:"TS: El Cristal de Aquila",
   sarge:"¡ESTRUCTURAS PETRIFICADAS! Declará 'ENGINE_SPECS' como 'as const'. Eso congela el objeto para siempre. ¡QUE NI UN ÁTOMO SE MUEVA SIN MI AUTORIZACIÓN!",
   starter:"// 'as const' congela un objeto completamente.\\n// Más potente que readonly para objetos.\\n\\nconst ENGINE_SPECS = { id: 'MK-1', thrust: 9000 };\\n// Agregá 'as const' al final\\n",
   hints:["💡 Agregá 'as const' al final de la declaración del objeto.","💡 Esto hace inmutable TODO el objeto, no solo sus propiedades.","💡 Respuesta:\\n\\nconst ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;"],
   solution:"const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('as const'); }"},

  {id:40,type:"TS",timer:300,title:"TS FINAL: EL ALFA Y EL OMEGA",
   sarge:"¡ÚLTIMA MISIÓN, PILOTO! Demostrá todo lo que aprendiste. Creá una interface 'ISystem' con un método 'init()' que devuelva Promise<string>. Después creá una función async 'bootSystem' que retorne 'HERCULES_ONLINE'. ¡HACELO POR LA HUMANIDAD!",
   starter:"// MISIÓN FINAL: Combiná interface + async/await\\n// Demostrá que sos un verdadero ingeniero estelar.\\n\\n// 1. Creá la interface ISystem con init(): Promise<string>\\n// 2. Creá la función async bootSystem que retorne 'HERCULES_ONLINE'\\n\\n",
   hints:["💡 Interface: interface ISystem { init(): Promise<string>; }","💡 Función async: async function bootSystem(): Promise<string> { return 'HERCULES_ONLINE'; }","💡 Respuesta:\\n\\ninterface ISystem {\\n  init(): Promise<string>;\\n}\\n\\nasync function bootSystem(): Promise<string> {\\n  return 'HERCULES_ONLINE';\\n}"],
   solution:"interface ISystem {\\n  init(): Promise<string>;\\n}\\n\\nasync function bootSystem(): Promise<string> {\\n  return 'HERCULES_ONLINE';\\n}",
   validate:"() => { const code = STATE.editor.getValue(); return code.includes('interface') && code.includes('async') && code.includes('HERCULES_ONLINE'); }"},
];

// Build the missions array as JS source code
function missionToSource(m) {
  const lines = [];
  lines.push('  {');
  lines.push(`    "id": ${m.id},`);
  lines.push(`    "type": "${m.type}",`);
  lines.push(`    "timer": ${m.timer === null ? 'null' : m.timer},`);
  if (m.phase) lines.push(`    "phase": "${m.phase}",`);
  lines.push(`    "title": ${JSON.stringify(m.title)},`);
  lines.push(`    "sarge": ${JSON.stringify(m.sarge)},`);
  lines.push(`    "starter": ${JSON.stringify(m.starter)},`);
  lines.push(`    "hints": [`);
  m.hints.forEach((h, i) => {
    lines.push(`      ${JSON.stringify(h)}${i < m.hints.length - 1 ? ',' : ''}`);
  });
  lines.push(`    ],`);
  lines.push(`    "solution": ${JSON.stringify(m.solution)},`);
  lines.push(`    "validate": ${m.validate}`);
  lines.push(`  }`);
  return lines.join('\n');
}

const missionsSource = missions.map(m => missionToSource(m)).join(',\n');

// Build updated functions
const updatedFunctions = functions
  // Change 60 references to 40
  .replace(/STATE\.level === 60/g, 'STATE.level === 40')
  .replace(/if \(STATE\.level !== 60/g, 'if (STATE.level !== 40')
  // Update welcome text
  .replace('60 PROTOCOLOS DE SEGURIDAD', '40 PROTOCOLOS DE SEGURIDAD')
  // Update hint cost for bootcamp (3% instead of 5%)
  .replace(
    'STATE.energy -= 5;',
    'STATE.energy -= (STATE.level <= 10) ? 3 : 5;'
  )
  // Update loadLevel special env (old id 26 no longer exists as localStorage mission)
  .replace(
    `if (id === 26) {\n        localStorage.setItem('telemetry', JSON.stringify({ vortex: true }));\n      }`,
    '// No special env needed'
  )
  // Update renderMissions to add BOOTCAMP section
  .replace(
    `missions.forEach(m => {
        const item = document.createElement('div');
        const locked = m.id > STATE.unlocked;
        item.className = \`mission-item \${locked ? 'locked' : ''} \${m.id === STATE.level ? 'active' : ''}\`;
        item.innerHTML = \`\${m.id}. \${m.title} \${STATE.completed.includes(m.id) ? '✓' : ''}\`;
        if (!locked) item.onclick = () => loadLevel(m.id);
        if (m.type === 'JS') jsList.appendChild(item); else tsList.appendChild(item);
      });`,
    `missions.forEach(m => {
        const item = document.createElement('div');
        const locked = m.id > STATE.unlocked;
        item.className = \`mission-item \${locked ? 'locked' : ''} \${m.id === STATE.level ? 'active' : ''}\`;
        item.innerHTML = \`\${m.id}. \${m.title} \${STATE.completed.includes(m.id) ? '✓' : ''}\`;
        if (!locked) item.onclick = () => loadLevel(m.id);
        if (m.phase === 'BOOTCAMP' || m.type === 'JS') jsList.appendChild(item); else tsList.appendChild(item);
      });`
  )
  // Update renderMissionHub headers
  .replace(
    `addHeader("FRENTE I: INGENIERÍA JS");

      missions.forEach((m, idx) => {
        if (m.id === 36) addHeader("FRENTE II: ARQUITECTURA TS");`,
    `addHeader("FASE 0: BOOTCAMP DEL RECLUTA");

      missions.forEach((m, idx) => {
        if (m.id === 11) addHeader("FASE I: INGENIERÍA JS");
        if (m.id === 26) addHeader("FASE II: ARQUITECTURA TS");`
  );

// Assemble final file
const output = `
    const STATE = {
      name: 'Piloto', rank: 'RECLUTA',
      level: 1, unlocked: 1, completed: [],
      editor: null, typewriterTimer: null,
      timerVal: 0, timerInterval: null,
      hintCount: 0, energy: 100,
      rankProgress: ['RECLUTA', 'CABO', 'SARGENTO', 'TENIENTE', 'CAPITÁN', 'COMANDANTE', 'GENERAL', 'ALMIRANTE']
    };

    function updateStatusVisuals(levelId, isSolved) {
      console.log(\`Level \${levelId} status: \${isSolved ? 'FIXED' : 'ISSUE'}\`);
    }

const missions = [
${missionsSource}
]

    ${updatedFunctions}`;

fs.writeFileSync('./script.js', output, 'utf8');
console.log(`✅ script.js rebuilt with ${missions.length} missions`);
console.log('Missions breakdown:');
console.log('  BOOTCAMP (1-10):', missions.filter(m => m.phase === 'BOOTCAMP').length);
console.log('  JS (11-25):', missions.filter(m => !m.phase && m.type === 'JS').length);
console.log('  TS (26-40):', missions.filter(m => m.type === 'TS').length);
