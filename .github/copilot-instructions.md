# Tasleem Beauty Salon - Copilot Instructions

This file contains custom instructions for developing the Tasleem Beauty Salon platform.

## Project Overview

**Project Name:** Tasleem - Beauty Salon Booking Platform
**Tech Stack:** React, Node.js/Express, MongoDB, Tailwind CSS, Framer Motion
**Purpose:** Full-stack beauty salon booking and management system

## Current Status

- ✅ Backend API setup with Express
- ✅ MongoDB models for all entities
- ✅ Authentication & authorization middleware
- ✅ Core API routes and controllers
- ✅ React frontend with components
- ✅ Tailwind CSS styling
- ⚠️ In Progress: Pages and advanced features

## Key Development Guidelines

### Backend Development
- Use Node.js v14+
- Follow REST API conventions
- Implement error handling in all endpoints
- Use JWT for authentication
- Validate all inputs using appropriate validators
- Keep controllers slim, use services for business logic

### Frontend Development
- Use functional components with hooks
- Implement responsive design (mobile-first)
- Use Framer Motion for animations
- Store auth token in localStorage
- Implement proper error handling
- Use context API for state management

### Database (MongoDB)
- All models use Mongoose schema
- Include timestamps (createdAt, updatedAt)
- Use proper indexing for frequent queries
- Validate data types and required fields

## File Structure

```
backend/
  src/
    config/       # Database and JWT configuration
    models/       # MongoDB models
    controllers/  # Business logic
    routes/       # API endpoints
    middleware/   # Auth, validation, error handling
    server.js     # Main server file

frontend/
  src/
    components/   # Reusable React components
    pages/        # Page components
    context/      # Context API providers
    api/          # API client
    styles/       # Global styles
    App.jsx       # Main App component
    index.js      # Entry point
```

## Common Tasks

### Adding a New API Endpoint
1. Create model in `backend/src/models/`
2. Create controller in `backend/src/controllers/`
3. Create routes in `backend/src/routes/`
4. Register route in `backend/src/server.js`
5. Add API client function in `frontend/src/api/client.js`

### Adding a New React Component
1. Create component in `frontend/src/components/`
2. Use Tailwind CSS for styling
3. Add Framer Motion animations
4. Export and import in parent component

### Database Queries
- Always use async/await
- Implement proper error handling
- Use try-catch blocks
- Populate references when needed

## Important Notes

- Never commit `.env` files
- Keep API keys and secrets in environment variables
- Test all endpoints before pushing
- Follow naming conventions consistently
- Write descriptive variable and function names

## Next Steps

1. Create admin dashboard pages
2. Implement booking calendar system
3. Add payment gateway integration
4. Set up email notifications
5. Create advanced filtering and search
6. Add user profile pages
7. Implement reviews and ratings system
