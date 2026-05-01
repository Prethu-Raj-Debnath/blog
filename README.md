# 📝 Blog Platform

A full-stack blog application built with **Next.js App Router**, **TypeScript**, **Drizzle ORM**, and **Better Auth**. Designed as an academic project with a focus on type-safe data access, session-based authentication, and a clean server-component-first architecture.

---

## 📸 Screenshots

> **Home / Feed Page**
> 
> ![Home Page](./public/screenshots/home.png)
> *(Replace with actual screenshot)*

---

> **Single Post View**
> 
> ![Post Page](./public/screenshots/post.png)
> *(Replace with actual screenshot)*

---

> **Create / Edit Post**
> 
> ![Editor](./public/screenshots/editor.png)
> *(Replace with actual screenshot)*

---

> **Login / Register Page**
> 
> ![Auth Page](./public/screenshots/auth.png)
> *(Replace with actual screenshot)*

---

## ✨ Features

- 🔐 **Session-based Authentication** — Sign up, log in, and log out with Better Auth. Sessions are managed server-side and enforced via Next.js middleware.
- 🛡️ **Protected Routes** — `middleware.ts` intercepts unauthenticated requests to write/edit pages and redirects them to login.
- 📝 **Create & Read Posts** — Authenticated users can create blog posts; all visitors can browse and read published content.
- 🗄️ **Type-Safe Database Access** — Drizzle ORM with PostgreSQL provides schema-first, fully typed queries with zero raw SQL strings.
- 🧭 **App Router Architecture** — Built on Next.js 14+ App Router using server components, server actions, and layouts — no separate API layer needed.
- 🧩 **Component Library** — UI built with [shadcn/ui](https://ui.shadcn.com/) components on top of Tailwind CSS.
- 📦 **Global State** — Zustand store for lightweight client-side state management where needed.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Database | PostgreSQL |
| ORM | Drizzle ORM |
| Auth | Better Auth |
| State | Zustand |
| Package Manager | pnpm |

---

## 📁 Project Structure

```
blog/
├── app/                   # Next.js App Router pages and layouts
│   ├── (auth)/            # Auth group — login, register pages
│   ├── (main)/            # Main group — home, post detail, create
│   └── layout.tsx         # Root layout
├── actions/               # Server actions (form mutations, data writes)
├── components/            # Reusable UI components (shadcn/ui + custom)
├── drizzle/               # Drizzle migrations and schema files
│   └── migrations/        # SQL migration history
├── lib/                   # Shared utilities — db client, auth config, helpers
├── src/                   # Additional source modules
├── store/                 # Zustand store definitions
├── public/                # Static assets
├── auth-schema.ts         # Better Auth database schema extension
├── drizzle.config.ts      # Drizzle Kit config (DB URL, dialect, output path)
├── middleware.ts           # Route protection middleware
└── next.config.ts         # Next.js configuration
```

---

## ⚙️ How It Works

### Authentication
Better Auth handles session creation and validation. The `auth-schema.ts` file extends the default schema to store user and session records in PostgreSQL via Drizzle ORM. `middleware.ts` checks for a valid session on every request to protected routes, redirecting unauthenticated users before the page even renders.

### Data Layer
Drizzle ORM provides fully typed access to the PostgreSQL database. Schemas are defined in TypeScript, and migrations are managed using the Drizzle Kit CLI (`pnpm drizzle-kit push` or `migrate`). There are no raw SQL strings anywhere in the codebase.

### Server Actions
Write operations (creating posts, updating data) are handled via Next.js server actions inside the `actions/` folder. This means no manual API routes — form submissions call server functions directly, keeping the codebase lean.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- A PostgreSQL database (local or hosted — e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com))

### 1. Clone the repository

```bash
git clone https://github.com/Prethu-Raj-Debnath/blog.git
cd blog
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

### 4. Run database migrations

```bash
pnpm drizzle-kit push
```

### 5. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm drizzle-kit push` | Push schema changes to DB |
| `pnpm drizzle-kit studio` | Open Drizzle visual DB studio |
| `pnpm lint` | Run ESLint |

---

## 🔮 Planned Improvements

- [ ] Rich text / Markdown editor for post creation
- [ ] Image upload support (Cloudinary or S3)
- [ ] Comment system on posts
- [ ] User profile pages
- [ ] Post categories and tags
- [ ] Search functionality

---

## 👤 Author

**Prethu Raj Debnath**  
[GitHub](https://github.com/Prethu-Raj-Debnath) · [LinkedIn](https://www.linkedin.com/in/prethu-raj-debnath-7a7961290) · prethuraj2002@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
