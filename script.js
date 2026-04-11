
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
        "id": 1, "type": "JS", "timer": null, "character": "stark",
        "title": "Protocolo de Enlace",
        "sarge": "¡RECLUTA! No te me duermas en la guardia. La estación necesita saber que estás vivo. Mandá un pulso de enlace usando 'console.log' con el mensaje 'CONEXIÓN_ESTABLECIDA'. ¡RÁPIDO!",
        "starter": "// Iniciando secuencia de comunicación...\n",
        "hints": ["Usá console.log('...')", "El mensaje debe ser 'CONEXIÓN_ESTABLECIDA'."],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('console.log') && code.includes('CONEXIÓN_ESTABLECIDA'); }
    },
    {
        "id": 2, "type": "JS", "timer": null, "character": "stark",
        "title": "Identificación de Personal",
        "sarge": "¡BIEN! Ahora registrate en el sistema. Creá una variable llamada 'piloto' usando 'let' y poné tu nombre entre comillas. ¡QUIERO SABER A QUIÉN ESTOY GRITANDO!",
        "starter": "// Registrando firma biométrica...\n",
        "hints": ["let piloto = 'Tu Nombre';", "No olvides las comillas."],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('let piloto') && code.includes('='); }
    },
    {
        "id": 3, "type": "JS", "timer": null, "character": "stark",
        "title": "Telemetría Numérica",
        "sarge": "¡CALCULADORA HUMANA! La batería está al 100% pero el radar consume 20%. Creá la variable 'energia' con el resultado de esa resta (100 - 20). ¡NO NOS DEJES A OSCURAS!",
        "starter": "// Calculando balance energético...\n",
        "hints": ["let energia = 100 - 20;", "Los números van sin comillas."],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('energia') && code.includes('100 - 20'); }
    },
    {
        "id": 4, "type": "JS", "timer": null, "character": "stark",
        "title": "Reporte de Estado",
        "sarge": "¡COMUNICACIÓN COMBINADA! Uní el texto 'Estado: ' con la variable 'status' que vale 'OK'. Mostralo en la consola. ¡QUIERO ESE REPORTE AHORA!",
        "starter": "let status = 'OK';\n// Uní los textos aquí...\n",
        "hints": ["Usá el signo + para unir textos.", "console.log('Estado: ' + status);"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('+') && code.includes('console.log'); }
    },
    {
        "id": 5, "type": "JS", "timer": null, "character": "stark",
        "title": "Manifiesto de Carga",
        "sarge": "¡LOGÍSTICA! Creá un objeto llamado 'nave' que tenga un 'id' numérico (1) y una 'clase' de texto ('FRAGATA'). ¡DAME LOS PLANOS!",
        "starter": "// Diseñando estructura de la nave...\n",
        "hints": ["const nave = { id: 1, clase: 'FRAGATA' };"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('nave') && code.includes('id:') && code.includes('clase:'); }
    },
    {
        "id": 6, "type": "JS", "timer": null, "character": "stark",
        "title": "Lista de Escuadrones",
        "sarge": "¡FORMAR FILAS! Creá un array llamado 'escuadrones' con tres nombres: 'Alfa', 'Beta' y 'Gamma'. ¡LOS QUIERO LISTO PARA LA BATALLA!",
        "starter": "// Organizando tropas...\n",
        "hints": ["const escuadrones = ['Alfa', 'Beta', 'Gamma'];", "Los arrays usan corchetes []."],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('escuadrones') && code.includes('['); }
    },
    {
        "id": 7, "type": "JS", "timer": null, "character": "stark",
        "title": "Acceso al Visor",
        "sarge": "¡ESTÁS CIEGO, RECLUTA! Buscá el elemento con id 'sarge-text' usando 'document.getElementById'. Guardalo en una variable 'visor'. ¡ABRÍ LOS OJOS!",
        "starter": "// Localizando visor HUD...\n",
        "hints": ["const visor = document.getElementById('sarge-text');"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('document.getElementById') && code.includes('sarge-text'); }
    },
    {
        "id": 8, "type": "JS", "timer": null, "character": "stark",
        "title": "Inyección de Datos",
        "sarge": "¡HABLA POR EL VISOR! Cambiá el 'innerText' del elemento con id 'sarge-text' a 'SISTEMA_LISTO'. ¡QUE SE VEA EN TODA LA ESTACIÓN!",
        "starter": "// Escribiendo en el HUD...\n",
        "hints": ["document.getElementById('sarge-text').innerText = 'SISTEMA_LISTO';"],
        "validate": () => document.getElementById('sarge-text').innerText.includes('SISTEMA_LISTO')
    },
    {
        "id": 9, "type": "JS", "timer": null, "character": "stark",
        "title": "Pintura Estelar",
        "sarge": "¡ESTÉTICA MILITAR! Cambiá el color del texto ('style.color') de 'sarge-text' a 'lime'. ¡QUIERO QUE BRILLE COMO EL NÚCLEO!",
        "starter": "// Ajustando frecuencia cromática...\n",
        "hints": ["document.getElementById('sarge-text').style.color = 'lime';"],
        "validate": () => document.getElementById('sarge-text').style.color === 'lime'
    },
    {
        "id": 10, "type": "JS", "timer": null, "character": "stark",
        "title": "Enlace HUD",
        "sarge": "¡IDENTIFICACIÓN VISUAL! Cambiá el atributo 'src' del elemento con id 'ship-display' a 'assets/stark.png'. ¡QUIERO VER NUESTRO ACORAZADO!",
        "starter": "// Cargando gráficos de la nave...\n",
        "hints": ["document.getElementById('ship-display').src = 'assets/stark.png';"],
        "validate": () => document.getElementById('ship-display').src.includes('stark.png')
    },
    {
        "id": 11, "type": "JS", "timer": 90, "character": "void",
        "title": "¡ALERTA ROJA: EMBOSCADA!",
        "sarge": "¡G-G-GRRR... EL ALMIRANTE S-S-STARK ES MÍO! S-S-SOY LA ENTIDAD DEL VACÍO. Tu realidad es código corrupto. Rápido, recluta, tenta salvarlo... ¡Cambiá el ID del elemento 'stark-bio' por 'almirante-perdido' antes de que el kernel explote!",
        "starter": "const el = document.getElementById('stark-bio');\n// ¡RENAME THE ID NOW!\n",
        "hints": ["el.id = 'almirante-perdido';", "Usá .id directamente."],
        "validate": () => !document.getElementById('stark-bio') && document.getElementById('almirante-perdido')
    },
    {
        "id": 12, "type": "JS", "timer": null, "character": "dev",
        "title": "Teniente Nova: Nueva Guardia",
        "sarge": "¡SOY LA TENIENTE NOVA! El Almirante ha sido secuestrado por una entidad desconocida. No tenemos tiempo para lamentos. Revisá el soporte vital: si la variable 'oxigeno' es menor a 50, llamá a 'activarAlerta()'. ¡PROTEGÉ A LA TRIPULACIÓN!",
        "starter": "let oxigeno = 30;\n// Tu lógica aquí...\n",
        "hints": ["if (oxigeno < 50) { activarAlerta(); }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('if') && code.includes('activarAlerta'); }
    },
    {
        "id": 13, "type": "JS", "timer": null, "character": "dev",
        "title": "Navegación de Emergencia",
        "sarge": "¡TENIENTE NOVA: DECISIÓN RÁPIDA! Usá un 'switch' para la variable 'prioridad' del navegador. Si es 'ALTA', llamá a 'activarAlerta()'. Si es 'BAJA', imprimí 'STATUS_VERDE'. ¡EL CAMINO ES TUYO!",
        "starter": "let prioridad = 'ALTA';\n// Switch de emergencia...\n",
        "hints": ["switch(prioridad) { case 'ALTA': activarAlerta(); break; ... }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('switch') && code.includes('activarAlerta'); }
    },
    {
        "id": 14, "type": "JS", "timer": null, "character": "dev",
        "title": "Barrido de Sectores",
        "sarge": "¡TENIENTE NOVA: LIMPIEZA! Recorre el array 'debris' con un bucle 'for' y mostrá cada residuo en la consola. ¡SI CHOCAMOS CON CHATARRA, NOS DESINTEGRAMOS!",
        "starter": "const debris = ['ALA_X', 'TURBINA', 'PLACA_CROMO'];\n",
        "hints": ["for (let i=0; i < debris.length; i++)", "console.log(debris[i])"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('for') && code.includes('debris[i]'); }
    },
    {
        "id": 15, "type": "JS", "timer": 60, "character": "dev",
        "title": "Sincronía del Escudo",
        "sarge": "¡TENIENTE NOVA: POTENCIA! Usá un bucle 'while' para aumentar 'energia' de 1 en 1 mientras sea menor a 100 Y el 'calor' sea menor a 50. Por cada paso, sumale 2 al calor. ¡DAME POTENCIA SIN FUNDIR EL NÚCLEO!",
        "starter": "let energia = 80; let calor = 0;\n// Bucle de carga segura...\n",
        "hints": ["while (energia < 100 && calor < 50) { energia++; calor += 2; }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('while') && code.includes('calor += 2'); }
    },
    {
        "id": 16, "type": "JS", "timer": null, "character": "dev",
        "title": "Calculadora de Salto",
        "sarge": "¡TENIENTE NOVA: BALÍSTICA! Definí la función 'canJump(fuel, hull)'. Debe retornar 'true' si el fuel es mayor a 80 O el hull es mayor a 50. ¡QUIERO CÁLCULOS PRECISOS!",
        "starter": "// Creando función de salto...\n",
        "hints": ["function canJump(fuel, hull) { return fuel > 80 || hull > 50; }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('function canJump') && code.includes('||'); }
    },
    {
        "id": 17, "type": "JS", "timer": null, "character": "dev",
        "title": "Drones de Respuesta Rápida",
        "sarge": "¡TENIENTE NOVA: VELOCIDAD! Convertí la lógica de validación de drones en una 'Arrow Function' llamada 'checkDrone' que reciba 'd' y retorne 'd.status === \"READY\"'. ¡CADA MILISEGUNDO CUENTA!",
        "starter": "// Optimizando drones...\n",
        "hints": ["const checkDrone = (d) => d.status === 'READY';"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('=>') && code.includes('status'); }
    },
    {
        "id": 18, "type": "JS", "timer": null, "character": "dev",
        "title": "Protocolo de Pánico",
        "sarge": "¡TENIENTE NOVA: EVENTOS! Agregá un 'addEventListener' de 'click' al botón 'btn-next-level'. Si lo clickean, verificá si 'STATE.energy < 20'. Si es así, mostrá el alert 'BATERÍA_BAJA'. ¡CONTROL TOTAL!",
        "starter": "// Conectando sensores...\n",
        "hints": ["btn.addEventListener('click', () => { if(STATE.energy < 20) alert('BATERÍA_BAJA'); });"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('addEventListener') && code.includes('BATERÍA_BAJA'); }
    },
    {
        "id": 19, "type": "JS", "timer": null, "character": "dev",
        "title": "Tarjeta de Diagnóstico",
        "sarge": "¡TENIENTE NOVA: INYECCIÓN! Creá un 'div' con 'createElement', ponele la clase 'hud-card', sumale el innerText 'SISTEMA_OK' y agregalo al body. ¡QUIERO VER ESE REPORTE EN PANTALLA!",
        "starter": "// Generando UI de diagnóstico...\n",
        "hints": ["const d = document.createElement('div'); d.className = 'hud-card'; document.body.appendChild(d);"],
        "validate": () => document.querySelector('.hud-card') && document.querySelector('.hud-card').innerText.includes('SISTEMA_OK')
    },
    {
        "id": 20, "type": "JS", "timer": null, "character": "dev",
        "title": "Filtro de Objetivos",
        "sarge": "¡TENIENTE NOVA: RADAR! Filtrá el array de objetos 'targets' y guardá en 'hostiles' solo los que tengan 'hostile: true'. ¡LIMPIÁ EL VISOR DE AMIGOS!",
        "starter": "const targets = [{id:1, hostile:true}, {id:2, hostile:false}, {id:3, hostile:true}];\n",
        "hints": ["const hostiles = targets.filter(t => t.hostile);"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('.filter') && code.includes('t.hostile'); }
    },
    {
        "id": 21, "type": "JS", "timer": null, "character": "dev",
        "title": "Mapeo de Coordenadas",
        "sarge": "¡TENIENTE NOVA: CARTOGRAFÍA! Usá '.map()' sobre 'points' para transformar cada número en un objeto: { pos: n }. ¡NECESI-TO ESTRUCTURA EN EL HUD!",
        "starter": "const points = [100, 250, 400];\n",
        "hints": ["const mapped = points.map(n => ({ pos: n }));"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('.map') && code.includes('{ pos'); }
    },
    {
        "id": 22, "type": "JS", "timer": null, "character": "dev",
        "title": "Consumo del Panel",
        "sarge": "¡TENIENTE NOVA: TOTALES! Usá '.reduce()' para sumar la propiedad 'power' de cada elemento en 'modules'. ¡DAME EL CONSUMO TOTAL DEL HUD!",
        "starter": "const modules = [{id:1, power:10}, {id:2, power:25}];\n",
        "hints": ["const total = modules.reduce((acc, m) => acc + m.power, 0);"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('.reduce') && code.includes('m.power'); }
    },
    {
        "id": 23, "type": "JS", "timer": null, "character": "dev",
        "title": "Extracción de Sensores",
        "sarge": "¡TENIENTE NOVA: TELEMETRÍA! Desestructurá 'x', 'y' y la propiedad anidada 'id' del objeto 'telemetry'. ¡EXTRAÉ LOS DATOS CRÍTICOS DEL FRONT!",
        "starter": "const telemetry = { x: 10, y: 20, info: { id: 'STARK-01' } };\n",
        "hints": ["const { x, y, info: { id } } = telemetry;"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('{ x, y, info: { id } }'); }
    },
    {
        "id": 24, "type": "JS", "timer": null, "character": "dev",
        "title": "Bitácora Dinámica",
        "sarge": "¡TENIENTE NOVA: REGISTRO! Usá 'Template Literals' para crear 'REPORT_V4: Nave ${name} en Sector ${sec}'. ¡QUE QUEDE EN EL LOG HTML!",
        "starter": "const name = 'HERCULES'; const sec = 'GAMMA';\n",
        "hints": ["const log = `REPORT_V4: Nave ${name} en Sector ${sec}`;"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('`') && code.includes('${name}'); }
    },
    {
        "id": 25, "type": "JS", "timer": 120, "character": "dev",
        "title": "Sincronía con Cuartel",
        "sarge": "¡TENIENTE NOVA: REDES! Usá 'fetch' para pedir ayuda a 'https://api.stark.os'. Atrapá el error con '.catch' e imprimí 'FALLO_RED'. ¡CONECTATE!",
        "starter": "// Pidiendo refuerzos al backend...\n",
        "hints": ["fetch('URL').then(r => r.json()).catch(e => console.log('FALLO_RED'));"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('fetch') && code.includes('catch'); }
    },
    {
        "id": 26, "type": "JS", "timer": null, "character": "dev",
        "title": "Secuencia de Arranque",
        "sarge": "¡TENIENTE NOVA: ASINCRONÍA! Creá una función 'async' llamada 'boot'. Adentro usá 'await fetch()' y después imprimí 'KERNEL_LISTO'. ¡NADA DE BLOQUEAR EL HILO PRINCIPAL!",
        "starter": "// No podemos esperar por la red...\n",
        "hints": ["async function boot() { await fetch(...); console.log('KERNEL_LISTO'); }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('async') && code.includes('await'); }
    },
    {
        "id": 27, "type": "JS", "timer": null, "character": "dev",
        "title": "Caja Negra Persistente",
        "sarge": "¡TENIENTE NOVA: PERSISTENCIA! Guardá el objeto 'config' en 'localStorage' bajo la llave 'ship_pref'. Usá 'JSON.stringify' para convertirlo. ¡QUE NADA SE BORRE AL RECARGAR!",
        "starter": "const config = { theme: 'dark', zoom: 1.2 };\n",
        "hints": ["localStorage.setItem('ship_pref', JSON.stringify(config));"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('localStorage') && code.includes('stringify'); }
    },
    {
        "id": 28, "type": "JS", "timer": null, "character": "prime",
        "title": "Arquitecto Zero: Estado Privado",
        "sarge": "¡SOY EL ARQUITECTO ZERO! La arquitectura web profesional requiere seguridad. Usá un 'Closure' para crear la función 'createVault'. Debe retornar un objeto con 'getData' y 'setData'. ¡PROTEGÉ LA INFO DEL COMPONENTE!",
        "starter": "function createVault() {\n  let secret = 'STARK';\n  return {\n    // Implementá getData y setData...\n  };\n}\n",
        "hints": ["getData: () => secret, setData: (v) => secret = v"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('return {') && code.includes('getData'); }
    },
    {
        "id": 29, "type": "JS", "timer": null, "character": "prime",
        "title": "Componentes de la Fragata",
        "sarge": "¡ARQUITECTO ZERO: CLASES! Definí la clase 'UIComponent' con un 'constructor' que reciba 'id'. Agregá el método 'render()' que imprima 'DIBUJANDO'. ¡MODULARIDAD PROFESIONAL!",
        "starter": "// Pasando a Clases de componentes...\n",
        "hints": ["class UIComponent { constructor(id) { this.id = id; } render() { console.log('DIBUJANDO'); } }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('class UIComponent') && code.includes('constructor'); }
    },
    {
        "id": 30, "type": "JS", "timer": null, "character": "prime",
        "title": "Estado de Widget Seguro",
        "sarge": "¡ARQUITECTO ZERO: CAMPOS PRIVADOS! En la clase 'Widget', creá un campo privado '#state' con valor 'STABLE'. Solo debe verse desde adentro del objeto. ¡ENCAPSULACIÓN CRÍTICA!",
        "starter": "class Widget {\n  // Definí el campo privado aquí...\n}\n",
        "hints": ["#state = 'STABLE';"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('#state'); }
    },
    {
        "id": 31, "type": "JS", "timer": null, "character": "prime",
        "title": "Utilidades del HUD",
        "sarge": "¡ARQUITECTO ZERO: ESTÁTICOS! Agregá un método 'static fixUI(id)' a la clase 'DOMUtils' que retorne true si el id existe. ¡DAME UNA HERRAMIENTA GLOBAL DE DISEÑO!",
        "starter": "class DOMUtils {\n  // Método static...\n}\n",
        "hints": ["static fixUI(id) { return !!document.getElementById(id); }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('static'); }
    },
    {
        "id": 32, "type": "JS", "timer": null, "character": "prime",
        "title": "Mapa de Nodos UI",
        "sarge": "¡ARQUITECTO ZERO: MAPS! Usá un 'Map' para guardar la señal del nodo 'MainHero' con valor 1500. El Map es más eficiente para trackear elementos de la interfaz. ¡RÁPIDO!",
        "starter": "// Iniciando mapa de nodos de interfaz...\n",
        "hints": ["const nodes = new Map(); nodes.set('MainHero', 1500);"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('new Map()') && code.includes('set('); }
    },
    {
        "id": 33, "type": "JS", "timer": null, "character": "prime",
        "title": "Dashboard Reactivo",
        "sarge": "¡ARQUITECTO ZERO: PROXIES! Creá un 'Proxy' para el objeto 'dashboardState'. Si alguien intenta cambiar una propiedad, imprimí 'UI_REFRESH' en la consola. ¡INTERCEPTÁ CAMBIOS DE ESTADO!",
        "starter": "const dashboardState = { active: true };\n// Creá el proxy con el trap 'set'...\n",
        "hints": ["new Proxy(dashboardState, { set: (obj, prop, val) => { console.log('UI_REFRESH'); return true; } });"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('new Proxy') && code.includes('set:'); }
    },
    {
        "id": 34, "type": "JS", "timer": null, "character": "prime",
        "title": "Error de Renderizado",
        "sarge": "¡ARQUITECTO ZERO: EXCEPCIONES! Creá la clase 'RenderError' que herede de 'Error'. Usala para lanzar ('throw') un error si el 'payload' es null. ¡DIAGNÓSTICO WEB!",
        "starter": "class RenderError extends Error {}\n// Lanzando excepción...\n",
        "hints": ["if (payload === null) throw new RenderError('FAILED');"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('extends Error') && code.includes('throw'); }
    },
    {
        "id": 35, "type": "JS", "timer": 180, "character": "prime",
        "title": "El Kernel Maestro Reactivo",
        "sarge": "¡LO LOGRASTE! Misión Final: Creá una clase 'MasterDashboard' con un método async 'mount()' que use 'await fetch()'. Al terminar, imprimí 'DASHBOARD_STARK_ONLINE'. ¡SALVA AL ALMIRANTE Y AL NEGOCIO!",
        "starter": "// LA ÚLTIMA LÍNEA DE CÓDIGO DEL BOOTCAMP...\n",
        "hints": ["class MasterDashboard { async mount() { await fetch(...); console.log('DASHBOARD_STARK_ONLINE'); } }"],
        "validate": () => { const code = STATE.editor.getValue(); return code.includes('class') && code.includes('async') && code.includes('fetch'); }
    }
];

    const AUDIO = {
      ctx: null,
      alarmOsc: null,
      alarmGain: null,
      init() {
        if (!this.ctx) {
          this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
      },
      play(type) {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        const now = this.ctx.currentTime;

        if (type === 'type') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, now);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'success') {
          osc.type = 'square';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
        } else if (type === 'fail') {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.linearRampToValueAtTime(200, now + 0.1);
          osc.frequency.linearRampToValueAtTime(600, now + 0.2);
          osc.frequency.linearRampToValueAtTime(200, now + 0.3);
          osc.frequency.linearRampToValueAtTime(600, now + 0.4);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.linearRampToValueAtTime(0.15, now + 0.4);
          gain.gain.linearRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
        }
      },
      startAlarm() {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        if (this.alarmOsc) return;

        this.alarmOsc = this.ctx.createOscillator();
        this.alarmGain = this.ctx.createGain();
        
        this.alarmOsc.type = 'sawtooth';
        this.alarmOsc.frequency.setValueAtTime(400, this.ctx.currentTime);
        // Modulación para el tono de "uau-uau"
        this.alarmOsc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.5);
        this.alarmOsc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 1.0);
        
        this.alarmGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        
        this.alarmOsc.connect(this.alarmGain);
        this.alarmGain.connect(this.ctx.destination);
        
        this.alarmOsc.loop = true; // Oscillators don't simple loop like this for frequency ramps, so I'll use a simpler interval or just one long ramp
        this.alarmOsc.start();
      },
      stopAlarm() {
        if (this.alarmOsc) {
          this.alarmOsc.stop();
          this.alarmOsc = null;
        }
      }
    };

    function runInitialCinematic() {
      // SKIP INITIAL DIALOGUE DIRECTLY TO LOGIN
      const area = document.getElementById('id-input-area');
      if (area) {
        area.style.display = 'block';
        area.style.animation = 'fadeIn 1s forwards';
        document.getElementById('user-name-input').focus();
      }
      document.getElementById('welcome-text').innerHTML = '[LECTURA BIOMÉTRICA]...<br>SISTEMA LISTO. 35 PROTOCOLOS CARGADOS.';
    }

    function typeWriter(t, id, speed = 25, callback) {
      const el = document.getElementById(id);
      if (!el) return;
      if (STATE.typewriterTimer) clearTimeout(STATE.typewriterTimer);
      el.innerHTML = ''; let i = 0;

      const isSarge = id === 'sarge-text';
      const sargeContainer = document.getElementById('sarge-container');
      if (isSarge && sargeContainer) {
        sargeContainer.classList.add('cinematic');
        document.getElementById('dialogue-overlay').classList.add('active');
      }

      function step() { 
        if (i < t.length) { 
          el.innerHTML = t.substring(0, i + 1); 
          i++; 
          AUDIO.play('type');
          STATE.typewriterTimer = setTimeout(step, speed); 
        } else {
          if (callback) callback();
          if (isSarge && sargeContainer) {
            setTimeout(() => {
              sargeContainer.classList.remove('cinematic');
              document.getElementById('dialogue-overlay').classList.remove('active');
            }, 1800);
          }
        }
      }
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
            `35 PROTOCOLOS DE SEGURIDAD CARGADOS EN EL KERNEL...`,
            "¡LISTO PARA EL DESPEGUE!"
        ];
        
        const sargeGreeting = isRecovery 
          ? `¡BIENVENIDO DE VUELTA, ${STATE.name.toUpperCase()}! LA ESTACIÓN TE NECESITA.`
          : `¡ATENCIÓN! PILOTO ${STATE.name.toUpperCase()} RECONOCIDO POR EL ALMIRANTE STARK. ESTÁS EN EL ÁREA DE OPERACIONES. ¡DEMOSTRÁ TU VALOR!`;

        let lineIdx = 0;
        function nextLine() {
            if (lineIdx < lines.length) {
                typeWriter(lines[lineIdx], 'welcome-text', 15, () => {
                    setTimeout(() => {
                        lineIdx++;
                        nextLine();
                    }, 1000);
                });
            } else {
                setTimeout(() => {
                    document.getElementById('welcome-overlay').classList.add('hidden');
                    // GREETING CINEMATIC
                    setSargePose('pose-point');
                    typeWriter(sargeGreeting, 'sarge-text', 20, () => {
                      setTimeout(() => {
                        loadLevel(startLevel);
                      }, 2000);
                    });
                }, 1000);
            }
        }
        nextLine();
    }

    function showHint() {
      if (STATE.energy < 5) return triggerFailUI("¡ERROR! ENERGÍA INSUFICIENTE PARA AUXILIO TÁCTICO.");
      
      const m = missions.find(x => x.id === STATE.level);
      if (!m) return;

      STATE.energy -= (STATE.level <= 10) ? 3 : 5;
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
      const hintPrefix = isLast ? ">>> [ALMIRANTE] TRANSMISIÓN FINAL: " : `>>> [ALMIRANTE] PISTA TÁCTICA ${idx + 1}/${allHints.length}: `;
      
      setSargePose('pose-radio');
      typeWriter(hintPrefix + allHints[idx], 'sarge-text', 15, () => {
        setTimeout(() => setSargePose('pose-idle'), 5000);
      });
    }

    function stopTimer() {
      if (STATE.timerInterval) clearInterval(STATE.timerInterval);
      AUDIO.stopAlarm();
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
        'ALMIRANTE': 'Almirante, el destino del universo está en sus manos: '
      };
      return tones[rank] || '¡PILOTO! - ';
    }

    function setSargePose(id) {
      document.querySelectorAll('.sarge-visor img').forEach(img => img.classList.remove('active'));
      const t = document.getElementById(id);
      if (t) t.classList.add('active');
    }

    function updateCharacterPortrait(char) {
      const charMap = {
        'stark': 'assets/stark.png',
        'void': 'assets/void.png',
        'dev': 'assets/dev.png',
        'prime': 'assets/ts.png'
      };
      const src = charMap[char] || 'assets/dev.png';
      
      // Update all pose images to the current character's portrait
      // Since we only have 1 portrait per character, we reuse it for all "poses"
      document.getElementById('pose-idle').src = src;
      document.getElementById('pose-radio').src = src;
      document.getElementById('pose-point').src = src;
    }

    function loadLevel(id) {
      const m = missions.find(x => x.id === id);
      if (!m) return;
      STATE.level = id;
      STATE.hintCount = 0;

      // Update character portrait
      updateCharacterPortrait(m.character);
      
      if (STATE.editor) {
        const editorModel = STATE.editor.getModel();
        monaco.editor.setModelLanguage(editorModel, m.type === 'TS' ? 'typescript' : 'javascript');
        STATE.editor.setValue(m.starter || '');
      }
      
      document.getElementById('current-file').innerText = m.title.toUpperCase();
      document.getElementById('terminal').innerHTML = `<span style="color:var(--accent)">> CARGANDO PROTOCOLO: ${m.title}...</span><br>> STATUS: PENDIENTE INTERVENCIÓN...<br>`;
      
      if (m.timer) startTimer(m.timer); else stopTimer();

      // INICIALIZACIÓN DE ENTORNO ESPECIAL
      // No special env needed

      const tone = getSargeTone();
      typeWriter(tone + m.sarge, 'sarge-text', 20);
      renderMissions();
    }

    function startTimer(sec) {
      stopTimer();
      if (!sec) return;
      AUDIO.startAlarm();
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
        if (m.type === 'TS') {
          const transpiler = (typeof sucrase !== 'undefined') ? sucrase : (typeof Sucrase !== 'undefined' ? Sucrase : null);
          
          if (transpiler) {
            try {
              executableCode = transpiler.transform(code, { transforms: ["typescript"] }).code;
            } catch (te) {
              log(`<span style="color:var(--error)">¡ERROR DE TRANSPILACIÓN! El kernel no puede procesar el código TS.</span>`);
              console.error("Transpilation Error:", te);
            }
          } else {
            // FALLBACK DE EMERGENCIA: Intenta remover tipos básicos si el transpiler falla
            log(`<span style="color:#eab308">>>> [AVISO] Transpilador externo no detectado. Usando motor de respaldo StarkEngage v1.0...</span>`);
            executableCode = code.replace(/:\s*(string|number|boolean|any|void|unknown|never|Object|Array<.*>|\[.*\])\b/g, '');
          }
        }

        try {
          const fn = new Function('console', 'activarAlerta', 'CODE', executableCode);
          fn({ log: (msg) => log(`<span style="color:#a7f3d0">OUT: ${msg}</span>`) }, activarAlerta, code);
        } catch (execErr) {
          if (m.type !== 'TS') throw execErr;
          log(`<span style="color:#eab308">>>> [AVISO] Sintaxis de TypeScript estricta detectada. Omitiendo ejecución, procediendo a validación estática...</span>`);
        }

        const isSolved = (typeof m.validate === 'function') ? m.validate() : eval(m.validate);
        
        if (isSolved) {
            stopTimer();
            AUDIO.play('success');
            document.getElementById('success-pulse').classList.add('active');
            document.getElementById('app-body').classList.add('success-alarm-active');
            
            const congrats = [
                "¡MISIÓN CUMPLIDA! El Almirante Stark está impresionado.",
                "SISTEMA NOMINAL. Has salvado la estación, Piloto.",
                "CÓDIGO INTEGRADO. Recompensa de energía enviada.",
                "DATOS ENVIADOS. Siguiente sector desbloqueado.",
                "¡EXCELENTE TRABAJO! Has demostrado patriotismo estelar."
            ];
            let msg = congrats[Math.floor(Math.random() * congrats.length)];
            
            if (STATE.level === 35) {
                msg = "¡BIEN HECHO SOLDADO! HAS SALVADO LA ESTACIÓN Y A LA HUMANIDAD. YA PUEDES JUBILARTE EN PAZ. OPERACIÓN HÉRCULES COMPLETADA.";
            }
            
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
            typeWriter(`>>> [ALMIRANTE STARK]: ${msg}`, 'sarge-text', 15, () => {
                setTimeout(() => {
                if (STATE.level === 35) {
                    document.getElementById('victory-overlay').classList.remove('hidden');
                    setSargePose('pose-point');
                } else if (!isPromoted) {
                        document.getElementById('success-overlay').classList.remove('hidden');
                    } else {
                        // CEREMONIA DE ASCENSO VISUAL
                        document.getElementById('new-rank-display').innerText = STATE.rank;
                        document.getElementById('promotion-overlay').classList.remove('hidden');
                        setSargePose('pose-point');
                        document.getElementById('terminal').innerHTML += `<br><span style="color:var(--success); font-size:14px; font-weight:800;">>>> [ALERTA DE SISTEMA]: ¡FELICITACIONES, PILOTO! HAS ASCENDIDO A ${STATE.rank}! <<<</span><br>`;
                    }
                    if (STATE.level !== 40 && !isPromoted) setSargePose('pose-idle');
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
        AUDIO.play('fail');
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
    
    function returnToStart() {
        document.getElementById('victory-overlay').classList.add('hidden');
        document.getElementById('welcome-overlay').classList.remove('hidden');
        document.getElementById('id-input-area').style.display = 'block';
        document.getElementById('user-name-input').value = '';
        document.getElementById('user-name-display').innerText = '...';
        document.getElementById('user-rank').innerText = 'RECLUTA';
        document.getElementById('hud-fuel').innerText = '100%';
        document.getElementById('hud-fuel').style.width = '100%';
        document.getElementById('welcome-text').innerHTML = '';
        STATE = {
            name: '', level: 1, unlocked: 1, completed: [],
            energy: 100, rank: 'RECLUTA',
            rankProgress: ['RECLUTA', 'CABO', 'SARGENTO', 'TENIENTE', 'CAPITÁN', 'COMANDANTE', 'ALMIRANTE']
        };
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
        if (m.phase === 'BOOTCAMP' || m.type === 'JS') jsList.appendChild(item); else tsList.appendChild(item);
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

      addHeader("FASE 0: BOOTCAMP DEL RECLUTA");

      missions.forEach((m, idx) => {
        if (m.id === 11) addHeader("FASE I: INGENIERÍA JS");
        if (m.id === 28) addHeader("FASE II: ARQUITECTURA PRO JS");

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

    window.onload = () => { 
      if (typeof lucide !== 'undefined') lucide.createIcons(); 
      initEditor(); 
      runInitialCinematic();
    };