#! /usr/bin/env node
'use strict';

if (!process.argv[2]) {
    console.log('must provide a file name as argument. e.g: reverseLinesInFile ./hello.txt');
    return;
}
const fs = require('fs');
const lines = fs.readFileSync(process.argv[2], {encoding: 'UTF8'});
console.log(lines.split('\n').reverse().join('\n'));
