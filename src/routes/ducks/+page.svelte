<script lang="ts">
  	import Body from "$lib/components/Body.svelte";
  	import DuckCard from "$lib/components/DuckCard.svelte";
  	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<Body>
	<div slot="display">
		{#each data.ducks as duck, index}
			<DuckCard {duck} href={`/ducks/${index + 1}`}/>
		{/each}
	</div>
</Body>