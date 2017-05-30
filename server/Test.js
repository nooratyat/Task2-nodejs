// var express = require('express');
// var app = express();
// var s3 = require('s3');


// require('./config/middleware.js')(app, express);

// app.use(express.static(__dirname + '/../../client'));

// app.get('/audio', function(req, res) {  
//    var params = {
//     Bucket: 't2',
//     Key: 'test.mp3'
//   };
// })
	
	

// var client = s3.createClient({  
//   s3Options: {
//     accessKeyId: 'AKIAICM7D3TQOUAI6SLQ',
//     secretAccessKey:'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'
//   }
// });



// exports.upload = function(req, res) {
//     var file = req.files.file; 
//     var s3bucket = new AWS.S3({params: {Bucket: 't2'}});
//     s3bucket.createBucket(function() {
//         var params = {
//             Key: file.name,
//             Body: file
//         };
//         s3bucket.upload(params, function(err, data) {
//             console.log("PRINT FILE:", file);
//             if (err) {
//                 console.log('ERROR MSG: ', err);
//             } else {
//                 console.log('Successfully uploaded data');
//             }
//         });
//     });
// };





// // var downloadStream = client.downloadStream( params = {
// //     Bucket: 't2',
// //     Key: 'test.mp3'
// //   })

//   // downloadStream.on('error', function() {
//   //   res.status(404).send('Not Found');
//   // });
//   // downloadStream.on('httpHeaders', function(statusCode, headers, resp) {
//   //   // Set Headers
//   //   res.set({
//   //     'Content-Type': headers['content-type']
//   //   });
//   //     downloadStream.pipe(resp);

//   // });

//   // Pipe download stream to response



// app.listen(8000 , function () {
// 		console.log('...Server now listening on port ' +8000);
// 	});

// module.exports = app;


