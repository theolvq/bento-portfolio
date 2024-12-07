export const techStack = [
	'TypeScript',
	'React',
	'Next.js',
	'Gatsby',
	'Astro',
	'SvelteKit',
	'Node.js',
	'Python'
];

export const featuredWork = [
	{
		title: 'Omorpho',
		description: 'Innovative fitness wear platform',
		stack: ['Gatsby', 'React', 'TypeScript', 'Theme-UI', 'Chord Commerce'],
		copy: 'Headless E-Commerce site built with Gatsby and Theme-UI. Contentful as a CMS. Chord Commerce handles the OMS.',
		link: 'https://www.omorpho.com'
	},
	{
		title: 'EdBetter',
		description: 'Educational technology solution',
		stack: ['Nextjs', 'React', 'TypeScript', 'Tailwindc', 'Supabase', 'Prisma'],
		copy: 'Education coaching platform built with Next\'s server components.',
		link: 'https://edbetter.vercel.app'
	},
	{
		title: 'Labora',
		description: 'Static site with a 3d experience',
		stack: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Three.js'],
		copy: 'Static site built with Astro. 3D model built with Three.js.',
		link: 'https://www.labora.com'
	},
	{
		title: 'Nice Out',
		description: 'Weather PWA application',
		stack: ['Nextjs', 'React', 'TypeScript', 'Tailwind', 'React-Query', 'D3'],
		copy: 'Weather PWA application built with Next.js. Data from WeatherKit API. Charting with D3.',
		link: 'https://nice-out-pwa.vercel.app'
	}
] as const;
