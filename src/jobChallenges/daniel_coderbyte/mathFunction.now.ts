//import axios from 'axios';

const axios = require('axios').default;

async function MissingDigit(str: string): Promise<string> {

  console.log('str => ', str)

  try {
    return await axios.get('http://api.mathjs.org/v4', {params: {expr: '2*2'}} )
      .then(resp => {
        console.log('resp.data => ', resp.data)
        console.log('resp => ', resp)
        return resp.data
      })
  }
  catch (err) {
    console.log('err => ', err)
    return null
  }

}

console.log('\n \n \n')

MissingDigit('2*2').then(r => {
  return console.log('r => ', r)
})





