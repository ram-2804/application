const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number of lines: ', (lines) => {
    const n = parseInt(lines);
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
    rl.close();
});