var unirest = require('unirest');

export async function apiTest(query) {
  let data = await unirest
    .get('https://hotels4.p.rapidapi.com/locations/search')
    .query({
      query: query,
      locale: 'en_US',
    })
    .headers({
      'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      useQueryString: true,
    })
    .end(function (result) {
      console.log(result);
      console.log(result.body.suggestions);
    });
  console.log(data.Request);
}

// var req = unirest('GET', 'https://hotels4.p.rapidapi.com/locations/search');

// req.query({
//   query: 'new york',
//   locale: 'en_US',
// });

// req.headers({
//   'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
//   'x-rapidapi-host': 'hotels4.p.rapidapi.com',
//   useQueryString: true,
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });

// unirest
//   .get(API_URL)
//   .header('X-RapidAPI-Key', API_KEY)
//   .end(function (result) {
//     console.log(result.status, result.headers, result.body);
//   });
