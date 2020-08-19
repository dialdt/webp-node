const fs = require('fs');
const path = require('path');

let CWebp = require('cwebp').CWebp


fs.readdir('input', function(err, files) {
    if(err) {
        console.log(err)
    }

    files.forEach(file => {
        const encoder = new CWebp(`input/${file}`)
        encoder.write(`output/${file}.webp`, function(err) {
            console.log(err || 'encoded successfully');
        })
    })
})