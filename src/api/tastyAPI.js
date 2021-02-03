import axios from 'axios';
export default axios.create({
  // const options = {
  //   method: 'GET',
  url: 'https://tasty.p.rapidapi.com/tags/list',
  headers: {
    'x-rapidapi-key': 'b48d55a73bmshe373428805e9173p17edd2jsn15b2494aff10',
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
  },
  // }
});

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
