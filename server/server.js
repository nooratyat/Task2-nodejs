var express = require('express');
var app = express();
var router = express.Router();
 var s3 = require('s3');
var multer = require('multer');
var upload = multer({
  dest: "tmp/" 
});
var fs = require('fs');
var AWS = require('aws-sdk');

// Configure AWS SDK here
// var s3 =  AWS.s3({
//   params: {
//     Bucket: 'xxx'
//   }
// });
require('./config/middleware.js')(app, express);
app.use(express.static(__dirname + '/../../client'));

var client = s3.createClient({  
  s3Options: {
    accessKeyId: 'AKIAICM7D3TQOUAI6SLQ',
    secretAccessKey:'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'
  }
});



// Route for the upload
app.post("/files/upload", upload.single("form-field-name"), function (req, res) {
  var fileInfo = console.log(req.file);
  var fileStream = fs.readFileSync(fileInfo.path);
  var options = {
    Bucket: 'xxx',
    Key: 'yyy/'+fileName,
    Body: fileStream
  };

  s3.upload(options, function (err) {
    // Remove the temporary file
    fs.removeFileSync("tmp/"+fileInfo.path); 
    if (err) {
      return res.status(500).end("Upload to s3 failed");
    }
    res.status(200).end("File uploaded");
  });
});

// Route for the download
app.get("/files/download/:name", function (req, res) {
  var fileName = req.params.name;
  if (!fileName) {
    return res.status(400).end("missing file name");
  }
  var options = {
    Bucket: 'xxx',
    Key: 'yyy/'+fileName
  };
  res.attachment(fileName);
  s3.getObject(options).createReadStream().pipe(res);
});

app.listen(8000 , function () {
		console.log('...Server now listening on port ' +8000);
	});

module.exports = app;
