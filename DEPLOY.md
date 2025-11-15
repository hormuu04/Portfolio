# คู่มือการ Deploy โปรเจกต์ Phulaport

## 📋 สารบัญ
1. [เตรียมโปรเจกต์สำหรับ Deploy](#เตรียมโปรเจกต์สำหรับ-deploy)
2. [Deploy บน Vercel (แนะนำ - ง่ายที่สุด)](#deploy-บน-vercel)
3. [Deploy บน Netlify](#deploy-บน-netlify)
4. [Deploy บน GitHub Pages](#deploy-บน-github-pages)
5. [Deploy บน Cloudflare Pages](#deploy-บน-cloudflare-pages)

---

## 🚀 เตรียมโปรเจกต์สำหรับ Deploy

### 1. Build โปรเจกต์ก่อน

```bash
npm run build
```

คำสั่งนี้จะสร้างโฟลเดอร์ `dist` ที่มีไฟล์ที่พร้อม deploy แล้ว

### 2. ทดสอบ Build

```bash
npm run preview
```

เปิดเบราว์เซอร์ไปที่ `http://localhost:4173` เพื่อดูว่าเว็บไซต์ทำงานถูกต้องหรือไม่

---

## 🌐 Deploy บน Vercel (แนะนำ - ง่ายที่สุด)

### วิธีที่ 1: Deploy ผ่านเว็บไซต์ Vercel

1. **ไปที่ [vercel.com](https://vercel.com)** และสมัคร/เข้าสู่ระบบด้วย GitHub

2. **คลิก "Add New Project"**

3. **เชื่อมต่อ Repository**
   - เลือก repository ของคุณจาก GitHub
   - หรืออัปโหลดโฟลเดอร์ `dist` โดยตรง

4. **ตั้งค่า Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (หรือปล่อยว่าง)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

5. **คลิก "Deploy"**

6. **รอสักครู่** Vercel จะให้ URL ของเว็บไซต์คุณ (เช่น `phulaport.vercel.app`)

### วิธีที่ 2: Deploy ผ่าน Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy แบบ production
vercel --prod
```

### ⚙️ ตั้งค่าเพิ่มเติมสำหรับ Vercel

สร้างไฟล์ `vercel.json` (ถ้าต้องการ):

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 🎯 Deploy บน Netlify

### วิธีที่ 1: Deploy ผ่านเว็บไซต์ Netlify

1. **ไปที่ [netlify.com](https://www.netlify.com)** และสมัคร/เข้าสู่ระบบ

2. **คลิก "Add new site" → "Import an existing project"**

3. **เชื่อมต่อ Repository**
   - เลือก GitHub/GitLab/Bitbucket
   - เลือก repository ของคุณ

4. **ตั้งค่า Build**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Base directory:** `./` (หรือปล่อยว่าง)

5. **คลิก "Deploy site"**

6. **รอสักครู่** Netlify จะให้ URL (เช่น `phulaport.netlify.app`)

### วิธีที่ 2: Deploy ผ่าน Netlify CLI

```bash
# ติดตั้ง Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy แบบ production
netlify deploy --prod
```

### ⚙️ ตั้งค่าเพิ่มเติมสำหรับ Netlify

สร้างไฟล์ `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📦 Deploy บน GitHub Pages

### ข้อควรระวัง
โปรเจกต์ใช้ `BrowserRouter` ซึ่งต้องตั้งค่า base path สำหรับ GitHub Pages

### ขั้นตอนการ Deploy

1. **แก้ไข vite.config.js**

เพิ่ม base path:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Phulaport/', // เปลี่ยนเป็นชื่อ repository ของคุณ
})
```

2. **ติดตั้ง gh-pages**

```bash
npm install --save-dev gh-pages
```

3. **เพิ่ม script ใน package.json**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

5. **ตั้งค่า GitHub Pages**
   - ไปที่ repository บน GitHub
   - Settings → Pages
   - Source: เลือก `gh-pages` branch
   - Save

6. **เว็บไซต์จะอยู่ที่:** `https://[username].github.io/Phulaport/`

---

## ☁️ Deploy บน Cloudflare Pages

1. **ไปที่ [dash.cloudflare.com](https://dash.cloudflare.com)**

2. **เลือก "Pages" → "Create a project"**

3. **เชื่อมต่อ Repository**
   - เลือก GitHub/GitLab
   - เลือก repository

4. **ตั้งค่า Build**
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

5. **คลิก "Save and Deploy"**

6. **รอสักครู่** Cloudflare จะให้ URL (เช่น `phulaport.pages.dev`)

---

## 🔧 แก้ไขปัญหา

### ปัญหา: หน้าเว็บไม่แสดงเมื่อรีเฟรช (404 Error)

**สาเหตุ:** React Router ใช้ BrowserRouter ซึ่งต้องมี server-side routing

**วิธีแก้:**
- สำหรับ Vercel/Netlify: ใช้ไฟล์ config ที่แนะนำไว้ข้างต้น
- สำหรับ GitHub Pages: ใช้ HashRouter แทน BrowserRouter

### เปลี่ยนจาก BrowserRouter เป็น HashRouter

แก้ไข `src/App.jsx`:

```jsx
import { HashRouter as Router } from 'react-router-dom'
// แทน BrowserRouter
```

### ปัญหา: รูปภาพหรือ assets ไม่แสดง

ตรวจสอบว่า:
- ไฟล์อยู่ในโฟลเดอร์ `public` หรือไม่
- ใช้ path ที่ถูกต้อง (เช่น `/image.png` แทน `./image.png`)

---

## ✅ Checklist ก่อน Deploy

- [ ] รัน `npm run build` สำเร็จ
- [ ] ทดสอบด้วย `npm run preview`
- [ ] ตรวจสอบว่าไม่มี error ใน console
- [ ] ตรวจสอบว่า assets ทั้งหมดแสดงผลถูกต้อง
- [ ] ตั้งค่า environment variables (ถ้ามี)
- [ ] ตรวจสอบ responsive design บน mobile

---

## 📝 หมายเหตุ

- **Vercel** และ **Netlify** แนะนำสำหรับโปรเจกต์ React เพราะตั้งง่ายและรองรับ SPA routing
- **GitHub Pages** ฟรีแต่ต้องตั้งค่าเพิ่มเติมสำหรับ React Router
- **Cloudflare Pages** เร็วและมี CDN ดี

---

## 🎉 เสร็จแล้ว!

หลังจาก deploy สำเร็จ คุณจะได้ URL ที่สามารถแชร์ให้คนอื่นดูได้เลย!

