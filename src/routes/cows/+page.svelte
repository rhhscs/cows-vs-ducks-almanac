<script lang="ts">
	import Body from "$lib/components/Body.svelte";
  	import CowCard from "$lib/components/CowCard.svelte";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>

<Body>
	<svelte:fragment slot="display">
		{#each data.cows as cow, index}
			<CowCard {cow} href={`/cows/${index + 1}`}/>
		{/each}
	</svelte:fragment>
</Body>