# 🎬 CinemaX - Movie Booking Platform

CinemaX is a full-stack movie booking web application that allows users to explore movies, view details, select shows, and book tickets. It provides a complete cinema experience with authentication, payments, booking management, and an admin dashboard.

---

## 🌐 Live Application

### Frontend
https://cinemax-client-cyan.vercel.app/

### Backend
https://cinemax-server-nu.vercel.app/

---

# ✨ Features

## 👤 User Features

- Secure authentication using Clerk
- Browse latest movies
- Search movies
- View movie details
- View movie cast information
- Select available shows
- Choose seats
- Book movie tickets
- View booking history
- Receive booking confirmation emails
- Responsive design for all devices


## 🎬 Movie Features

- Movie listing
- Movie details page
- Movie posters and backdrop images
- Bollywood cast information
- Show timing management
- Seat availability system


## 💳 Payment Features

- Stripe payment integration
- Secure checkout
- Payment confirmation
- Booking creation after successful payment


## 🛠 Admin Dashboard

- Add new movie shows
- Manage movies
- View all bookings
- Track revenue
- Dashboard analytics

---

# 🚀 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Clerk Authentication
- Lucide React Icons


## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Inngest


## Third Party Services

- Clerk - Authentication
- TMDB API - Movie Data
- Stripe - Payments
- Brevo SMTP - Email Service
- MongoDB Atlas - Database


## Deployment

Frontend:
- Vercel

Backend:
- Vercel

Database:
- MongoDB Atlas

---

# 📂 Project Structure

```
CinemaX
│
├── client
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── assets
│   │   └── App.jsx
│   │
│   ├── .env.example
│   └── package.json
│
├── server
│   │
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── server.js
│   │
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Yasir-11111/CinemaX-Deploy.git
```

Go inside project:

```bash
cd CinemaX
```

---

# 💻 Frontend Setup

Navigate to client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
VITE_CURRENCY=$

VITE_BASE_URL=http://localhost:3000

VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🖥 Backend Setup

Navigate to server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
# Database
MONGODB_URI=your_mongodb_connection_string


# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key


# Movie Data
TMDB_API_KEY=your_tmdb_api_key


# SMTP Email
SENDER_EMAIL=your_email
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password


# Inngest
INNGEST_EVENT_KEY=your_event_key
INNGEST_SIGNING_KEY=your_signing_key


# Stripe
STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

Run backend:

```bash
npm start
```

Backend runs on:

```
http://localhost:3000
```

---

# 🔐 Environment Variables

## Client Environment

| Variable | Description |
|---|---|
| VITE_CURRENCY | Currency symbol |
| VITE_BASE_URL | Backend API URL |
| VITE_TMDB_IMAGE_BASE_URL | TMDB image URL |
| VITE_CLERK_PUBLISHABLE_KEY | Clerk frontend key |


## Server Environment

| Variable | Description |
|---|---|
| MONGODB_URI | MongoDB database URL |
| CLERK_SECRET_KEY | Clerk backend authentication |
| TMDB_API_KEY | Movie API key |
| SMTP_USER | Email service username |
| SMTP_PASS | Email service password |
| INNGEST_EVENT_KEY | Inngest event key |
| STRIPE_SECRET_KEY | Stripe payment secret |

---

# 📸 Screenshots

Add screenshots:

- Home Page
- Movie Details Page
- Booking Page
- Payment Page
- Admin Dashboard


---

# 🔮 Future Improvements

- Mobile application
- QR code ticket generation
- AI movie recommendations
- Advanced search filters
- More payment methods
- Real-time seat locking


---

# 🤝 Contribution

Contributions are welcome.

Steps:

```bash
git checkout -b feature-name

git add .

git commit -m "Add new feature"

git push origin feature-name
```

Create a Pull Request.

---

# 👨‍💻 Author

**Mohammad Yasir Hameed**

GitHub:

https://github.com/Yasir-11111


---

# 📄 License

This project is developed for learning and portfolio purposes.
