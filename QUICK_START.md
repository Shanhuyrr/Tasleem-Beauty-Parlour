# 🚀 Quick Start Guide - Tasleem Beauty Salon

## Get Started in 5 Minutes!

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Set Environment Variables

**Backend:** Create `backend/.env` file:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/tasleem
JWT_SECRET=your_secret_key_123456
GEMINI_API_KEY=your_api_key_if_available
```

**Frontend:** Create `frontend/.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Step 3: Start the Server

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend runs on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
✅ Frontend opens at http://localhost:3000

### Step 4: Start Using!

1. **Home Page** → See the landing page with AI background
2. **Explore Services** → Click on Services to see all options
3. **Book Appointment** → Select service, date, time, stylist
4. **Make Payment** → Choose from 4 payment methods
5. **Get Confirmation** → Your booking is confirmed!

---

## 📱 Features Available

✅ **Multi-page Navigation**
- Home, Services, Service Details, Booking, Payment, About, Gallery
- Login/Register pages

✅ **Service Management**
- Browse all services by category
- View service details
- Interactive service cards with modals

✅ **Smart Booking System**
- Date picker (next 30 days)
- Time slot selection
- Staff selection
- Customer details form
- Real-time booking summary

✅ **4 Payment Methods**
- 📱 EasyPaisa - Mobile wallet payment
- 💳 JazzCash - Jazz network payment
- 🏦 Bank Transfer - Direct account transfer
- 💵 Cash - On-site payment

✅ **Professional Design**
- Modern, sleek UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- AI-generated hero background images
- Glass-morphism effects

✅ **Authentication**
- User registration
- User login
- Profile management

---

## 🎯 Main Pages

| Page | URL | Features |
|------|-----|----------|
| Home | `/` | Hero section, featured services, stats |
| Services | `/services` | Category filter, service cards, modal details |
| Service Detail | `/services/:id` | Full service information, book button |
| Booking | `/booking` | Complete booking form with all options |
| Payment | `/payment` | 4 payment methods with instructions |
| About | `/about` | Company info, team, why choose us |
| Gallery | `/gallery` | Image gallery with categories |
| Login | `/login` | User authentication |
| Register | `/register` | New user registration |

---

## 📊 API Endpoints Reference

### Services
```
GET /api/services?category=female
GET /api/services/:id
```

### Bookings
```
POST /api/bookings
GET /api/bookings
```

### AI Images
```
GET /api/ai/categories
GET /api/ai/backgrounds?category=bridal
GET /api/ai/generate?category=bridal
```

---

## 🔧 Customization

### Change Colors
Edit `frontend/tailwind.config.js` to modify:
- Primary color (currently amber)
- Background colors
- Font families

### Add More Services
1. Go to MongoDB
2. Add service document to `services` collection
3. Service appears automatically on frontend

### Update Payment Methods
Edit `frontend/src/pages/Payment.jsx` to add more methods

### Change Background Images
Images are in `backend/src/controllers/aiController.js` - update the URLs

---

## ⚡ Performance Tips

- Images are optimized with Unsplash URLs
- Animations use Framer Motion (optimized)
- API calls are cached where possible
- Responsive design ensures mobile performance

---

## 🐛 Troubleshooting

### "Cannot GET /api/services"
→ Backend not running. Start with `npm run dev` in backend folder

### "API_URL is not defined"
→ Create `.env` file in frontend with `REACT_APP_API_URL=http://localhost:5000/api`

### "MongoDB connection failed"
→ Ensure MongoDB is running or update MONGODB_URI

### Images not loading
→ Check internet connection (using external URLs)

---

## 📞 Support

Need help? Check:
1. `COMPLETE_SETUP.md` - Detailed setup guide
2. `README.md` - Full project documentation
3. Backend error logs in terminal
4. Browser console for frontend errors

---

## 🎉 You're All Set!

Your professional beauty salon website is ready to use!

**Next Steps:**
- 📝 Add your salon details to the About page
- 🖼️ Update service images
- 📞 Add real contact information
- 🏦 Configure real payment accounts
- 🚀 Deploy to production

Happy booking! 💅✨
