<script>
  	import { page } from "$app/stores";

	$: url = $page.url.pathname;
</script>

<section class="almanac__body">
	<div class="almanac__body__menu">
		<div class="almanac__body__menu__tabs">
			<a href="/cows">
				<div
					class="almanac__body__menu__tabs--cows"
					class:active={!url.startsWith('/cows')}
				>
					Cows
				</div>
			</a>
			<a href="/ducks">
				<div
					class="almanac__body___menu__tabs--ducks"
					class:active={!url.startsWith('/ducks')}
				>
					Ducks
				</div>
			</a>
		</div>
		<div class="almanac__body__menu__items">
			<slot name="display"/>
		</div>
	</div>
	<div class="almanac__body__detail">
		<slot name="detail"/>
	</div>
</section>

<style lang="scss">
	@use '../../styles/exports.scss' as exports;

	a {
		all: unset;
	}

	.almanac__body {
		display: flex;
		flex-direction: row;
		/* height: 10rem; */
		
		gap: 2rem;
		
		height: 70vh;

		.almanac__body__menu {
			flex-basis: 70%;
		}

		.almanac__body__detail {
			flex-basis: 30%;
		}
	}


	
	.almanac__body__menu, .almanac__body__detail {
		background-color: var(--color-light);
		box-shadow: exports.$box-shadow;
	}

	.almanac__body__menu__tabs {
		position: relative;
	}

	.almanac__body__menu__tabs > a {
		z-index: -1;

		position: absolute;

		bottom: -10%;

		
		&:nth-of-type(2) {
			left: 12%;
		}
		
		div {
			padding: 0.5rem 2rem;
			background-color: var(--color-light);
			border-radius: 1rem 1rem 0 0;
			box-shadow: exports.$box-shadow;
		}

		div.active {
			background-color: var(--color-light-5);
		}
	}

	.almanac__body__menu__items {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		
		gap: 0.125rem;

		padding: 0.5rem;
	}

	.almanac__body__detail {
		padding: 0.5rem;
	}
</style>