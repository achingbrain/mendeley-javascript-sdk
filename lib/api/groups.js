'use strict';

var utils = require('../utilities');
var MIME_TYPES = require('../mime-types');

/**
 * Groups API
 *
 * @namespace
 * @name api.groups
 */
module.exports = function groups(options) {
    return {

        /**
         * Retrieve a group
         *
         * @method
         * @memberof api.groups
         * @param {string} id - A group UUID
         * @returns {promise}
         */
        retrieve: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/groups/{id}',
            args: ['id'],
            headers: {
              'Accept': MIME_TYPES.GROUP,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get a list of groups
         *
         * @method
         * @memberof api.groups
         * @returns {promise}
         */
        list: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/groups',
            headers: {
              'Accept': MIME_TYPES.GROUP,
              'Development-Token': options.devToken
            }
        }),

        /**
         * The total number of groups - set after the first call to groups.list()
         *
         * @var
         * @memberof api.groups
         * @type {integer}
         */
        count: 0,

        /**
         * Get the next page of groups
         *
         * @method
         * @memberof api.groups
         * @returns {promise}
         */
        nextPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'next',
            headers: {
              'Accept': MIME_TYPES.GROUP,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the previous page of groups
         *
         * @method
         * @memberof api.groups
         * @returns {promise}
         */
        previousPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'previous',
            headers: {
              'Accept': MIME_TYPES.GROUP,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the last page of groups
         *
         * @method
         * @memberof api.groups
         * @returns {promise}
         */
        lastPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'last',
            headers: {
              'Accept': MIME_TYPES.GROUP,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get pagination links
         *
         * @method
         * @memberof api.groups
         * @returns {object}
         */
        paginationLinks: {
            last: false,
            next: false,
            previous: false
        },

        /**
         * Reset all pagination links
         *
         * @method
         * @memberof api.groups
         */
        resetPagination: utils.resetPaginationLinks

    };
};
