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
	<div slot="detail" in:blur={{ duration: 300, easing: sineInOut }}>
		<CowDetailCard cow={data.cow}/>
	</div>
</Body>

<style lang="scss">
	[slot="detail"] {
		height: 100%;
	}
</style>