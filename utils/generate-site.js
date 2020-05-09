//initialization of the fs function
const fs = require("fs");
//initialization of the path function
const path = require("path");
//function to write the file and send the data
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


//export of the writeToFile function
module.exports = {writeToFile};