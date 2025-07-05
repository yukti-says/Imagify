# 🎨 Imagify – Text-to-Image SaaS App

**Imagify** is a full-stack SaaS web application that allows users to generate high-quality AI images from text prompts using the [ClipDrop API](https://clipdrop.co/apis). Users receive **10 free credits** upon signup, and can use each credit to generate an image. Designed with a modern UI, it uses **React + Framer Motion** for animation and **Node.js + Express + MongoDB** for the backend, authentication, and credit management.

> 💡 Razorpay payment integration and CI/CD pipeline are planned for future updates.

---

## 🌐 Live Demo

- **Frontend**: [https://imagify-m5vmcyea9-yukti-sahus-projects.vercel.app](https://imagify-m5vmcyea9-yukti-sahus-projects.vercel.app)  
- **Backend API**: [https://imagify-n158.onrender.com](https://imagify-n158.onrender.com)

---

## 🧩 Tech Stack

| Layer         | Technology                                  |
|---------------|----------------------------------------------|
| **Frontend**  | Vite + React, React Router, Framer Motion   |
| **Backend**   | Node.js, Express, JWT                       |
| **Database**  | MongoDB + Mongoose                          |
| **API**       | [ClipDrop API](https://clipdrop.co/apis)    |
| **Styling**   | Tailwind CSS, Gradient background, Toastify |
| **Deployment**| Vercel (frontend), Render (backend)         |

---

## 🚀 Features

- 🔐 **User Authentication**
  - Signup/Login with JWT tokens
  - Auth state handled via context
- 🎁 **Free Credits**
  - 10 free credits on signup
  - Each image costs 1 credit
- 🧠 **AI Image Generation**
  - Prompt-based generation using ClipDrop API
- 💬 **Notifications**
  - Toast-based real-time alerts
- 🎨 **Animated & Responsive UI**
  - Built with TailwindCSS + Framer Motion
- 📦 **Modular Code Structure**
  - Clean folder layout: `pages/`, `components/`, `context/`, `api/`, etc.

---

# 📦 Imagify Project Structure

```
Imagify/
├── client/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── .env
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   └── .env
```

---

## 🛠️ How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/yukti/imagify.git
cd imagify
```

### 2. Set Up Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
CLIPDROP_API_KEY=your_clipdrop_key
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm start
```

### 3. Set Up Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` folder:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

| Platform | Use      | URL                                 |
|----------|----------|-------------------------------------|
| Vercel   | Frontend | imagify-m5vmcyea9.vercel.app        |
| Render   | Backend  | imagify-n158.onrender.com           |

---

## 📌 Planned Features

- 💳 Razorpay Integration for Credit Purchases
- 🪄 Image download, history & save feature
- 📊 Usage analytics dashboard
- ✨ Prompt enhancement suggestions
- 🔐 Admin panel for user management
- 🚀 CI/CD with GitHub Actions for auto-deploy

---

## 👩‍💻 What I Learned

While building Imagify, I learned how to:

- Architect a full-stack SaaS app with real-world functionality
- Handle JWT-based auth and secure API routes
- Connect and use the ClipDrop API for real-time image generation
- Structure codebases cleanly for frontend and backend separation
- Deploy apps on Vercel and Render, managing environment variables securely
- Create a smooth, responsive UI with Tailwind and Framer Motion
- Use context API for global auth and modal state management
- Plan for scalability with modular backend design

---

## 🧠 Credits & API

- ClipDrop API for AI image generation – [clipdrop.co/apis](https://clipdrop.co/apis)
- Inspired by AI SaaS projects & indie devs building in public

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Developed by

Yukti Sahu
