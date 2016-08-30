## Spaghetti
 
This is a simple wrapper around GStreamer's gst-launch binary which 
attempts to abstract some of the complexity when creating pipelines.
Hopefully this will provide a way for mortals like me to do cool 
stuff using this awesome multimedia library.

### What works

Some stuff, like playing sounds and grabbing frames from different sources.
If something doesn't work it's probably because you don't have the necessary
plugins installed. Make sure you have the following packages on your system,
either using apt-get or brew (please don't ask about Windows).

 - gst-plugins-base
 - gst-plugins-good
 - gst-plugins-bad
 - gst-plugins-ugly

Search via brew for the named packages
``brew search gst``

### TODO

Everything. Kinda works right now but the neverending combination of 
elements in GStreamer's pipelines makes it tough to make 'everything work'.
The goal is to provide a thin layer that allows doing simple stuff, regardless
of the platform it is running on.

### Credits

By Tomás Pollak.

### Copyright

(c) 2012 Fork Ltd. Licensed under the MIT license.
