# 🚀 คู่มือ Deploy แบบ Step-by-Step (เริ่มต้นจากศูนย์)

## 📋 ขั้นตอนทั้งหมด

1. ✅ [ตั้งค่า GitHub](#1-ตั้งค่า-github) ← **เริ่มที่นี่!**
2. ✅ [Push Code ไป GitHub](#2-push-code-ไป-github)
3. ✅ [Deploy บน Vercel](#3-deploy-บน-vercel)

---

## 1. ตั้งค่า GitHub

### 1.1 สร้าง GitHub Account

1. ไปที่ **[github.com](https://github.com)** และสมัครสมาชิก
2. ยืนยันอีเมล

### 1.2 ติดตั้ง Git

**ตรวจสอบว่ามี Git แล้วหรือยัง:**
```bash
git --version
```

**ถ้ายังไม่มี:**
- ดาวน์โหลดจาก [git-scm.com/download/win](https://git-scm.com/download/win)
- ติดตั้งและตั้งค่า:

```bash
git config --global user.name "ชื่อของคุณ"
git config --global user.email "your-email@example.com"
```

### 1.3 สร้าง Repository บน GitHub

1. Login GitHub
2. คลิก **"+"** → **"New repository"**
3. ตั้งชื่อ: `Phulaport`
4. เลือก **Public**
5. **อย่าเลือก** README, .gitignore, license
6. คลิก **"Create repository"**

📖 **ดูรายละเอียดเพิ่มเติม:** [GITHUB_SETUP.md](./GITHUB_SETUP.md)

---

## 2. Push Code ไป GitHub

### เปิด PowerShell และไปที่โฟลเดอร์โปรเจกต์

```bash
cd C:\Users\Acer\Desktop\Phulaport
```

### รันคำสั่งเหล่านี้ (Copy-Paste):

```bash
# ตรวจสอบ git status
git status

# ถ้ายังไม่มี git repository
git init

# เพิ่มไฟล์ทั้งหมด
git add .

# Commit
git commit -m "Initial commit"

# เชื่อมต่อกับ GitHub (แทนที่ YOUR_USERNAME ด้วย username ของคุณ)
git remote add origin https://github.com/YOUR_USERNAME/Phulaport.git

# Push ไป GitHub
git branch -M main
git push -u origin main
```

**หมายเหตุ:** เมื่อ push ครั้งแรก GitHub จะถาม username และ password
- **Username:** username ของคุณ
- **Password:** ใช้ **Personal Access Token** (ดูวิธีสร้างใน [GITHUB_SETUP.md](./GITHUB_SETUP.md))

### ✅ ตรวจสอบ

ไปที่ `https://github.com/YOUR_USERNAME/Phulaport` ควรเห็นไฟล์ทั้งหมดแล้ว

📖 **ดูรายละเอียดเพิ่มเติม:** [GITHUB_SETUP.md](./GITHUB_SETUP.md)

---

## 3. Deploy บน Vercel

### วิธีที่ 1: ผ่านเว็บไซต์ (แนะนำ - ง่ายที่สุด)

1. **ไปที่ [vercel.com](https://vercel.com)**
2. **Login ด้วย GitHub** (คลิก "Continue with GitHub")
3. **คลิก "Add New Project"**
4. **เลือก repository "Phulaport"**
5. **ตั้งค่า:**
   - Framework Preset: `Vite` (auto-detect)
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **คลิก "Deploy"**
7. **รอสักครู่** (1-2 นาที)
8. **เสร็จแล้ว!** ได้ URL เช่น `phulaport.vercel.app`

### วิธีที่ 2: ผ่าน CLI

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

📖 **ดูรายละเอียดเพิ่มเติม:** [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

---

## ✅ Checklist

### ก่อน Push ไป GitHub:
- [ ] มี GitHub account แล้ว
- [ ] ติดตั้ง Git แล้ว
- [ ] สร้าง repository บน GitHub แล้ว
- [ ] ตั้งค่า git config (user.name, user.email)

### ก่อน Deploy:
- [ ] Push code ไป GitHub สำเร็จ
- [ ] ไฟล์ `vercel.json` มีอยู่
- [ ] ทดสอบ build: `npm run build` ทำงานได้

---

## 🎉 เสร็จแล้ว!

หลังจาก deploy สำเร็จ:
- ✅ เว็บไซต์จะอยู่ที่: `https://phulaport.vercel.app`
- ✅ **Auto Deploy:** ทุกครั้งที่ push code ไป GitHub จะ deploy อัตโนมัติ
- ✅ **Preview Deployments:** ทุก branch จะมี preview URL

---

## 📚 ไฟล์คู่มือทั้งหมด

- 📖 **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - คู่มือ GitHub แบบละเอียด
- 📖 **[VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)** - คู่มือ Vercel แบบละเอียด
- 📖 **[DEPLOY.md](./DEPLOY.md)** - คู่มือ Deploy หลายแพลตฟอร์ม

---

## 🐛 แก้ไขปัญหา

### Git ไม่รู้จักคำสั่ง
→ ติดตั้ง Git จาก [git-scm.com](https://git-scm.com)

### Authentication failed
→ ใช้ Personal Access Token แทน password (ดูใน GITHUB_SETUP.md)

### Build ล้มเหลว
→ ทดสอบ build ในเครื่องก่อน: `npm run build`

---

**เริ่มต้นได้เลย! 🚀**

