
// O que fiz:


const axios = require('axios');


async function MissingDigitOriginal(str: string): Promise<string> {

  try {

    return await axios.get('http://api.mathjs.org/v4', {
      params: {
        expr: str
      }
    }).then(resp => {
      console.log('resp.data => ', resp.data);
      return resp.data;
    });

  } catch (err) {
    console.log(err)
    return null;
  }

}


MissingDigitOriginal('2*2').then(r => {
  console.log('r => ', r);
});


// keep this function call here
// @ts-ignore
//console.log( 'Final: ', MissingDigitOriginal(readline()).then(r => r ) );

