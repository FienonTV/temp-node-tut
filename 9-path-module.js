const path = require('path')

//Get Operating Systems Seperator
console.log(path.sep);

//Get Path from File
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//Get Base name
const base = path.basename(filePath)
console.log(base);

const absolutePath = path.resolve(__dirname, 'conten', 'subfolder', 'test.txt');
console.log(absolutePath);