# 🛡️ Digital Guardians — TypeScript Redesign

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, accessible TypeScript/React redesign of the Digital Guardians cybersecurity education platform for seniors.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![WCAG](https://img.shields.io/badge/WCAG-2.1%20AA-blue?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Status](https://img.shields.io/badge/Status-Active-green?style=flat-square)](https://github.com/Philipmag/Digitalguardians.github.io)

---

## Overview

This is a full TypeScript/React rebuild of the original Digital Guardians platform — designed to bring the same mission (protecting seniors from online scams) to a modern, scalable, and maintainable codebase.

The redesign was inspired by [Yeldra.com](https://yeldra.com) and focuses on a clean, professional interface that doesn't feel condescending to older users. It adds a new **Resources** tab, improves the AI chat integration, and introduces interactive quizzes and training slideshows.

---

## Demo

> **Status: Active development — not yet deployed to production.**

Run locally:

```bash
git clone https://github.com/Philipmag/Digitalguardians.github.io
cd Digitalguardians.github.io
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

- **AI Chat Assistant** — An integrated chat interface (`AIChatBox.tsx`) that answers cybersecurity questions in plain, reassuring language tailored for seniors.
- **Interactive Quizzes** — `InteractiveQuiz.tsx` lets users test their scam-recognition knowledge with immediate, encouraging feedback.
- **Training Slideshows** — Step-by-step visual guides (`TrainingSlideshow.tsx`) walk users through common digital safety scenarios.
- **Accessible by Default** — Dark/light theme toggle, large touch targets, full keyboard navigation, and ARIA labels throughout.
- **Resources Tab** — A curated library of trusted cybersecurity resources, government advisories, and scam reporting links.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript, Tailwind CSS |
| Backend | Node.js, tRPC |
| Database | PostgreSQL (via Drizzle ORM) |
| Auth | OAuth (Manus Auth) |
| Build | Vite |
| Testing | Vitest |

---

## Getting Started

```bash
git clone https://github.com/Philipmag/Digitalguardians.github.io
cd Digitalguardians.github.io
pnpm install
cp .env.example .env   # fill in required environment variables
pnpm dev               # starts the dev server at localhost:5173
```

Run tests:
```bash
pnpm test
```

---

## How It Works

1. **React Router** (`wouter`) handles client-side navigation across Home, Resources, Guides (Email Basics, Passwords, Spotting Scams, Safe Browsing), About, and Contact pages.
2. **tRPC** provides end-to-end type-safe API calls between the React frontend and the Node.js backend — no REST endpoint mismatches.
3. **Drizzle ORM** manages the PostgreSQL schema with type-safe queries and migration support.
4. **AI Chat** routes user messages through the backend LLM integration, which uses a system prompt tuned for senior-friendly, jargon-free responses.

---

## What I Learned

- **tRPC eliminates an entire class of bugs** — having the same TypeScript types on both client and server means API contract mismatches are caught at compile time, not in production.
- **Designing for seniors means designing for everyone** — the accessibility improvements (larger targets, clearer error messages, reduced motion) made the experience better for all users, not just the target audience.
- **Component-driven development scales well** — splitting the UI into focused components (`InteractiveQuiz`, `TrainingSlideshow`, `AIChatBox`) made it easy to iterate on each feature independently.

---

## Roadmap

- [ ] Deploy to Vercel or Railway and connect to a production PostgreSQL database.
- [ ] Add user authentication so seniors can track their quiz progress and tutorial completion.
- [ ] Integrate real-time scam alerts from government cybersecurity feeds (CISA, RCMP).
