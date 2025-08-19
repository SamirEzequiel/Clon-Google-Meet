# Google Meet Clone 🎥

## Sobre el Proyecto 📋

Google Meet Clone es una aplicación web moderna que permite realizar videoconferencias en tiempo real con hasta 12 participantes simultáneos. La aplicación ofrece una experiencia fluida y profesional, similar a Google Meet, con un diseño responsive que se adapta a cualquier dispositivo.

## Características 🚀

### 🎥 Videoconferencias
- Videoconferencias en tiempo real
- Soporte para hasta 12 participantes
- Compartir pantalla durante reuniones
- Control de micrófono y cámara
- Conexión P2P optimizada

### 💬 Chat en Tiempo Real
- **Chat integrado** durante las reuniones
- **Indicadores de escritura** en tiempo real
- **Interfaz moderna** con burbujas de chat
- **Notificaciones** de mensajes nuevos
- **Auto-scroll** a nuevos mensajes
- **Envío con Enter** (Shift+Enter para nueva línea)
- **Timestamps** en cada mensaje
- **Diseño responsive** para móviles y desktop

### 📱 Interfaz de Usuario
- Diseño responsive y moderno
- Panel de chat flotante
- Botones intuitivos con tooltips
- Animaciones suaves
- Soporte para móviles y tablets

### 🔐 Seguridad y Rendimiento
- Autenticación segura
- Conexiones P2P optimizadas
- Sincronización en tiempo real con Firebase
- Gestión eficiente de recursos

## Tecnologías 🛠️

### Frontend
- **React.js** - Framework principal
- **Redux** - Gestión de estado
- **Firebase** - Base de datos en tiempo real
- **WebRTC** - Comunicación P2P

### UI/UX
- **FontAwesome** - Iconografía
- **React Tooltip** - Tooltips informativos
- **CSS3** - Estilos modernos y responsive

### Herramientas
- **React Scripts** - Build y desarrollo
- **Jest** - Testing
- **ESLint** - Linting de código

## Demo 🎯

La aplicación soporta hasta 8-12 usuarios simultáneos sin problemas de alineación UI.

### Funcionalidades Demostradas:
- ✅ Videoconferencias en tiempo real
- ✅ Chat integrado con indicadores de escritura
- ✅ Compartir pantalla
- ✅ Control de micrófono y cámara
- ✅ Diseño responsive
- ✅ Sincronización en tiempo real

## Requisitos 📋

- **Node.js** (versión 14 o superior)
- **Firebase** configurado
- **Navegador moderno** con soporte para WebRTC

## Instalación 🛠️

1. **Clonar el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd Clon-Google-Meet
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Firebase**
   - Crear proyecto en [Firebase Console](https://console.firebase.google.com/)
   - Habilitar Realtime Database
   - Copiar configuración a `src/server/firebase.js`

4. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

5. **Abrir en el navegador**
   - La aplicación se abrirá en `http://localhost:3000`

## Uso 💡

### Iniciar una Reunión
1. Abre la aplicación en tu navegador
2. Ingresa tu nombre cuando se solicite
3. Comparte el enlace de la reunión con otros participantes

### Usar el Chat
1. Haz clic en el botón de chat (💬) en el footer
2. Escribe tu mensaje en el área de texto
3. Presiona Enter o haz clic en el botón de enviar
4. Ve los indicadores de escritura de otros participantes

### Controles de Reunión
- **Micrófono**: Silenciar/activar audio
- **Cámara**: Ocultar/mostrar video
- **Pantalla**: Compartir pantalla
- **Chat**: Abrir/cerrar chat

## Estructura del Proyecto 📁

```
src/
├── components/
│   ├── Chat/                 # Componente de chat en tiempo real
│   ├── MainScreen/           # Pantalla principal
│   ├── MeetingFooter/        # Footer con controles
│   ├── Participants/         # Lista de participantes
│   └── Shared/              # Componentes compartidos
├── store/                   # Redux store y actions
├── server/                  # Configuración de Firebase
└── App.js                   # Componente principal
```

## Contribuir 🤝

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Próximas Mejoras 🚀

- [ ] Grabación de reuniones
- [ ] Sala de espera
- [ ] Filtros de video
- [ ] Emojis en el chat
- [ ] Archivos adjuntos
- [ ] Mensajes privados
- [ ] Notificaciones push

## Licencia 📄

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

---

**Creado Por Samir Goede** 🎯

*¿Te gustó el proyecto? ¡Dale una ⭐ en GitHub!*
