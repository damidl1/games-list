const game1 = new Game('./assets/rdr2.jpeg','Red Dead Redemption 2', 2018, 'Rockstar Games');
const game2 = new Game('./assets/ds.jpg','Dark Souls', 2011, 'From Software');
const game3 = new Game('./assets/ac2.jpg','Assasin\s Creed II', 2016, 'Ubisoft');
const game4 = new Game('./assets/tlous.jpg','The Last Of Us', 2013, 'Naughty Dog');
const game5 = new Game('./assets/got.jpeg','Ghost of Tsushima', 2020, 'Sucker Punch Productions');

const gamesLibrary = new Library([game1, game2, game3, game4, game5]);


function renderPage(){

    const mainContainer = document.getElementById('main-container');

    mainContainer.innerHTML = '';

    for (let i = 0; i < gamesLibrary.library.length; i++) {
        
        // const h3Element = document.createElement('h3');
        const game = gamesLibrary.library[i];
        const node = document.createTextNode('Game card: ' + game.toString());

        // h3Element.appendChild(node);
        // mainContainer.appendChild(h3Element);



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
        
        // const imageUrls = ['./assets/rdr2.jpeg',
        //                    './assets/ds.jpg',
        //                    './assets/ac2.jpg',
        //                    './assets/tlous.jpg',
        //                    './assets/got.jpeg'];

        // const gameImage = document.createElement('img');
        // gameImage.src = imageUrls[i];
        
        // titleCardSpan.appendChild(gameImage);
        // mainContainer.appendChild(gameCard);
        const gameImg = document.createElement('img');
        gameImg.src = game.image;

        titleCardSpan.appendChild(gameImg);
        mainContainer.appendChild(gameCard);
    }
}


renderPage();

function sortByName() {
    gamesLibrary.sortByName();
    renderPage();
  }
  
  function sortByYear() {
    gamesLibrary.sortByYear();
    renderPage();
  }
  
  
// function sortByName(){
//    gamesLibrary.sort((a, b) => a.name.localeCompare(b.name));
//    renderPage(gamesLibrary);

//  }

//  function sortByYear(){
//    gamesLibrary.sort((a, b) => a.year - b.year);
//    renderPage(gamesLibrary);
//  }


