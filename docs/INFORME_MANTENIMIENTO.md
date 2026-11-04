# Informe de mantenimiento del software
## Reúsa – Tecnología con más vida

**Estudiante:** Jesús Alan Ali Quintanilla  
**Materia:** Ingeniería de Software  
**Institución:** EDEC

## 1. Introducción

El presente informe tiene como finalidad documentar las actividades de revisión y mantenimiento realizadas durante el desarrollo de Reúsa.

El mantenimiento del software es importante porque permite conservar el funcionamiento de una aplicación, corregir posibles errores y realizar mejoras sin tener que desarrollar nuevamente todo el sistema.

En este proyecto se revisaron las funciones principales y se realizaron pruebas para comprobar que la aplicación pudiera registrar, consultar, modificar y respaldar la información de los dispositivos electrónicos.

## 2. Objetivo del mantenimiento

Mantener el funcionamiento de Reúsa mediante la revisión de sus componentes y la comprobación de sus funciones principales. También se busca identificar posibles mejoras que permitan conservar el proyecto y facilitar futuras modificaciones.

## 3. Tipo de mantenimiento aplicado

Durante el desarrollo se consideraron los siguientes tipos de mantenimiento:

- **Mantenimiento correctivo:** consiste en identificar y corregir errores que puedan afectar el funcionamiento de la aplicación.
- **Mantenimiento preventivo:** consiste en revisar la estructura del código y comprobar que las funciones continúen trabajando correctamente.
- **Mantenimiento evolutivo:** contempla la incorporación de nuevas funciones o mejoras para responder a futuras necesidades.

Las actividades realizadas se enfocaron principalmente en la revisión preventiva y en la comprobación del funcionamiento del prototipo.

## 4. Componentes revisados

Se revisaron los principales archivos que forman parte del proyecto:

| Archivo | Función |
|---|---|
| index.html | Contiene la estructura de la aplicación |
| styles.css | Define los estilos y la presentación visual |
| app.js | Contiene la lógica y las funciones principales |
| README.md | Explica el proyecto y cómo ejecutarlo |
| docs/ | Contiene la documentación del proyecto |
| .github/workflows/quality.yml | Define el flujo automatizado de revisión de calidad |

Esta organización permite identificar con mayor facilidad dónde realizar cambios cuando se necesite corregir o ampliar alguna función.

## 5. Pruebas de funcionamiento realizadas

Durante la revisión del prototipo se comprobaron las siguientes funciones:

| Prueba | Resultado observado |
|---|---|
| Registrar dispositivos | Funcionó correctamente |
| Editar información | Funcionó correctamente |
| Cambiar el estado de un equipo | Funcionó correctamente |
| Registrar mantenimiento | Funcionó correctamente |
| Consultar el historial de mantenimiento | Funcionó correctamente |
| Consultar el resumen de equipos | Funcionó correctamente |
| Exportar información CSV | Funcionó correctamente |
| Exportar información JSON | Funcionó correctamente |
| Importar información JSON | Funcionó correctamente |
| Consultar la sección sobre el proyecto | Funcionó correctamente |

Las pruebas permitieron comprobar que las funciones principales del prototipo respondieran de acuerdo con lo esperado.

## 6. Datos utilizados durante las pruebas

Para comprobar el funcionamiento se registraron dos dispositivos de prueba:

- Una laptop Lenovo con estado en uso y sin actividades de mantenimiento registradas.
- Una laptop de oficina Lenovo IdeaPad 3 con estado reciclado y un registro de revisión preventiva.

También se comprobó que la información pudiera exportarse e importarse mediante un archivo JSON sin generar registros duplicados cuando se importaban los mismos identificadores.

Estos registros fueron utilizados únicamente para verificar el funcionamiento de la aplicación.

## 7. Herramientas utilizadas

Durante el desarrollo y revisión del proyecto se utilizaron las siguientes herramientas:

- **Visual Studio Code:** para editar y organizar los archivos del proyecto.
- **Google Chrome:** para ejecutar y probar la aplicación.
- **Python 3:** para iniciar un servidor local y acceder a la aplicación desde el navegador.
- **GitHub Actions:** como herramienta de automatización para las revisiones de calidad configuradas en el repositorio.

## 8. Mantenimiento preventivo recomendado

Para conservar el proyecto en buenas condiciones se proponen las siguientes actividades:

- Revisar periódicamente el funcionamiento de las funciones principales.
- Mantener organizada la estructura de los archivos.
- Corregir errores cuando sean identificados.
- Revisar el código antes de incorporar nuevas funciones.
- Actualizar la documentación cuando existan cambios importantes.
- Mantener respaldos de la información registrada.
- Comprobar que la aplicación continúe funcionando en navegadores actualizados.

## 9. Mejoras futuras

Aunque el prototipo cumple con las funciones principales planteadas, existen oportunidades para mejorar el sistema:

- Incorporar pruebas automatizadas para comprobar las funciones principales.
- Mejorar los mensajes que recibe el usuario cuando ocurre un error.
- Agregar opciones de respaldo y recuperación más sencillas.
- Mejorar la accesibilidad de la interfaz.
- Incorporar nuevas herramientas para consultar estadísticas.
- Revisar periódicamente el rendimiento y el uso de recursos de la aplicación.

## 10. Conclusión

El mantenimiento realizado permitió revisar el funcionamiento general de Reúsa y comprobar que sus principales herramientas respondieran correctamente durante las pruebas.

También permitió identificar actividades que pueden realizarse en futuras etapas para conservar la calidad del software y facilitar su crecimiento.

El mantenimiento es una parte importante de la ingeniería de software sostenible porque ayuda a prolongar la vida útil de los sistemas y evita que tengan que reemplazarse antes de tiempo.