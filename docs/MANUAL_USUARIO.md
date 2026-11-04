# Manual de usuario
## Reúsa – Tecnología con más vida

**Estudiante:** Jesús Alan Ali Quintanilla  
**Materia:** Ingeniería de Software  
**Institución:** EDEC

## 1. Introducción

Este manual tiene como finalidad explicar cómo utilizar Reúsa, una aplicación web creada para llevar un registro de dispositivos electrónicos y conocer su estado actual. También permite registrar mantenimientos y consultar la información de cada equipo.

La aplicación busca fomentar la reparación y reutilización de los dispositivos antes de desecharlos.

## 2. Requisitos para utilizar la aplicación

Para utilizar Reúsa se necesita lo siguiente:

- Una computadora con un navegador web actualizado como Google Chrome.
- Tener los archivos del proyecto descargados.
- Contar con Python 3 para ejecutar un servidor local o utilizar una herramienta como Live Server en Visual Studio Code.

No es necesario crear una cuenta ni instalar una base de datos.

## 3. Cómo abrir la aplicación

1. Descarga y descomprime la carpeta del proyecto.
2. Abre la carpeta en Visual Studio Code.
3. Abre una terminal desde el menú Terminal.
4. Ejecuta el siguiente comando:

   ```bash
   python3 -m http.server 8000
   ```

5. Abre Google Chrome e ingresa a la siguiente dirección:

   `http://localhost:8000`

También puedes utilizar la extensión Live Server de Visual Studio Code para abrir el proyecto.

## 4. Registrar un dispositivo

Para agregar un nuevo equipo:

1. Ingresa a la sección de registro de equipos.
2. Escribe el nombre del dispositivo.
3. Selecciona el tipo de equipo.
4. Agrega la marca o modelo.
5. Indica la fecha de adquisición.
6. Selecciona el estado actual del dispositivo.
7. Agrega notas adicionales si lo consideras necesario.
8. Guarda el registro.

Los estados disponibles son:

- **En uso:** dispositivo que continúa funcionando normalmente.
- **Requiere reparación:** equipo que presenta alguna falla.
- **Listo para donar:** dispositivo que puede ser aprovechado por otra persona.
- **Reciclado:** equipo que ya fue destinado al reciclaje.

## 5. Consultar y buscar equipos

La aplicación permite consultar los dispositivos registrados y localizar alguno de manera más sencilla.

Puedes utilizar las opciones de búsqueda y filtros para encontrar equipos según la información disponible y su estado.

## 6. Editar un dispositivo

Si necesitas actualizar la información de un equipo:

1. Localiza el dispositivo en el listado.
2. Selecciona la opción para editar.
3. Modifica los datos que necesites.
4. Guarda los cambios.

Esto permite mantener actualizado el registro cuando cambia el estado o alguna característica del dispositivo.

## 7. Registrar un mantenimiento

Reúsa permite llevar un historial de las actividades de mantenimiento realizadas a cada equipo.

Para registrar una actividad:

1. Selecciona el dispositivo correspondiente.
2. Ingresa a su apartado de mantenimiento.
3. Escribe la fecha en que se realizó.
4. Selecciona el tipo de mantenimiento.
5. Agrega una descripción de las actividades realizadas.
6. Guarda el registro.

De esta manera se puede consultar el historial de mantenimiento de cada dispositivo. La aplicación conserva hasta 100 actividades por equipo.

Cuando se registra una reparación en un equipo que tiene el estado de requiere reparación, su estado cambia automáticamente a en uso.

## 8. Eliminar un dispositivo

Si necesitas quitar un equipo del registro, utiliza la opción de eliminar disponible en su apartado.

Antes de hacerlo, revisa que realmente deseas eliminarlo, ya que también dejará de aparecer en el listado de dispositivos.

## 9. Consultar el resumen de información

La aplicación cuenta con un apartado de resumen que muestra estadísticas de los equipos registrados.

Entre los datos que se pueden consultar están:

- Cantidad total de dispositivos.
- Equipos que se encuentran en uso.
- Equipos que requieren reparación.
- Equipos listos para donar.
- Equipos reciclados.

Esta información permite conocer de manera general la situación de los dispositivos registrados.

## 10. Exportar e importar información

La aplicación permite respaldar y recuperar los registros mediante archivos.

**Exportar información**

Se pueden utilizar dos formatos:

- **JSON:** permite guardar los datos de los equipos junto con su historial de mantenimiento.
- **CSV:** permite exportar los datos principales para consultarlos en programas de hojas de cálculo.

**Importar información**

Para recuperar información desde un archivo:

1. Selecciona la opción de importar.
2. Busca el archivo JSON que deseas cargar.
3. Confirma la importación.
4. Revisa que los registros aparezcan correctamente.

La aplicación combina los registros utilizando su identificador para evitar duplicados. La importación admite archivos de hasta 2 MB y un máximo de 500 equipos por navegador.

## 11. Almacenamiento de la información

Reúsa utiliza el almacenamiento local del navegador para conservar los datos.

Esto significa que la información queda guardada en el navegador y dispositivo donde se utiliza la aplicación. No se sincroniza automáticamente con otros equipos ni con otros navegadores.

Por esta razón se recomienda exportar periódicamente un respaldo en formato JSON para evitar perder los registros.

## 12. Solución de problemas frecuentes

**La aplicación no abre**

Verifica que el servidor local esté funcionando y que hayas ingresado correctamente a `http://localhost:8000`.

**No aparecen los equipos registrados**

Comprueba que estés utilizando el mismo navegador y dispositivo donde guardaste la información anteriormente.

**No puedo importar un archivo**

Revisa que el archivo tenga formato JSON y que no supere el límite de 2 MB.

**No se conservan los datos en otro dispositivo**

Esto es normal porque la aplicación utiliza almacenamiento local y no cuenta con sincronización en la nube. Puedes utilizar un respaldo JSON para transferir tus registros.

## 13. Recomendaciones de uso

- Mantén actualizada la información de cada dispositivo.
- Registra los mantenimientos que se realicen.
- Revisa periódicamente el estado de los equipos.
- Realiza respaldos de información mediante la exportación JSON.
- Antes de eliminar un equipo, verifica que ya no necesites su información.

## 14. Conclusión

Reúsa es una herramienta sencilla que permite organizar la información de los dispositivos electrónicos y dar seguimiento a su estado. Su uso facilita la identificación de equipos que todavía pueden aprovecharse mediante reparación, donación o reutilización, contribuyendo a reducir el desecho innecesario de aparatos electrónicos.