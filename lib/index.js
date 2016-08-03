'use strict';

var api = require('./api');
var auth = require('./auth');
var request = require('./request');
var mimeTypes = require('./mime-types');
var EventEmitter = require('wildemitter');
var assign = require('object-assign');
var need = require('./need');

// Exports Mendeley SDK
module.exports = function (options) {
    need(options, 'Please suppy an options object');

    options.baseUrl = options.baseUrl || 'https://api.mendeley.com';

    need(options.authFlow, 'Please suppy an authFlow option');

    if (typeof options.authFlow !== 'function') {
        var authFlow = options.authFlow;

        options.authFlow = function () {
          return authFlow;
        };
    }

    if (typeof options.baseUrl !== 'function') {
        var baseUrl = options.baseUrl;

        options.baseUrl = function () {
          return baseUrl;
        };
    }

    delete module.exports.API;

    Object.defineProperty(module.exports, 'API', {
      get: function () {
        throw new Error('The .API property is deprecated, please see the documentation');
      },
      configurable: true
    });

    var instance = new EventEmitter();

    if (options.authFlow() instanceof EventEmitter) {
      // forward all events
      options.authFlow().on('*', instance.emit.bind(instance));
    }

    return assign(instance, api(options));
};

module.exports.Auth = auth;
module.exports.Request = request;
module.exports.MimeTypes = mimeTypes;

// this is to maintain backwards compatibility
var authFlow = false;
var baseUrl = 'https://api.mendeley.com';

var defaultOptions = {
    authFlow: function () {
      return authFlow;
    },
    baseUrl: function () {
      return baseUrl;
    }
};

module.exports.API = api(defaultOptions);
module.exports.API.setAuthFlow = function (flow) {
  authFlow = flow;
};
module.exports.API.setBaseUrl = function (url) {
  baseUrl = url;
};
// end backwards compatibility
