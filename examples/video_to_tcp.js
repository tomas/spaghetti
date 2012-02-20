var GStreamer = require('./..'),
		path = require('path'),
		encoder = process.argv[2] || 'vp8enc', // others include x264enc
		port = process.argv[3] || "9000";

GStreamer.streamVideoWithAudio('webcam', {dest: 'localhost:' + port, encoder: encoder}, function(success){
	if(success)
		console.log('Stream running on port ' + port);
	else
		console.log('Something went wrong.');
});