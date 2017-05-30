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
	
	

// var client = s3.createClient({  
//   s3Options: {
//     accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
//     secretAccessKey:' wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
//   }
// });



// var downloadStream = client.downloadStream(params = {
//     Bucket: 'New-Bucket-1020',
//     Key: 'test.mp3'
//   })

  // downloadStream.on('error', function() {
  //   res.status(404).send('Not Found');
  // });
  // downloadStream.on('httpHeaders', function(statusCode, headers, resp) {
  //   // Set Headers
  //   res.set({
  //     'Content-Type': headers['content-type']
  //   });
  //     downloadStream.pipe(resp);

  // });

  // Pipe download stream to response



app.listen(8000 , function () {
		console.log('...Server now listening on port ' +8000);
	});

module.exports = app;