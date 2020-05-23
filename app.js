var fs = require('fs');

if (process.argv.length !== 3){
    console.log('args: ' + process.argv)
    throw new Error('Incorrect argument length, enter filename');
}

// getting filename from user input
var file = process.argv[2];

// files.txt contains all the filenames user has entered, create it if not present
if (!fs.existsSync('files.txt')) {
    throw new Error('files.txt must be present in current working directory');
}

var contents = fs.readFileSync('files.txt', 'utf8');

if(!contents){
    var filenames = [];
} else {
    var filenames = JSON.parse(contents);
}

if (filenames && filenames.includes(file)){
    throw new Error('file already present, enter a different file name');
}

filenames.push(file);
fs.writeFileSync(file, 'You are awesome');
fs.writeFileSync('files.txt', JSON.stringify(filenames));
console.log('file with name: ' + file + ' created');

