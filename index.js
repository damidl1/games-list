const game1 = new Game('Red Dead Redemption 2', 2018, 'Rockstar Games');
const game2 = new Game('Dark Souls', 2011, 'From Software');
const game3 = new Game('Assasin\s Creed II', 2009, 'Ubisoft');
const game4 = new Game('The Last Of Us', 2013, 'Naughty Dog');
const game5 = new Game('Ghost of Tsushima', 2020, 'Sucker Punch Productions');

const gamesLibrary = new Library([game1, game2, game3, game4, game5]);



function renderPage(){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < gamesLibrary.library.length; i++) {
        
        const h3Element = document.createElement('h3');
        const game = gamesLibrary.library[i];
        const node = document.createTextNode('Game card: ' + game.toString());

        h3Element.appendChild(node);
        mainContainer.appendChild(h3Element);



        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        const titleCardSpan = document.createElement('span');
        const yearCardSpan = document.createElement('span');
        const publisherCardSpan = document.createElement('span');

        const nameNode = document.createTextNode('Titolo: ' + game.name);
        const yearNode = document.createTextNode('Anno di pubblicazione: ' + game.year);
        const publisherNode = document.createTextNode('Pubblicato da: ' + game.publisher);
        

        titleCardSpan.appendChild(nameNode);
        yearCardSpan.appendChild(yearNode);
        publisherCardSpan.appendChild(publisherNode);

        gameCard.appendChild(titleCardSpan);
        gameCard.appendChild(yearCardSpan);
        gameCard.appendChild(publisherCardSpan);

        mainContainer.appendChild(gameCard);
    }
}


renderPage();


