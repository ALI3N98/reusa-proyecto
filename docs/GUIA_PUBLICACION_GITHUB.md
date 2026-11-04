# Guía para publicar Reúsa en GitHub

## Opción A: subir los archivos desde el navegador

1. Entra a https://github.com/ e inicia sesión.
2. Presiona **New repository**.
3. Escribe un nombre, por ejemplo `reusa-software-sostenible`.
4. Selecciona si el repositorio será público o privado según lo que indique tu docente.
5. Puedes agregar una breve descripción: `Aplicación web académica para gestión sostenible de equipos electrónicos`.
6. Crea el repositorio vacío. No agregues otro README porque este proyecto ya incluye uno.
7. Descomprime `Reusa_Proyecto_Final.zip` en tu computadora.
8. En el repositorio selecciona **Add file → Upload files**.
9. Arrastra los archivos y carpetas que están dentro de `reusa-proyecto` (no es necesario subir el archivo ZIP dentro del repositorio).
10. Escribe un mensaje como `Primera entrega del proyecto Reúsa` y presiona **Commit changes**.
11. Revisa que aparezcan `index.html`, `styles.css`, `app.js`, `README.md` y la carpeta `docs`.

## Opción B: publicar con Git desde la terminal

Primero crea un repositorio vacío en GitHub. Después abre una terminal dentro de la carpeta `reusa-proyecto` y ejecuta:

```bash
git init
git add .
git commit -m "Primera entrega del proyecto Reúsa"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/reusa-software-sostenible.git
git push -u origin main
```

Cambia `TU-USUARIO` por tu usuario real y usa la dirección HTTPS del repositorio que acabas de crear. No compartas contraseñas ni tokens dentro del código o de los archivos del proyecto.

## Publicar la aplicación como sitio web (opcional)

Si el docente también solicita un enlace para abrir el sistema, puedes habilitar GitHub Pages:

1. Abre la pestaña **Settings** del repositorio.
2. En el menú lateral busca **Pages**.
3. En la sección de publicación selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda los cambios y espera a que GitHub muestre la dirección del sitio.
5. Abre la dirección publicada y comprueba el registro, edición, mantenimiento y exportación.

La publicación web hace que los archivos se sirvan desde una infraestructura externa. Por eso la aplicación evita enviar datos de inventario al servidor: los registros siguen en el `localStorage` del navegador de cada usuario.
