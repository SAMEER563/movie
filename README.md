
## 🚀 Project Overview

This project is a **Next.js 15** web application that integrates with **The Movie Database (TMDB) API** to fetch and display movies dynamically.  
It demonstrates **clean UI**, **API integration**, **TypeScript type safety**, and **responsive design** — all deployed on **Vercel**.

🎯 **Goal:** Showcase professional frontend architecture, API handling, and deployment skills for real-world applications.

---

## 🖼️ Preview

![Home Page Preview](https://image.tmdb.org/t/p/original/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg)

> ✨ *Cinematic design with live movie data from TMDB.*

---

## 🧩 Features

✅ Fetch **Popular**, **Top Rated**, and **Upcoming** movies dynamically  
✅ **Hero Banner** for top movie highlight  
✅ **Dynamic Movie Detail Page** — `/movie/[id]`  
✅ **Back to Home** button with smooth navigation  
✅ **Error Handling** via custom `safeFetch()` with retries  
✅ **Responsive UI** using Tailwind CSS  
✅ **Type-safe API calls** with TypeScript interfaces  
✅ **Deployed** on [Vercel](https://vercel.com)  
✅ Works across all devices 📱💻

---

## 🏗️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | [Next.js 15](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| API | [TMDB API](https://www.themoviedb.org/documentation/api) |
| Hosting | [Vercel](https://vercel.com/) |

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/movie.git
cd movie
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Environment Variables

Create a `.env.local` file in your root directory:

```bash
TMDB_API_KEY=YOUR_TMDB_API_KEY
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE=https://image.tmdb.org/t/p/original
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Then visit 👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📁 Folder Structure

```
src/
│
├── app/
│   ├── page.tsx                # Home page
│   ├── movie/
│   │   └── [id]/page.tsx       # Dynamic movie details
│
├── components/
│   ├── HeroBanner.tsx
│   ├── MovieRow.tsx
│   ├── BackButton.tsx
│
├── lib/
│   ├── api.ts                  # TMDB API + safeFetch logic
│   ├── types.ts                # TypeScript interfaces
│
├── public/
│
├── .env.local
└── next.config.js
```

---

## 🧠 API Integration (TMDB)

### Example API Request

```ts
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US
```

### Custom Fetch Utility

```ts
async function safeFetch(url: string, retries = 2): Promise<Response> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "NextJS-StreamingDashboard/1.0" },
    });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    return res;
  } catch (err) {
    if (retries > 0) return safeFetch(url, retries - 1);
    throw err;
  }
}
```

---

## 🖥️ Deployment

This project is **deployed on Vercel**.

🔗 **Live Demo:** [https://story-bit.vercel.app/](https://story-bit.vercel.app/)

Build command:

```bash
next build
```

---

## 📸 Screenshots

| Home Page                                                                    | Movie Detail                                                                   |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Home](https://image.tmdb.org/t/p/original/qskMJe62v9kPj4tD9UawIGW0WxD.jpg) | ![Detail](https://image.tmdb.org/t/p/original/hpXBJxLD2SEf8l2CspmSeiHrBKX.jpg) |

---

## 🔮 Future Enhancements

* [ ] Add **search functionality**
* [ ] Implement **user authentication (login/favorites)**
* [ ] Add **loading skeletons**
* [ ] Integrate **pagination/infinite scroll**
* [ ] Support **dark/light theme toggle**

---
