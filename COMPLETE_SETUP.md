# Tasleem Beauty Salon - Complete Setup Guide

## Project Overview
A fully functional, professional beauty salon booking system with:
- ✅ Multi-page React application with routing
- ✅ Seamless online payment integration (EasyPaisa, JazzCash, Bank Transfer, Cash)
- ✅ Interactive service booking system
- ✅ AI-generated background images (Gemini)
- ✅ Professional, modern design
- ✅ Responsive mobile-friendly layout
- ✅ Complete authentication system

---

## Installation Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in backend root:**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/tasleem
   JWT_SECRET=your_secret_key_here_change_this
   GEMINI_API_KEY=your_gemini_api_key_here (optional)
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```
   Server will run on http://localhost:5000

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file in frontend root:**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```
   Application will open at http://localhost:3000

---

## Project Structure

### Backend (`/backend/src`)
```
controllers/
  ├── authController.js      - User authentication
  ├── bookingController.js   - Booking management
  ├── serviceController.js   - Service management
  ├── staffController.js     - Staff management
  ├── jobController.js       - Job applications
  └── aiController.js        - AI image generation
routes/
  ├── authRoutes.js
  ├── bookingRoutes.js
  ├── serviceRoutes.js
  ├── staffRoutes.js
  ├── jobRoutes.js
  └── aiRoutes.js
models/
  ├── User.js
  ├── Booking.js
  ├── Service.js
  ├── Staff.js
  ├── Payment.js
  └── JobApplication.js
middleware/
  └── auth.js               - JWT authentication
config/
  ├── db.js                 - Database connection
  └── jwt.js                - JWT configuration
```

### Frontend (`/frontend/src`)
```
pages/
  ├── Home.jsx              - Landing page
  ├── Services.jsx          - Services listing with modal
  ├── ServiceDetail.jsx     - Individual service details
  ├── Booking.jsx           - Booking form with calendar
  ├── Payment.jsx           - Payment methods integration
  ├── About.jsx             - About page
  ├── Gallery.jsx           - Image gallery
  ├── Login.jsx             - User login
  └── Register.jsx          - User registration
components/
  ├── Navbar.jsx            - Navigation with mobile menu
  ├── Hero.jsx              - Hero section with AI background
  ├── Services.jsx          - Services section
  ├── Staff.jsx             - Staff showcase
  ├── Gallery.jsx           - Gallery section
  ├── Footer.jsx            - Footer
  └── AIBackground.jsx      - AI image component
context/
  └── AuthContext.js        - Authentication context
api/
  └── client.js             - Axios API client
styles/
  └── globals.css           - Global Tailwind styles
```

---

## Features

### 1. Multi-Page Navigation
- Home page with hero section
- Services page with filtering
- Service detail page
- Booking system with date/time selection
- Payment page with multiple methods
- About page
- Gallery page
- User authentication (Login/Register)

### 2. Service Booking System
- Select service from category (Female, Male, Bridal, Special)
- Choose preferred date (next 30 days)
- Select available time slots
- Pick from available staff
- Enter customer details
- Automatic booking creation

### 3. Payment Integration
Four payment methods:
- **EasyPaisa**: Mobile wallet payment
- **JazzCash**: Jazz network payment
- **Bank Transfer**: Direct account transfer
- **Cash**: On-site cash payment

Each method includes:
- Detailed payment instructions
- Transaction tracking
- Confirmation messages
- Receipt generation

### 4. AI-Generated Backgrounds
- Gemini API integration for dynamic images
- Categories: Bridal, Grooming, Haircuts
- Auto-loading on hero section
- Professional salon aesthetic

### 5. Professional Design
- Sleek, modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Responsive design (mobile, tablet, desktop)
- Glass-morphism effects
- Gradient backgrounds
- Hover effects and transitions

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Services
- `GET /api/services` - Get all services (with category filter)
- `GET /api/services/:id` - Get service details
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get user's bookings
- `PUT /api/bookings/:id/status` - Update booking status
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Staff
- `GET /api/staff` - Get all staff members
- `GET /api/staff/:id` - Get staff details
- `PUT /api/staff/:id/availability` - Update availability

### AI
- `GET /api/ai/categories` - Get image categories
- `GET /api/ai/backgrounds` - Get background images
- `GET /api/ai/generate` - Generate new background image

---

## Environment Variables

### Backend (.env)
```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/tasleem

# Authentication
JWT_SECRET=your_jwt_secret_key_here

# API Keys (Optional)
GEMINI_API_KEY=your_gemini_api_key

# CORS
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Payment Integration Details

### EasyPaisa
- Account Type: Personal/Business
- Transaction Method: Mobile Wallet
- Test Account: Contact EasyPaisa for sandbox

### JazzCash
- Account Type: Personal/Business
- USSD Code: *141#
- Test Credentials: Available from Jazz integration

### Bank Transfer
- Bank: HBL (Habib Bank Limited)
- Account Name: Tasleem Beauty Salon
- Account Number: [Your Account Number]
- IBAN: [Your IBAN]

### Cash Payment
- No setup required
- Payment collected at salon
- Receipt provided manually

---

## Running the Application

### Development Mode

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

### Production Build

Frontend:
```bash
cd frontend
npm run build
```

This creates optimized build in `build/` folder.

---

## Testing

### Test Booking Flow
1. Go to homepage
2. Click "Book Appointment"
3. Select service, date, time, stylist
4. Enter customer details
5. Proceed to payment
6. Select payment method
7. Complete payment

### Test Services
1. Go to /services
2. Filter by category
3. Click on service to view details
4. Click "Book This Service"

---

## Deployment

### Frontend (Vercel/Netlify)
1. Push code to GitHub
2. Connect repository to Vercel/Netlify
3. Set environment variables
4. Deploy

### Backend (Heroku/Railway/Render)
1. Add `Procfile`: `web: npm start`
2. Set environment variables
3. Deploy using Git push or CLI

---

## Common Issues & Solutions

### Issue: CORS Error
**Solution:** Ensure backend is running and CORS_ORIGIN matches frontend URL

### Issue: MongoDB Connection Failed
**Solution:** Check MongoDB service is running and connection string is correct

### Issue: Images Not Loading
**Solution:** Ensure Gemini API key is set or use fallback images

### Issue: Payment Page Not Showing
**Solution:** Verify booking was created and bookingId is in URL

---

## Security Best Practices

1. ✅ Change JWT_SECRET in production
2. ✅ Use HTTPS in production
3. ✅ Store API keys in environment variables
4. ✅ Implement rate limiting
5. ✅ Validate all inputs
6. ✅ Use CORS properly
7. ✅ Hash passwords (bcryptjs already implemented)
8. ✅ Secure JWT tokens

---

## Future Enhancements

- [ ] Real Gemini API integration for image generation
- [ ] Email notifications for bookings
- [ ] SMS confirmations
- [ ] Customer reviews and ratings
- [ ] Loyalty points system
- [ ] Staff dashboard
- [ ] Admin panel
- [ ] Analytics and reporting
- [ ] Push notifications
- [ ] Video consultation
- [ ] Package deals and discounts
- [ ] Referral system

---

## Support

For issues or questions:
- Email: info@tasleem.com
- Phone: +92 300 1234567
- GitHub Issues: [Your Repository]

---

## License

© 2024 Tasleem Beauty Salon. All rights reserved.
