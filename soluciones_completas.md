# Manual de Soluciones: STARK_OS (Operación Hércules)

Este manual contiene los 60 protocolos técnicos necesarios para salvar la Estación Hércules. Úsalos con sabiduría, Piloto.

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
Automatización de la reserva de oxígeno en el sector 7 (if logic).
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
  if (perfil.length > 5 && perfil.includes('ADMIN')) {
    return true;
  } else {
    return false;
  }
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
const p = stream.filter(s => s.valid).map(s => {
  return s.v + 50;
});
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
Construcción de módulos de reparación autónoma con métodos internos.
```javascript
function Modulo(id, status) {
  this.id = id;
  this.status = status;
  this.actualizar = (n) => this.status = n;
}
```

### 18. Mando: El Enjambre Spica
Jerarquía de drones con métodos de operación.
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
Soporte vital asíncrono mediante el uso de await.
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
Encapsulamiento de datos mediante Closures para proteger contadores.
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
Sincronización de telemetría mediante el parseo de datos en caché.
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
Vigilancia mediante IntersectionObserver para detectar objetivos.
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
Intercepción de seguridad para garantizar niveles mínimos de energía.
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
// La variable 'url' y 'controller' ya están en el sistema
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
Replicación profunda de planos mediante structuredClone.
```javascript
const clone = structuredClone(planos);
```

### 35. CORE: El Corazón del Hércules
Activación de procesos en segundo plano mediante Web Workers.
```javascript
const worker = new Worker('sec.js');
worker.postMessage('OPERAR');
```

---

## 🧩 FASE II: MAESTRÍA EN OBJETOS (POO)

En la Hércules, no programamos líneas sueltas; creamos **entidades autónomas**. La Programación Orientada a Objetos (POO) nos permite encapsular lógica y datos en "objetos" que saben cómo operar.

### 1. El Concepto de "Clase" o "Plantilla"
Imagina que tienes un plano para construir drones. El plano no es el dron, es la **Clase**. Cuando usas el plano para fabricar un dron real, ese dron es una **Instancia** (un objeto).

### 2. El Constructor y el uso de `this`
El constructor es el ritual de nacimiento de un objeto. Aquí es donde usamos `this` para referirnos a "las propiedades de este objeto específico".

#### A. Usando Funciones (ES5)
```javascript
function Modulo(id, status) {
  // 'this' es el objeto que se está creando
  this.id = id; 
  this.status = status;
}
const m1 = new Modulo(101, 'OK'); // m1.id es 101
```

#### B. Usando Clases (ES6)
```javascript
class Dron {
  constructor(id) {
    this.id = id; // Asignamos el ID a esta instancia física
  }
  operar() {
    console.log(`Dron ${this.id} operando...`);
  }
}
```

### 3. Métodos: Lo que el objeto "Sabe Hacer"
Un objeto no solo tiene datos (id, status), tiene funciones internas llamadas métodos.
```javascript
this.autoDestruccion = () => {
  activarAlerta();
  console.log('PROTOCOLO_FINAL_INICIADO');
};
```

### 4. Herencia: Evolución de Modelos
Si el `DronBase` ya sabe volar, el `DronAtaque` puede **heredar** esa capacidad y añadir misiles.
- Usamos `extends` para heredar.
- Usamos `super()` para llamar al constructor del padre.

---

## 🏗️ FASE III: ARQUITECTURA TYPESCRIPT (36-60)

### 36. TS: El Rigor de Sirio
Blindaje de tipos estricto para variables básicas.
```typescript
let id: string = 'SEC-01';
let val: number = 100;
```

### 37. TS: El Contrato de Vega
Definición de interfaces para asegurar la estructura de objetos.
```typescript
interface Station {
  name: string;
  capacity: number;
}
```

### 38. TS: El Sello de Betelgeuse
Uso de la propiedad readonly para proteger datos inamovibles.
```typescript
interface CoreData {
  readonly temp: number;
}
```

### 39. TS: El Código de Rigel
Uso de Enums para gestionar estados y niveles de alerta prefijados.
```typescript
enum Warning { LOW, MEDIUM, CRITICAL }
let status = Warning.CRITICAL;
```

### 40. TS: La Conjunción Deneb
Uso del operador de intersección (&) para combinar tipos de datos.
```typescript
type FullDef = Armor & Shield;
```

### 41. TS: El Secreto de Arcturus
Uso del modificador private para proteger miembros de una clase.
```typescript
class RadioClient {
  private freq: string;
}
```

### 42. TS: El Recipiente Spica
Implementación de interfaces con genéricos (<T>) para flexibilidad total.
```typescript
interface Box<T> {
  data: T;
}
```

### 43. TS: El Linaje de Antares
Herencia de clases mediante extends y llamada a métodos del padre con super.
```typescript
class PulseLaser extends Laser {
  fire() {
    super.fire();
  }
}
```

### 44. TS: El Filtro de Fomalhaut
Uso de Type Guards (typeof) para diferenciar tipos en tiempo de ejecución.
```typescript
function verify(val: string | number) {
  if (typeof val === 'number') {
    return true;
  }
  return false;
}
```

### 45. TS: El Vórtice Pollux
Uso de parámetros rest (...args) con tipado de array.
```typescript
function processAll(...args: string[]) {
  return args.join(', ');
}
```

### 46. TS: El Módulo Canopus
Exportación por defecto de clases para modularización del sistema.
```typescript
export default class Navigator {
  // Protocolos de navegación...
}
```

### 47. TS: El Límite de Castor
Restricción de genéricos (T extends) para asegurar propiedades mínimas.
```typescript
function sync<T extends {id: number}>(obj: T) {
  return obj.id;
}
```

### 48. TS: El Seguro Procyon
Uso de Mapped Types para convertir propiedades en readonly.
```typescript
type Safe<T> = {
  readonly [P in keyof T]: T[P]
};
```

### 49. TS: El Vigía de Capella
Uso de decoradores de clase (@Log) para monitorizar instancias.
```typescript
function Log(target: any) {}

@Log
class Pilot {}
```

### 50. TS: El Núcleo Unificado
Patrón Singleton avanzado con instancia estática y constructor privado.
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
Uso de Partial<T> para permitir actualizaciones parciales de interfaces.
```typescript
function updateHull(p: Partial<Hull>) {
  // Actualización táctica...
}
```

### 52. TS: El Filtro Bellatrix
Uso de Pick<T, K> para extraer subconjuntos específicos de una interfaz.
```typescript
type MinMap = Pick<Map, 'lat' | 'long'>;
```

### 53. TS: El Olvido de Polaris
Uso de Omit<T, K> para ocultar propiedades sensibles de un tipo.
```typescript
type PublicUser = Omit<User, 'password'>;
```

### 54. TS: El Diccionario Regulus
Uso de Record<K, T> para mapear organigramas y jerarquías militares.
```typescript
let military: Record<string, number> = {
  'GENERAL': 100
};
```

### 55. TS: La Unión Draco
Uso de tipos de unión (|) para manejar múltiples estados de respuesta.
```typescript
type Resp = { ok: true, data: string } | { ok: false, error: string };
```

### 56. TS: Los Colores de Lyra
Uso de Template Literal Types para validar formatos de texto específicos.
```typescript
type ShipColor = `#HEX-${string}`;
```

### 57. TS: El Cristal de Aquila
Uso de 'as const' para asegurar que un objeto sea totalmente inmutable.
```typescript
const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;
```

### 58. TS: El Índice Fomalhaut
Uso de Index Signatures ([key: string]) para diccionarios dinámicos.
```typescript
interface SensorLog {
  [key: string]: boolean;
}
```

### 59. TS: La Llave Aquila
Uso del operador keyof para asegurar el acceso a propiedades válidas.
```typescript
function getParam<T, K extends keyof T>(o: T, k: K) {
  return o[k];
}
```

### 60. TS FINAL: EL ALFA Y EL OMEGA
Arquitectura total: Singleton + Interfaz + Async.
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

