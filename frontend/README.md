# Frontend README

Tasleem Beauty Salon Frontend built with React, Tailwind CSS, and Framer Motion.

## Quick Start

### Install Dependencies
```bash
npm install
```

### Environment Setup
```bash
# Create .env file
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
```

### Run Development Server
```bash
npm start
```

App will open on `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Project Structure

- `src/components/` - Reusable React components
- `src/pages/` - Page components (coming soon)
- `src/context/` - Context API providers
- `src/api/` - API client and endpoints
- `src/styles/` - Global CSS and Tailwind config
- `public/` - Static assets

## Components

- **Navbar** - Navigation header
- **Hero** - Hero section with CTA
- **Services** - Services listing and filtering
- **Staff** - Staff profiles and availability
- **Gallery** - Image gallery section
- **Footer** - Footer with links

## Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from create-react-app (one-way)

## Dependencies

- react - UI library
- react-router-dom - Routing
- axios - HTTP client
- framer-motion - Animations
- tailwindcss - Utility CSS
- classnames - Conditional styling

## Styling

- Tailwind CSS for utility-first styling
- Global styles in `src/styles/globals.css`
- Color palette defined in `tailwind.config.js`
- Responsive design patterns included

## Important

- Use Framer Motion for animations
- Keep components small and reusable
- Use context API for global state
- Follow folder structure conventions
- Always implement error handling
