# Getting Started with Tasleem Beauty Salon Platform

This guide will help you set up and run the complete Tasleem platform locally.

## 📋 Prerequisites

- **Node.js** v14 or higher
- **MongoDB** (local installation or cloud instance like MongoDB Atlas)
- **npm** or **yarn**

## 🔧 Installation

### 1. Clone or Extract the Project
```bash
cd "Tasleem beauty saloon"
```

### 2. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create environment file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration (especially MongoDB URI and JWT secret):
```
MONGODB_URI=mongodb://localhost:27017/tasleem
JWT_SECRET=your_very_secure_secret_key_here
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

You should see: `Server running on port 5000`

### 3. Frontend Setup (in a new terminal)

Navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Create environment file:
```bash
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
```

Start the frontend:
```bash
npm start
```

This will automatically open `http://localhost:3000` in your browser.

## ✅ Verification

### Test Backend
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "Server is running"
}
```

### Test Frontend
- Home page should load with Tasleem branding
- All sections (Services, Staff, Gallery) should be visible
- Responsive design should work on mobile/tablet

## 📚 Next Steps

### 1. Configure MongoDB
- Install MongoDB locally, OR
- Create a cloud MongoDB Atlas account
- Update MONGODB_URI in `.env`

### 2. Seed Sample Data
Create sample services and staff:
```bash
# From backend directory
node scripts/seedData.js  # (to be created)
```

### 3. Test API Endpoints
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","password":"password123"}'

# Get all services
curl http://localhost:5000/api/services
```

### 4. Customize Frontend
- Replace placeholder images with actual ones
- Update color scheme in `tailwind.config.js`
- Add more pages in `frontend/src/pages/`
- Create admin dashboard

## 🚀 Development Tips

### Backend
- Use `npm run dev` for automatic reload
- Check `/api/health` endpoint for server status
- All routes require JWT token (add to Authorization header)

### Frontend
- React will auto-reload on file changes
- Use React DevTools browser extension for debugging
- Check network tab in DevTools to see API calls

## 📂 File Organization

- Backend routes: `backend/src/routes/`
- Backend models: `backend/src/models/`
- Frontend pages: `frontend/src/pages/`
- Frontend components: `frontend/src/components/`

## 🆘 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check MONGODB_URI in `.env` is correct
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
```bash
# Change port in backend/.env
PORT=5001

# Or kill existing process
# Windows: taskkill /PID <pid> /F
# Mac/Linux: kill -9 <pid>
```

### CORS Error
- Ensure backend is running on `http://localhost:5000`
- Check frontend `.env` has correct API_URL
- CORS is enabled in `backend/src/server.js`

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📖 Documentation

- **Backend API Docs**: See `backend/README.md`
- **Frontend Docs**: See `frontend/README.md`
- **Main Project Docs**: See `README.md`

## 🎯 Common Commands

```bash
# Backend
cd backend
npm install      # Install dependencies
npm run dev      # Start dev server
npm start        # Start production server

# Frontend
cd frontend
npm install      # Install dependencies
npm start        # Start dev server
npm run build    # Build for production
```

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    gold: "#D4AF37",
    blush: "#F5E6D3",
    // Add more colors
  }
}
```

### Fonts
Add to `frontend/public/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

## 🔒 Security Notes

- Never commit `.env` files
- Keep JWT_SECRET secure
- Use HTTPS in production
- Validate all user inputs
- Implement rate limiting for production

## 📞 Support

For issues or questions:
1. Check the README files in each folder
2. Review the copilot-instructions.md file
3. Check backend/frontend logs for errors
4. Verify all environment variables are set

---

Happy coding! 🎉
