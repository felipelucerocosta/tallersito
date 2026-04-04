# Manual de Soluciones: STARK_OS (Operación Hércules)

Este manual contiene los 60 protocolos técnicos necesarios para salvar la Estación Hércules. Úsalos con sabiduría, Piloto. Cada solución ha sido validada por el Núcleo Central de Inteligencia (Stark OS v4.1).

---

## 📑 ÍNDICE DE PROTOCOLOS
1. [🛰️ FASE I: INGENIERÍA JAVASCRIPT (1-35)](#-fase-i-ingenier%C3%ADa-javascript-1-35)
2. [🧩 FASE II: MAESTRÍA EN OBJETOS (POO)](#-fase-ii-maestr%C3%ADa-en-objetos-poo)
3. [🏗️ FASE III: ARQUITECTURA TYPESCRIPT (36-60)](#-fase-iii-arquitectura-typescript-36-60)

---

## 🛰️ FASE I: INGENIERÍA JAVASCRIPT (1-35)

### 1. Protocolo: Despertar de la Hércules
Reactivación del núcleo central de la estación.
```javascript
document.getElementById('sarge-text').innerHTML = '<b>ENLACE_ESTABLECIDO</b>';
```

### 2. Velo de Plasma: Cortafuegos Solar
Protección contra la radiación gamma en los tanques de combustible.
```javascript
document.getElementById('hud-fuel').style.borderColor = 'red';
```

### 3. Salto al Vacío: Motor Warp
Alineación del empuje lateral (left: 80%) para el salto hiperespacial.
```javascript
document.getElementById('hud-warp').style.left = '80%';
```

### 4. Sigilo: Capa de Invisibilidad
Reducción de la opacidad del rango (opacity: 0.2) para evitar detección.
```javascript
document.getElementById('user-rank').style.opacity = '0.2';
```

### 5. SOBRECARGA DEL KERNEL
Gestión de energía ante un impacto inminente activando la alerta.
```javascript
activarAlerta();
document.getElementById('hud-fuel').style.width = '50px';
```

### 6. Telemetría del Casco
Cálculo de la integridad total (50 + 50) tras un impacto doble.
```javascript
document.getElementById('hud-hull').innerText = 50 + 50;
```

### 7. Refactorización de Interfaz
Actualización del visor (borderRadius: 50%) para activar el Modo Lente.
```javascript
document.getElementById('sarge-wrapper').style.borderRadius = '50%';
```

### 8. Variables y Scope de Memoria
Automatización de la reserva de oxígeno en el sector 7 (lógica condicional).
```javascript
if (oxigeno < 50) {
  oxigeno = 100;
}
```

### 9. Event Listener de Consola
Conexión de los disparadores de emergencia mediante listener de click.
```javascript
document.getElementById('btn-next-level').addEventListener('click', () => {
  console.log('SISTEMA_OK');
});
```

### 10. Protocolo: Inyección de Alertas
Inserción de alertas críticas en el terminal mediante createElement y appendChild.
```javascript
const div = document.createElement('div');
div.className = 'hud-warning';
div.innerText = 'ERROR_KERNEL';
document.getElementById('terminal').appendChild(div);
```

### 11. Bucle de Escaneo de Sectores
Barrido de sensores mediante un bucle for para detectar amenazas.
```javascript
for (let i = 0; i < sectores.length; i++) {
  console.log(sectores[i]);
}
```

### 12. Acceso: Firma de Comandante
Validación de firma digital avanzada (length > 5 && includes 'ADMIN').
```javascript
function validarAcceso(perfil) {
  return perfil.length > 5 && perfil.includes('ADMIN');
}
```

### 13. Filtro: Residuos de Supernova
Detección de logs críticos (critico: true) en el buffer de datos.
```javascript
const f = logs.filter(l => {
  if (l.critico) {
    console.log('PELIGRO');
    return true;
  }
  return false;
});
```

### 14. Misión: El Vórtice de Datos
Normalización de telemetría filtrando datos válidos y sumando 50.
```javascript
const p = stream.filter(s => s.valid).map(s => s.v + 50);
```

### 15. Cápsula: La Caja de Pandora
Desestructuración de coordenadas GPS para detección de cuadrante.
```javascript
const { lat, long } = gps;
if (lat < 0) {
  console.log('SECTOR_SUR');
}
```

### 16. Misión: El Árbol de Decisiones
Control de rumbos mediante switch de prioridad. 
```javascript
switch(prioridad) {
  case 'ALTA': activarAlerta(); break;
  case 'BAJA': console.log('STATUS_VERDE'); break;
}
```

### 17. Factory: Forja de Nanobots
Construcción de módulos de reparación autónoma con constructores ES5.
```javascript
function Modulo(id, status) {
  this.id = id;
  this.status = status;
  this.actualizar = (n) => this.status = n;
}
```

### 18. Mando: El Enjambre Spica
Jerarquía de drones con clases modernas de ES6.
```javascript
class Dron {
  constructor(id) { this.id = id; }
  operar() { console.log('DRON_ACTIVO'); }
}
```

### 19. Sincro: El Eco de Europa
Comunicación asíncrona mediante fetch y promesas (.then / .catch).
```javascript
fetch('https://api.stark.os')
  .then(r => r.json())
  .catch(e => console.error(e));
```

### 20. Misión: El Aliento de Io
Soporte vital asíncrono mediante el uso de async/await.
```javascript
async function fetchStatus() {
  const r = await fetch('url');
  const d = await r.json();
  return d.valid;
}
```

### 21. Evento: El Terminal de Phobos
Interacción táctica detectando elementos SPAN en el terminal.
```javascript
document.getElementById('terminal').addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    e.target.style.color = 'green';
  }
});
```

### 22. Persistencia: El Diario de Deimos
Guardado de objetos en localStorage mediante serialización JSON.
```javascript
localStorage.setItem('oficial', JSON.stringify(oficial));
```

### 23. Misión: El Código Enigma
Validación de protocolos mediante expresiones regulares (Regex).
```javascript
const regex = /^STARK-\d{4}!$/;
console.log(regex.test('STARK-1234!'));
```

### 24. Cápsula: El Secreto de Saturno
Encapsulamiento de datos mediante Cloures para proteger contadores internos.
```javascript
function crearContador() {
  let count = 0;
  return {
    sumar: () => count++,
    ver: () => count
  };
}
```

### 25. Pulsar: El Latido Infinito
Generación de energía infinita mediante funciones generadoras (yield).
```javascript
function* pulsar() {
  let i = 0;
  while(true) {
    yield 'X-' + i++;
  }
}
```

### 26. Caché: El Eco de Neptuno
Sincronización de telemetría parseando datos del sistema de caché.
```javascript
const data = JSON.parse(raw);
if (data && data.vortex) {
  activarAlerta();
}
```

### 27. Sesión: El Token de Urano
Almacenamiento volátil de claves de acceso en sessionStorage.
```javascript
sessionStorage.setItem('access', 'STARK_ACCESS');
```

### 28. Radar: El Ojo de Tritón
Vigilancia mediante IntersectionObserver para detectar objetivos visuales.
```javascript
const radar = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio === 1) {
    console.log('OBJETIVO_FIJADO');
  }
});
radar.observe(document.getElementById('sarge-container'));
```

### 29. Navegación: El Mapa de Plutón
Extracción de parámetros de navegación desde la URL actual.
```javascript
const params = new URLSearchParams(window.location.search);
const coord = params.get('coord');
```

### 30. Proxy: El Escudo de Eris
Intercepción de seguridad para garantizar niveles mínimos de energía de escudo.
```javascript
const proxy = new Proxy(target, {
  set: (t, p, v) => {
    if (v < 50) v = 50;
    t[p] = v;
    return true;
  }
});
```

### 31. Aborto: La Señal de Ceres
Cancelación de peticiones de datos mediante AbortController.
```javascript
fetch(url, { signal: controller.signal });
```

### 32. Blob: El Manifiesto Haumea
Generación de archivos binarios para el registro oficial de la estación.
```javascript
const blob = new Blob([data], { type: 'text/plain' });
const url = URL.createObjectURL(blob);
```

### 33. Espía: El Sensor Makemake
Vigilancia de cambios en el terminal mediante MutationObserver.
```javascript
const obs = new MutationObserver((list) => {
  console.log('CAMBIO_DETECTADO');
});
obs.observe(document.getElementById('terminal'), { childList: true });
```

### 34. Clon: El Espejo de Vega
Replicación profunda de planos estructurales mediante structuredClone.
```javascript
const clone = structuredClone(planos);
```

### 35. CORE: El Corazón del Hércules
Activación de procesos pesados en segundo plano mediante Web Workers.
```javascript
const worker = new Worker('sec.js');
worker.postMessage('OPERAR');
```

---

## 🧩 FASE II: MAESTRÍA EN OBJETOS (POO)

En la Hércules usamos POO para encapsular lógica y datos en entidades autónomas.

### 1. El Concepto de "Clase"
Un plano para construir drones. El plano es la **Clase**, el dron físico es la **Instancia**.

### 2. El Constructor y `this`
El constructor inicializa el objeto. `this` se refiere a "la propiedad de este objeto específico".

#### Ejemplo ES6 (Recomendado):
```javascript
class Dron {
  constructor(id) {
    this.id = id; 
  }
  operar() {
    console.log(`Dron ${this.id} operando...`);
  }
}
```

---

## 🏗️ FASE III: ARQUITECTURA TYPESCRIPT (36-60)

> [!IMPORTANT]
> El Núcleo de la Hércules ahora soporta transpilación en tiempo real. Puedes usar tipos estáticos, interfaces y genéricos sin errores de núcleo.

### 36. TS: El Rigor de Sirio
Blindaje de tipos estricto para variables fundamentales.
```typescript
let id: string = 'SEC-01';
let val: number = 100;
```

### 37. TS: El Contrato de Vega
Definición de interfaces para asegurar la estructura de objetos complejos.
```typescript
interface Station {
  name: string;
  capacity: number;
}



```

### 38. TS: El Sello de Betelgeuse
Uso de `readonly` para proteger datos inalterables del reactor.
```typescript
interface CoreData {
  readonly temp: number;
}
```

### 39. TS: El Código de Rigel
Uso de Enums para gestionar estados militares y niveles de alerta.
```typescript
enum Warning { LOW, MEDIUM, CRITICAL }
let status = Warning.CRITICAL;
```

### 40. TS: La Conjunción Deneb
Uso del operador de intersección (&) para combinar especificaciones técnicas.
```typescript
type Armor = { v: number };
type Shield = { p: number };

type FullDef = Armor & Shield;
```

### 41. TS: El Secreto de Arcturus
Uso del modificador `private` para proteger comunicaciones internas.
```typescript
class RadioClient {
  private freq: string;
}
```

### 42. TS: El Recipiente Spica
Interfaces con genéricos (<T>) para módulos de carga adaptativa.
```typescript
interface Box<T> {
  data: T;
}
```

### 43. TS: El Linaje de Antares
Herencia de clases mediante `extends` y acceso al padre con `super`.
```typescript
class Laser { fire() { console.log('PIU'); } }

class PulseLaser extends Laser {
  fire() {
    super.fire();
  }
}
```

### 44. TS: El Filtro de Fomalhaut
Uso de Type Guards (`typeof`) para discriminar datos en el flujo.
```typescript
function verify(val: string | number) {
  if (typeof val === 'number') return true;
  return false;
}
```

### 45. TS: El Vórtice Pollux
Uso de parámetros rest (`...args`) con tipado estricto de array.
```typescript
function processAll(...args: string[]) {
  return args.join(', ');
}
```

### 46. TS: El Módulo Canopus
Exportación por defecto de clases para la modularización del núcleo.
```typescript
export default class Navigator {} 
```

### 47. TS: El Límite de Castor
Restricción de genéricos (`T extends`) para asegurar propiedades estructurales.
```typescript
function sync<T extends {id: number}>(obj: T) {
  return obj.id;
}
```

### 48. TS: El Seguro Procyon
Mapped Types para blindar interfaces enteras como `readonly`.
```typescript
type Safe<T> = {
  readonly [P in keyof T]: T[P]
};
```

### 49. TS: El Vigía de Capella
Uso de decoradores de clase para monitorizar instancias de oficiales.
```typescript
function Log(target: any) {}

@Log
class Pilot {}
```

### 50. TS: El Núcleo Unificado
Patrón Singleton avanzado para el kernel maestro de la estación.
```typescript
class MasterKernel {
  private static instance: MasterKernel;
  private constructor() {}
  public static getInstance() {
    if (!this.instance) this.instance = new MasterKernel();
    return this.instance;
  }
}
```

### 51. TS: El Parche Centauri
Uso de `Partial<T>` para actualizaciones parciales del estado del casco.
```typescript
interface Hull { dmg: number; sensor: boolean; }

function update(p: Partial<Hull>) {
  return p;
}
```

### 52. TS: El Filtro Bellatrix
Uso de `Pick<T, K>` para extraer subconjuntos específicos de telemetría.
```typescript
interface Map { lat: number; long: number; bio: string; }

type MinMap = Pick<Map, 'lat' | 'long'>;
```

### 53. TS: El Olvido de Polaris
Uso de `Omit<T, K>` para ocultar credenciales en datos públicos.
```typescript
interface User { id: number; password: string; }

type PublicUser = Omit<User, 'password'>;
```

### 54. TS: El Diccionario Regulus
Uso de `Record<K, T>` para mapear jerarquías militares completas.
```typescript
let military: Record<string, number> = {
  'GENERAL': 100
};
```

### 55. TS: La Unión Draco
Uso de tipos de unión (|) para respuestas polimórficas de sensores.
```typescript
type Resp = { ok: true, data: string } | { ok: false, error: string };
```

### 56. TS: Los Colores de Lyra
Template Literal Types para validación de formatos de identificación.
```typescript
type ShipColor = `#HEX-${string}`;
```

### 57. TS: El Cristal de Aquila
Uso de `as const` para la máxima inmutabilidad de especificaciones.
```typescript
const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;
```

### 58. TS: El Índice Fomalhaut
Index Signatures para diccionarios de sensores dinámicos.
```typescript
interface SensorLog {
  [key: string]: boolean;
}
```

### 59. TS: La Llave Aquila
Uso del operador `keyof` para accesos indexados seguros.
```typescript
function getParam<T, K extends keyof T>(o: T, k: K) {
  return o[k];
}
```

### 60. TS FINAL: EL ALFA Y EL OMEGA
Arquitectura Militar Total: Singleton + Interfaces + Async.
```typescript
interface IKernel {
  init(): Promise<void>;
}

class SupremeKernel implements IKernel {
  private static instance: SupremeKernel;
  private constructor() {}
  
  async init() {
    console.log('READY');
  }

  static getInstance() {
    return this.instance || (this.instance = new SupremeKernel());
  }
}
```

---

## 📚 GLOSARIO TÉCNICO Y TEORÍA

Para superar la Operación Hércules, no basta con copiar código; un verdadero comandante entiende *por qué* funciona. Aquí tienes la teoría detrás de las herramientas más poderosas que usarás en la estación.

### ⚡ JavaScript Avanzado

*   **`Proxy`**: Es como un guardia de seguridad para un objeto. Te permite interceptar y personalizar operaciones fundamentales en ese objeto, como leer o modificar una propiedad. (Usado en el Nivel 30 para impedir que el escudo baje de 50).
*   **`AbortController`**: Un control remoto que te permite cancelar peticiones web (`fetch`) si están tardando demasiado o ya no son necesarias. Salva recursos valiosos de la estación.
*   **`Blob`**: Un "Objeto Binario Grande". Permite crear y manejar archivos de texto, imágenes o datos en crudo directamente en la memoria del navegador sin necesitar un servidor.
*   **`MutationObserver`**: Un espía silencioso. Este objeto de JavaScript observa una parte del HTML (el DOM) y ejecuta una función automáticamente si ocurre algún cambio, como añadir o borrar elementos.
*   **`structuredClone`**: A diferencia de asignar variables con `= ` (que solo copia una referencia), `structuredClone` hace una **copia profunda y perfecta** de un objeto entero con todos sus sub-objetos, evitando que modificar la copia altere el original.
*   **`Web Workers`**: Tu estación tiene un solo hilo principal (core). Los Web Workers permiten crear hilos secundarios para ejecutar código pesado en el fondo sin que la pantalla o el juego se congele.

### 🛡️ TypeScript: Arquitectura Estricta

*   **`interface` vs `type`**: Son planos para objetos. Sirven para indicarle a TypeScript qué forma exacta debe tener un objeto (qué propiedades y de qué tipo). 
    *   `interface` es ideal para objetos (como los planos de la estación).
    *   `type` es más versátil y permite crear alias para combinaciones de tipos o valores literales.
*   **Generics (`<T>`)**: Te permiten hacer funciones o interfaces "flexibles". La letra `T` representa un tipo que se decidirá al momento de usarlo, creando código reutilizable (ej: una Caja que puede guardar `string`, o `number`, o `Station`).
*   **`enum`**: Define un conjunto limitado de valores fijos nombrados (ej: NIVELES DE ALERTA). Ayuda a evitar que alguien invente un valor que no existe.
*   **`keyof`**: Extrae todas las "llaves" o nombres de propiedades de una Interfaz y las convierte en tipos válidos. Si algo usa `keyof Station`, solo aceptará los valores "name" o "capacity".
*   **`as const`**: Transforma un objeto normal en una estructura **petrificada**. TypeScript asumirá que ninguna de sus propiedades cambiará jamás. Es más poderoso que `readonly` porque afecta a todo el objeto en profundidad.
*   **Type Guards (`typeof`)**: Una validación en tiempo de ejecución (`if (typeof x === 'number')`) que TypeScript es lo suficientemente inteligente para entender, reduciendo los posibles tipos dentro de ese bloque de código.
*   **Union (`|`) e Intersect (`&`)**:
    *   Union (`|`): La variable puede ser *UNA DE ESTAS* cosas (ej: `string | number`).
    *   Intersect (`&`): La variable debe cumplir con *TODO* a la vez, fusionando propiedades.

### 🛠️ Tipos Utilitarios de TypeScript (Mapped Types)

TypeScript incluye "herramientas" especiales para modificar interfaces rápida y limpiamente:

*   **`Partial<T>`**: Toma una interfaz y hace que TODAS sus propiedades sean opcionales (tengan un `?`). Muy útil para funciones que parchean o actualizan partes de un sistema.
*   **`Pick<T, K>`**: Te permite "recortar" una gran interfaz y quedarte **solo con lo que necesitas** (las propiedades K).
*   **`Omit<T, K>`**: Lo contrario de Pick. Toma una interfaz grande y crea una nueva clon **eliminando** las propiedades ocultas (ej: borrar la contraseña de un usuario).
*   **`Record<K, T>`**: La forma más rápida de crear diccionarios dinámicos estrictos. `Record<string, number>` significa: un objeto cuyas llaves son texto y sus valores son siempre números.

> *Fin del manual. Buena suerte ahí fuera, Piloto. - Mando de Ingeniería STARK.*
