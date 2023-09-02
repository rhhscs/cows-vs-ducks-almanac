<script lang="ts">
	// Import reset CSS
	import '../app.scss';

	// Category state
	type Category = 'cows' | 'ducks';

	let category: Category = 'cows';
</script>

<main class="almanac">
	<header class="almanac__header">
		Almanac
	</header>
	<slot/>
</main>

<style>
	.almanac__header {
		
	}
</style>