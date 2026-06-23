<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Charged Studio Website

> Read CLAUDE.md first — that is the primary source of truth for this project.

@CLAUDE.md

## Quick Reference

- **Stack:** Next.js App Router + TypeScript + Tailwind CSS
- **Colours:** `charged-yellow` #FFC100 | `charged-black` #020413 | `charged-navy` #171E3A | `charged-light` #F7F7F7
- **Fonts:** Anton (headings) | Inter Tight (body) | Caramel (brand moments only, self-hosted in /public/fonts/)
- **Hosting:** Vercel — auto-deploys on push to `main`
- **Repo:** github.com/chazzmn/charged-studio
- **Preview URL:** https://charged-studio-du74cwe1k-chazzmns-projects.vercel.app

## Non-negotiable Rules

- Never use `<img>` — always `next/image` `<Image />`
- Never hardcode colours — use Tailwind tokens from `tailwind.config.ts`
- Every page needs a `metadata` export with unique title + description
- Mobile-first — build mobile layout first, then scale up
- Run `npx tsc --noEmit` before marking any task complete
- Images are placeholders until Charlie confirms what's needed
