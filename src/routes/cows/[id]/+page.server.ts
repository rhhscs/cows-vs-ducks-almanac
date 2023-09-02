import COWS from '$lib/data/cows';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = ({ params }) => {
	const cowId = +params.id;

	const cow = COWS.filter(cow => cow.id === cowId)[0];

	if (!cow) {
		throw redirect(303, '/cows')
	}

	return {
		cows: COWS,
		cow: cow,
	};
};