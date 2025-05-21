
# 🧮 Supabase + React CRUD App

A lightweight and efficient CRUD (Create, Read, Update, Delete) application built with **React** and **Supabase**—an open-source Firebase alternative.

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Supabase](https://img.shields.io/badge/Backend-Supabase-3ECF8E?logo=supabase)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)

---

## ✨ Features

- ✅ Create, Read, Update, Delete operations on user data
- 🔐 Supabase authentication & real-time data
- ⚡ Seamless integration between frontend and Supabase backend
- 🎨 Minimal and clean UI for quick interactions

---

## 🛠️ Tech Stack

- **Frontend**: React
- **Backend**: Supabase (PostgreSQL, Auth, API)
- **Languages**: JavaScript, SQL
- **API**: Supabase client library

---

## 📁 Project Structure

```
supabase-CRUD/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── supabaseClient.js
├── .env
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- A Supabase account ([https://supabase.io](https://supabase.io))

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tharunkumar-BIT/supabase-CRUD.git
   cd supabase-CRUD
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Supabase:**

   - Create a project on [Supabase](https://app.supabase.io/)
   - Get your **Supabase URL** and **anon/public API key**
   - Create a `.env` file and add:

     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_KEY=your_supabase_key
     ```

4. **Start the app:**

   ```bash
   npm run dev
   ```

---

## 🧪 Table Schema Example

In Supabase SQL editor:

```sql
create table users (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text
);
```

---

## 🤝 Contributing

Feel free to contribute by forking this repository and submitting a pull request with enhancements or bug fixes.
