const axios = require('axios').default;
const fs = require('fs').promises;

const url = 'https://api.corona-zahlen.org/districts';

async function main() {
  const transformed = [];

  const districts = (await axios.get(url)).data;

  for (const key in districts.data) {
    transformed.push({
      ags: districts.data[key].ags,
      county: districts.data[key].county,
    });
  }

  await fs.writeFile('./src/assets/ags-map.json', JSON.stringify(transformed));
}

main();
