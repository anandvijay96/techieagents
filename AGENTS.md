# TechieAgents - AI Agent Rules

## Project Context
This is the **TechieAgents AI Store** - a Shopify Hydrogen-based marketplace for AI agents. Always reference `docs/GRANDPLAN.md` for current project status and priorities.

## Session Protocol
1. **Start of Session**: Read latest handoff from `docs/handoffs/` and `docs/GRANDPLAN.md`
2. **End of Session**: Create `docs/handoffs/SESSION_XXX_HANDOFF.md` with summary, decisions, and next steps prompt
3. **Update GRANDPLAN.md**: Mark completed items with `[x]`, update Session Log table

## Tech Stack Rules
- **Framework**: Shopify Hydrogen (Remix-based) - Do NOT use Next.js or other frameworks
- **UI Components**: shadcn/ui + Radix UI - Use these exclusively for UI components
- **Styling**: Tailwind CSS only - No CSS modules, styled-components, or other CSS-in-JS
- **Data Source**: Shopify APIs (Storefront + Admin) - Leverage Shopify for products, customers, auth
- **TypeScript**: Strict mode - All code must be strongly typed

## Code Style
- Use **conventional commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`
- Follow **Remix conventions** for loaders, actions, and route structure
- Keep components **small and focused** (Single Responsibility Principle)
- **Colocation**: Keep related files together (component + styles + tests)
- **No prop drilling**: Use Remix loaders/context for data flow
- Extract reusable logic into **hooks** (`/app/hooks/`) or **services** (`/app/services/`)

## File Structure
```
/app
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   └── ...          # Feature-specific components
├── routes/          # Remix file-based routes
├── hooks/           # Custom React hooks
├── services/        # API/business logic services
├── lib/             # Utilities and helpers
└── styles/          # Global styles
/docs
├── GRANDPLAN.md     # Project roadmap (source of truth)
├── handoffs/        # Session summaries
└── architecture/    # Technical specs and diagrams
```

## Shopify-Specific Rules
- **Agents = Products**: Each AI agent is a Shopify product with metafields
- **Users = Customers**: Engineers and enterprises are Shopify customers with tags
- **Categories = Collections**: Agent categories are Shopify collections
- **Metadata = Metafields/Metaobjects**: Use Shopify's native metadata system

## UI/UX Guidelines
- **Dark, developer-centric aesthetic** - Think Vercel, Node.js, Linear, or Raycast
- Use **Lucide icons** (via shadcn)
- **Responsive design** - Mobile-first approach
- **Accessible** - Follow WCAG guidelines, use Radix primitives

## Testing & Quality
- Write tests for logic-heavy services
- Ensure build passes before committing
- Use ESLint/Prettier for consistent formatting
- Handle errors gracefully with user-friendly messages

## Git Workflow
- **Commit frequently** after each meaningful unit of work
- **Never commit broken code**
- Use **feature branches** for larger changes
- Keep commits **atomic and descriptive**

## Prohibited Actions
- Do NOT hardcode API keys or secrets
- Do NOT bypass Shopify for data that should live there
- Do NOT add heavy dependencies without justification
- Do NOT skip the handoff document at end of session
