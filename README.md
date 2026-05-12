# MedPals Design System

A React and Tailwind CSS design-system website for MedPals brand colors, typography, components, accessibility notes, downloadable gradients, copyable hex codes, and the Manrope font family.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To publish:

1. Push the repository to GitHub on the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. The workflow will build the Vite app and deploy `dist`.
