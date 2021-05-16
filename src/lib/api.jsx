var unirest = require('unirest');

const rapidKey = '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126';

const axios = require("axios").default;
const BaseUrl = "http://0.0.0.0:5000";

function getAuthConfig(token) {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
}

export async function searchRequest(){
  const hotel = "hotel"
   const response = await axios.get(
     `${BaseUrl}/animals/type/${hotel}`,
     getAuthConfig()
   );
   return response.data.animals;
}

export async function getLocations(query) {
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
}

export async function getMetaData() {
  let req = unirest('GET', 'https://hotels4.p.rapidapi.com/get-meta-data');

  req.headers({
    'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
}

export async function getPropertiesList() {
  var req = unirest('GET', 'https://hotels4.p.rapidapi.com/properties/list');

  req.query({
    adults1: '1',
    pageNumber: '1',
    destinationId: '112922',
    pageSize: '25',
    checkOut: '2020-01-15',
    checkIn: '2020-01-08',
    sortOrder: 'PRICE',
    locale: 'en_US',
    currency: 'USD',
  });

  req.headers({
    'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
}

export async function getPropertiesDetails() {
  var req = unirest(
    'GET',
    'https://hotels4.p.rapidapi.com/properties/get-details'
  );

  req.query({
    id: '139009',
    checkIn: '2020-01-08',
    checkOut: '2020-01-15',
    currency: 'USD',
    locale: 'en_US',
    adults1: '1',
  });

  req.headers({
    'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
}

export async function getPropertiesPhotos() {
  var req = unirest(
    'GET',
    'https://hotels4.p.rapidapi.com/properties/get-hotel-photos'
  );

  req.query({
    id: '1178275040',
  });

  req.headers({
    'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
}

export async function getReviews() {
  var req = unirest('GET', 'https://hotels4.p.rapidapi.com/reviews/list');

  req.query({
    id: '1178275040',
    page: '1',
    loc: 'en_US',
  });

  req.headers({
    'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com',
    useQueryString: true,
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
  });
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
