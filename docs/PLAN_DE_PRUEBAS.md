# Plan de pruebas — Reúsa

## 1. Objetivo

Comprobar que las funciones principales trabajen correctamente, que los datos se almacenen de manera consistente y que la interfaz se pueda utilizar en diferentes tamaños de pantalla.

## 2. Entorno sugerido

- Navegador actualizado: Firefox, Chrome, Edge o Safari.
- Computadora y teléfono o emulador de pantalla móvil.
- Servidor local ejecutado con `python -m http.server 8000`.
- Herramientas de desarrollo del navegador para revisar consola, red y rendimiento.

## 3. Casos de prueba funcionales

| ID | Prueba | Pasos | Resultado esperado |
|---|---|---|---|
| P01 | Abrir aplicación | Iniciar servidor y abrir `http://localhost:8000` | Carga la página sin errores de JavaScript |
| P02 | Validación de nombre | Abrir registro y guardar sin nombre | Muestra un mensaje y no crea el equipo |
| P03 | Validación de tipo | Escribir nombre y dejar tipo vacío | Solicita seleccionar tipo y no crea el equipo |
| P04 | Alta de equipo | Completar nombre, tipo y estado | La tarjeta aparece y el contador aumenta |
| P05 | Edición | Cambiar nombre o estado | La tarjeta muestra la información actualizada |
| P06 | Registro de mantenimiento | Agregar fecha, actividad y descripción | La actividad aparece en el detalle |
| P07 | Estado tras reparación | Marcar equipo para reparar y registrar actividad Reparación | El estado pasa a En uso |
| P08 | Búsqueda | Escribir parte del nombre o marca | Se muestran coincidencias |
| P09 | Filtro | Seleccionar Requiere reparación | Solo aparecen los registros de ese estado |
| P10 | Exportación JSON | Crear registros y descargar JSON | Se descarga un archivo con registros e historial |
| P11 | Exportación CSV | Crear registros y descargar CSV | Se descarga un archivo con campos generales |
| P12 | Importación JSON | Importar un respaldo previamente descargado | Se recuperan los datos y se combinan por identificador |
| P13 | Importación inválida | Seleccionar JSON con formato incorrecto | Muestra mensaje y no altera los registros |
| P14 | Persistencia | Recargar la página | Los registros siguen disponibles en el mismo navegador |
| P15 | Eliminación | Eliminar un equipo y confirmar | Desaparece el registro y disminuye el contador |
| P16 | Vista móvil | Abrir con ancho aproximado de 360 px | No aparece desplazamiento horizontal de toda la página; controles utilizables |
| P17 | Teclado | Navegar con Tab, Shift+Tab, Enter y Escape | Se puede acceder a enlaces, botones, formularios y cerrar diálogos |
| P18 | Datos de entrada | Usar texto como `<img src=x onerror=alert(1)>` en notas | Se muestra como texto; no ejecuta código |

## 4. Pruebas básicas automatizadas

El flujo `.github/workflows/quality.yml` ejecuta `node --check app.js` y revisa que estén presentes los archivos principales. Esto ayuda a encontrar errores de sintaxis, pero no sustituye las pruebas funcionales de la tabla.

## 5. Pruebas de rendimiento y sostenibilidad

- Medir el peso de `index.html`, `styles.css` y `app.js`.
- Revisar en la pestaña Network que no se descarguen bibliotecas, fuentes o imágenes de terceros.
- Probar filtros con un inventario de tamaño moderado y observar el tiempo de respuesta.
- Revisar el uso de memoria desde las herramientas del navegador.
- Para huella de carbono, seguir el procedimiento del informe ambiental con un medidor eléctrico y registrar condiciones y repeticiones.

## 6. Registro de resultados

| ID | Estado (Aprobado / Falló / Pendiente) | Evidencia o comentario | Fecha |
|---|---|---|---|
| P01–P18 | Pendiente de ejecución por el estudiante | Completar después de probar en el equipo y navegador disponibles | __________ |

**No marcar pruebas como aprobadas sin haberlas ejecutado.** Adjuntar capturas o notas cuando el docente solicite evidencia.
