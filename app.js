const readline = require('readline');
const designer = require('./ArrayDesigner.js'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var numbers = [1,2,3,4,5];
var divider = 3;

try {
    var array = designer.BuildArrays(numbers, divider);

    rl.question('Would you like the data printed on screen? (Y,N)', (answer) => {
        if (answer.toUpperCase().match("Y")) 
            designer.PrintToScreen(array);
            process.exit();
    });
} catch (e) {
    console.error(e);
    process.exit();
}



