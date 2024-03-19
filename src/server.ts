import {config} from "dotenv";

config();

type UserT = {
  name: string
  age: number
}

const showUser = (user: UserT) => {
  console.log('name: ' + user.name);
  console.log('age: ' + user.age);
}

const user: UserT = ({name: 'Gabriel', age: 33});

showUser(user);

const key = process.env.THE_MOVIE_DB_API_KEY;
const readKey = process.env.THE_MOVIE_DB_API_READ_ONLY;

console.log('key => '+ key);
console.log('readKey => '+ readKey);


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${readKey}`
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



















