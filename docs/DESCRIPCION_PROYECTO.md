# Descripción del proyecto: Reúsa
**Proyecto:** Reúsa – Tecnología con más vida

**Estudiante:** Jesús Alan Ali Quintanilla

**Institución:** EDEC

**Materia:** Ingeniería de Software

**Tipo de proyecto:** Proyecto académico de Ingeniería de Software Sostenible
## 1. Introducción

Reúsa es una aplicación web académica que busca promover el uso responsable de los equipos electrónicos. Permite registrar dispositivos, conocer su estado y guardar las actividades de mantenimiento que se les realizan. La idea es que una persona o una pequeña organización tenga un inventario básico antes de decidir reemplazar un equipo.

El proyecto parte de un problema real: los aparatos electrónicos suelen reemplazarse aunque todavía puedan repararse o aprovecharse para otra actividad. El Global E-waste Monitor 2024 reportó que en 2022 se generaron 62 millones de toneladas de residuos electrónicos en el mundo y que solo el 22.3 % quedó documentado como recolectado y reciclado formalmente. Esta situación hace importante promover la reparación, la reutilización y la entrega responsable de los equipos que ya no pueden aprovecharse.
## 2. Planteamiento del problema

Actualmente muchos dispositivos electrónicos son reemplazados cuando comienzan a presentar fallas o cuando dejan de cumplir con las necesidades de sus propietarios. Sin embargo en algunos casos estos equipos todavía pueden repararse o utilizarse para otras actividades.

Uno de los problemas es que no siempre existe un registro adecuado sobre el estado de los dispositivos y los mantenimientos que han recibido. Esto dificulta conocer si realmente necesitan ser reemplazados o si todavía pueden aprovecharse.

Por esta razón surge Reúsa. La aplicación busca ofrecer una herramienta sencilla para organizar la información de los equipos electrónicos y facilitar decisiones relacionadas con su reparación, reutilización, donación o reciclaje.
## 3. Objetivo general

Desarrollar una aplicación web ligera que ayude a registrar y administrar equipos electrónicos para facilitar su mantenimiento, reparación, reutilización, donación y reciclaje responsable.

## 4. Objetivos específicos

- Mantener un inventario sencillo de dispositivos.
- Registrar el estado actual de cada equipo.
- Conservar un historial de actividades de mantenimiento.
- Facilitar la identificación de equipos que podrían repararse o donarse.
- Permitir exportar e importar respaldos para evitar pérdida de información.
- Aplicar criterios de eficiencia, accesibilidad, privacidad y facilidad de mantenimiento durante el desarrollo.
## 5. Justificación del proyecto

El desarrollo de Reúsa se justifica por la necesidad de fomentar hábitos tecnológicos más responsables. A través de una aplicación web se busca demostrar que es posible aprovechar herramientas digitales para promover el cuidado de los equipos y reducir los reemplazos innecesarios.

Además el proyecto permite aplicar conocimientos de programación y diseño de software mientras se consideran aspectos como el consumo de recursos, la privacidad de los usuarios y la facilidad de mantenimiento.

Desde el punto de vista académico representa una oportunidad para aplicar los principios de ingeniería de software sostenible en una solución funcional.
## 6. Alcance

El prototipo está pensado para una persona o una pequeña oficina que utiliza un solo navegador. Incluye altas, edición, consulta, filtros, mantenimiento, eliminación y exportación o importación de registros.

No incluye autenticación, trabajo colaborativo, sincronización entre dispositivos, conexión con empresas recicladoras, verificación de donaciones, geolocalización ni cálculo automático de emisiones evitadas. Estas funciones podrían analizarse como mejoras futuras, pero no se presentan como capacidades implementadas.

## 7. Usuarios previstos

- Estudiantes que desean llevar un registro de sus dispositivos.
- Hogares que quieren organizar el mantenimiento de sus equipos.
- Pequeñas oficinas o talleres que necesitan un inventario básico.
- Organizaciones educativas que desean promover hábitos de reparación y reutilización.

## 8. Funcionalidades principales

| Funcionalidad | Descripción |
|---|---|
| Registrar equipo | Capturar nombre, tipo, marca o modelo, fecha aproximada, estado y notas. |
| Editar equipo | Actualizar información o cambiar su estado. |
| Consultar detalle | Ver datos básicos e historial de mantenimiento. |
| Registrar mantenimiento | Agregar fecha, tipo de actividad y descripción. |
| Buscar y filtrar | Localizar registros por texto o estado. |
| Resumen | Mostrar cantidades por estado. |
| Exportar | Descargar respaldo JSON o inventario CSV. |
| Importar | Recuperar registros desde un respaldo JSON de Reúsa. |

## 9. Diseño sostenible aplicado

**Minimización de recursos.** Se utiliza HTML, CSS y JavaScript nativos, sin frameworks ni dependencias externas. La aplicación no descarga imágenes, fuentes ni bibliotecas de terceros. Los datos se almacenan localmente y no se mantiene un servidor de aplicación encendido para procesar cada operación.

**Eficiencia.** La interfaz muestra solo los registros necesarios y permite filtrar la información en el propio navegador. Se limita el tamaño de los campos y la cantidad máxima de registros del prototipo para evitar un crecimiento indefinido del almacenamiento.

**Reutilización y mantenimiento.** La lógica está separada de la estructura HTML y los estilos. Las funciones de validación, normalización, almacenamiento y renderizado se mantienen en un archivo JavaScript identificable.

**Ciclo de vida.** Se considera la etapa de desarrollo, distribución del código, uso en el navegador, almacenamiento, actualizaciones y retiro de la aplicación. Se recomienda exportar los datos antes de borrar el almacenamiento local o dejar de utilizar el navegador.

**Modularidad.** La aplicación separa la presentación (`index.html` y `styles.css`) de la lógica (`app.js`). Dentro del JavaScript se organizan funciones por responsabilidad, como almacenamiento, formularios, renderizado, importación y exportación.

## 10. Metodología de trabajo

Se propone un enfoque ágil sencillo, dividido en iteraciones:

1. Definir el problema y las funciones mínimas.
2. Crear la estructura visual y el formulario de equipos.
3. Incorporar almacenamiento local y operaciones de inventario.
4. Agregar historial, filtros y exportación.
5. Revisar accesibilidad, seguridad básica y rendimiento.
6. Documentar resultados, límites y mejoras futuras.

La automatización se utiliza para revisar sintaxis y estructura mediante GitHub Actions. Para un despliegue real se recomienda agregar pruebas automáticas de interfaz y revisar el comportamiento en navegadores y dispositivos distintos.

## 11. Indicadores de éxito

- El usuario puede registrar, editar y consultar un equipo.
- Se puede agregar mantenimiento y consultarlo después.
- Los filtros muestran los resultados correctos.
- Se puede exportar un respaldo e importarlo sin perder los registros existentes.
- Los datos ingresados se representan como texto y no se interpretan como código HTML.
- La interfaz se puede usar con teclado y se adapta a pantallas pequeñas.
- El proyecto funciona sin dependencias externas.

## 12. Mejoras futuras

- Agregar perfiles y sincronización segura para equipos de trabajo.
- Incorporar catálogo de centros autorizados de reciclaje, validado por región.
- Añadir recordatorios locales de mantenimiento.
- Integrar medición energética real en un entorno de prueba.
- Crear un módulo de reportes que distinga equipos reparados, reutilizados y entregados a reciclaje con evidencia documental.

## 13. Resultados de las pruebas realizadas

Durante las pruebas realizadas se comprobó que la aplicación permite registrar y modificar equipos electrónicos. También se verificó el funcionamiento del historial de mantenimiento y la actualización de los estados de cada dispositivo.

Se realizaron pruebas de exportación e importación de información mediante archivos CSV y JSON. Los resultados permitieron comprobar que los registros pueden respaldarse y recuperarse sin generar duplicados en la prueba realizada.

También se verificó que el panel principal actualiza las cantidades de equipos dependiendo de su estado. Con esto se comprobó que las funciones principales cumplen con el propósito establecido para el prototipo.

## 14. Referencias bibliográficas

UNITAR & ITU. (2024). *The Global E-waste Monitor 2024*. https://ewastemonitor.info/the-global-e-waste-monitor-2024/

"Las pruebas se realizaron en un entorno local utilizando Google Chrome. Los resultados corresponden al funcionamiento observado durante las pruebas del prototipo y no representan una evaluación de rendimiento energético en condiciones de producción."