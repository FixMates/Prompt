import test from 'node:test';
import assert from 'node:assert/strict';
import { captionTemplate, generateHashtags } from '../src/features/captions.ts';

test('hashtags use prompt terms and category tags without duplicates or common filler', () => {
  const tags = generateHashtags('A portrait with dramatic moonlight and portrait details', 'Portraits', 12);
  assert.equal(new Set(tags).size, tags.length);
  assert.ok(tags.includes('#portraitart'));
  assert.ok(tags.includes('#moonlight'));
  assert.ok(!tags.includes('#with'));
});

test('hashtag count stays within supported limits', () => {
  assert.equal(generateHashtags('long cinematic mountain landscape image', 'landscapes', 0).length, 7);
  assert.equal(generateHashtags('cinematic moonlit mountain landscape portrait architecture fantasy portraiture atmosphere color palette shadows reflection editorial product typography visual design composition', 'landscapes', 99).length, 15);
});

test('caption template stays grounded in prompt and accepts title/category', () => {
  const caption = captionTemplate('Red umbrella beside a stone arch', 'Architecture', 'Quiet Passage');
  assert.match(caption, /Quiet Passage/);
  assert.match(caption, /Lines, light/);
  assert.match(caption, /Red umbrella beside a stone arch/);
  assert.doesNotMatch(caption, /Guaranteed viral/i);
});
