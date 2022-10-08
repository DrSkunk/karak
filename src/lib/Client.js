import { Client } from 'boardgame.io/client';
import { Karak } from './Game';
import { gameState } from './Store';

class KarakClient {
	constructor() {
		this.client = Client({ game: Karak });
		this.client.start();
		this.client.subscribe((s) => gameState.set(s));
	}
}

export default new KarakClient();
