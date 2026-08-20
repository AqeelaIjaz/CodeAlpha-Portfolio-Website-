# Aqeela Ijaz — Portfolio Assets

This repository contains the media and supporting assets for Aqeela Ijaz's personal portfolio website — project screenshots, design work, certificates, and resume — organized by category for easy reference when building or updating the site.

> **Note:** This bundle currently contains assets only (images, PDF, and one placeholder mini-project). It does not include the main site's HTML/CSS/JS — those should live in the project root alongside this `assets/` folder.

## Folder Structure

```
assets/
├── resume/           # Resume PDF
├── certificates/      # Course & workshop certificates
├── design/            # Graphic design work (posters, cards, decks, templates)
├── newprojects2/       # Screenshots of software projects (dashboards, terminals, portfolios)
├── hospital/           # Hospital management system — screenshots
├── studentsystem/       # Student management system — screenshots
├── cn/                 # Computer networking — topology diagram
└── calculator/          # Mini calculator project (HTML/CSS)
```

## Contents Guide

### 📄 Resume
- `resume/Aqeela_Ijaz_Resume.pdf` — Latest resume

### 🏅 Certificates
- `cert-ops-workshop.jpg` — Operations workshop certificate
- `genai-certificate.jpg` — Generative AI certificate

### 🎨 Design Work
Graphic design samples including:
- **EcoGuard** — promo graphics and pitch deck cover
- **Galentine's** — card and social media campaign visuals
- Wedding card, birthday card, client flyer
- Resume/CV templates (including a custom CV design)

### 💻 Software Projects (`newprojects2/`)
Screenshots from various web app projects:
- **DecodeLabs** — to-do terminal, expense terminal, API dashboard, portfolio site
- **Marginalia** — blog dashboard, login, profile, blog post & creation screens
- **FraudTrace** — query interface
- **WarehouseCore** — query interface

### 🏥 Hospital Management System
Two interface screenshots (`shot1.jpg`, `shot2.jpg`)

### 🎓 Student Management System
Two interface screenshots (`shot1.jpg`, `shot2.jpg`)

### 🌐 Computer Networking
- `topology.jpg` — Network topology diagram

### 🧮 Calculator
A small standalone HTML/CSS project (currently placeholder/empty files — needs to be filled in or replaced with the working version).

## Usage

When building the portfolio site, reference these assets with relative paths, e.g.:

```html
<img src="assets/newprojects2/marginalia-dashboard.png" alt="Marginalia dashboard">
```

## To Do
- [ ] Add the main site files (`index.html`, CSS, JS) to the project root
- [ ] Fill in or replace the empty `calculator/index.html`
- [ ] Add alt text / captions for each project screenshot if not already present in the site code
