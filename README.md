# Cornerstone: Person (CTS 5710) — personal course site

A private Quarto website for tracking readings, homework, and deadlines for
Cornerstone: Person, Fall 2026.

## Run it

```bash
quarto preview     # live-reloading local server
quarto render      # build the static site into _site/
```

Requires [Quarto](https://quarto.org). No R/Python needed — the site is Markdown
plus a little JavaScript for the dashboard.

## Layout

```
_quarto.yml              site config, navbar, theme
index.qmd                Dashboard (live task warnings)
schedule.qmd             Week-by-week schedule
readings.qmd             Reading list & pacing
responses.qmd            Reading Response tracker (pick 8 of 12)
rhythm.qmd               Rhythm of Life draft + outline
submissions.qmd          Index of finished work
about.qmd                Course info / syllabus summary
assets/
  tasks.js               ← SINGLE SOURCE OF TRUTH for tasks + dashboard logic
  styles.scss            Calvin branding (maroon/gold)
  dashboard-style.css    Dashboard component styles
submissions/
  _response-template.qmd Copy this to start a new response (PDF/Word ready)
readings/                (create as needed) class-distributed reading PDFs
```

## Updating your tasks

Edit **`assets/tasks.js`**. Set a task's `status` to `"done"` when finished; the
dashboard progress bar and warnings update on the next render. Urgency colors
(overdue / due-this-week) are computed live in the browser against today's date.

## Adding homework

- **In Quarto:** `cp submissions/_response-template.qmd submissions/rr03-fasting.qmd`,
  write, then `quarto render submissions/rr03-fasting.qmd --to pdf`. Link it on
  `submissions.qmd`.
- **From Word/elsewhere:** drop the final file in `submissions/` and link it.

## Publishing (public site)

This site is intended to be **public** — the home page states plainly that it's
Eric's personal coursework/homework portfolio for a seminary formation course.

⚠️ **Because it's public, anything you link is world-readable.** Reading responses
and the Rhythm of Life are personal reflections; only publish what you're
comfortable sharing. To keep a piece private, simply don't link it on
`submissions.qmd` and keep its file out of the render (a leading `_` in the
filename, or list only public pages under `project.render`).

### Setup (push to GitHub)

```bash
git add .
git commit -m "Course site"
gh repo create 26FA-Cornerstone-Person --public --source=. --push
# or add an existing remote:
# git remote add origin git@github.com:<you>/26FA-Cornerstone-Person.git
# git push -u origin main
```

### Publish the site to GitHub Pages

```bash
quarto publish gh-pages
```

The `_site/` build directory and rendered `*.html` are git-ignored by default.
