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
- Statuses: À faire → En cours → Terminé.
- Commits follow the global format with the `CH` key: `CH-404 feat: add login page`.
- Feature branches from `develop`, named after the ticket: `CH-12-short-description`.
- Global Jira rules apply: read/list freely, create/modify only after my validation.

## Notes

- Global rules (workflow, code style, git) live in `~/.claude/CLAUDE.md`.
- This is a showcase site for job hunting: design and polish matter, be proactive with visual suggestions.
