# AFrameHub — Galerie și prezentare modele A-Frame

AFrameHub este o aplicație de prezentare pentru modele A-Frame, construită cu un backend minimalist în Express și un set de pagini statice pentru afișarea imaginilor și informațiilor asociate fiecărei construcții.

## Funcționalități principale

- Galerie de imagini cu modele A-Frame
- Pagină principală cu prezentare
- Bază de date mock (JSON) pentru titlu și descriere
- Structură pregătită pentru pagini detaliu sau sistem de recenzii
- Server simplu Express pentru routing, randare EJS și livrare fișiere statice

---

## Arhitectură și decizii tehnice

- Server backend construit cu Express (Node.js)
- Render HTML cu EJS pentru flexibilitate și extensibilitate
- Structură de directoare clar separată: `views/`, `public/`, `gallery/`, `data/`
- Resurse statice servite din `public/` (CSS, imagini)
- Date demo în format JSON pentru prototipare rapidă
- Proiectul poate fi extins ușor cu:
  - pagini detaliu pentru fiecare model
  - CRUD pentru recenzii
  - upload de imagini
  - integrare cu o bază de date reală

---

## Journal tehnic (rezumat)

- Am păstrat backend-ul cât mai simplu pentru încărcare rapidă și claritate
- EJS oferă flexibilitate pentru a genera pagini dinamice dacă proiectul este extins ulterior
- Structura actuală este potrivită pentru un prototip de prezentare sau un microsite tehnic
- Modelul de date în JSON permite testare imediată fără configurare suplimentară
- Arhitectura este pregătită pentru a evolua într-un site cu caracteristici avansate (recenzii, conturi, galerie extinsă)

---

## Detalii suplimentare

- Stack: Node.js, Express, EJS, Bootstrap, CSS custom
- Proiect optim pentru prezentare vizuală sau demonstrator rapid
- Poate fi hostat ușor pe orice serviciu care suportă Node.js
