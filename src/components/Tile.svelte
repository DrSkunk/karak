<script>
	// N E S W
	export let sides = [true, true, true, true];
	export let room = false;
	export let heal = false;
	export let players = [];

	const playerColor = {
		'player 1': 'bg-sky-800',
		'player 2': 'bg-fuchsia-200',
		'player 3': 'bg-sky-300',
		'player 4': 'bg-orange-500',
		'player 5': 'bg-yellow-500'
	};
</script>

<div class="relative min-w-[8rem] w-32 h-32 bg-stone-300 border flex justify-center items-center">
	{#if sides[0]}<div class="absolute bg-slate-50 w-8 h-12 top-0" />{/if}
	{#if sides[1]}<div class="absolute bg-slate-50 w-12 h-8 right-0" />{/if}
	{#if sides[2]}<div class="absolute bg-slate-50 w-8 h-12 bottom-0" />{/if}
	{#if sides[3]}<div class="absolute bg-slate-50 w-12 h-8 left-0" />{/if}
	{#if room || heal}
		<div class="bg-slate-50 w-20 h-20 grid gap-2 grid-cols-2 text-center" />
	{:else}
		<div class="bg-slate-50 w-12 h-12" />
	{/if}

	{#if players.length > 0}
		<div class="absolute inset-4 gap-1 flex items-center justify-center flex-wrap text-center">
			{#each players as player}
				<div class={`z-10 h-8 w-8 rounded-full ${playerColor[player]}`} />
			{/each}
		</div>
	{/if}

	{#if heal}<div class="absolute text-4xl">❤️</div>{/if}
</div>
