# Backend README

Tasleem Beauty Salon Backend API built with Node.js, Express, and MongoDB.

## Quick Start

### Install Dependencies
```bash
npm install
```

### Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Run Development Server
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Documentation

See the main README.md for complete API documentation and endpoints.

## Project Structure

- `src/models/` - MongoDB schemas
- `src/controllers/` - Request handlers
- `src/routes/` - API endpoints
- `src/middleware/` - Authentication and validation
- `src/config/` - Database and JWT configuration

## Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (when implemented)

## Dependencies

- express - Web framework
- mongoose - MongoDB ODM
- dotenv - Environment variables
- jsonwebtoken - Authentication
- bcryptjs - Password hashing
- cors - Cross-origin requests
- multer - File uploads
- axios - HTTP client

## Important

- Keep `.env` file secure and never commit it
- All API endpoints require proper error handling
- Validate input data before processing
- Use authentication middleware for protected routes
