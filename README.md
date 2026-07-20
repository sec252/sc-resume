# sam.nullexport.com

Personal resume/portfolio site for Samuel Chance, built with [Astro](https://astro.build) and deployed to GitHub Pages.

**Live site:** https://sam.nullexport.com

## Stack

- Astro 5 (static output, zero client JS except the nav toggle and typing effect)
- Plain scoped CSS with global custom properties (dark theme, green accent)
- GitHub Actions → GitHub Pages (custom domain via `public/CNAME`)

## Development

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built site locally
```

## Editing content

All copy lives in `src/data/` — no markup changes needed for content edits:

| File                     | Contents                                       |
| ------------------------ | ---------------------------------------------- |
| `src/data/site.ts`       | Name, titles, intro/about text, links, email   |
| `src/data/experience.ts` | Job history shown on the About page            |
| `src/data/skills.ts`     | Skill groups shown on the About page           |
| `src/data/projects.ts`   | Projects (empty = "coming soon" state renders) |

To update the resume PDF, replace `public/files/SamChance_SYENG_Q3_Resume.pdf` (keep the same filename so existing links don't break, or update the path in `src/data/site.ts`).

To change the accent color, edit `--accent` in `src/styles/global.css`.

## Deployment

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`. The repo's Pages source must be set to **GitHub Actions** (Settings → Pages). The custom domain is preserved by `public/CNAME`, which Astro copies into the build output.

## Contact

- Email: sec252@gmail.com
- LinkedIn: [Samuel Chance](https://www.linkedin.com/in/secii/)
- Blog: [NullExport](https://nullexport.com/)

## License

[MIT](LICENSE)
