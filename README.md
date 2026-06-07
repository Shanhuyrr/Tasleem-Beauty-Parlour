# ✨ Tasleem - Professional Beauty Salon Booking Platform

![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Node](https://img.shields.io/badge/Node-v14%2B-green)
![React](https://img.shields.io/badge/React-v18-blue)

A comprehensive, professional beauty salon booking and management system with AI-powered features, multiple payment integrations, and a sleek modern design.

## ✨ Key Features

### 🎯 Complete Booking System
- ✅ **Multi-page Navigation** - Home, Services, Booking, Payment, Gallery, About
- ✅ **Service Management** - Browse, filter, and view detailed service information
- ✅ **Interactive Booking** - Date/time selection, staff assignment, customer details
- ✅ **Real-time Availability** - Dynamic time slots and stylist selection
- ✅ **Booking Confirmation** - Detailed booking summary and confirmation

### 💳 Advanced Payment Integration
- 📱 **EasyPaisa** - Pakistani mobile wallet integration
- 💳 **JazzCash** - Jazz network payment support
- 🏦 **Bank Transfer** - Direct account transfer with account details
- 💵 **Cash Payment** - On-site payment option
- ✅ Each method includes detailed payment instructions and transaction tracking

### 🤖 AI-Powered Features
- 🎨 **Gemini AI Background Images** - Dynamically generated salon backgrounds
- 🖼️ **Bridal, Grooming, Haircut** - Specialized AI images for each service category
- 🌈 **Professional Aesthetics** - High-quality, salon-quality backgrounds

### 🎨 Professional Design
- 🌓 Modern, sleek UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Glass-morphism effects and gradients
- 💫 Hover effects and interactive elements

### 👤 User Management
- 🔐 Secure user registration and login
- 📝 User profile management
- 🔑 JWT-based authentication
- 💾 Booking history and management

### 📊 Admin Capabilities
- 👥 Staff management
- 💼 Service creation and editing
- 📋 Booking management
- 💰 Payment tracking

---

## 🏗️ Project Structure

```
tasleem-beauty-salon/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── authController.js       # Authentication logic
│   │   │   ├── serviceController.js    # Service management
│   │   │   ├── bookingController.js    # Booking system
│   │   │   ├── staffController.js      # Staff management
│   │   │   ├── paymentController.js    # Payment processing
│   │   │   ├── jobController.js        # Job applications
│   │   │   └── aiController.js         # AI image generation
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Service.js
│   │   │   ├── Booking.js
│   │   │   ├── Staff.js
│   │   │   ├── Payment.js
│   │   │   └── JobApplication.js
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.js
│   ├── .env.example
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx               # Landing page
    │   │   ├── Services.jsx           # Services listing
    │   │   ├── ServiceDetail.jsx      # Service details page
    │   │   ├── Booking.jsx            # Booking page
    │   │   ├── Payment.jsx            # Payment page
    │   │   ├── About.jsx              # About page
    │   │   ├── Gallery.jsx            # Gallery page
    │   │   ├── Login.jsx              # Login page
    │   │   └── Register.jsx           # Registration page
    │   ├── components/
    │   │   ├── Navbar.jsx             # Navigation bar
    │   │   ├── Hero.jsx               # Hero section
    │   │   ├── AIBackground.jsx       # AI background loader
    │   │   ├── Services.jsx           # Services section
    │   │   ├── Staff.jsx              # Staff section
    │   │   ├── Gallery.jsx            # Gallery section
    │   │   └── Footer.jsx             # Footer
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── api/
    │   │   └── client.js              # API client with all endpoints
    │   ├── styles/
    │   │   └── globals.css
    │   ├── App.jsx
    │   └── index.js
    ├── .env.example
    ├── tailwind.config.js
    ├── tsconfig.json
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14 or higher
- **MongoDB** (local or cloud)
- **npm** or **yarn**

### Quick Start (5 minutes)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tasleem-beauty-salon.git
   cd tasleem-beauty-salon
   ```

2. **Set up backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   npm run dev
   ```

3. **Set up frontend (new terminal):**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm start
   ```

4. **Open browser:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

---

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/tasleem
JWT_SECRET=your_secret_key_change_in_production
GEMINI_API_KEY=your_google_gemini_api_key_optional
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 📱 Pages & Features

| Page | Route | Features |
|------|-------|----------|
| **Home** | `/` | Hero with AI background, featured services, statistics |
| **Services** | `/services` | Category filtering, service cards, modal details |
| **Service Detail** | `/services/:id` | Full service info, pricing, duration, booking |
| **Booking** | `/booking` | Service selection, date/time picker, staff selection, form |
| **Payment** | `/payment` | 4 payment methods, instructions, transaction tracking |
| **About** | `/about` | Company story, team, values, contact info |
| **Gallery** | `/gallery` | Categorized image gallery with filtering |
| **Login** | `/login` | User authentication with email/password |
| **Register** | `/register` | New user registration with validation |

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          Create new user account
POST   /api/auth/login             User login
GET    /api/auth/profile           Get user profile (requires auth)
```

### Services
```
GET    /api/services               Get all services (with category filter)
GET    /api/services/:id           Get service details
POST   /api/services               Create new service (admin)
PUT    /api/services/:id           Update service (admin)
DELETE /api/services/:id           Delete service (admin)
```

### Bookings
```
POST   /api/bookings               Create new booking
GET    /api/bookings               Get user's bookings
PUT    /api/bookings/:id/status    Update booking status
PUT    /api/bookings/:id/cancel    Cancel booking
```

### Payments
```
POST   /api/payments               Create payment record
GET    /api/payments/:id           Get payment details
PUT    /api/payments/:id/verify    Verify payment
```

### Staff
```
GET    /api/staff                  Get all staff members
GET    /api/staff/:id              Get staff details
PUT    /api/staff/:id/availability Update availability
```

### AI & Images
```
GET    /api/ai/categories          Get image categories
GET    /api/ai/backgrounds         Get background images
GET    /api/ai/generate            Generate new background
```

---

## 💳 Payment Methods

### EasyPaisa
- Mobile wallet payment
- Account-based transactions
- Test Instructions: Use EasyPaisa app to send to salon account
- Status: Ready for integration

### JazzCash
- Jazz network payment system
- USSD and app-based
- Test Instructions: Dial *141# for balance and transfer
- Status: Ready for integration

### Bank Transfer
```
Bank: HBL (Habib Bank Limited)
Account Name: Tasleem Beauty Salon
Account Number: 1234567890123
IBAN: PK12HBLC0001234567890123
```
- Status: Ready for integration

### Cash Payment
- On-site payment option
- No online integration needed
- Receipt provided at salon
- Status: Fully implemented

---

## 🎨 Design Features

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Works on all devices
- **Glass-morphism** - Modern frosted glass effects
- **Gradient Backgrounds** - Beautiful color combinations
- **Dark/Light** - Professional color schemes

---

## 🔐 Security Features

- ✅ JWT authentication with refresh tokens
- ✅ Password hashing with bcryptjs
- ✅ CORS protection
- ✅ Input validation and sanitization
- ✅ Secure headers
- ✅ Environment variables for secrets
- ✅ Rate limiting ready

---

## 📦 Technologies Used

### Frontend
- **React 18** - UI library
- **React Router v6** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cors** - Cross-origin support

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the build/ folder
```

### Backend (Heroku/Railway/Render)
```bash
# Set environment variables in platform
git push
# Auto-deploy on push
```

---

## 🔄 Project Status

| Feature | Status |
|---------|--------|
| Multi-page routing | ✅ Complete |
| Service browsing | ✅ Complete |
| Booking system | ✅ Complete |
| Payment integration UI | ✅ Complete |
| AI backgrounds | ✅ Complete |
| User authentication | ✅ Complete |
| Responsive design | ✅ Complete |
| Admin panel | 🔄 In Progress |
| Email notifications | 📋 Planned |
| SMS notifications | 📋 Planned |
| Analytics dashboard | 📋 Planned |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Support & Contact

- 📧 Email: info@tasleem.com
- 📱 Phone: +92 300 1234567
- 🏢 Location: Wah Cantt, Punjab, Pakistan
- 🕒 Hours: 10:00 AM - 8:00 PM

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Tailwind CSS for amazing styling
- Framer Motion for smooth animations
- React team for the great library
- MongoDB for reliable database
- All contributors and users

---

## 📚 Documentation

- [Quick Start Guide](./QUICK_START.md) - Get running in 5 minutes
- [Complete Setup Guide](./COMPLETE_SETUP.md) - Detailed configuration
- [API Documentation](./API_DOCS.md) - All endpoints explained

---

## 🎯 Roadmap

- [x] Basic CRUD operations
- [x] User authentication
- [x] Service booking system
- [x] Payment integration UI
- [x] Multi-page navigation
- [x] AI background images
- [ ] Real-time notifications
- [ ] Admin dashboard
- [ ] Analytics
- [ ] Mobile app (React Native)

---

## 💡 Tips for Success

1. **Test Thoroughly** - Use each feature before deploying
2. **Update Credentials** - Change JWT_SECRET in production
3. **Enable HTTPS** - Always use HTTPS in production
4. **Set Real Accounts** - Configure real payment accounts
5. **Monitor Logs** - Check server logs for errors
6. **Backup Database** - Regular MongoDB backups
7. **Update Dependencies** - Keep packages up to date

---

**Made with ❤️ by the Tasleem Team**

⭐ If you find this helpful, please give us a star!


3. Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
MONGODB_URI=mongodb://localhost:27017/tasleem
JWT_SECRET=your_secret_key
PORT=5000
```

5. Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## 🎨 Features

### Core Modules
- ✅ Home Page with Hero Section
- ✅ Services Page (Male & Female)
- ✅ Appointment Booking System
- ✅ Staff Management
- ✅ Job Applications
- ✅ Payment Integration (Easypaisa, JazzCash, Bank, Cash)
- ✅ Gallery
- ✅ User Account System
- ⚠️ Admin Dashboard (In Progress)

### Technology Stack

**Frontend:**
- React.js
- Tailwind CSS
- Framer Motion (animations)
- Axios (API calls)

**Backend:**
- Node.js + Express
- MongoDB
- JWT Authentication
- Bcrypt (password hashing)

## 📊 Database Models

### User
- name, email, password, phone
- role (customer/staff/admin)
- bookingHistory
- profileImage

### Service
- name, category (male/female)
- description, price, duration
- images, rating, reviews

### Booking
- userId, serviceId, staffId
- date, time, status
- paymentStatus, paymentMethod
- totalPrice

### Staff
- userId, name, role
- experience, salary, rating
- availability, workingHours
- bookedSlots

### JobApplication
- name, email, phone
- position, experience, skills
- portfolio, resume, status

### Payment
- bookingId, userId, amount
- method, status, transactionId

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id/status` - Update booking status (admin)
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Staff
- `GET /api/staff` - Get all staff
- `GET /api/staff/:id` - Get staff by ID
- `PUT /api/staff/:id/availability` - Update availability

### Jobs
- `POST /api/jobs` - Submit job application
- `GET /api/jobs` - Get all applications (admin)
- `PUT /api/jobs/:id/status` - Update application status (admin)

## 🎨 Design System

**Color Palette:**
- Primary Gold: `#D4AF37`
- Black: `#1a1a1a`
- Blush Pink: `#F5E6D3`
- White: `#FFFFFF`

**Typography:**
- Serif: Playfair Display
- Sans-serif: Montserrat

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tasleem
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EASYPAISA_MERCHANT_ID=your_merchant_id
JAZZCASH_MERCHANT_ID=your_merchant_id
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 🚢 Deployment

### Backend
1. Set up environment variables on your hosting platform
2. Deploy to Heroku, Render, or similar
3. Update MONGODB_URI to your cloud MongoDB

### Frontend
1. Build the production bundle:
```bash
npm run build
```
2. Deploy to Vercel, Netlify, or similar

## 📚 Additional Features (Coming Soon)

- AI hairstyle recommendation
- Live chat support
- Push notifications
- Coupon/discount system
- Loyalty rewards
- Admin dashboard with analytics
- Email/SMS notifications
- Payment receipts

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

## 📄 License

ISC

## 📧 Support

For support, contact: info@tasleem.com
