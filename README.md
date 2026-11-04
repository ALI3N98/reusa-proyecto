# Reúsa — Gestión sostenible de equipos y dispositivos

Reúsa es un prototipo académico de aplicación web para registrar equipos electrónicos y dar seguimiento a su estado, mantenimiento, reparación, donación y reciclaje. Su propósito es apoyar decisiones que prolonguen la vida útil de los dispositivos y promuevan un manejo más responsable de los residuos electrónicos.

> **Importante:** Reúsa es una herramienta de organización. No verifica físicamente una reparación, donación o reciclaje y no calcula automáticamente emisiones evitadas. Los estados son registros declarados por la persona usuaria.

## 1. Ejecutar el proyecto

No requiere instalación de paquetes ni conexión a servicios externos.

1. Descarga o clona este repositorio.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Ejecuta un servidor local:

   ```bash
   python -m http.server 8000
   ```

4. Abre `http://localhost:8000` en el navegador.

También puedes abrir `index.html` directamente, aunque se recomienda un servidor local para tener un entorno de prueba más parecido al despliegue web.

## 2. Funcionalidades

- Alta y edición de equipos electrónicos.
- Clasificación por tipo y estado: en uso, requiere reparación, listo para donar y reciclado.
- Registro de actividades de mantenimiento.
- Búsqueda por nombre, tipo, marca o notas.
- Filtro por estado y resumen de cantidades.
- Exportación del inventario en JSON o CSV.
- Importación de respaldos JSON generados por Reúsa.
- Diseño adaptable a pantallas pequeñas y controles de teclado.
- Almacenamiento local mediante `localStorage`; no hay cuentas ni servidor de aplicación.

## 3. Tecnologías

- HTML semántico.
- CSS sin frameworks ni tipografías externas.
- JavaScript nativo.
- `localStorage` para persistencia en el navegador.
- `Blob` y enlaces de descarga para exportación local.

La aplicación no carga bibliotecas, imágenes ni fuentes desde terceros. Esto reduce las transferencias de red y simplifica el mantenimiento.

## 4. Estructura del repositorio

```text
reusa-proyecto/
├── index.html
├── styles.css
├── app.js
├── README.md
├── LICENSE
├── .gitignore
├── .github/
│   └── workflows/
│       └── quality.yml
└── docs/
    ├── DESCRIPCION_PROYECTO.md
    ├── MANUAL_USUARIO.md
    ├── EVALUACION_IMPACTO_AMBIENTAL.md
    ├── INFORME_MANTENIMIENTO.md
    ├── RESPONSABILIDAD_SOCIAL.md
    └── PLAN_DE_PRUEBAS.md
```

## 5. Privacidad y límites

Los registros permanecen en el navegador y dispositivo donde se capturaron. No se sincronizan con otros equipos. Limpiar los datos del navegador puede eliminarlos; por eso se recomienda descargar respaldos JSON de manera periódica. No se deben ingresar contraseñas, datos personales, números de serie u otra información sensible.

## 6. Calidad básica

Se incluye un flujo de GitHub Actions que revisa la sintaxis de JavaScript y la presencia de los archivos principales. La lista manual de pruebas está en `docs/PLAN_DE_PRUEBAS.md`.

## 7. Documentación del proyecto

- [Descripción del proyecto](docs/DESCRIPCION_PROYECTO.md)
- [Manual de usuario](docs/MANUAL_USUARIO.md)
- [Evaluación del impacto ambiental](docs/EVALUACION_IMPACTO_AMBIENTAL.md)
- [Informe de mantenimiento](docs/INFORME_MANTENIMIENTO.md)
- [Responsabilidad social](docs/RESPONSABILIDAD_SOCIAL.md)
- [Plan de pruebas](docs/PLAN_DE_PRUEBAS.md)
- [Guía para publicar en GitHub](docs/GUIA_PUBLICACION_GITHUB.md)

## 8. Referencias principales

- ISO. (2006). [ISO 14040: Environmental management — Life cycle assessment — Principles and framework](https://www.iso.org/standard/37456.html).
- ISO. (2024). [ISO/IEC 21031: Software Carbon Intensity specification](https://www.iso.org/standard/86612.html).
- Green Software Foundation. [Software Carbon Intensity](https://greensoftware.foundation/standards/sci/).
- ITU. (2024). [The Global E-waste Monitor 2024](https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx).
- W3C. (2024). [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- SEMARNAT. [Registro Nacional de Emisiones (RENE)](https://www.gob.mx/semarnat/acciones-y-programas/registro-nacional-de-emisiones-rene).

## 9. Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE`.
