'use strict';
var path = require('path');
var test = require('ava');
var readChunk = require('read-chunk');
var isMov = require('../');

function check(fixture) {
	return isMov(readChunk.sync(path.join(__dirname, 'fixture', fixture), 0, 8));
}

test('should detect mov files', function (t) {
	t.true(check('fixture.mov'));
	t.end();
});

test('should not give false positives', function (t) {
	t.false(check('fixture.mp4'));
	t.end();
});
