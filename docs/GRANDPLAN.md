# 🗺️ TechieAgents - AI Store Grand Plan

## Vision
Build a global hub where AI Agentic Engineers showcase, contribute, and commercialize their AI agents. The AI Store serves as a marketplace, talent pool, and enterprise solutions ecosystem—powered by Shopify Hydrogen with a developer-centric UI.

## 🛠️ Tech Stack
- **Frontend**: Shopify Hydrogen (Remix-based)
- **UI Library**: shadcn/ui + Radix UI + Tailwind CSS
- **Backend**: Shopify Storefront + Admin APIs (primary data source)
- **Database**: Shopify Metafields/Metaobjects for agent metadata
- **Auth**: Shopify Customer Accounts
- **Deployment**: Self-hosted (Dokploy) or Shopify Oxygen
- **Optional Backend**: Node/Hono for extended features (Phase 2+)

## 📅 Roadmap

### Phase 1: Foundation & Setup
- [x] Clone/setup `hydrogen-skeleton-shadcn` or init Hydrogen with shadcn manually
- [ ] Connect Hydrogen app to Shopify store (see `docs/SHOPIFY_SETUP.md`)
- [x] Configure Tailwind CSS + shadcn/ui components (pre-configured in starter)
- [x] Setup project structure (routes, components, services)
- [x] Setup Git repository with conventional commits
- [ ] Create base layout with dark, dev-centric aesthetic
- [ ] Implement basic navigation (Header, Footer, Sidebar)

### Phase 2: Shopify Data Modeling
- [ ] Create product type `AI Agent` in Shopify
- [ ] Define metafields for agents:
  - `github_url` (URL)
  - `huggingface_url` (URL)
  - `demo_url` (URL)
  - `tech_stack` (JSON/List)
  - `problem_domain` (Single line text)
  - `agent_type` (Single line text)
  - `benchmarks` (JSON)
  - `engineer_profile_id` (Reference)
- [ ] Create metaobject definition for `Engineer Profile`
  - Name, bio, avatar, social links, expertise tags
- [ ] Create Collections for agent categories (Chatbots, Automation, Analytics, etc.)
- [ ] Setup customer tags/metafields for `ENGINEER` vs `ENTERPRISE` roles

### Phase 3: Public Marketplace UI
- [ ] `/` - Landing page (hero, featured agents, value proposition)
- [ ] `/agents` - Agent index/grid (filterable, searchable)
- [ ] `/agents/:handle` - Agent detail page with tabs:
  - Overview
  - Documentation
  - Changelog
  - Benchmarks
  - Links (GitHub, HuggingFace, Demo)
- [ ] `/engineers` - Engineer directory/leaderboard
- [ ] `/engineers/:id` - Engineer profile page (bio, agents, stats)
- [ ] Implement agent cards with shadcn components
- [ ] Add search and filter functionality

### Phase 4: Authentication & User Accounts
- [ ] Integrate Shopify Customer Account API
- [ ] Login/Register flows
- [ ] Role-based UI (Engineer vs Enterprise views)
- [ ] Protected routes for dashboard areas

### Phase 5: Engineer Dashboard
- [ ] `/dashboard` - Engineer home (my agents, stats, earnings)
- [ ] `/dashboard/agents` - List of my published agents
- [ ] `/dashboard/agents/new` - Submit new agent form
- [ ] `/dashboard/agents/:id/edit` - Edit agent details
- [ ] Server actions to create/update products via Admin API
- [ ] Agent submission workflow (draft → review → published)

### Phase 6: Community & Recognition
- [ ] Leaderboards (top agents by sales/views/ratings)
- [ ] Community badges system (metafields or external DB)
- [ ] Featured engineer highlights
- [ ] Agent rating/review system
- [ ] "Featured" flags for agents and engineers

### Phase 7: Enterprise Engagement (MVP)
- [ ] `/enterprise` - Enterprise landing page
- [ ] "Post a Project/Challenge" form → email/Zapier/Notion pipeline
- [ ] "Book a Solution Demo" form
- [ ] Enterprise customer dashboard (basic)

### Phase 8: Monetization & Commerce
- [ ] Enable Shopify checkout for agent purchases
- [ ] Product variants for license types (Free, One-time, Subscription)
- [ ] Selling plans for subscription licensing
- [ ] Revenue share tracking (metafields or external system)
- [ ] Developer payout system integration

### Phase 9: Learning & Content
- [ ] `/learn` - Learning tracks landing page
- [ ] Blog/tutorials integration (metaobjects or external CMS)
- [ ] Webinar/event listings
- [ ] Hackathon pages

### Phase 10: Advanced Features (Future)
- [ ] Talent Marketplace (job postings, project listings)
- [ ] White-label options for enterprises
- [ ] Advanced search with external backend
- [ ] Analytics dashboard for engineers
- [ ] API for external integrations
- [ ] Mobile-responsive optimizations

---

## 🎯 Current Focus
**Phase 1: Foundation & Setup** - Getting the Hydrogen + shadcn stack running and connected to Shopify.

---

## 📝 Session Log
| Session | Date       | Focus                          | Status      |
|---------|------------|--------------------------------|-------------|
| 001     | 2024-12-23 | Project initialization, GRANDPLAN created, hydrogen-skeleton-shadcn cloned, Git configured | Done |

---

## 📚 Key References
- [Shopify Hydrogen Docs](https://hydrogen.shopify.dev)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [hydrogen-skeleton-shadcn Starter](https://github.com/Wwebur/hydrogen-skeleton-shadcn)
- [Shopify Storefront API](https://shopify.dev/docs/api/storefront)
- [Shopify Admin API](https://shopify.dev/docs/api/admin)

---

## 🏗️ Architecture Notes

### Shopify Data Model
```
Products (AI Agents)
├── Title, Description, Images
├── Variants (license types)
├── Metafields (github_url, demo_url, tech_stack, etc.)
└── Collections (categories)

Metaobjects
├── Engineer Profile (name, bio, avatar, links)
└── Enterprise Project (future)

Customers
├── Tags (ENGINEER, ENTERPRISE)
└── Metafields (profile reference, preferences)
```

### Route Structure
```
/                       → Landing page
/agents                 → Agent marketplace
/agents/:handle         → Agent detail
/engineers              → Engineer directory
/engineers/:id          → Engineer profile
/dashboard              → Protected: Engineer dashboard
/dashboard/agents       → Protected: My agents
/dashboard/agents/new   → Protected: Submit agent
/enterprise             → Enterprise landing
/learn                  → Learning content
```
