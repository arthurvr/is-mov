import path from 'path';
import test from 'ava';
import readChunk from 'read-chunk';
import isMov from '../';

function check(fixture) {
	return isMov(readChunk.sync(path.join(__dirname, 'fixture', fixture), 0, 8));
}

test('should detect mov files', t => {
	t.true(check('fixture.mov'));
	t.end();
});

test('should not give false positives', t => {
	t.false(check('fixture.mp4'));
	t.end();
});
