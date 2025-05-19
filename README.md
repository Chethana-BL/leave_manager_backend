# 🧾 Employee Leave Manager API – Express.js

A lightweight backend API built with [Express.js](https://expressjs.com/) for the **Employee Leave Manager** application. It serves static employee and leave data from local JSON files — ideal for frontend integration, testing, and local development.

---

## ✨ Features

- ✅ **`GET /`** – Health check: confirms the server is running  
- 👥 **`GET /members`** – Returns the list of all team members  
- 📅 **`GET /absences`** – Returns all recorded absences  

---

## 🛠 Tech Stack

- 🚀 **Express.js** – Minimalist Node.js backend framework  
- 🌐 **CORS Enabled** – Enables frontend-backend communication  
- 🗂 **Static JSON Data** – Local file-based data for simplicity  
- ☁️ **Hosted on Render** – Easily deployable cloud hosting solution

---

## 📁 Project Structure

```bash
.
├── data/
│   ├── absences.json         # 📅 Mock absence records
│   └── members.json          # 👥 Mock employee/member records
├── index.js                  # 🧠 Main Express server logic
├── package.json              # 📦 Project metadata & scripts
├── package-lock.json         # 🔐 Dependency lock file
└── README.md                 # 📘 Project overview (this file)

---

## 💡 Potential Improvements

- Add query parameters to `/absences` and `/members` endpoints:
  - Support pagination via `page` and `limit`
  - Filter results by `type`, `status`, date range, or `userId`
- Implement caching or in-memory filtering for faster response
- Replace static JSON with a database (e.g., SQLite, MongoDB)
- Add error handling and validation for API routes
- Include API documentation (Swagger/OpenAPI)
