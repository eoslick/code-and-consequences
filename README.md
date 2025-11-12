# Code and Consequences

Static website for codeandconsequences.com - A comprehensive software engineering resource hub covering security, performance, design, testing, and more.

## Project Vision

Code and Consequences is Patch Murphy's software engineering resource platform. Starting with software security fundamentals, the site will expand to cover:
- **Software Security** (live) - Testing, trust boundaries, automation
- **Performance Engineering** (planned) - Optimization, profiling, scaling
- **Design Patterns** (planned) - GoF patterns with real-world examples
- **Domain-Driven Design** (planned) - Context mapping, ubiquitous language
- **Testing Strategies** (planned) - Unit, integration, E2E approaches
- **AI-Assisted Engineering** (planned) - Prompt hygiene, verification habits

## Stack
- Plain HTML/CSS/JS (no build step required)
- Google Fonts: Space Grotesk, Inter, IBM Plex Mono
- Local `/images` directory for hero art, section banners, and iconography
- Hosted via GitHub Pages (considering migration to Cloudflare Pages)

## Structure
- `index.html` – homepage with hero, primer teaser, video spotlight, roadmap
- `software-security.html` – long-form story based on "Software Security: Why We Keep Shooting Ourselves in the Foot"
- `patch-corner.html` – persona page with embedded videos and brand voice
- `resources.html` – outline of upcoming collections (GoF, DDD, AI)
- `styles/main.css` – shared styles + color tokens
- `scripts/main.js` – nav toggle + dynamic footer year

## Local Development

```bash
# Use any static server
python -m http.server 8080
# or
npx serve
```

Then visit `http://localhost:8080`.

## Deployment

Currently deployed via GitHub Pages. Considering migration to:
- Cloudflare Pages (preferred)
- Netlify
- Vercel

## Security Notes

- **Never commit secrets** - Use `.env.example` as template
- All API keys should be stored in hosting platform environment variables
- Review `.gitignore` before committing any new files

## Contributing

This is a personal project, but feedback is welcome via:
- GitHub Issues
- Email: hello@codeandconsequences.com

---

© 2024 Code and Consequences. Built with care by Patch Murphy's team.
