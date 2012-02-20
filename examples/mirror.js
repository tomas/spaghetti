var Bagpipe = require('./..');

Bagpipe.streamVideo('webcam', {filters: ['videoflip method=horizontal-flip']}, function(success){
	if(success)
		console.log('You should be seeing yourself in a mirror right now.');
	else
		console.log('Whoops. Seems you wont be able to shave today.');
});