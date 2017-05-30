var express = require('express');
var app = express();
var s3 = require('s3');
require('./config/middleware.js')(app, express);
app.use('/', express.static('../client'));
app.get('/audio', function(req, res) {  
   var params = {
    Bucket: 'New-Bucket-1020',
    Key: 'test.mp3'
  };
})
	
	app.listen(8000 , function () {
		console.log('...Server now listening on port ' +8000);
	});


// var client = s3.createClient({  
//   s3Options: {
//     accessKeyId: <YOUR ACCESS KEY>,
//     secretAccessKey: <YOUR SECRET KEY>
//   }
// });

module.exports = app;