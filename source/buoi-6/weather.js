const request = require('request');

const city = 'London,uk';
const appid = 'b6907d289e10d714a6e88b30761fae22'



function weather(city, appid) {
    const URI = `https://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;

    return new Promise((resolve, reject) => {
        request(URI, (error, response, body) => {
            if (error) {
                return reject(error);
            }

            resolve(response);
        });
    });
}

weather(city, appid)
.then(result => console.log(result.body))
.catch(err => console.log(err));