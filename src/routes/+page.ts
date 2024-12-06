import { getLastPost } from '$lib/blog';
import type { PageLoad } from './$types';



export const load: PageLoad = async () => {
	return {
		post: await getLastPost()
	};
};
