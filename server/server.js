
const A = require('./A/index.js');
const G = require('./G/index.js');
const M = require('./M/index.js');
const O = require('./O/index.js');


module.exports = {
    runAll: function() {
        A.runA();
        G.runG();
        M.runM();
        O.runO();
    }
 }


// const ser = require('./server/server.js');

// ser.Cl1();
// ser.Cl2();