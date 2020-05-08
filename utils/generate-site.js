const fs = require("fs");

const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("readme.md", fileContent, err => {
            //if there is an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                //return out of the function here to make sure Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: "Readme.md file created!"
            })
        })
    })
}


module.exports = {writeToFile};