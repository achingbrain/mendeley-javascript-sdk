'use strict';

var utils = require('../utilities');
var MIME_TYPES = require('../mime-types');

/**
 * Annotations API
 *
 * @namespace
 * @name api.annotations
 */
module.exports = function annotations(options) {

    return {

        /**
         * Retrieve an annotation
         *
         * @method
         * @memberof api.annotations
         * @param {string} id - Annotation UUID
         * @returns {promise}
         */
        retrieve: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/annotations/{id}',
            args: ['id'],
            headers: {
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Patch a single annotation
         *
         * @method
         * @memberof api.annotations
         * @param {string} id - Annotation UUID
         * @param {object} text - The updated note text
         * @returns {Promise}
         */
        patch: utils.requestWithDataFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'PATCH',
            resource: '/annotations/{id}',
            args: ['id'],
            headers: {
              'Content-Type': MIME_TYPES.ANNOTATION,
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            },
            followLocation: true
        }),

        /**
         * Create a single annotation
         *
         * @method
         * @memberof api.annotations
         * @param {object} text - Note text
         * @returns {Promise}
         */
        create: utils.requestWithDataFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'POST',
            resource: '/annotations',
            headers: {
              'Content-Type': MIME_TYPES.ANNOTATION,
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            },
            followLocation: true
        }),

         /**
         * Delete a single annotation
         *
         * @method
         * @memberof api.annotations
         * @param {string} id - Annotation UUID
         * @returns {Promise}
         */
        delete: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'DELETE',
            resource: '/annotations/{id}',
            args: ['id'],
            headers: {
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get a list of annotations
         *
         * @method
         * @memberof api.annotations
         * @returns {promise}
         */
        list: utils.requestFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            method: 'GET',
            resource: '/annotations',
            headers: {
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            }
        }),

        /**
         * The total number of annotations - set after the first call to annotations.list()
         *
         * @var
         * @memberof api.annotations
         * @type {integer}
         */
        count: 0,

        /**
         * Get the next page of annotations
         *
         * @method
         * @memberof api.annotations
         * @returns {promise}
         */
        nextPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'next',
            headers: {
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the previous page of annotations
         *
         * @method
         * @memberof api.annotations
         * @returns {promise}
         */
        previousPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'previous',
            headers: {
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get the last page of annotations
         *
         * @method
         * @memberof api.annotations
         * @returns {promise}
         */
        lastPage: utils.requestPageFun({
            authFlow: options.authFlow,
            baseUrl: options.baseUrl,
            rel: 'last',
            headers: {
              'Accept': MIME_TYPES.ANNOTATION,
              'Development-Token': options.devToken
            }
        }),

        /**
         * Get pagination links
         *
         * @method
         * @memberof api.annotations
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
         * @memberof api.annotations
         */
        resetPagination: utils.resetPaginationLinks

    };
};
