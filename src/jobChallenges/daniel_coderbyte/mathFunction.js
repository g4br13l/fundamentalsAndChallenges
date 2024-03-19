
const axios = require('axios').default;


async function MissingDigit(str) {

  console.log('str => ', str)
  console.log('str => ', encodeURI(str))

  return await axios.post('http://api.mathjs.org/v4',
    {
      /*'expr': 'a = 1.2 * (2 + 4.5)'*/
      'expr': 'a + 1 = (2 + 48)'
    },
    {
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (resp) {
      console.log('resp.data =>', resp.data);
      return resp.data;
    })
    .catch(function (err) {
      console.log(err);
      return null;
    })

}

console.log('\n \n \n');

MissingDigit('5x-1=-9').then(resp => {
  console.log('resp final => ', resp);
});




