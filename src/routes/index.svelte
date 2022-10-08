<script>
	import ZoomSvg from '@svelte-parts/zoom/svg';
	import { onMount } from 'svelte/internal';
	import RectTile from '../components/RectTile.svelte';
	import Client from '../lib/Client';
	import { gameState, map } from '../lib/Store';

	const { client } = Client;

	onMount(() => {
		console.log(client);
	});
</script>

<button on:click={() => client.events.setStage('move')}>Set stage</button>

<ZoomSvg viewBox="0 0 200 200">
	<!-- {#each $gameState.G.tiles as tile}
		<RectTile {...tile} />
	{/each} -->
	{#each $map as row, rowIndex}
		{#each row as tile, colIndex}
			{#if tile?.free}
				<RectTile
					free={true}
					x={rowIndex}
					y={colIndex}
					click={() => client.moves.addTile(tile.x, tile.y)}
				/>
			{:else if tile}
				<RectTile
					sides={tile.sides}
					room={tile.room}
					heal={tile.heal}
					players={tile.players}
					x={rowIndex}
					y={colIndex}
				/>
			{/if}
		{/each}
	{/each}
</ZoomSvg>
