var unirest = require('unirest');

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

// 5 Get Pet By ID API - Route: ‘/pet/:id’ [GET]
export async function apiTest() {
  const response = await unirest
    .get('https://hotels4.p.rapidapi.com/locations/search')
    .query({
      query: 'jerusalem',
      locale: 'en_US',
    })
    .headers({
      'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
      'x-rapidapi-host': 'hotels4.p.rapidapi.com',
      useQueryString: true,
    })
    .end(function (result) {
      console.log(result);
      console.log(result.status, result.headers, result.body);
    });
}

// import axios from 'axios';

// // const BaseUrl = 'http://127.0.0.1:5500';
// const BaseUrl = 'https://eavior-pet-adoption.herokuapp.com';

// function getAuthConfig(token) {
//   return {
//     headers: {
//       Authorization: 'Bearer ' + token,
//     },
//   };
// }

// // 1 Signup API - route: ‘/signup’ [POST] ok
// export async function signUp(signUpData) {
//   const response = await axios.post(`${BaseUrl}/signup`, signUpData);
//   return response.data;
// }

// // 2 Login API - route: ‘/login’ [POST] ok
// export async function login(loginData) {
//   const response = await axios.post(`${BaseUrl}/login`, loginData);
//   return response.data;
// }

// // 3 Add Pet API - Route: ‘/pet’ [POST] (Protected to admin only)
// export async function createPet(newPet, token) {
//   const response = await axios.post(
//     `${BaseUrl}/pet`,
//     newPet,
//     getAuthConfig(token)
//   );
//   return response.data;
// }

// // 4
// export async function createImage(newImage, token) {
//   const response = await axios.post(
//     `${BaseUrl}/pet/picture_url`,
//     newImage,
//     getAuthConfig(token),
//     {
//       headers: {
//         accept: 'application/json',
//         'Accept-Language': 'en-US,en;q=0.8',
//         'Content-Type': `multipart/form-data; boundary=${newImage._boundary}`,
//       },
//     }
//   );
//   return response.data;
// }

// // 5 Get Pet By ID API - Route: ‘/pet/:id’ [GET]
// export async function getPetById(petId, token) {
//   let result;
//   const response = await axios.get(
//     `${BaseUrl}/pet/` + petId,
//     getAuthConfig(token)
//   );
//   if (petId === 'all') {
//     result = response.data.pets;
//   } else {
//     result = response.data.pet[0];
//   }
//   return result;
// }
