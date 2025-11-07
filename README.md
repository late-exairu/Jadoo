# Jadoo - Travel Agency Website

A modern travel agency website built with React, TypeScript, Tailwind CSS, and Vite.

## 🚀 Features

- Modern React 19 with TypeScript
- Tailwind CSS 4 with custom theme
- Class Variance Authority for component variants
- Dynamic SVG icon system with animations
- Responsive design for all devices
- Optimized for performance and SEO

## 🛠 Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Lint code
yarn lint

# Format code
yarn format
```

## 🌐 Deployment

### Automatic deployment (GitHub Actions)

The project is configured for automatic deployment to GitHub Pages when you push to the main branch.

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://late-exairu.github.io/Jadoo/`

### Manual deployment

```bash
# Build and deploy to gh-pages branch
yarn deploy
```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Button.tsx     # CVA-powered button component
│   ├── Icons.tsx      # Icon system with animations
│   ├── Hero.tsx       # Hero section
│   └── ...
├── hooks/             # Custom React hooks
│   └── useData.ts     # Data access hooks
├── lib/               # Utility libraries
│   ├── utils.ts       # General utilities
│   └── variants.ts    # CVA variant definitions
├── data.json          # Content data
├── style.css          # Global styles and Tailwind CSS
└── main.tsx           # App entry point
```

## 🎨 Tech Stack

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Class Variance Authority** - Component variant management
- **GitHub Pages** - Static site hosting

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. Please contact the maintainer for contribution guidelines.
