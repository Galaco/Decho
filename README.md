# Decho
 A tiny framework for Amazon ASK (Alexa Skills Kit)


#### What is this?
To make writing Skills for Alexa with Node.js+Lambda just a little easier, Decho is a tiny framework to help organise your application.



#### Demo app

For this example, we assume that you have created a `StartIntent` intent in the ASK builder.

```javascript
'use strict'
const decho = require('decho');

//launch decho
var Decho = decho.Create('HelloDecho');

//Create a new handle
var handle = decho.CreateNewHandle();

//Add intent to handle
var startFunc = function() {
    this.emit('tell:', 'Hello');
};
handle.AddIntent('StartIntent', startFunc);

//Register handle
Decho.AddHandle(handle);

//Run decho
Decho.run();
```