# Jira — CrocHub

How CrocHub work is tracked in Jira.

## Project

- Site: `coturgis.atlassian.net`
- Project: **Crocohub**, key `CH`
- Tickets are named `CH-<number>` (e.g. `CH-12`).

## Ticket hierarchy

| Level | Type | Use |
|---|---|---|
| 1 | Epic | A large goal grouping related work (e.g. "CV page"). |
| 0 | Story / Tâche | A unit of work: a user-facing feature (Story) or a technical task (Tâche). |
| -1 | Subtask | A small piece of a Story or Tâche. |

## Status workflow

Tickets move through these statuses, in order:

1. **À faire**: planned for the current sprint.
2. **En cours**: picked up and in progress. One ticket per person at a time.
3. **En cours de revue**: work done, waiting for code review.
4. **A push sur dev**: reviewed, ready to be merged into `develop`.
5. **tests-dev**: being verified on the test server and/or with the client.
6. **A push sur main**: everything works, ready to be merged into `main`.

## Git conventions

- One branch per ticket, named after the ticket: `CH-12-short-description`.
  - Epic branches are created from `develop`.
  - Ticket branches are created from their epic's branch (e.g. `CH-7-angular-setup` from `CH-6-home-page-mvp`).
- Commit format: `CH-<number> <type>: <message>`, always in English.
  - Allowed types: `feat`, `fix`, `chore`, `docs`, `refactor`.
  - Examples: `CH-404 feat: add login page`, `CH-404 fix: update email regex`.

## AI assistant (Claude Code) rules

- Can read and list tickets freely.
- Creates or modifies tickets only after the owner's validation.
- Moves tickets up to **A push sur dev** at most. Later statuses are handled by a human.
