<script>
	export let x;
	export let y;

	const size = 10;

	export let free = false;

	export let sides = [true, true, true, true];
	export let room = false;
	export let heal = true;
	export let players = [];

	export let click = () => {
		console.log('click', realX, realY);
	};

	const playerColor = {
		'player 1': 'bg-sky-800',
		'player 2': 'bg-fuchsia-200',
		'player 3': 'bg-sky-300',
		'player 4': 'bg-orange-500',
		'player 5': 'bg-yellow-500'
	};
	$: realX = x * size;
	$: realY = Math.min(y * size);
</script>

<g
	transform={`translate(${realX},${realY})`}
	class="hover:opacity-80 cursor-pointer"
	on:click={click}
>
	{#if free}
		<rect width="10" height="10" fill="lightgray" />
	{:else}
		<rect width="10" height="10" fill="gray" />
		{#if sides[0]}<rect x="4" y="0" width="2" height="4" fill="white" />{/if}
		{#if sides[1]}<rect x="6" y="4" width="4" height="2" fill="white" />{/if}
		{#if sides[2]}<rect x="4" y="6" width="2" height="4" fill="white" />{/if}
		{#if sides[3]}<rect x="0" y="4" width="4" height="2" fill="white" />{/if}
		{#if room || heal}<rect x="1" y="1" width="8" height="8" fill="white" />
		{:else}
			<rect x="3" y="3" width="4" height="4" fill="white" />
		{/if}

		{#if players.length > 0}
			<div class="absolute inset-4 gap-1 flex items-center justify-center flex-wrap text-center">
				{#each players as player}
					<div class={`z-10 h-8 w-8 rounded-full ${playerColor[player]}`} />
				{/each}
			</div>
		{/if}

		{#if heal}<text x="5" y="5" class="text-[4px]">❤️</text>{/if}
	{/if}
</g>
