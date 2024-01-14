import { Games } from "./games.js";
export class UI {
    // display all games in a category function
    displayGames(gamesData) {

        let gamesBody = ``;
        gamesBody = `
                        <div class="container w-75">
                            <div class="row gx-3 gy-4 mt-2">
        `;
        gamesData.forEach((game) => {
            gamesBody += `
            <div class="game-card col-md-6 col-lg-3 h-25 text-light" id="${game.id}">
                <div class="outer border border-info border-1 rounded-top bg-dark bg-opacity-75">
                    <div class="inner p-3">
                        <img class="w-100 rounded" src="${game.thumbnail}">
                        <div class="d-flex justify-content-between my-3">
                            <h5>${game.title}</h5>
                            <button class="btn btn-primary">free</button>
                        </div>
                        <p class="overflow-y-auto fs-6 text-center">${game.short_description}</p>
                    </div>
                    <div class="bottom-bar px-3 py-2 border-top border-info d-flex justify-content-between">
                        <span class="badge bg-primary">${game.genre}</span>
                        <span class="badge bg-primary">${game.platform}</span>
                    </div>
                </div>
            </div>
            `;
        });

        gamesBody += `
                        </div>
                    </div>
        `;

        document.getElementById('games').innerHTML = gamesBody;

        // navbar translate adjustment with scroll
        window.addEventListener('scroll', scrollFunction);

        function scrollFunction() {
            var documentHeight = document.documentElement.clientHeight / 5;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const navbar = document.querySelector('nav');

            if (scrollTop >= documentHeight) {
                navbar.classList.add('nav-adjust');
            } else {
                navbar.classList.remove('nav-adjust');
            }
        }
    }

    // display a specific game details function
    displayDetailsBody(gameDetails) {
        let content = `
                        <div class="position-absolute top-0 end-0 start-0 bottom-0 p-5 text-light">
                            <div class="container mt-5">
                                <h2 class="position-relative">Game Details
                                    <button id="closeButton" class="btn btn-close-white text-light position-absolute top-0 end-0 bg-transparent fw-bolder fs-1 rounded" type="button">X</button>
                                </h2>
                                <div class="row pt-5">
                                    <div class="col-md-4">
                                        <img class="w-100" src="${gameDetails.thumbnail}">
                                    </div>
                                    <div class="col-md-8 bg-dark bg-opacity-50 p-3">
                                        <h2>Title: <span id="gameTitle">${gameDetails.title}</span></h2>
                                        <p>Category: <span class="badge bg-primary" id="gameCategory">${gameDetails.genre}</span></p>
                                        <p>Platform: <span class="badge bg-primary" id="gameCategory">${gameDetails.platform}</span></p>
                                        <p>Status: <span class="badge bg-primary" id="gameCategory">${gameDetails.status}</span></p>
                                        <p>${gameDetails.description}</p>
                                        <a href="${gameDetails.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
        document.getElementById('details').innerHTML = content;

        document.getElementById('closeButton').addEventListener('click', () => {
            document.getElementById('details').classList.add('d-none');
            document.getElementById('games').classList.remove('d-none');
            document.querySelector('nav').classList.remove('d-none'); 
        })
    }
}