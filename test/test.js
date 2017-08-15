const assert = require('assert');
const cmd=require('node-cmd');
const fs = require('fs');
const chalk = require('chalk');

const test_text_file='./test/test.txt';

let output_file_content='';
let output_file_content_parsed=null;

describe('rawText2JSON', function() {
    describe('#Text file converion', function() {
        it('should output a file named test.txt.json in the same directory', function(done) {
            cmd.get(`./bin/rtj.js ${test_text_file}`,function(err, data, stderr){
                if (err) done(err);
                if (stderr) done(err);
                fs.readFile(`${test_text_file}.json`, (err,data) => {
                    if(err) done(err);
                    output_file_content=data.toString();
                    done();
                });
            });
        });

        it('Output file content should be valid JSON', function() {
            output_file_content_parsed=JSON.parse(output_file_content);
        });

        it('should match the orginal file content', function(done) {
            fs.readFile(`${test_text_file}`, (err,data) => {
                if(err) done(err);
                data=data.toString();
                assert.equal(output_file_content_parsed,data,'Parsed JSON content not match original text');
                done();
            });
        });
    });
});

/*
process.on('uncaughtException', (err) => {
    console.log(chalk.red('Error: '+err.message));
 });

 */