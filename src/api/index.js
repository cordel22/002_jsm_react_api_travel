import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


// const options = {
//   /* method: 'GET', */    //    where the fuk is GET 1:05:27?
//   /* url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', */
//   params: {
//     bl_latitude: '11.847676',
//     tr_latitude: '12.838442',
//     bl_longitude: '109.095887',
//     tr_longitude: '109.149359',
//     /* restaurant_tagcategory_standalone: '10591',
//     restaurant_tagcategory: '10591',
//     limit: '30',
//     currency: 'USD',
//     open_now: 'false',
//     lunit: 'km',
//     lang: 'en_US' */
//   },
//   headers: {
//     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//     'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
//   }
// };

/* 
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
}); */


//  inak do asyncu si pidal sw a ne, nezabudni!!!
export const getPlacesData = async (sw, ne) => {
  try {
    const /* response */{ data: { data } } = await axios.get(URL, {
      
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '1bedd33a7bmsh412773e47664cc3p19bb9djsn252c65851c22'
      }
    });

    return data;
  } catch (error) {
    console.log(error)
  }
}
