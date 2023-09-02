<script lang="ts">
	import Body from "$lib/components/Body.svelte";
	import DuckCard from "$lib/components/DuckCard.svelte";
	import DuckDetailCard from "$lib/components/DuckDetailCard.svelte";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>

<Body>
  <div slot="display">
	  {#each data.ducks as duck, index}
		  <DuckCard {duck} href={`/ducks/${index + 1}`}/>
	  {/each}
  </div>
  <div slot="detail">
	<DuckDetailCard duck={data.duck}/>
  </div>
</Body>

<style lang="scss">
	[slot="detail"] {
		height: 100%;
	}
</style>