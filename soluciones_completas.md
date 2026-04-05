# Manual de Soluciones: STARK_OS (Operación Hércules)

Este manual contiene los 40 protocolos técnicos necesarios para salvar la Estación Hércules. Úsalos con sabiduría, Piloto.

---

## 🎮 FASE 0: BOOTCAMP DEL RECLUTA (1-10)

### 1. Tu Primera Orden: ¡Habla!
Tu primer mensaje en la terminal.
```javascript
console.log('RECLUTA_LISTO');
```

### 2. Variables: Tu Caja de Datos
Crear una variable con tu nombre. **⚠️ El nombre puede ser cualquiera.**
```javascript
let piloto = 'CUALQUIER_NOMBRE_QUE_QUIERAS';
```

### 3. Números: El Combustible
Variables numéricas y operaciones matemáticas.
```javascript
let combustible = 100;
let consumo = 25;
console.log(combustible - consumo);
```

### 4. Textos: Unir Mensajes
Concatenar textos con el signo +. **⚠️ El texto de 'rango' puede ser cualquiera.**
```javascript
let rango = 'LO_QUE_QUIERAS';
console.log('Soy un ' + rango);
```

### 5. Decisiones: ¿Sí o No?
Condicional simple con if.
```javascript
if (oxigeno < 50) {
  console.log('ALERTA_CRITICA');
}
```

### 6. If / Else: Dos Caminos
Condicional con dos ramas.
```javascript
if (temperatura > 100) {
  console.log('PELIGRO');
} else {
  console.log('ESTABLE');
}
```

### 7. Funciones: Tu Primer Robot
Crear y llamar una función.
```javascript
function saludar() {
  console.log('SISTEMA_OPERATIVO');
}
saludar();
```

### 8. Arrays: Lista de Tripulación
Crear un array y acceder por posición. **⚠️ El primer nombre DEBE ser 'STARK' (lo valida el sistema), los otros son libres.**
```javascript
let tripulacion = ['STARK', 'PEPITO', 'MARIA'];
console.log(tripulacion[0]);
```

### 9. Bucle For: Repetir Tareas
Recorrer un array con for.
```javascript
for (let i = 0; i < sectores.length; i++) {
  console.log(sectores[i]);
}
```

### 10. ¡Tocá la Pantalla! Tu Primer DOM
Cambiar el texto de un elemento de la pantalla.
```javascript
document.getElementById('sarge-text').innerText = 'ENLACE_ESTABLECIDO';
```

---

## 🛰️ FASE I: INGENIERÍA JAVASCRIPT (11-25)

### 11. Velo de Plasma: Cortafuegos Solar
Cambiar el color del borde de un elemento.
```javascript
document.getElementById('hud-fuel').style.borderColor = 'red';
```

### 12. Salto al Vacío: Motor Warp
Mover un elemento cambiando su posición.
```javascript
document.getElementById('hud-warp').style.left = '80%';
```

### 13. Sigilo: Capa de Invisibilidad
Cambiar la transparencia de un elemento.
```javascript
document.getElementById('user-rank').style.opacity = '0.2';
```

### 14. SOBRECARGA DEL KERNEL
Llamar una función y cambiar un estilo.
```javascript
activarAlerta();
document.getElementById('hud-fuel').style.width = '50px';
```

### 15. Telemetría del Casco
Operación matemática y cambio de texto.
```javascript
document.getElementById('hud-hull').innerText = 50 + 50;
```

### 16. Refactorización de Interfaz
Redondear un elemento con borderRadius.
```javascript
document.getElementById('sarge-wrapper').style.borderRadius = '50%';
```

### 17. Event Listener de Consola
Agregar un listener de click.
```javascript
document.getElementById('btn-next-level').addEventListener('click', () => {
  console.log('SISTEMA_OK');
});
```

### 18. Protocolo: Inyección de Alertas
Crear y agregar un elemento al DOM.
```javascript
const div = document.createElement('div');
div.className = 'hud-warning';
div.innerText = 'ERROR_KERNEL';
document.getElementById('terminal').appendChild(div);
```

### 19. Acceso: Firma de Comandante
Función con validación de string.
```javascript
function validarAcceso(perfil) {
  return perfil.includes('ADMIN') && perfil.length > 5;
}
```

### 20. Filtro: Residuos de Supernova
Filtrar un array de objetos.
```javascript
const f = logs.filter(l => {
  if (l.critico) {
    console.log('PELIGRO');
    return true;
  }
  return false;
});
```

### 21. Misión: El Vórtice de Datos
Encadenar filter y map.
```javascript
const result = stream.filter(s => s.valid).map(s => s.v + 50);
```

### 22. Cápsula: La Caja de Pandora
Desestructuración de objetos.
```javascript
const { lat, long } = gps;
if (lat < 0) {
  console.log('SECTOR_SUR');
}
```

### 23. Misión: El Árbol de Decisiones
Estructura switch/case.
```javascript
switch(prioridad) {
  case 'ALTA': activarAlerta(); break;
  case 'BAJA': console.log('STATUS_VERDE'); break;
}
```

### 24. Sincro: El Eco de Europa
Petición HTTP con fetch.
```javascript
fetch('https://api.stark.os')
  .then(r => r.json())
  .catch(e => console.error(e));
```

### 25. Persistencia: El Diario de Deimos
Guardar datos en localStorage. **⚠️ El cargo DEBE ser 'ALMIRANTE' (lo valida el sistema).**
```javascript
localStorage.setItem('oficial', JSON.stringify(oficial));
```

---

## 🏗️ FASE II: ARQUITECTURA TYPESCRIPT (26-40)

### 26. TS: El Rigor de Sirio
Tipos básicos en TypeScript.
```typescript
let id: string = 'SEC-01';
let val: number = 100;
```

### 27. TS: El Contrato de Vega
Definir una interface.
```typescript
interface Station {
  name: string;
  capacity: number;
}
```

### 28. TS: El Sello de Betelgeuse
Propiedad readonly.
```typescript
interface CoreData {
  readonly temp: number;
}
```

### 29. TS: El Código de Rigel
Enums y asignación.
```typescript
enum Warning { LOW, MEDIUM, CRITICAL }
let status = Warning.CRITICAL;
```

### 30. TS: La Conjunción Deneb
Intersección de tipos con &.
```typescript
type Armor = { v: number };
type Shield = { p: number };
type FullDef = Armor & Shield;
```

### 31. TS: El Recipiente Spica
Interface con genéricos.
```typescript
interface Box<T> {
  data: T;
}
```

### 32. TS: El Filtro de Fomalhaut
Type Guard con typeof.
```typescript
function verify(val: string | number) {
  if (typeof val === 'number') {
    return true;
  }
  return false;
}
```

### 33. TS: El Vórtice Pollux
Rest parameters tipados.
```typescript
function processAll(...args: string[]) {
  return args.join(', ');
}
```

### 34. TS: El Parche Centauri
Partial para actualizaciones parciales.
```typescript
interface Hull { dmg: number; sensor: boolean; }
function updateHull(p: Partial<Hull>) {
  // Actualización parcial...
}
```

### 35. TS: El Filtro Bellatrix
Pick para extraer propiedades.
```typescript
interface Map { lat: number; long: number; bio: string; }
type MinMap = Pick<Map, 'lat' | 'long'>;
```

### 36. TS: El Olvido de Polaris
Omit para excluir propiedades.
```typescript
interface User { id: number; password: string; }
type PublicUser = Omit<User, 'password'>;
```

### 37. TS: El Diccionario Regulus
Record para diccionarios tipados.
```typescript
let military: Record<string, number> = {
  'ALMIRANTE': 100
};
```

### 38. TS: La Unión Draco
Union types para respuestas polimórficas.
```typescript
type Resp = { ok: true, data: string } | { ok: false, error: string };
```

### 39. TS: El Cristal de Aquila
as const para inmutabilidad total.
```typescript
const ENGINE_SPECS = { id: 'MK-1', thrust: 9000 } as const;
```

### 40. TS FINAL: EL ALFA Y EL OMEGA
Interface + async combinados.
```typescript
interface ISystem {
  init(): Promise<string>;
}

async function bootSystem(): Promise<string> {
  return 'HERCULES_ONLINE';
}
```

---

> *Fin del manual. Buena suerte ahí fuera, Piloto. - Mando de Ingeniería STARK.*
