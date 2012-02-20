var GStreamer = require('./..'),
		path = require('path'),
		file = process.argv[3] || path.resolve(__dirname + '/../assets/death.mp3');

GStreamer.playSound(file, function(file_played){
	if(file_played)
		console.log('Sound played: ' + file_played);
	else
		console.log('File not played!');
});