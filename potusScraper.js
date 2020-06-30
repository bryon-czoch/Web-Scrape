const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    //success!
    const wikiUrls = [];
    const wikiPrez = [];

    for (let i = 0; i < 45; i++) {
      wikiUrls.push($('td > b > a', html)[i].attribs.href);
      wikiPrez.push($('td > b > a', html)[i].attribs.title);
    }

    console.log(wikiUrls);
    console.log(wikiPrez);
  })
  .catch(function(err){
    //handle error
  });
