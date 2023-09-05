<script lang="ts">
	import { page } from '$app/stores';
  	import Body from '$lib/components/Body.svelte';

	// Import reset CSS
	import '../app.scss';

	$: url = $page.url.pathname;

</script>

<svelte:head>
	<title>Cows Vs Ducks!</title>
</svelte:head>
<main class="almanac">
	<header class="almanac__header">
		Almanac
	</header>
	<slot/>
</main>

<style lang="scss">
	@use "../styles/exports.scss" as exports;

	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.almanac {
		font-family: 'Lexend', sans-serif;
		color: var(--color-dark);

		/* padding-top: 2rem; */

		width: clamp(30rem, 80%, 80rem);
		margin: 0 auto;

		display: flex;
		flex-direction: column;

		gap: 3rem;

		z-index: 3;
	}

	.almanac__header {
		padding: 1.25rem 1rem;

		background-color: var(--color-light);

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		font-weight: 900;
		font-size: 4rem;

		box-shadow: exports.$box-shadow;
	}
</style>