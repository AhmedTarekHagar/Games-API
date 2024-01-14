
import { UI } from "./ui.js";

export class Details {
	constructor(gameId) {
		this.ui = new UI();
		this.getGameDetails(gameId)
	}

	// fetch game details api function
	async getGameDetails(gameId){
		const loadingScreen = document.getElementById('loader');
		loadingScreen.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0ce3633020msh2a849b14f72f846p14a8a7jsn43c0dd4cb3fb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const result = await response.json();
		this.ui.displayDetailsBody(result);
        
        loadingScreen.classList.add('d-none');
	}
}