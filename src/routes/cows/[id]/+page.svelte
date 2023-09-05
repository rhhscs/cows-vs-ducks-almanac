<script lang="ts">
	import Body from "$lib/components/Body.svelte";
	import CowCard from "$lib/components/CowCard.svelte";
	import CowDetailCard from "$lib/components/CowDetailCard.svelte";
	import { blur } from "svelte/transition";
	import { sineInOut } from "svelte/easing";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>

<Body>
	<svelte:fragment slot="display">
		{#each data.cows as cow, index}
			<CowCard {cow} href={`/cows/${index + 1}`}/>
		{/each}
	</svelte:fragment>
	<svelte:fragment slot="detail">
		{#key data.cow.id}
			<div class="container" in:blur={{ duration: 300, easing: sineInOut }}>
				<CowDetailCard cow={data.cow}/>
			</div>
		{/key}
	</svelte:fragment>
</Body>

<style lang="scss">
	.container {
		height: 100%;
	}
</style>