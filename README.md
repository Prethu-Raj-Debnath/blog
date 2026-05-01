# DevBlog ✍️

A modern, full-stack blog platform built with Next.js, Drizzle ORM, and PostgreSQL. Features secure authentication, owner-only edit/delete controls, a rich post creation flow, and a clean responsive UI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-blog--xi--coral--80.vercel.app-brightgreen?style=flat&logo=vercel)](https://blog-xi-coral-80.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo & Screenshots](#-demo--screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [API / Server Actions](#-api--server-actions)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## ✨ Features

### 👥 User Features

- **Authentication**: Secure signup and login powered by Better Auth
- **Browse Blogs**: View all published blog posts on the home feed
- **Read Posts**: Full-detail view for each blog post
- **Create Blog**: Write and publish new posts via a dedicated form
- **Owner Controls**: Edit or delete your own posts — buttons only visible to the post author
- **Logout**: Secure session termination

### 🎨 Additional Highlights

- Fully responsive design (mobile-first)
- Next.js App Router with server components and server actions
- Type-safe database queries with Drizzle ORM
- Global state management with Zustand
- Shadcn/UI component library for a polished look

---

## 🎬 Demo & Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Authentication

| Login | Signup |
|-------|--------|
| ![Login](screenshots/login.png) | ![Signup](screenshots/signup.png) |

### Blog Feed

![All Blogs](screenshots/allblogs.png)

### Create Blog

![Create Blog](screenshots/createblog.png)

### Read & Edit (Owner View)

![Read and Edit](screenshots/read&edit(owner).png)

### Logout

![Logout](screenshots/logout.png)

---

## 🛠 Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **State Management**: Zustand

### Backend

- **Runtime**: Node.js
- **Framework**: Next.js API layer (Server Actions)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth
- **Migrations**: Drizzle Kit

### DevOps & Tools

- **Version Control**: Git & GitHub
- **Package Manager**: pnpm
- **Linting**: ESLint

---

## 📂 Project Structure

```
blog/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # Auth route group
│   │   ├── login/              # Login page
│   │   └── signup/             # Signup page
│   ├── blog/                   # Blog route group
│   │   ├── [id]/               # Dynamic blog detail page
│   │   └── create/             # Create new blog page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home / feed page
│   └── globals.css             # Global styles
│
├── actions/                    # Next.js Server Actions
│   ├── auth.actions.ts         # Login, signup, logout
│   └── blog.actions.ts         # Create, update, delete blog
│
├── components/                 # Reusable UI components
│   ├── Navbar.tsx
│   ├── BlogCard.tsx
│   ├── BlogForm.tsx
│   └── ui/                     # Shadcn/UI primitives
│
├── drizzle/                    # Drizzle ORM migrations & schema
│   ├── schema.ts
│   └── migrations/
│
├── lib/                        # Utility & config modules
│   ├── db.ts                   # Drizzle client
│   └── auth.ts                 # Better Auth config
│
├── store/                      # Zustand global state
│   └── useUserStore.ts
│
├── src/                        # Shared types / helpers
│
├── public/                     # Static assets
│
├── auth-schema.ts              # Better Auth DB schema
├── drizzle.config.ts           # Drizzle Kit config
├── middleware.ts               # Route protection middleware
├── next.config.ts              # Next.js config
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 20.x
- **pnpm** >= 10.x (or npm/yarn)
- **PostgreSQL** (local or hosted, e.g. Neon / Supabase)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Prethu-Raj-Debnath/blog.git
cd blog
```

2. **Install dependencies**

```bash
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://username:password@host:5432/blog_db

# Better Auth
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Security Note**: Never commit your `.env` file. It is already listed in `.gitignore`.

### Running Locally

1. **Push the database schema**

```bash
pnpm drizzle-kit push
```

2. **Start the development server**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API / Server Actions

This project uses **Next.js Server Actions** instead of a traditional REST API. All data mutations happen server-side through typed action functions.

### Auth Actions (`actions/auth.actions.ts`)

| Action | Description |
|--------|-------------|
| `signUp(data)` | Register a new user |
| `signIn(data)` | Log in an existing user |
| `signOut()` | Terminate the current session |

### Blog Actions (`actions/blog.actions.ts`)

| Action | Description |
|--------|-------------|
| `createBlog(data)` | Create a new blog post |
| `updateBlog(id, data)` | Update an existing post (owner only) |
| `deleteBlog(id)` | Delete a post (owner only) |
| `getAllBlogs()` | Fetch all published posts |
| `getBlogById(id)` | Fetch a single post by ID |

### Route Protection (`middleware.ts`)

Protected routes (e.g. `/blog/create`) redirect unauthenticated users to `/login` via Next.js middleware.

---

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**
   - Import the GitHub repository on [vercel.com](https://vercel.com)
   - Vercel auto-detects Next.js — no build command changes needed

3. **Add Environment Variables** in the Vercel dashboard (same as `.env` file)

4. **Run DB migration** once deployed by triggering `pnpm drizzle-kit push` or using a migration script

5. **Deploy** 🎉

### 🌐 Live Demo

The app is deployed and live at: **[https://blog-xi-coral-80.vercel.app](https://blog-xi-coral-80.vercel.app)**

---

## 🔮 Future Enhancements

- **Rich Text Editor**: Markdown or WYSIWYG editor for posts
- **Tags & Categories**: Filter posts by topic
- **Comments**: Threaded comments on blog posts
- **Likes / Reactions**: Engagement features
- **User Profiles**: Public author pages with post history
- **Search**: Full-text search across posts
- **Image Uploads**: Cover images per post via Cloudinary
- **Dark Mode**: Theme toggle
- **Pagination / Infinite Scroll**: For large post feeds

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Prethu Raj Debnath**

- GitHub: [@Prethu-Raj-Debnath](https://github.com/Prethu-Raj-Debnath)
- Project Link: https://github.com/Prethu-Raj-Debnath/blog
- Live Demo: https://blog-xi-coral-80.vercel.app

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Better Auth](https://www.better-auth.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**If you found this project helpful, please consider giving it a ⭐!**

Made with ❤️ by Prethu Raj Debnath
