const request = require('request');

//Request facts from numbersapi
let getNumberFact = (callback) => {
    const options = {
        url: 'http://numbersapi.com/random?min=-100000000&max=100000000',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
        }
    };

    request(options, (err, res, body) => {
        if (err) {
            callback(err, null);
        } else {
            callback(err, body);
        }
    });
}

module.exports.getNumberFact = getNumberFact;



