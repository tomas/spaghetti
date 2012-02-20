var Bagpipe = require('./..'),
		path = require('path'),
		file = process.argv[3] || path.join(process.env.HOME, 'Desktop', 'gst-picture.jpg');

Bagpipe.captureFrame('webcam', file, {width: 640, height: 480}, function(file){

	if(file)
		console.log("Picture taken: " + file);
		// fs.unlink(file);
	else
		console.log("Picture NOT taken. Camera in use?");

});