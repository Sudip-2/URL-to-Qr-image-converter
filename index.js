import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Enter URL = ",
            name: "URL"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const url = answers.URL
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream(`${answers.URL}.png`));
        fs.writeFile("user-message.txt",answers.URL,(err) => {
            if (err){
                throw err
            }
            console.log("File saved")
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });