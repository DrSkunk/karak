<script>
	import Client from '../lib/Client';
	import { gameState } from '../lib/Store';
	const { client } = Client;

	const cellClick = (i) => {
		console.log('cell', i);
		client.moves.clickCell(i);
	};
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

{#if $gameState && $gameState.G}
	<div class="w-60 p-2 h-60 grid grid-cols-3 gap-2 bg-slate-200">
		{#each $gameState.G.cells as cell, i}
			<button
				class="bg-white hover:bg-slate-100 flex h-full justify-center items-center"
				on:click={() => cellClick(i)}
			>
				{cell}
			</button>
		{/each}
	</div>
{/if}
{#if $gameState.ctx.gameover}
	<div id="winner">
		{$gameState.ctx.gameover.winner !== undefined
			? `Winner ${$gameState.ctx.gameover.winner}`
			: 'Draw!'}
	</div>
{/if}
