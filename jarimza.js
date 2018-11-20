var exec = require('child_process').exec;
var child = exec('java -jar D:/Hassan/Source/Imza/dist/imza.jar 5242-5242.xml-S',
  function (error, stdout, stderr){
    console.log('Output -> ' + stdout);
    if(error !== null){
      console.log("Error -> "+error);
    }
});
 
module.exports = child;