import COWS from '$lib/data/cows';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = () => {
	return {
		cows: COWS,
	};
};