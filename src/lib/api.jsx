import axios from 'axios';

// const axios = require("axios").default;
const BaseUrl = 'https://ctrip-server.herokuapp.com';

// function getAuthConfig(token) {
//   return {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   };
// }

// https://ctrip-server.herokuapp.com/search?place=Bern&checkIn=2021-06-01&checkOut=2021-06-03&adults1=1

export async function searchRequest(searchObject) {
  const { search, checkInDate, checkOutDate, adults } = searchObject;
  console.log('api', adults);
  const response = await axios.get(
    `${BaseUrl}/search?place=${search}&checkIn=${checkInDate}&checkOut=${checkOutDate}&adults1=${adults}`
  );
  //  console.log(response)
  return response;
}

/*********************************/
// Below -> Marc

//sign up without google:
const newUser = {
  // MOCK
  firstName: 'michael',
  lastName: 'jackson',
  email: 'michael@jackson.com',
  password: 'michael',
  phoneNumber: '9320878',
};
export function createUser(newUser) {
  return axios.post('https://ctrip-server.herokuapp.com/signup', newUser);
}

//log in without google

////////////// TRIPS //////////////////
// const trip = {
// 	name : "roadtrip in France",
// 	status : "passed",
// 	reason : "vacation",
// 	startDate : "new Date",
// 	endDate : "new Date",
// 	note : "blablabla",
// 	createdBy : "609d67dedb7dd11cced09518"
// }
export function createTrip(trip, token) {
  return axios.post('https://ctrip-server.herokuapp.com/trips', trip, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getTrips() {
  const response = await axios.get('https://ctrip-server.herokuapp.com/trips');
  return response.data.users;
}

export function getTripById(tripId, token) {
  return axios.get(`https://ctrip-server.herokuapp.com/trips/trip/${tripId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

// const trip = {createdBy: "609d67dedb7dd11cced09518"} provide the userId
export function getTripByUserId(trip, token) {
  return axios.post('https://ctrip-server.herokuapp.com/trips/userTrips', trip, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export async function logInUser(user) {
  const response = await axios.post(
    'https://ctrip-server.herokuapp.com/login',
    user
  );
  return response.data;
}

export async function logInGoogle(user) {
  const response = await axios.post(
    'https://ctrip-server.herokuapp.com/google',
    user
  );
  return response.data;
}
