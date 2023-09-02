<script lang="ts">
	import Body from "$lib/components/Body.svelte";
  	import CowCard from "$lib/components/CowCard.svelte";
  	import CowDetailCard from "$lib/components/CowDetailCard.svelte";
	import type { PageServerData } from "./$types";

  	export let data: PageServerData;
</script>

<Body>
  <div slot="display">
	  {#each data.cows as cow, index}
		  <CowCard {cow} href={`/cows/${index + 1}`}/>
	  {/each}
  </div>
  <div slot="detail">
	<CowDetailCard cow={data.cow}/>
  </div>
</Body>

<style lang="scss">
	[slot="detail"] {
		height: 100%;
	}
</style>