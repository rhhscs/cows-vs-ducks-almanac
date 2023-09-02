<script lang="ts">
  	import type Duck from "$lib/models/duck.model";

	export let duck: Duck;
</script>

<div class="card">
	<img src="{duck.imageURL}" alt="{duck.name}">
	<h3>{duck.name}</h3>
	<p>{duck.description}</p>
</div>

<style lang="scss">
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

		height: 100%;
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