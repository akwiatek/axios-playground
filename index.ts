import axios from 'axios';

(async function main() {
  try {
      const response = await axios.get('https://www.google.com/');
      console.log(response);
  } catch (error) {
      console.log(error);
  }
})();
