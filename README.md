# Advanced Webpack Build Configuration

<div align="center">

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![React](https://img.shields.io/badge/React-18-%2361DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg)](https://www.typescriptlang.org/)
[![Webpack](https://img.shields.io/badge/Webpack-5-%238DD6F9.svg)](https://webpack.js.org/)

</div>

<p align="center">
  <strong>🚀 Production-ready Webpack configuration for React applications</strong>
</p>

<p align="center">
  A sophisticated and highly configurable Webpack build setup for React applications with TypeScript support. 
  This project provides a robust foundation for both desktop and mobile web applications with modern development features.
</p>

<hr />

## ✨ Features

- ⚛️ React 18 with TypeScript support
- 📱 Multi-platform build configuration (desktop/mobile)
- 🔥 Hot Module Replacement (HMR) with React Refresh
- 🎨 SCSS Modules support
- 🌐 SVG imports as React components
- 📦 Bundle analysis capabilities
- 🔍 TypeScript type checking
- 🔄 Development and Production build modes
- 🌍 i18n support with locale files

## 🚀 Quick Start

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ProCodeZero/webpack-build.git
cd webpack-build
```

2. Install dependencies:

```bash
npm install
```

## 🛠️ Available Scripts

| Command                 | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `npm start`             | Starts the development server at `localhost:8080`                  |
| `npm run build:dev`     | Creates a development build with source maps and debug information |
| `npm run build:prod`    | Creates a minified production build with optimizations             |
| `npm run build:mobile`  | Creates a development build optimized for mobile devices           |
| `npm run build:desktop` | Creates a production build optimized for desktop platforms         |
| `npm run typecheck`     | Runs TypeScript type checking for all source files                 |

> **Note**: Run `npm install` before executing any of these commands to ensure all dependencies are installed.

## 📁 Project Structure

```bash
webpack-build/
├── build/                  # Build output directory
├── config/                 # Webpack configuration files
│   ├── build/             # Build configuration modules
│   │   ├── babel/         # Babel configuration and plugins
│   │   └── interfaces/    # TypeScript build interfaces
│   ├── buildDevServer.ts  # Development server configuration
│   ├── buildLoaders.ts    # Webpack loaders configuration
│   ├── buildPlagins.ts    # Webpack plugins configuration
│   └── buildWebpack.ts    # Main webpack configuration
├── public/                # Static files
│   ├── index.html        # HTML template
│   └── locales/          # i18n translation files
├── src/                   # Source files
│   ├── assets/           # Images, fonts, and other assets
│   ├── components/       # Reusable React components
│   ├── pages/           # Application pages/routes
│   ├── global.d.ts      # Global TypeScript declarations
│   └── index.tsx        # Application entry point
├── package.json          # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── webpack.config.ts    # Webpack entry configuration
```

## 🔧 Configuration Features

### Build Optimization

- ⚡ **Platform-Specific Builds**: Optimized builds for both desktop and mobile platforms
- 📦 **Code Splitting**: Automatic chunk splitting for optimal loading performance
- 📊 **Bundle Analysis**: Built-in support for analyzing bundle size and composition
- 🔍 **Source Maps**: Configurable source map generation for debugging

### Development Experience

- 🔥 **Hot Module Replacement**: Real-time updates without page refresh
- 🚀 **Fast Refresh**: React Fast Refresh for instant component updates
- 🧪 **TypeScript**: Full TypeScript support with type checking
- 🎨 **SCSS Modules**: Component-scoped styles with SCSS support

### Asset Management

- 🖼️ **Image Optimization**: Automatic image optimization and processing
- 🎯 **SVG as Components**: Import SVGs directly as React components
- 📝 **Font Loading**: Optimized font loading and management
- 🌐 **i18n Support**: Built-in internationalization support

## Usage

This build configuration can be used as a foundation for:

1. React applications requiring a sophisticated build setup
2. Projects needing multiple build configurations (dev/prod/mobile/desktop)
3. Applications with TypeScript and modern JavaScript features
4. Projects requiring detailed bundle analysis and optimization

## Environment Variables

The build system supports several environment variables that can be passed to webpack:

- `mode`: 'development' or 'production'
- `port`: Development server port (default: 8080)
- `analyzer`: Enable/disable bundle analysis
- `platform`: 'desktop' or 'mobile'

Example usage:

```bash
npm start -- --env port=3000 platform=mobile
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- All the amazing open-source contributors

## 📬 Contact

ProCodeZero - [GitHub Profile](https://github.com/ProCodeZero)

Project Link: [https://github.com/ProCodeZero/webpack-build](https://github.com/ProCodeZero/webpack-build)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/ProCodeZero">ProCodeZero</a></sub>
</div>
