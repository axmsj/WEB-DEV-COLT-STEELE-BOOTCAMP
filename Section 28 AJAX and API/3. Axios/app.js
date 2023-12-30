// axios
//   .get('https://swapi.dev/api/people/1')
//   .then(res => {
//     console.log('response', res);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });

const StarWarsPeeps = async id => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (e) {
    console.log('Error', e);
  }
};

StarWarsPeeps(1);
