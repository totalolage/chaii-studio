# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project structure
- Next.js App Router with React Server Components (RSC)
- Deployed to Vercel
- Using `drizzle-kit` for database management
- Postgres database hosted on `neon`
- Authentication using `clerk`

## Code Style
- File structure based on feature directories, enforced by `eslint-plugin-boundaries` (configured in `.eslintrc.js`)

## Tools
- When changes are made to the database schema, use the `db:reset` script to regenerate the migrations and seed the database.
