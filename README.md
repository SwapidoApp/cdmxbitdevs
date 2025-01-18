# CDMX Bitcoin Developers

Website for hosting all of the links from meetups past and future.

## Development

You'll need [Bun](https://bun.sh) to run the site locally. Once it's installed:

```bash
# Clone the repository and go into the directory
git clone https://github.com/cdmxbitdevs/website.git
cd website

# Install dependencies
bun install

# Start the development server
bun run dev
```

The site will be available at http://localhost:3000 (or the next available port).

## Making a Post

To make a new post, create a new file in `posts/` with a name following the format
`YYYY-MM-DD-title-goes-here.md`. At the top of the file you'll want to provide the
following frontmatter:

```md
---
type: socratic # or whitepaper for a whitepaper series
title: "Name of the Post"
meetup: https://lu.ma/[event_id_here]
---
```

After that, it's just simple markdown. The site will auto-generate:

- Individual post pages
- The homepage with recent events
- The events page with all events
- An RSS feed at /feed.xml

## Site Configuration

All site configurations are contained in `src/config.ts`. This includes:

- Site title
- Description
- Navigation menu items

## Development Commands

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build the site for production

## Deployment

The site is automatically deployed via Vercel when changes are pushed to the main branch.

## License

MIT License - see LICENSE file for details.
