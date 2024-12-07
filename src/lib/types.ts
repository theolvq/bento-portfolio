import type { featuredWork } from './data';

export interface BlogPost {
	title: string;
	slug: string;
	publishedAt: string;
	excerpt: string;
	tags?: string[];
}

export type FeaturedWork = (typeof featuredWork)[number];
