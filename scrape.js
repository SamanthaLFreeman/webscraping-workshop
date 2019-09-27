let Nightmare = require('nightmare');
let fs = require('fs');
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
  .then(result => {
    fs.writeFileSync('testOutput.js', JSON.stringify(result));
    console.log(result);
  })
  .catch(error => {
    console.error('Search failed:', error);
  });