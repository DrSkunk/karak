import { Client } from 'boardgame.io/client';
import { TicTacToe } from './Game';
import { gameState } from './Store';

class TicTacToeClient {
	constructor() {
		this.client = Client({ game: TicTacToe });
		this.client.start();
		this.client.subscribe((s) => gameState.set(s));
	}
}

export default new TicTacToeClient();
