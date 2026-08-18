# 🎬 CinemaX - Movie Booking Platform

CinemaX is a full-stack movie booking application where users can explore movies, view details, select shows, and book movie tickets. It provides a modern cinema experience with authentication, booking management, and an admin dashboard.

## 🌐 Live Demo

Frontend:
https://cinemax-client-cyan.vercel.app/

Backend:
https://cinemax-server-nu.vercel.app/

---

## ✨ Features

### 👤 User Features
- User authentication using Clerk
- Browse movies
- View movie details
- View cast information
- Select movie shows
- Book tickets
- View booking history
- Responsive UI

### 🎬 Movie Features
- Movie listing
- Movie details page
- Movie posters and backdrops
- Cast details
- Show timings
- Seat booking system

### 🛠 Admin Features
- Add movie shows
- Manage bookings
- Dashboard statistics
- Revenue tracking

---

# 🚀 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Clerk Authentication
- Lucide React

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## APIs
- TMDB API

## Deployment
- Vercel
- MongoDB Atlas

---

# 📂 Project Structure

```
CinemaX
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   ├── context
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
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

# Frontend Setup

```bash
cd client
npm install
```

Create `.env` file:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=your_backend_url
```

Run:

```bash
npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

CLERK_SECRET_KEY=your_clerk_secret_key

TMDB_API_KEY=your_tmdb_api_key
```

Run server:

```bash
npm start
```

Backend:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

## Client

| Variable | Purpose |
|---|---|
| VITE_CLERK_PUBLISHABLE_KEY | Clerk authentication |
| VITE_BACKEND_URL | Backend API URL |

## Server

| Variable | Purpose |
|---|---|
| MONGODB_URI | Database connection |
| CLERK_SECRET_KEY | Clerk backend authentication |
| TMDB_API_KEY | Movie API |

---

# 📸 Screenshots

Add screenshots of:

- Home Page
- Movie Details
- Booking Page
- Admin Dashboard


---

# 🔮 Future Improvements

- Online payment integration
- Email booking confirmation
- QR ticket generation
- Mobile application
- AI movie recommendations

---

# 👨‍💻 Author

**Mohammad Yasir Hameed**

GitHub:
https://github.com/Yasir-11111

---

# 📄 License

This project is created for learning and portfolio purposes.
