# rawText2JSON
a CLI utility converts raw text files (text, html etc.) to valid JSON files for importing in React Native projects

Sometimes, we do need include raw text files (e.g. EULA or Terms of Use) in our apps. It will be nice if we can simply:
```
import license_content from 'license.txt';
```
Unfornately, the built-in packager of React Native doesn't support custom loader like webpack. The only way we can acheive that is to convert the raw text file to a valid JSON and import the JSON file in your React Native project (the built-in packager does support JSON file loader).

You can convert your raw text files to valid JSON files using this command line utility and import the JSON:
```
import license_content from 'license.txt.json';
```

## Install
```
$ sudo npm install -g rawText2JSON
```

##  Usage 
```
$ rawText2JSON <file>
```
e.g. Run the following:

```
$ rawText2JSON EULA.txt
```
You will get a valid JOSN file `EULA.txt.json` within the same directory.