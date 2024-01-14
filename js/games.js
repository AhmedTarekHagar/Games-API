import { UI } from "./ui.js";
import { Details } from "./details.js";


export class Games {

    constructor() {
        this.getGames();

        const navButtons = document.querySelectorAll('nav ul a');

        navButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                document.querySelector('nav .active').classList.remove('active');
                e.target.classList.add('active');
                this.getGames(e.target.id);
            })
        })

        this.ui = new UI();
    }

    // fetch api function
    async getGames(category = 'mmorpg') {
        const loadingScreen = document.getElementById('loader');
        loadingScreen.classList.remove('d-none');
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0ce3633020msh2a849b14f72f846p14a8a7jsn43c0dd4cb3fb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const result = await response.json();
        this.ui.displayGames(result);
        this.addDisplayDetailsToGameCard();
        loadingScreen.classList.add('d-none');
    }

    addDisplayDetailsToGameCard() {
        document.querySelectorAll('.game-card').forEach((card) => {
            card.addEventListener('click', () => {
                this.displayDetails(card.id);
            });
        });
    }

    displayDetails(gameId){
        new Details(gameId);
        document.querySelector('#games').classList.add('d-none');
        document.querySelector('nav').classList.add('d-none');
        document.getElementById('details').classList.remove('d-none');
    }
}

