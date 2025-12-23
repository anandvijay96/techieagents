# AI Agent Development Protocol (AADP)

A structured, disciplined workflow for high-velocity software development using AI assistants. This protocol ensures continuity, code quality, and project visibility across multiple sessions.

## 1. Core Philosophy
*   **State Persistence**: The AI has no long-term memory between sessions. Documentation is the memory.
*   **Structure over Speed**: A well-defined roadmap (`GRANDPLAN.md`) prevents scope creep and confusion.
*   **Granular Progress**: Small, verifiable steps with frequent git commits.
*   **Clean Architecture**: Enforce modularity, DRY principles, and modern standards from line one.

---

## 2. Project Initialization

### 2.1 The Master Plan (`GRANDPLAN.md`)
Every project must start with a `docs/GRANDPLAN.md`. This is the source of truth for project status.

**Structure:**
*   **High-Level Vision**: 1-2 sentences on what we are building.
*   **Tech Stack**: Definitive list of tools (e.g., React Native, Expo, Supabase).
*   **Phased Roadmap**: Break the project into Phases (1, 2, 3...).
*   **Checklist**: Detailed tasks within phases.
    *   `[ ]` Pending
    *   `[x]` Completed
    *   `[-]` Skipped/Deprecated
*   **Session Log**: A table tracking session numbers, dates, and key outcomes.

### 2.2 Documentation Folder
Create a `docs/` directory at the root:
*   `docs/GRANDPLAN.md`: The roadmap.
*   `docs/handoffs/`: Directory for session summaries.
*   `docs/architecture/`: (Optional) Diagrams or technical specs.
*   `AGENTS.md`: (Root level) Specific rules for the AI agent (code style, behaviors).

---

## 3. The Development Cycle (Session Workflow)

### 3.1 Start of Session
1.  **Ingest Context**: Read the latest `SESSION_XXX_HANDOFF.md` and `GRANDPLAN.md`.
2.  **Verify State**: Check the current git branch and latest commit.
3.  **Update Plan**: Mark items as "In Progress" in your internal todo list.

### 3.2 Development Execution
*   **TDD First**: Where possible, write the test (or define the requirement) before the code.
*   **Modular & DRY**:
    *   Never duplicate logic. Extract utilities.
    *   Keep components small and focused (Single Responsibility Principle).
    *   Use strong typing (TypeScript) strictly.
*   **Filesystem Discipline**:
    *   Group related files (colocation).
    *   Use clear, descriptive naming conventions.

### 3.3 Version Control (Git)
*   **Frequent Commits**: Commit after every meaningful unit of work (e.g., "Add User service", "Fix login bug").
*   **Descriptive Messages**: Use conventional commits (e.g., `feat:`, `fix:`, `docs:`, `refactor:`).
*   **Safety**: Never commit broken code. Ensure the build passes before committing.

### 3.4 End of Session (The Handoff)
**CRITICAL**: This step ensures the "brain" of the project survives to the next session.

Create a new file: `docs/handoffs/SESSION_XXX_HANDOFF.md`.

**Content Requirements:**
1.  **Session Summary**: Brief overview of what was achieved.
2.  **Completed Tasks**: Bullet points of finished features/fixes.
3.  **Technical Decisions**: Why a certain library was chosen, or a schema changed.
4.  **Known Issues/TODOs**: What is broken or incomplete?
5.  **Prompt for Next Session**: A pre-written prompt block that the user can copy-paste to start the next session immediately.
    *   *Must include*: Current version, Context summary, Next immediate priorities.

---

## 4. Coding Standards & Best Practices

### 4.1 Architecture
*   **Separation of Concerns**: UI components should not contain heavy business logic. Use Services or Hooks.
*   **State Management**: Use appropriate stores (Zustand, Redux, Context) to avoid prop drilling.
*   **API Layer**: Abstract all external calls (API, Firebase, Supabase) into dedicated service files.

### 4.2 Quality Assurance
*   **Linting/Formatting**: Enforce ESLint/Prettier rules automatically.
*   **Testing**: Unit tests for logic-heavy services; Integration tests for critical user flows.
*   **Error Handling**: Fail gracefully. User-friendly error messages, not white screens of death.

---

## 5. Templates

### 5.1 GRANDPLAN.md Template
```markdown
# 🗺️ Project Grand Plan

## Vision
[Brief description of the project]

## 🛠️ Tech Stack
- Frontend: [e.g. React Native]
- Backend: [e.g. Node.js]
- Database: [e.g. PostgreSQL]

## 📅 Roadmap

### Phase 1: Foundation
- [x] Project Setup
- [ ] Authentication
- [ ] Database Schema

### Phase 2: Core Features
- [ ] Feature A
- [ ] Feature B

## 📝 Session Log
| Session | Date | Focus | Status |
|---------|------|-------|--------|
| 001     | ...  | Setup | Done   |
```

### 5.2 Handoff Document Template
```markdown
# Session [XXX] Handoff

## 📝 Session Summary
[Brief summary]

## ✅ Completed Tasks
- Task 1
- Task 2

## 🚧 Work in Progress / Known Issues
- Issue 1

## ⏭️ Next Steps
1. Priority Task 1
2. Priority Task 2

---
## 🤖 Prompt for Next Session
(Copy and paste this into the next chat)

I am continuing development on [Project Name].
Previous Session: [XXX]
Current Status: Phase [X] - [XX]% Complete.

Priorities for this session:
1. [Task 1]
2. [Task 2]

Please review `docs/GRANDPLAN.md` and `docs/handoffs/SESSION_[XXX]_HANDOFF.md` before starting.
```
