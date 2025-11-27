# AFrameHub — Lightweight A-Frame Model Showcase (Express + EJS)

AFrameHub is a lightweight presentation site for A-Frame house models.  
It combines a minimal Express backend with static pages rendered through EJS, designed for fast prototyping and clear structure.

---

## Features

- Image gallery for A-Frame houses
- Simple presentation homepage
- Mock JSON dataset for titles and descriptions
- Layout prepared for future detail pages and review system
- Express server for routing, templating and serving static assets

---

## Architecture & Technical Decisions

- Backend built with **Express (Node.js)**  
- Views rendered with **EJS**, allowing future dynamic extensions
- Clean directory separation:
  - `views/` for templates  
  - `public/` for CSS & static assets  
  - `gallery/` for images  
  - `data/` for JSON mock data
- The project structure supports scaling to:
  - detail pages per model  
  - review CRUD system  
  - image upload  
  - integration with a real database

### Project Structure

```
views/
public/
gallery/
data/
server.js
```

---

## Technical Journal (Summary)

- The backend is intentionally minimal for fast loading and easy reasoning
- EJS enables progressive enhancement into dynamic pages if needed
- JSON mock dataset allows immediate testing with zero setup
- Architecture intentionally mirrors a small real-world product:
  - presentation layer
  - assets layer
  - backend router
  - expandable data source

---

## Additional Details

- Stack: **Node.js**, **Express**, **EJS**, **Bootstrap**, custom CSS
- Suitable for visualization, prototyping, or a compact presentation microsite
- Can be hosted on any Node-compatible platform with minimal configuration

---

## Architect’s Log

- The project was intentionally kept small to highlight structure, not complexity.
- Rendering via EJS prepares the codebase for future dynamic pages without restructuring.
- The gallery and dataset are isolated to make the migration to real database storage straightforward.
- The architecture forms a simple base that can be expanded into a complete product (reviews, authentication, CMS-like editing, image uploads).