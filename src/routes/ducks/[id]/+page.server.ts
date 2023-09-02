import DUCKS from '$lib/data/ducks';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = ({ params }) => {
	const duckId = +params.id;

	const duck = DUCKS.filter(duck => duck.id === duckId)[0];

	if (!duck) {
		throw redirect(303, '/ducks')
	}

	return {
		ducks: DUCKS,
		duck: duck,
	};
};