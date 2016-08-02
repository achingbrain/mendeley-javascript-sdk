'use strict';

var utils = require('../utilities');
var MIME_TYPES = require('../mime-types');
/**
 * Folders API
 *
 * @namespace
 * @name api.folders
 */
module.exports = function folders(options) {

    return {

        /**
         * Create a new folder
         *
         * @method
         * @memberof api.folders
         * @param {object} data - The folder data
         * @returns {promise}
         */
        create: utils.requestWithDataFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'POST',
            resource: '/folders',
            headers: {
              'Content-Type': MIME_TYPES.FOLDER,
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            },
            followLocation: true
        }),

        /**
         * Retrieve a folder
         *
         * @method
         * @memberof api.folders
         * @param {string} id - A folder UUID
         * @returns {promise}
         */
        retrieve: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/folders/{id}',
            args: ['id'],
            headers: {
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Update a folder
         *
         * @method
         * @memberof api.folders
         * @param {string} id - A folder UUID
         * @param {object} data - The folder data
         * @returns {promise}
         */
        update: utils.requestWithDataFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'PATCH',
            resource: '/folders/{id}',
            args: ['id'],
            headers: {
              'Content-Type': MIME_TYPES.FOLDER,
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            },
            followLocation: true
        }),

        /**
         * Delete a folder
         *
         * @method
         * @memberof api.folders
         * @param {string} id - A folder UUID
         * @returns {promise}
         */
        delete: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'DELETE',
            resource: '/folders/{id}',
            args: ['id'],
            headers: {
              'Development-Token': options.devToken
            }
        }),

        /**
         * Remove a document from a folder
         *
         * @method
         * @memberof api.folders
         * @param {string} id - A folder UUID
         * @param {string} documentId - A document UUID
         * @returns {promise}
         */
        removeDocument: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'DELETE',
            resource: '/folders/{id}/documents/{docId}',
            args: ['id', 'docId'],
            headers: {
              'Development-Token': options.devToken
            }
        }),

        /**
         * Add a document to a folder
         *
         * @method
         * @memberof api.folders
         * @param {string} id - A folder UUID
         * @returns {promise}
         */
        addDocument: utils.requestWithDataFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'POST',
            resource: '/folders/{id}/documents',
            args: ['id'],
            headers: {
              'Content-Type': MIME_TYPES.DOCUMENT,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get a list of folders
         *
         * @method
         * @memberof api.folders
         * @returns {promise}
         */
        list: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/folders',
            headers: {
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            }
        }),

        /**
         * The total number of folders - set after the first call to folders.list()
         *
         * @var
         * @memberof api.folders
         * @type {integer}
         */
        count: 0,

        /**
         * Get the next page of folders
         *
         * @method
         * @memberof api.folders
         * @returns {promise}
         */
        nextPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'next',
            headers: {
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the previous page of folders
         *
         * @method
         * @memberof api.folders
         * @returns {promise}
         */
        previousPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'previous',
            headers: {
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the last page of folders
         *
         * @method
         * @memberof api.folders
         * @returns {promise}
         */
        lastPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'last',
            headers: {
              'Accept': MIME_TYPES.FOLDER,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get pagination links
         *
         * @method
         * @memberof api.folders
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
         * @memberof api.folders
         */
        resetPagination: utils.resetPaginationLinks

    };
};
