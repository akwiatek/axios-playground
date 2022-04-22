import axios from 'axios';

axios.get('https://www.google.com/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
