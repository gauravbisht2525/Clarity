# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Product Overview

**Clarity** is a web-based Document Decision Assistant that helps users understand complex documents (contracts, agreements, policies) and make informed decisions.

Users upload a document (PDF or text), and the system automatically generates structured insights:
- **Summary** — simple explanation of the document
- **Key Points** — important clauses to know
- **Risks / Red Flags** — potential issues to watch for
- **What You Should Do** — actionable guidance

Clarity is not a chatbot. It is a system that helps users understand and make decisions on complex documents instantly — no prompting required.

## Core Problem

Most people do not fully understand documents before signing, feel confused by complex terms, and don't know what to look for. Existing AI tools are generic and require prompting. Clarity solves this by automatically analyzing documents and presenting structured, decision-oriented insights.

## Target Users

General users (no domain expertise assumed) dealing with:
- Contracts and agreements
- Policies
- Legal or semi-legal documents

## Core Features (MVP)

1. **Document Upload** — Upload PDF files or paste plain text
2. **AI Document Analysis** — Auto-generates Summary, Key Points, Risks, and Recommended Actions
3. **Contextual Q&A** — Follow-up questions answered based on uploaded document context
4. **Session-Based Usage** — No login required; limited free usage (2–3 documents)

## User Flow

1. User lands on intro screen
2. User proceeds to upload screen
3. User uploads document or pastes text
4. System processes document
5. System displays structured insights
6. User optionally asks follow-up questions
7. System responds contextually

## Tech Stack

> These are the ONLY packages to use. Do NOT install anything not listed here without asking first.

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 16+ (App Router) | NOT Pages Router |
| Language | TypeScript | Strict mode enabled |
| Styling | Tailwind CSS v4 | Use `@theme` in CSS — no `tailwind.config.ts` |
| AI | `@anthropic-ai/sdk` | Document analysis and contextual Q&A |
| PDF Processing | `pdf-parse` | Extract raw text from PDFs |
| Icons | `lucide-react` | Outlined, lightweight |
| Deployment | Vercel | Planned |
| Package Manager | npm | — |

### Rules — DO NOT BREAK

- **No component libraries** — no shadcn, no Chakra, no Material UI, no Radix. Use Tailwind only with custom styles defined in this file.
- **No separate backend** — Next.js API routes handle all server logic.
- **No ORM** — no Prisma, no Drizzle. We have no database yet.
- **No unapproved packages** — ask before adding anything not in the list above.

---

## Future Stack (Post-MVP)

> NOT IN MVP — do not install or implement any of these yet.

| Tool | Purpose |
|---|---|
| Supabase (PostgreSQL) | User accounts, document history, saved analyses |
| Clerk or NextAuth.js | Real user login/signup |
| Stripe | Subscriptions beyond free tier |
| Vercel Blob or AWS S3 | Storing uploaded documents |
| PostHog | Analytics — tracking success metrics |
| Upstash Redis | Rate limiting for API routes |
| Sentry | Production error monitoring |
| Resend | Email — signup confirmation, alerts |

## System Architecture

```
Frontend (Next.js App Router)
    └── File upload, UI rendering, result display

API Routes (Next.js — no separate backend)
    └── Document processing, session limits, AI orchestration

AI Layer (@anthropic-ai/sdk)
    └── Text analysis, structured output, Q&A context
```

## AI Processing Flow

1. Extract text from document (PDF parsing or raw text)
2. Clean and chunk text
3. Send to AI model with structured prompt
4. AI returns: Summary, Key Points, Risks, Actions
5. Store context in session for follow-up Q&A

## MVP Constraints

- No authentication required
- No document history or persistent storage
- No multi-document comparison
- Single-document analysis only

## Success Metrics

- Users successfully upload a document
- Users view generated insights
- Users ask follow-up questions
- Users complete the decision flow

## Design System / Style Guide

### Colors

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0F0F0F` | Page background |
| `--color-surface` | `#1A1A1A` | Cards, upload area |
| `--color-border` | `#2E2E2E` | Dashed borders, dividers |
| `--color-text-primary` | `#FFFFFF` | Headings, primary text |
| `--color-text-secondary` | `#8A8A8A` | Subtext, helper text, labels |
| `--color-text-muted` | `#555555` | Italicized notes (e.g. "never stored") |
| `--color-accent` | `#E8613A` | Logo, CTAs, links, highlights |
| `--color-accent-hover` | `#D04E2A` | Hover state for accent elements |

### Typography

- **Font Family**: `Helvetica Neue, Helvetica, Arial, sans-serif`
- **Rendering**: Clean, no decorative fonts — system-level sans-serif feel

| Role | Size | Weight | Color |
|---|---|---|---|
| Hero Heading | `56px` | `400` (Regular) | `--color-text-primary` |
| Subheading / Body | `16px` | `400` | `--color-text-secondary` |
| Upload Label | `15px` | `400` | `--color-text-secondary` |
| CTA Link (browse) | `15px` | `400` | `--color-accent` |
| Small / Note | `13px` | `400` italic | `--color-text-muted` |
| Logo | `16px` | `500` | `--color-accent` |

### Border Radius

| Element | Radius |
|---|---|
| Upload card | `16px` |
| Buttons | `8px` |
| Input fields | `8px` |
| Tags / Badges | `4px` |

### Spacing Scale

Uses an `8px` base grid:

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `8px` | Tight inner padding |
| `--space-2` | `16px` | Component padding |
| `--space-3` | `24px` | Section gaps |
| `--space-4` | `32px` | Card padding |
| `--space-6` | `48px` | Large section spacing |
| `--space-8` | `64px` | Hero vertical padding |

### Borders

- Upload card: `1.5px dashed #2E2E2E`
- Divider line: `1px solid #2E2E2E`

### Shadows

- Minimal — dark theme avoids heavy box shadows
- Subtle glow on accent elements if needed: `0 0 12px rgba(232, 97, 58, 0.15)`

### Icons

- Style: Outlined, lightweight stroke
- Size: `24px` default, `32px` for feature icons
- Color: `--color-text-secondary`

### Design Principles

- Dark-first UI — all components designed for dark background
- Accent color used sparingly — only for interactive/CTA elements
- No decorative elements — clean, minimal, functional
- Trust-focused — privacy messages, no clutter

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```
