# ADHD-Friendly Weekly Roadmap

> Use with a GitHub Project board: Move each card/issue as you progress through the week. Each week has its own issue.

## Columns: 
- To Do
- In Progress
- Done

---

## Week 1: Project Setup & Foundations
- [ ] Finalize project structure (monorepo or separate repos for API and clients)
- [ ] Set up version control (GitHub)
- [ ] Initialize Go API project with NATS and SQLite
- [ ] Scaffold Flutter apps for seller and supplier dashboards (web, mobile, desktop targets)
- [ ] Set up shared location for protobuf definitions

## Week 2: Core Communication Layer
- [ ] Define initial protobuf schemas for all major entities (users, products, inventory, payments)
- [ ] Implement basic gRPC communication (Go API <-> Flutter clients)
- [ ] Set up basic authentication framework (JWT or similar) in Go API

## Week 3: Authentication & User Management
- [ ] Implement sign up, login, and user roles (seller/supplier/admin) in API and Flutter clients
- [ ] Persist user sessions in Flutter local storage
- [ ] Start UI/UX for login/signup flows

## Week 4: Product & Inventory Management
- [ ] Implement product management endpoints in Go API
- [ ] Flutter: Build product/inventory listing, creation, and editing UIs for both sellers and suppliers
- [ ] Sync local SQL storage with server data

## Week 5: Customer & POS Module
- [ ] API: Customer management and POS endpoints
- [ ] Flutter: Seller dashboard UI for customer and sales management
- [ ] Implement offline-first strategies for POS

## Week 6: Supplier Dashboard & Supply Chain Connections
- [ ] Implement supplier-specific features in Go API (product offers, supply chain links)
- [ ] Flutter: Supplier dashboard for product offering and comparison
- [ ] Enable network features for connecting sellers and suppliers

## Week 7: Payment Management (Phase 1)
- [ ] API: Core endpoints for payment management
- [ ] Flutter: Payment UI components
- [ ] Investigate and design integration points for third-party payment APIs

## Week 8: Accounting Module
- [ ] API: Accounting and transaction endpoints
- [ ] Flutter: Basic accounting screens for sellers and suppliers

## Week 9: Payment Integration & Advanced Features
- [ ] Integrate with selected payment APIs (Stripe, PayPal, etc.)
- [ ] Test end-to-end payment flows
- [ ] Add features for comparing products across the supply chain

## Week 10: Testing, Polish, and MVP Release Prep
- [ ] End-to-end testing (manual and automated)
- [ ] Bug fixing and UI refinement
- [ ] Prepare deployment scripts for Go API and Flutter clients
- [ ] Write user and developer documentation
- [ ] MVP release and feedback collection

---

## Weekly Routine
- [ ] Every Sunday: Review progress, plan next week
- [ ] Move incomplete tasks forward
- [ ] (Optional) Share update with a friend or accountability buddy

---

## Daily Routine
- [ ] Each morning: Check your board, pick 1-3 tasks
- [ ] Use Pomodoro timer (25min work, 5min break)
- [ ] Move cards as tasks are completed

---

## Reminders
- [ ] Set calendar events for:
    - Daily morning check-in
    - Midweek progress review
    - End-of-week wrap-up

---

**Consistency beats perfection—just move any missed tasks forward and keep going!**
