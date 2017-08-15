#!/usr/bin/env node

"use strict";

const fs = require('fs');
const chalk = require('chalk');
const meow = require('meow');
const util = require('util')

const cli=new meow(`
    Usage  
      $ rawText2JSON <file>
`);

if(!cli.input.length || cli.input[0] === 'help') {
  console.log(cli.help);
  process.exit()
}

let file_name=cli.input[0];

fs.readFile(file_name, (err, data) => {
  if(err) {throw err;}
  let output_file_name = file_name+'.json';

  fs.writeFile(output_file_name, JSON.stringify(data.toString()), (err) => {
    if (err) {throw err;}
    console.log(chalk.green('JSON file created sucessfully! \n'));
  });
});

process.on('uncaughtException', (err) => {
   console.log(chalk.red('Error: '+err.message));
});