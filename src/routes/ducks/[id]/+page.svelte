<script lang="ts">
	import Body from "$lib/components/Body.svelte";
	import DuckCard from "$lib/components/DuckCard.svelte";
	import DuckDetailCard from "$lib/components/DuckDetailCard.svelte";
  	import { blur } from "svelte/transition";
	import type { PageServerData } from "./$types";
  	import { sineInOut } from "svelte/easing";

  	export let data: PageServerData;
</script>

<Body>
  <svelte:fragment slot="display">
	  {#each data.ducks as duck, index}
		  <DuckCard {duck} href={`/ducks/${index + 1}`}/>
	  {/each}
  </svelte:fragment>
  <svelte:fragment slot="detail">
	{#key data.duck.id}
		<div class="container" in:blur={{ duration: 300, easing: sineInOut }}>
			<DuckDetailCard duck={data.duck}/>
		</div>
	{/key}
  </svelte:fragment>
</Body>

<style lang="scss">
	.container {
		height: 100%;
	}
</style>