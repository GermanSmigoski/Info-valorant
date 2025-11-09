# Valorant Info - Frontend

Aplicación web moderna para explorar información sobre Valorant, incluyendo agentes, armas, mapas y skins.

## 🚀 Características

- **Agentes**: Visualiza todos los agentes de Valorant con sus habilidades y roles
- **Armas**: Explora el arsenal completo con filtros por categoría
- **Mapas**: Navega por todos los mapas del juego con vista detallada
- **Skins**: Colección estilo "closet" de todas las skins disponibles
- **Diseño Moderno**: Interfaz moderna con animaciones suaves y efectos visuales
- **Responsive**: Diseño completamente adaptable a todos los dispositivos

## 🛠️ Tecnologías

- **React.js** - Framework principal
- **Redux** - Gestión de estado
- **Framer Motion** - Animaciones
- **Axios** - Peticiones HTTP
- **Mantine UI** - Componentes UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos modernos con gradientes y efectos

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd Info-valorant/Front
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5175`

## 🎨 Características de Diseño

### Página de Agentes
- Carrusel interactivo con transiciones suaves
- Filtros por rol (Duelista, Controlador, Iniciador, Centinela)
- Vista detallada de habilidades

### Página de Armas
- Grid moderno con todas las armas
- Filtros por categoría (Pistolas, SMGs, Rifles, etc.)
- Estadísticas detalladas (costo, cadencia, cargador)

### Página de Mapas
- Vista de todos los mapas con carga optimizada
- Carousel interactivo
- Caché de datos para mejor rendimiento

### Página de Skins
- Diseño tipo "closet" (armario)
- Visualización organizada de todas las skins
- Detalles expandibles al hacer clic

## 📁 Estructura del Proyecto

```
Front/
├── src/
│   ├── components/      # Componentes React
│   │   ├── agents/      # Componentes de agentes
│   │   ├── weapons/     # Componentes de armas
│   │   ├── maps/        # Componentes de mapas
│   │   ├── skins/       # Componentes de skins
│   │   └── shared/      # Componentes compartidos
│   ├── Redux/           # Store y acciones Redux
│   ├── layout/          # Layout principal
│   └── main.jsx         # Punto de entrada
├── public/              # Archivos estáticos
└── vite.config.js       # Configuración de Vite
```

## 🔌 API

La aplicación consume datos directamente de la API pública de Valorant:
- **Base URL**: `https://valorant-api.com/v1`
- **Endpoints utilizados**:
  - `/agents` - Lista de agentes
  - `/weapons` - Lista de armas
  - `/weapons/skins` - Lista de skins
  - `/maps` - Lista de mapas

## 🎯 Funcionalidades Principales

- ✅ Consumo directo de API (sin backend)
- ✅ Caché de datos en Redux
- ✅ Loading states con spinners
- ✅ Animaciones suaves con Framer Motion
- ✅ Diseño responsive
- ✅ Filtros y búsqueda
- ✅ Navegación intuitiva

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktop (1440px+)

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 📝 Notas

- El proyecto no requiere backend, consume APIs directamente
- Los datos se cachean en Redux para mejorar el rendimiento
- El puerto por defecto es 5175 (configurable en `vite.config.js`)

## 👨‍💻 Autor

German Smigoski

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

