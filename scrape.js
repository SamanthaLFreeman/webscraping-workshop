let Nightmare = require('nightmare');
let nightmare = Nightmare({ show: true });
nightmare
  .goto('https://www.gameinformer.com/2019')
  .wait('.calendar_entry')
  .evaluate(() => {
    let gameNodes = document.querySelectorAll('.calendar_entry');
    let gameList = [].slice.call(gameNodes);
    return gameList.map(game => {
      return game.innerText
    });
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });