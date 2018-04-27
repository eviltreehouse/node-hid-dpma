### node-hid-dpma

This is a fork of https://github.com/node-hid/node-hid at 0.5.x, but with supported added for a homebrew auto-resolver library (https://github.com/eviltreehouse/node-dpma) to help with packaged/deployed applications that make use of webpack. 

Only changes were removal of some of the build wrapper stuff (pre-gyp) to make the repo leaner, and the implementation of `nodehid.js` to support our dpma scripting, all C++ and `hidapi` code remains untouched.

#### License

MIT - there's very very little novel code here so do whatever :)