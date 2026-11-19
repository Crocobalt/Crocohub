# CLAUDE.md — CrocHub

## Purpose

CrocHub is my personal web hub: a single place gathering all my projects.

## Scope (minimum)

- **Home page**: short presentation of who I am + links to my projects.
- **CV**: my resume, viewable online.
- **Applications**: my projects/apps, accessible from the hub.

## Status

Project just started: organization not decided yet. Update this file as decisions are made.

## Planned stack

- **Front**: Angular (showcase for recruiters).
- **Back**: TypeScript, probably NestJS.
- **Hosting**: a single VPS serving everything at first.

## Jira

- Site: `coturgis.atlassian.net`, project **Crocohub**, key `CH` (tickets: `CH-<number>`).
- Accessed through the Atlassian MCP server (`.mcp.json`).
- Hierarchy: **Epic** → **Story** / **Tâche** → **Subtask**.
- Statuses (workflow order):
  1. **À faire**: planned for the current sprint.
  2. **En cours**: picked up and in progress (max 1 per person).
  3. **En cours de revue**: done, waiting for code review.
  4. **A push sur dev**: reviewed, ready to merge into `develop`.
  5. **tests dev**: being verified on the test server and/or with the client.
  6. **A push sur main**: everything works, ready to merge into `main`.
  7. **Terminé**: merged into `main`, ticket closed.
- Claude may move tickets (with my validation) up to **A push sur dev** at most. Beyond that state, I handle it.
- Commits follow the global format with the `CH` key: `CH-404 feat: add login page`.
- Branches are named after the ticket: `CH-12-short-description`.
  - Epic branches are created from `develop`.
  - Ticket branches are created from their epic's branch (e.g. `CH-7-angular-setup` from `CH-6-home-page-mvp`).
- Global Jira rules apply: read/list freely, create/modify only after my validation.

## Notes

- Global rules (workflow, code style, git) live in `~/.claude/CLAUDE.md`.
- Human-readable project documentation lives in [`docs/`](docs/) (e.g. [`docs/jira.docs.md`](docs/jira.docs.md)).
- This is a showcase site for job hunting: design and polish matter, be proactive with visual suggestions.
