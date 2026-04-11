const missions = [
    {
        "id": 1, "type": "JS", "timer": null, "character": "stark",
        "title": "Protocolo de Enlace",
        "sarge": "¡RECLUTA! No te me duermas en la guardia. La estación necesita saber que estás vivo. Mandá un pulso de enlace usando 'console.log' con el mensaje 'CONEXIÓN_ESTABLECIDA'. ¡RÁPIDO!",
        "starter": "// Iniciando secuencia de comunicación...\n",
        "hints": ["Usá console.log('...')", "El mensaje debe ser 'CONEXIÓN_ESTABLECIDA'."],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('console.log') && code.includes('CONEXIÓN_ESTABLECIDA'); }"
    },
    {
        "id": 2, "type": "JS", "timer": null, "character": "stark",
        "title": "Identificación de Personal",
        "sarge": "¡BIEN! Ahora registrate en el sistema. Creá una variable llamada 'piloto' usando 'let' y poné tu nombre entre comillas. ¡QUIERO SABER A QUIÉN ESTOY GRITANDO!",
        "starter": "// Registrando firma biométrica...\n",
        "hints": ["let piloto = 'Tu Nombre';", "No olvides las comillas."],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('let piloto') && code.includes('='); }"
    },
    {
        "id": 3, "type": "JS", "timer": null, "character": "stark",
        "title": "Telemetría Numérica",
        "sarge": "¡CALCULADORA HUMANA! La batería está al 100% pero el radar consume 20%. Creá la variable 'energia' con el resultado de esa resta (100 - 20). ¡NO NOS DEJES A OSCURAS!",
        "starter": "// Calculando balance energético...\n",
        "hints": ["let energia = 100 - 20;", "Los números van sin comillas."],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('energia') && code.includes('100 - 20'); }"
    },
    {
        "id": 4, "type": "JS", "timer": null, "character": "stark",
        "title": "Reporte de Estado",
        "sarge": "¡COMUNICACIÓN COMBINADA! Uní el texto 'Estado: ' con la variable 'status' que vale 'OK'. Mostralo en la consola. ¡QUIERO ESE REPORTE AHORA!",
        "starter": "let status = 'OK';\n// Uní los textos aquí...\n",
        "hints": ["Usá el signo + para unir textos.", "console.log('Estado: ' + status);"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('+') && code.includes('console.log'); }"
    },
    {
        "id": 5, "type": "JS", "timer": null, "character": "stark",
        "title": "Manifiesto de Carga",
        "sarge": "¡LOGÍSTICA! Creá un objeto llamado 'nave' que tenga un 'id' numérico (1) y una 'clase' de texto ('FRAGATA'). ¡DAME LOS PLANOS!",
        "starter": "// Diseñando estructura de la nave...\n",
        "hints": ["const nave = { id: 1, clase: 'FRAGATA' };"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('nave') && code.includes('id:') && code.includes('clase:'); }"
    },
    {
        "id": 6, "type": "JS", "timer": null, "character": "stark",
        "title": "Lista de Escuadrones",
        "sarge": "¡FORMAR FILAS! Creá un array llamado 'escuadrones' con tres nombres: 'Alfa', 'Beta' y 'Gamma'. ¡LOS QUIERO LISTO PARA LA BATALLA!",
        "starter": "// Organizando tropas...\n",
        "hints": ["const escuadrones = ['Alfa', 'Beta', 'Gamma'];", "Los arrays usan corchetes []."],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('escuadrones') && code.includes('['); }"
    },
    {
        "id": 7, "type": "JS", "timer": null, "character": "stark",
        "title": "Acceso al Visor",
        "sarge": "¡ESTÁS CIEGO, RECLUTA! Buscá el elemento con id 'sarge-text' usando 'document.getElementById'. Guardalo en una variable 'visor'. ¡ABRÍ LOS OJOS!",
        "starter": "// Localizando visor HUD...\n",
        "hints": ["const visor = document.getElementById('sarge-text');"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('document.getElementById') && code.includes('sarge-text'); }"
    },
    {
        "id": 8, "type": "JS", "timer": null, "character": "stark",
        "title": "Inyección de Datos",
        "sarge": "¡HABLA POR EL VISOR! Cambiá el 'innerText' del elemento con id 'sarge-text' a 'SISTEMA_LISTO'. ¡QUE SE VEA EN TODA LA ESTACIÓN!",
        "starter": "// Escribiendo en el HUD...\n",
        "hints": ["document.getElementById('sarge-text').innerText = 'SISTEMA_LISTO';"],
        "validate": "() => document.getElementById('sarge-text').innerText.includes('SISTEMA_LISTO')"
    },
    {
        "id": 9, "type": "JS", "timer": null, "character": "stark",
        "title": "Pintura Estelar",
        "sarge": "¡ESTÉTICA MILITAR! Cambiá el color del texto ('style.color') de 'sarge-text' a 'lime'. ¡QUIERO QUE BRILLE COMO EL NÚCLEO!",
        "starter": "// Ajustando frecuencia cromática...\n",
        "hints": ["document.getElementById('sarge-text').style.color = 'lime';"],
        "validate": "() => document.getElementById('sarge-text').style.color === 'lime'"
    },
    {
        "id": 10, "type": "JS", "timer": null, "character": "stark",
        "title": "Enlace HUD",
        "sarge": "¡IDENTIFICACIÓN VISUAL! Cambiá el atributo 'src' del elemento con id 'ship-display' a 'assets/stark.png'. ¡QUIERO VER NUESTRO ACORAZADO!",
        "starter": "// Cargando gráficos de la nave...\n",
        "hints": ["document.getElementById('ship-display').src = 'assets/stark.png';"],
        "validate": "() => document.getElementById('ship-display').src.includes('stark.png')"
    },
    {
        "id": 11, "type": "JS", "timer": null, "character": "void",
        "title": "¡ALERTA ROJA: EMBOSCADA!",
        "sarge": "¡G-G-GRRR... EL ALMIRANTE S-S-STARK ES MÍO! S-S-SOY LA ENTIDAD DEL VACÍO. Tu realidad es código corrupto. Rápido, recluta, tenta salvarlo... ¡Cambiá el ID del elemento 'stark-bio' por 'almirante-perdido' antes de que el kernel explote!",
        "starter": "const el = document.getElementById('stark-bio');\n// ¡RENAME THE ID NOW!\n",
        "hints": ["el.id = 'almirante-perdido';", "Usá .id directamente."],
        "validate": "() => !document.getElementById('stark-bio') && document.getElementById('almirante-perdido')"
    },
    {
        "id": 12, "type": "JS", "timer": null, "character": "dev",
        "title": "Sargento Nova: Nueva Guardia",
        "sarge": "¡SOY EL SARGENTO NOVA! El Almirante ha sido secuestrado por una entidad desconocida. No tenemos tiempo para lamentos. Revisá el soporte vital: si la variable 'oxigeno' es menor a 50, llamá a 'activarAlerta()'. ¡PROTEGÉ A LA TRIPULACIÓN!",
        "starter": "let oxigeno = 30;\n// Tu lógica aquí...\n",
        "hints": ["if (oxigeno < 50) { activarAlerta(); }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('if') && code.includes('activarAlerta'); }"
    },
    {
        "id": 13, "type": "JS", "timer": null, "character": "dev",
        "title": "Navegación de Emergencia",
        "sarge": "¡SARGENTO NOVA: DECISIÓN RÁPIDA! Usá un 'switch' para la variable 'prioridad' del navegador. Si es 'ALTA', llamá a 'activarAlerta()'. Si es 'BAJA', imprimí 'STATUS_VERDE'. ¡EL CAMINO ES TUYO!",
        "starter": "let prioridad = 'ALTA';\n// Switch de emergencia...\n",
        "hints": ["switch(prioridad) { case 'ALTA': activarAlerta(); break; ... }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('switch') && code.includes('activarAlerta'); }"
    },
    {
        "id": 14, "type": "JS", "timer": null, "character": "dev",
        "title": "Barrido de Sectores",
        "sarge": "¡SARGENTO NOVA: LIMPIEZA! Recorre el array 'debris' con un bucle 'for' y mostrá cada residuo en la consola. ¡SI CHOCAMOS CON CHATARRA, NOS DESINTEGRAMOS!",
        "starter": "const debris = ['ALA_X', 'TURBINA', 'PLACA_CROMO'];\n",
        "hints": ["for (let i=0; i < debris.length; i++)", "console.log(debris[i])"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('for') && code.includes('debris[i]'); }"
    },
    {
        "id": 15, "type": "JS", "timer": null, "character": "dev",
        "title": "Sincronía del Escudo",
        "sarge": "¡SARGENTO NOVA: POTENCIA! Usá un bucle 'while' para aumentar 'energia' de 1 en 1 mientras sea menor a 100 Y el 'calor' sea menor a 50. Por cada paso, sumale 2 al calor. ¡DAME POTENCIA SIN FUNDIR EL NÚCLEO!",
        "starter": "let energia = 80; let calor = 0;\n// Bucle de carga segura...\n",
        "hints": ["while (energia < 100 && calor < 50) { energia++; calor += 2; }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('while') && code.includes('calor += 2'); }"
    },
    {
        "id": 16, "type": "JS", "timer": null, "character": "dev",
        "title": "Calculadora de Salto",
        "sarge": "¡SARGENTO NOVA: BALÍSTICA! Definí la función 'canJump(fuel, hull)'. Debe retornar 'true' si el fuel es mayor a 80 O el hull es mayor a 50. ¡QUIERO CÁLCULOS PRECISOS!",
        "starter": "// Creando función de salto...\n",
        "hints": ["function canJump(fuel, hull) { return fuel > 80 || hull > 50; }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('function canJump') && code.includes('||'); }"
    },
    {
        "id": 17, "type": "JS", "timer": null, "character": "dev",
        "title": "Drones de Respuesta Rápida",
        "sarge": "¡SARGENTO NOVA: VELOCIDAD! Convertí la lógica de validación de drones en una 'Arrow Function' llamada 'checkDrone' que reciba 'd' y retorne 'd.status === \"READY\"'. ¡CADA MILISEGUNDO CUENTA!",
        "starter": "// Optimizando drones...\n",
        "hints": ["const checkDrone = (d) => d.status === 'READY';"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('=>') && code.includes('status'); }"
    },
    {
        "id": 18, "type": "JS", "timer": null, "character": "dev",
        "title": "Protocolo de Pánico",
        "sarge": "¡SARGENTO NOVA: EVENTOS! Agregá un 'addEventListener' de 'click' al botón 'btn-next-level'. Si lo clickean, verificá si 'STATE.energy < 20'. Si es así, mostrá el alert 'BATERÍA_BAJA'. ¡CONTROL TOTAL!",
        "starter": "// Conectando sensores...\n",
        "hints": ["btn.addEventListener('click', () => { if(STATE.energy < 20) alert('BATERÍA_BAJA'); });"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('addEventListener') && code.includes('BATERÍA_BAJA'); }"
    },
    {
        "id": 19, "type": "JS", "timer": null, "character": "dev",
        "title": "Tarjeta de Diagnóstico",
        "sarge": "¡SARGENTO NOVA: INYECCIÓN! Creá un 'div' con 'createElement', ponele la clase 'hud-card', sumale el innerText 'SISTEMA_OK' y agregalo al body. ¡QUIERO VER ESE REPORTE EN PANTALLA!",
        "starter": "// Generando UI de diagnóstico...\n",
        "hints": ["const d = document.createElement('div'); d.className = 'hud-card'; document.body.appendChild(d);"],
        "validate": "() => document.querySelector('.hud-card') && document.querySelector('.hud-card').innerText.includes('SISTEMA_OK')"
    },
    {
        "id": 20, "type": "JS", "timer": null, "character": "dev",
        "title": "Filtro de Objetivos",
        "sarge": "¡SARGENTO NOVA: RADAR! Filtrá el array de objetos 'targets' y guardá en 'hostiles' solo los que tengan 'hostile: true'. ¡LIMPIÁ EL VISOR DE AMIGOS!",
        "starter": "const targets = [{id:1, hostile:true}, {id:2, hostile:false}, {id:3, hostile:true}];\n",
        "hints": ["const hostiles = targets.filter(t => t.hostile);"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('t.hostile'); }"
    },
    {
        "id": 21, "type": "JS", "timer": null, "character": "dev",
        "title": "Mapeo de Coordenadas",
        "sarge": "¡SARGENTO NOVA: CARTOGRAFÍA! Usá '.map()' sobre 'points' para transformar cada número en un objeto: { pos: n }. ¡NECESITO ESTRUCTURA!",
        "starter": "const points = [100, 250, 400];\n",
        "hints": ["const mapped = points.map(n => ({ pos: n }));"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('.map') && code.includes('{ pos'); }"
    },
    {
        "id": 22, "type": "JS", "timer": null, "character": "dev",
        "title": "Consumo del Panel",
        "sarge": "¡SARGENTO NOVA: TOTALES! Usá '.reduce()' para sumar la propiedad 'power' de cada elemento en 'modules'. ¡DAME EL CONSUMO TOTAL DEL HUD!",
        "starter": "const modules = [{id:1, power:10}, {id:2, power:25}];\n",
        "hints": ["const total = modules.reduce((acc, m) => acc + m.power, 0);"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('.reduce') && code.includes('m.power'); }"
    },
    {
        "id": 23, "type": "JS", "timer": null, "character": "dev",
        "title": "Extracción de Sensores",
        "sarge": "¡SARGENTO NOVA: TELEMETRÍA! Desestructurá 'x', 'y' y la propiedad anidada 'id' del objeto 'telemetry'. ¡EXTRAÉ LOS DATOS CRÍTICOS!",
        "starter": "const telemetry = { x: 10, y: 20, info: { id: 'STARK-01' } };\n",
        "hints": ["const { x, y, info: { id } } = telemetry;"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('{ x, y, info: { id } }'); }"
    },
    {
        "id": 24, "type": "JS", "timer": null, "character": "dev",
        "title": "Bitácora Dinámica",
        "sarge": "¡SARGENTO NOVA: REGISTRO! Usá 'Template Literals' para crear 'REPORT_V4: Nave ${name} en Sector ${sec}'. ¡QUE QUEDE EN EL LOG!",
        "starter": "const name = 'HERCULES'; const sec = 'GAMMA';\n",
        "hints": ["const log = `REPORT_V4: Nave ${name} en Sector ${sec}`;"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('`') && code.includes('${name}'); }"
    },
    {
        "id": 25, "type": "JS", "timer": null, "character": "dev",
        "title": "Sincronía con Cuartel",
        "sarge": "¡SARGENTO NOVA: REDES! Usá 'fetch' para pedir ayuda a 'https://api.stark.os'. Atrapá el error con '.catch' e imprimí 'FALLO_RED'. ¡CONECTATE!",
        "starter": "// Pidiendo refuerzos...\n",
        "hints": ["fetch('URL').then(r => r.json()).catch(e => console.log('FALLO_RED'));"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('fetch') && code.includes('catch'); }"
    },
    {
        "id": 26, "type": "JS", "timer": null, "character": "dev",
        "title": "Secuencia de Arranque",
        "sarge": "¡SARGENTO NOVA: ASINCRONÍA! Creá una función 'async' llamada 'boot'. Adentro usá 'await fetch()' y después imprimí 'KERNEL_LISTO'. ¡NADA DE BLOQUEOS!",
        "starter": "// No podemos esperar por la red...\n",
        "hints": ["async function boot() { await fetch(...); console.log('KERNEL_LISTO'); }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('async') && code.includes('await'); }"
    },
    {
        "id": 27, "type": "JS", "timer": null, "character": "dev",
        "title": "Caja Negra Persistente",
        "sarge": "¡SARGENTO NOVA: PERSISTENCIA! Guardá el objeto 'config' en 'localStorage' bajo la llave 'ship_pref'. Usá 'JSON.stringify' para convertirlo. ¡QUE NADA SE BORRE!",
        "starter": "const config = { theme: 'dark', zoom: 1.2 };\n",
        "hints": ["localStorage.setItem('ship_pref', JSON.stringify(config));"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('localStorage') && code.includes('stringify'); }"
    },
    {
        "id": 28, "type": "JS", "timer": null, "character": "ts",
        "title": "Ingeniero Prime: Estado Privado",
        "sarge": "¡SOY EL INGENIERO PRIME! La seguridad es lo primero. Usá un 'Closure' para crear la función 'createVault'. Debe retornar un objeto con 'getData' y 'setData'. ¡PROTEGÉ LA INFO!",
        "starter": "function createVault() {\n  let secret = 'STARK';\n  return {\n    // Implementá getData y setData...\n  };\n}\n",
        "hints": ["getData: () => secret, setData: (v) => secret = v"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('return {') && code.includes('getData'); }"
    },
    {
        "id": 29, "type": "JS", "timer": null, "character": "ts",
        "title": "Planos de la Fragata",
        "sarge": "¡INGENIERO PRIME: CLASES! Definí la clase 'Starship' con un 'constructor' que reciba 'name'. Agregá el método 'thrust()' que imprima 'IGNICIÓN'. ¡MODULARIDAD TOTAL!",
        "starter": "// Pasando a Programación Orientada a Objetos...\n",
        "hints": ["class Starship { constructor(name) { this.name = name; } thrust() { console.log('IGNICIÓN'); } }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('class Starship') && code.includes('constructor'); }"
    },
    {
        "id": 30, "type": "JS", "timer": null, "character": "ts",
        "title": "Núcleo Blindado",
        "sarge": "¡INGENIERO PRIME: CAMPOS PRIVADOS! En la clase 'Reactor', creá un campo privado '#powerMode' con valor 'SLEEP'. Solo debe verse desde adentro. ¡SEGURIDAD FÍSICA!",
        "starter": "class Reactor {\n  // Definí el campo privado aquí...\n}\n",
        "hints": ["#powerMode = 'SLEEP';"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('#powerMode'); }"
    },
    {
        "id": 31, "type": "JS", "timer": null, "character": "ts",
        "title": "Protocolos Globales",
        "sarge": "¡INGENIERO PRIME: ESTÁTICOS! Agregá un método 'static isValid(code)' a la clase 'Security' que retorne true si el code mide más de 5. ¡DAME UNA HERRAMIENTA GLOBAL!",
        "starter": "class Security {\n  // Método static...\n}\n",
        "hints": ["static isValid(code) { return code.length > 5; }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('static'); }"
    },
    {
        "id": 32, "type": "JS", "timer": null, "character": "ts",
        "title": "Gestión de Señales",
        "sarge": "¡INGENIERO PRIME: MAPS! Usá un 'Map' para guardar la señal de 'Europa' con valor 1500. El Map es más eficiente que los objetos para llaves dinámicas. ¡RÁPIDO!",
        "starter": "// Iniciando mapa de radio-frecuencias...\n",
        "hints": ["const signals = new Map(); signals.set('Europa', 1500);"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('new Map()') && code.includes('set('); }"
    },
    {
        "id": 33, "type": "JS", "timer": null, "character": "ts",
        "title": "Cortafuegos Reactivo",
        "sarge": "¡INGENIERO PRIME: PROXIES! Creá un 'Proxy' para el objeto 'settings'. Si alguien intenta cambiar una propiedad, imprimi 'CONFIG_LOCKED' en la consola. ¡INTERCEPTÁ EL ATAQUE!",
        "starter": "const settings = { warp: 1 };\n// Creá el proxy con el trap 'set'...\n",
        "hints": ["new Proxy(settings, { set: (obj, prop, val) => { console.log('CONFIG_LOCKED'); return true; } });"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('new Proxy') && code.includes('set:'); }"
    },
    {
        "id": 34, "type": "JS", "timer": null, "character": "ts",
        "title": "Diagnóstico de Fallos",
        "sarge": "¡INGENIERO PRIME: EXCEPCIONES! Creá la clase 'SystemError' que herede de 'Error'. Usala para lanzar ('throw') un error si la 'energia' llega a 0. ¡REPORTE DE DAÑOS!",
        "starter": "class SystemError extends Error {}\n// Lanzando excepción...\n",
        "hints": ["if (energia === 0) throw new SystemError('CRITICAL');"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('extends Error') && code.includes('throw'); }"
    },
    {
        "id": 35, "type": "JS", "timer": null, "character": "ts",
        "title": "El Kernel Maestro",
        "sarge": "¡LO LOGRASTE! Misión Final: Creá una clase 'Kernel' con un método async 'init()' que use 'await fetch()'. Al terminar, imprimí 'STARK_OS_RESTABLECIDO'. ¡SALVA AL ALMIRANTE!",
        "starter": "// LA ÚLTIMA LÍNEA DE CÓDIGO...\n",
        "hints": ["class Kernel { async init() { await fetch(...); console.log('STARK_OS_RESTABLECIDO'); } }"],
        "validate": "() => { const code = STATE.editor.getValue(); return code.includes('class') && code.includes('async') && code.includes('fetch'); }"
    }
];

const fs = require('fs');
const path = require('path');

function generate() {
    const scriptPath = path.join(__dirname, 'script.js');
    if (!fs.existsSync(scriptPath)) {
        console.error('❌ script.js not found!');
        return;
    }

    let content = fs.readFileSync(scriptPath, 'utf8');

    // More robust stringification of missions
    const missionsString = 'const missions = ' + JSON.stringify(missions, null, 2)
        // Correctly unquote validation functions
        .replace(/\"validate\": \"(\(\) => [^]*?)\"(,?)/g, (match, p1, p2) => {
            let fn = p1.replace(/\\"/g, '"').replace(/\\n/g, '\n');
            return `"validate": ${fn}${p2}`;
        });

    const startMarker = 'const missions = [';
    const endMarker = 'function runInitialCinematic(';

    const startIndex = content.indexOf(startMarker);
    const endIndex = content.indexOf(endMarker);

    if (startIndex !== -1 && endIndex !== -1) {
        const newPart = missionsString + '\n\n    ';
        const newContent = content.substring(0, startIndex) + newPart + content.substring(endIndex);
        fs.writeFileSync(scriptPath, newContent, 'utf8');
        console.log('✅ script.js UPDATED with 35 curated JS web missions.');
    } else {
        console.error('❌ Could not find markers in script.js.');
    }
}

generate();
