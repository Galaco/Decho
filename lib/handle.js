'use strict'

const Alexa = require('alexa-sdk');

module.exports = Object.freeze({
    intents: {},
    state: null,

    SetState: function(stateName) {
        this.state = stateName;
    },

    AddIntent: function(intentName, callbackFunc) {
        this.intents[intentName] = callbackFunc;
    },

    Compile: function() {
        if (this.state) {
            return Alexa.createStateHandler(this.state, this.intents);
        } else {
            return this.intents;
        }
    }
});