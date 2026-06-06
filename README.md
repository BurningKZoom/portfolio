# kzoom Portfolio

Strategic BI and data infrastructure portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Deployment

The project is configured for GitHub Pages using `gh-pages`.

Deploy the current build output:

```bash
npm run deploy
```

`npm run deploy` runs `npm run build` first through the `predeploy` script, then publishes `dist` to the `gh-pages` branch.

## Notes

- Public project links are rendered from component data in `src/components`.
- Local environment files are ignored. Use `.env.example` for placeholders if environment variables are ever needed.
