'use strict';

var utils = require('../utilities');
var MIME_TYPES = require('../mime-types');

/**
 * Trash API
 *
 * @namespace
 * @name api.trash
 */
module.exports = function trash(options) {
    return {

        /**
         * Retrieve a document from the trash
         *
         * @method
         * @memberof api.trash
         * @param {string} id - A document UUID
         * @returns {promise}
         */
        retrieve: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/trash/{id}',
            args: ['id'],
            headers: {
              'Accept': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),

        /**
         * List all documents in the trash
         *
         * @method
         * @memberof api.trash
         * @returns {promise}
         */
        list: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/trash',
            headers: {
              'Accept': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Restore a trashed document
         *
         * @method
         * @memberof api.trash
         * @param {string} id - A document UUID
         * @returns {promise}
         */
        restore: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'POST',
            resource: '/trash/{id}/restore',
            args: ['id'],
            headers: {
              'Development-Token': options.devToken
            }
        }),

        /**
         * Permanently delete a trashed document
         *
         * @method
         * @memberof api.trash
         * @param {string} id - A document UUID
         * @returns {promise}
         */
        destroy: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'DELETE',
            resource: '/trash/{id}',
            args: ['id'],
            headers: {
              'Development-Token': options.devToken
            }
        }),

        /**
         * The total number of trashed documents - set after the first call to trash.list()
         *
         * @var
         * @memberof api.trash
         * @type {integer}
         */
        count: 0,

        /**
         * Get the next page of trash
         *
         * @method
         * @memberof api.trash
         * @returns {promise}
         */
        nextPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'next',
            headers: {
              'Accept': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the previous page of trash
         *
         * @method
         * @memberof api.trash
         * @returns {promise}
         */
        previousPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'previous',
            headers: {
              'Accept': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the last page of trash
         *
         * @method
         * @memberof api.trash
         * @returns {promise}
         */
        lastPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'last',
            headers: {
              'Accept': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),


        /**
         * Get pagination links
         *
         * @method
         * @memberof api.trash
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
         * @memberof api.trash
         */
        resetPagination: utils.resetPaginationLinks

    };
};
