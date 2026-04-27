# Mr WashWala Engineering Instructions

These instructions apply to all AI-assisted changes in this repository.

## 1) File Size And Modularity

- Target max size for any React file (`.jsx` or `.tsx`) is 400 lines.
- Hard limit is 500 lines. Do not exceed this limit.
- If a file approaches 350 to 400 lines, proactively split it.
- Split by responsibility into:
  - presentational components
  - container or page components
  - hooks
  - services (API/data)
  - utilities
  - constants and types

## 2) SOLID And Clean Code

- Single Responsibility: each component, hook, and utility should do one clear job.
- Open/Closed: extend behavior through composition and props, not deep edits in large files.
- Liskov Substitution: keep component and function contracts predictable.
- Interface Segregation: avoid large prop objects with unrelated data.
- Dependency Inversion: depend on abstractions (service functions/interfaces), not direct implementation details.

## 3) Readability Standards

- Use clear names for files, components, variables, and functions.
- Keep functions short and focused.
- Avoid deeply nested JSX and long inline logic.
- Move business logic out of JSX into hooks or service modules.
- Keep comments concise and only where logic is non-obvious.

## 4) Component Design Rules

- Build small reusable UI components.
- Keep pages focused on orchestration and layout.
- Prefer composition over prop drilling. Use context only when truly shared.
- Keep side effects in dedicated hooks.
- Keep styling consistent with existing design tokens and utility classes.

## 5) Folder Structure (Future-Proof)

Use feature-first organization for scale:

- `src/features/<feature>/components`
- `src/features/<feature>/hooks`
- `src/features/<feature>/services`
- `src/features/<feature>/types`
- `src/features/<feature>/utils`
- `src/shared/components`
- `src/shared/hooks`
- `src/shared/services`
- `src/shared/utils`
- `src/pages`

When adding new code, prefer this direction even if older code is flatter.

## 6) Backend-Friendly Full-Stack Readiness

- Route all external calls through service modules (no scattered fetch calls in UI).
- Keep request and response mapping in one place.
- Isolate API endpoints and configuration in dedicated files.
- Use predictable DTO shapes and normalize data for UI.
- Add loading, error, and empty states for all async data.
- Keep auth/session logic separate from UI components.

## 7) Testing And Safety

- Add or update tests for business logic and critical UI behavior when practical.
- Avoid breaking public props and routes without migration notes.
- Preserve accessibility basics: semantic elements, labels, and keyboard reachability.

## 8) Change Checklist For AI

Before finishing any change, verify:

- no React file exceeds 500 lines
- responsibilities are split across modules
- business logic is not buried in JSX
- async flows have loading/error handling
- naming and structure remain readable and maintainable
