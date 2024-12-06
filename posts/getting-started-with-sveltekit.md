---
title: Getting Started with SvelteKit
publishedAt: '2024-12-06'
excerpt: Learn how to build modern web applications with SvelteKit
tags: ['sveltekit', 'javascript', 'web-development']
---

# Getting Started with SvelteKit

When I decided to rebuild my portfolio website, I wanted a framework that would be both powerful and enjoyable to work with. After exploring various options, I chose SvelteKit, and it's been an excellent decision. Let me share why, and how you can get started with it too.

## Why SvelteKit?

SvelteKit stands out in the crowded space of web frameworks for several reasons. First, its component-writing experience is unmatched – the code you write feels natural and intuitive. Unlike other frameworks where you often have to think in terms of virtual DOMs or complex state management, Svelte lets you write components in a way that feels like enhanced HTML, CSS, and JavaScript.

For my portfolio, this meant I could focus on creating and styling components rather than wrestling with framework-specific concepts. The built-in transitions, stores, and animations made it easy to add polish without reaching for external libraries.

## Getting Started

To create a new SvelteKit project, you only need to run:

```bash
npx sv create my-project
cd my-project
pnpm install
pnpm dev
```

The project structure will look something like this:

```text
src/routes/
├── +page.svelte        # Home page (/)
├── about/
│   └── +page.svelte    # About page (/about)
└── blog/
    └── [slug]/         # Dynamic blog posts (/blog/post-1)
        └── +page.svelte
```

```svelte
<script>
	export let title = 'Hello';
</script>

<div class="card">
	<h2>{title}</h2>
	<slot />
</div>

<style>
	.card {
		padding: 1rem;
		border-radius: 0.5rem;
		background: var(--card-bg);
	}
</style>
```

The component API is straightforward, styles are scoped by default, and the template syntax is clean and readable. For my portfolio, this meant I could quickly create and iterate on components without getting bogged down in boilerplate.

## Why It Works for Portfolios

SvelteKit's approach to building websites aligns perfectly with portfolio needs. It offers:

- Excellent performance out of the box
- Static site generation capabilities
- Easy deployment to various platforms
- Simple integration with markdown for blog posts
- Built-in image optimization

Whether you're building a portfolio, a blog, or a full-featured web application, SvelteKit provides the tools you need without overwhelming you with complexity.

If you're considering a framework for your next project, give SvelteKit a try. Its elegant simplicity, combined with powerful features, makes it a joy to work with. Start with the [official tutorial](https://learn.svelte.dev), and you'll be building in no time.
