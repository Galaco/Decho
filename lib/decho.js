'use strict'

const Alexa = require('alexa-sdk');
const Handle = require('./handle.js');

module.exports = Object.freeze({
    appId: null,
    handlers: [],

    Create: function(appId) {
        this.appId = appId;
    },

    CreateNewHandle: function(stateName) {
        var handle = new Handle;
        if (state) {
            handle.SetState(stateName);
        }
        return handle;
    },

    AddHandle: function(handle) {
        this.handlers.push(handle.compile());
    },

    Run: function(event, context) {
        const alexa = Alexa.handler(event, context);
        alexa.APP_ID = this.appId;
        alexa.registerHandlers(this.handlers);
        alexa.execute();
    }
});