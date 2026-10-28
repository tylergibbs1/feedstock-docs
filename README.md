# Feedstock Docs

Documentation site for [Feedstock](https://github.com/tylergibbs1/feedstock), a web crawler and scraper for TypeScript powered by Bun and Playwright. Built with [Fumadocs](https://fumadocs.vercel.app/) + Next.js 16 and served at [feedstock.dev](https://feedstock.dev).

## Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
bun run build
bun run start
```

## Adding pages

1. Create a `.mdx` file in [`content/docs/`](content/docs)
2. Add the page slug to `content/docs/meta.json`
3. Use frontmatter: `title` and `description`

## License

Apache-2.0
