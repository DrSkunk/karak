import { INVALID_MOVE } from 'boardgame.io/core';

const starterTile = {
	x: 0,
	y: 0,
	sides: [true, true, true, true],
	room: true,
	heal: true,
	players: []
};

const movePlayer = (G, ctx, x, y) => {
	console.log(x, y);
};
const addTile = (G, ctx, x, y) => {
	console.log('add', x, y);
	G.tiles.push({
		x,
		y,
		sides: [false, true, false, true],
		room: false,
		heal: false,
		players: []
	});
	G.tiles = convertTiles(G.tiles);
};

const fight = (G, ctx, id) => {};

export const Karak = {
	setup: () => ({
		tiles: convertTiles([starterTile])
	}),

	turn: {
		stages: {
			move: { moves: { movePlayer, addTile } },
			fight: { moves: { fight } }
		}
	},

	endIf: (G, ctx) => {
		return false;
	}
};

function convertTiles(tiles) {
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
	return tiles.map((tile) => {
		const x = tile.x - size.xMin;
		const y = tile.y - size.yMin;
		return {
			...tile,
			x,
			y
		};
	});
}
