# Feedstock Docs

Documentation site for [Feedstock](https://github.com/tylergibbs1/feedstock), built with [Fumadocs](https://fumadocs.vercel.app/) + Next.js 16.

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

## Adding Pages

1. Create a `.mdx` file in `content/docs/`
2. Add the page slug to `content/docs/meta.json`
3. Use frontmatter: `title` and `description`

## License

Apache-2.0
