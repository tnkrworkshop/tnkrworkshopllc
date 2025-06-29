
# TnKr Workshop - Craft Meets Code

![TnKr Workshop](https://img.shields.io/badge/TnKr-Workshop-8B4513?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K)
[![Veteran Owned](https://img.shields.io/badge/Veteran-Owned-darkgreen?style=flat-square)](https://tnkrworkshop.com)
[![Family Run](https://img.shields.io/badge/Family-Run-blue?style=flat-square)](https://tnkrworkshop.com)
[![Premium Quality](https://img.shields.io/badge/Premium-Quality-gold?style=flat-square)](https://tnkrworkshop.com)

> **Veteran-owned, family-run woodworking shop specializing in CNC-carved wooden basket bases, 3D-printed PLA bases, and premium hardwood cutting boards.**

## 🌟 About TnKr Workshop

TnKr Workshop LLC combines traditional woodworking craftsmanship with modern digital fabrication techniques. Our mission is to provide high-quality, handcrafted products that serve both functional and aesthetic purposes.

### Our Specialties
- **CNC-Carved Wooden Basket Bases** - Precision-crafted foundations for your weaving projects
- **3D-Printed PLA Bases** - Modern, lightweight alternatives for contemporary designs  
- **Premium Hardwood Cutting Boards** - Durable, beautiful kitchen essentials

## 🚀 Live Demo

🔗 **[View Live Site](https://tnkrworkshop.lovable.app)**

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite 
- **State Management**: TanStack Query
- **Icons**: Lucide React
- **Charts**: Recharts
- **Deployment**: GitHub Pages via GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0.0 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### Verify Installation
```bash
node --version    # Should show v18.0.0+
npm --version     # Should show v8.0.0+
git --version     # Should show git version
```

## 🏁 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/tnkr-workshop.git
cd tnkr-workshop
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

🎉 **That's it!** Open [http://localhost:8080](http://localhost:8080) to view the site.

## 📚 Development Guide

### Project Structure
```
tnkr-workshop/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ...
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles & design system
├── public/                 # Static assets
├── .github/                # GitHub Actions & templates
└── ...config files
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:8080 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |
| `npm run clean` | Clean build artifacts and cache |
| `npm run reinstall` | Fresh install of dependencies |

### Design System & Colors

The project uses a custom wood-inspired color palette defined in `src/index.css`:

```css
/* Wood-tone color palette */
--walnut: 25 47% 25%;    /* Dark brown - primary text/headers */
--cherry: 0 65% 45%;     /* Rich red - accent/CTA buttons */
--oak: 39 55% 65%;       /* Light brown - secondary elements */
--poplar: 39 39% 95%;    /* Off-white - backgrounds */
--stone: 45 25% 80%;     /* Light gray - subtle backgrounds */
--maker-blue: 210 76% 48%;   /* Tech blue - 3D printing theme */
--maker-green: 142 76% 36%;  /* Tech green - CNC theme */
```

### Component Development

#### Creating New Components
```bash
# Create component file
touch src/components/YourComponent.tsx
```

#### Component Template
```tsx
import React from 'react';

interface YourComponentProps {
  // Define props here
}

const YourComponent: React.FC<YourComponentProps> = ({ }) => {
  return (
    <div className="your-component">
      {/* Component content */}
    </div>
  );
};

export default YourComponent;
```

#### Using shadcn/ui Components
The project includes the full shadcn/ui component library. Import components like:
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
```

### Styling Guidelines

1. **Use Tailwind Classes** - Prefer Tailwind utility classes over custom CSS
2. **Follow Design System** - Use the defined color palette (walnut, cherry, oak, etc.)
3. **Mobile-First** - Design for mobile, then enhance for desktop
4. **Semantic HTML** - Use proper HTML5 semantic elements

### State Management

- **Local State**: Use React's `useState` for component-specific state
- **Server State**: Use TanStack Query for API data fetching and caching
- **Global State**: Consider React Context for app-wide state (if needed)

### Performance Best Practices

1. **Code Splitting** - Use React.lazy() for route-based code splitting
2. **Image Optimization** - Use WebP format when possible
3. **Bundle Analysis** - Run `npm run build` and check bundle size
4. **Lazy Loading** - Implement lazy loading for images and heavy components

## 🧪 Testing

Currently, the project is set up for testing but doesn't include specific test files. To add testing:

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project includes GitHub Actions for automatic deployment:

1. **Push to `main` branch** - Automatically triggers deployment
2. **GitHub Pages** - Site deploys to `https://YOUR_USERNAME.github.io/tnkr-workshop`

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview

# Deploy the `dist` folder to your hosting service
```

### Environment Variables

If you need environment variables:

1. Create `.env.local` file (never commit this)
2. Define variables prefixed with `VITE_`:
```bash
VITE_API_URL=https://api.example.com
```
3. Use in code: `const apiUrl = import.meta.env.VITE_API_URL`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** following our coding standards
4. **Run the linter**: `npm run lint:fix`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new files
- Follow existing naming conventions
- Add comments for complex logic
- Ensure responsive design
- Test your changes thoroughly

## 🐛 Troubleshooting

### Common Issues

**Port 8080 already in use:**
```bash
# Kill process using port 8080
lsof -ti:8080 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

**Node modules issues:**
```bash
# Clean reinstall
npm run reinstall
```

**TypeScript errors:**
```bash
# Check types without building
npm run type-check
```

**Build fails:**
```bash
# Clean build cache
npm run clean
npm run build
```

### Getting Help

- 📧 **Email**: support@tnkrworkshop.com
- 🐛 **Bug Reports**: [Create an issue](https://github.com/YOUR_USERNAME/tnkr-workshop/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/YOUR_USERNAME/tnkr-workshop/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the icon system
- **Vite** - For the blazing fast build tool

---

**Built with ❤️ by TnKr Workshop LLC**

*Supporting veterans, families, and quality craftsmanship since 2024*
