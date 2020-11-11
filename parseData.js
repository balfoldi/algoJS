
  

const processData = (method) => {
    const fs = require('fs')

    const fileName = process.argv[2];

    

    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
          console.error(error.message);
          return;
        }
        const dataArray = data.split(" ").map((string)=>{
            //if (parseInt(string)) console.log("throw new Error('NaN')")
            return parseInt(string) 
        })
        method(dataArray)
      });
      
}

module.exports = {processData}