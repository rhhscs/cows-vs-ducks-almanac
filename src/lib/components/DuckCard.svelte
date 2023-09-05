<script lang="ts">
  	import type Duck from "$lib/models/duck.model";

	export let duck: Duck;
	export let href: string;
</script>

<a class="card" {href}>
	<h3>{duck.name}</h3>
	<img src="{duck.imageURL}" alt="{duck.name}">
</a>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	a {
		all: unset;
		box-shadow: exports.$box-shadow;
		
		&:hover {
			cursor: pointer;
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;

		text-align: center;

		box-sizing: border-box;

		gap: 0.5rem;
		border: 0.5rem solid var(--color-light-8);
		padding: 0.5rem;
		background-color: var(--color-light-6);
	}

	.card img {
		width: 100%;
		aspect-ratio: 1 / 1;

		object-fit: contain;
	}

	.card h3 {
		font-weight: bold;
		line-height: 0.8;
		color: var(--color-dark);
	}
</style>