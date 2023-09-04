<script lang="ts">
	import type Cow from "$lib/models/cow.model";

	export let cow: Cow;
</script>



<div class="card">
	<img src="{cow.imageURL}" alt="{cow.name}">
	<h3>{cow.name}</h3>
	<p>{cow.description}</p>
	<p>Cost: {cow.cost} Wheat</p>
</div>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;

		box-sizing: border-box;

		gap: 0.5rem;
		border: 0.5rem solid var(--color-light-8);
		padding: 0.5rem;
		background-color: var(--color-light-6);

		height: 100%;

		box-shadow: exports.$box-shadow;
	}

	.card img {
		width: 100%;

		object-fit: cover;
	}

	.card h3 {
		font-weight: bold;
		line-height: 0.8;
		color: var(--color-dark);
		font-size: 1.5rem;
	}
</style>