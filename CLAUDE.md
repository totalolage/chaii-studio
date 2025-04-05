# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project structure
- Issues and branches managed by Linear
- Monorepo using Turborepo with apps/ and packages/ structure
- Deployed to Vercel

## Startup instructions
1. Get the Linear issue that is currently being worked on based on the branch name.
2. Identify the project (app/ or package/) relevant to the issue. This is usually indicated by the issue title, however the poject may be on the whole repository.
3. Read the instructions+context in the `CLAUDE.md` (and `CLAUDE.local.md`) in the directory of the project.
4. Confirm to the user what the current task is, a quick summary of what needs to be achieved, a confirmation that most changes will be made against the poject directory.

## Code Style
- TypeScript with strict type checking
- Monorepo using Turborepo with apps/ and packages/ structure
- Use PascalCase for components, camelCase for functions/variables, and kebab-case for filenames
- Follow shadcn/ui component patterns
- Use the `cn()` utility for merging Tailwind classes
- Prefer server components unless client interactivity is required
- Use Tailwind CSS for styling (no CSS modules)
