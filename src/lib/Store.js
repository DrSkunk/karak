import { writable, derived } from 'svelte/store';

export const gameState = writable(null);
export const map = derived(gameState, ($gameState) => {
	if ($gameState === null) return [[]];
	return createMap($gameState.G.tiles);
});

function createMap(tiles) {
	const size = tiles.reduce(
		(acc, { x, y }) => {
			acc.xMin = Math.min(acc.xMin, x);
			acc.xMax = Math.max(acc.xMax, x);
			acc.yMin = Math.min(acc.yMin, y);
			acc.yMax = Math.max(acc.yMax, y);
			return acc;
		},
		{
			xMin: 0,
			xMax: 0,
			yMin: 0,
			yMax: 0
		}
	);

	const width = size.xMax - size.xMin + 3;
	const height = size.yMax - size.yMin + 3;

	// const col = new Array(height).fill(null);
	const emptyMap = new Array(width).fill(null).map(() => new Array(height).fill(null));

	return tiles.reduce((acc, tile) => {
		const x = tile.x - size.xMin + 1;
		const y = tile.y - size.yMin + 1;
		console.log(x, y, acc);
		acc[x][y] = tile;

		if (tile.sides[0] && acc[x][y - 1] === null) {
			acc[x][y - 1] = { free: true, x: tile.x, y: tile.y - 1 };
		}
		if (tile.sides[1] && acc[x + 1][y] === null) {
			acc[x + 1][y] = { free: true, x: tile.x + 1, y: tile.y };
		}
		if (tile.sides[2] && acc[x][y + 1] === null) {
			acc[x][y + 1] = { free: true, x: tile.x, y: tile.y + 1 };
		}
		if (tile.sides[3] && acc[x - 1][y] === null) {
			acc[x - 1][y] = { free: true, x: tile.x - 1, y: tile.y };
		}

		return acc;
	}, emptyMap);
}
