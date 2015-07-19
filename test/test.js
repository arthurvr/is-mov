'use strict';
var assert = require('assert');
var path = require('path');
var readChunk = require('read-chunk');
var isMov = require('../');

function check(fixture) {
	return isMov(readChunk.sync(path.join(__dirname, 'fixture', fixture), 0, 8));
}

it('should detect mov files', function () {
	assert(check('fixture.mov'));
});

it('should not give false positives', function () {
	assert(!check('fixture.mp4'));
});
