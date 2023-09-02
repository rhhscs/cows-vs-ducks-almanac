import DUCKS from '$lib/data/ducks';
import type { PageServerLoad } from './$types';
 
export const load: PageServerLoad = () => {
	return {
		ducks: DUCKS,
	};
};