var GStreamer = require('./..'),
		path = require('path'),
		file = process.argv[3] || path.join(process.env.HOME, 'Desktop', 'gstreamer-test.flv');

GStreamer.streamVideo('videotestsrc', {buffers: 500, dest: file, encoder: 'ffenc_flv'}, function(success){
	if(success)
		console.log('Video streamed!');
	else
		console.log('Stream no workie.');
});