import axios from 'axios';

(async function main() {
    const response = await axios.get('https://www.google.com/');
    console.log(response);
})();
