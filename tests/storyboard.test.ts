import test from 'node:test';
import assert from 'node:assert/strict';
import { sceneEndTimes, sceneIndexAt } from '../app-src/src/features/storyboard.ts';

test('30-second storyboard follows requested scene boundaries', () => {
  assert.deepEqual(sceneEndTimes(30), [3, 9, 13, 22, 26, 30]);
  assert.equal(sceneIndexAt(3, 30), 1);
  assert.equal(sceneIndexAt(13, 30), 3);
  assert.equal(sceneIndexAt(27, 30), 5);
});

test('shorter storyboard timings scale proportionally and cover the duration', () => {
  assert.deepEqual(sceneEndTimes(20), [2, 6, 26/3, 44/3, 52/3, 20]);
  assert.equal(sceneEndTimes(25).at(-1), 25);
  assert.equal(sceneIndexAt(20, 20), 5);
  assert.throws(() => sceneEndTimes(15), RangeError);
});

test('custom timing boundaries remain ordered and scale with the Reel', () => {
  assert.deepEqual(sceneEndTimes(20, [4, 10, 15, 24, 28]).map(end => Number(end.toFixed(6))), [2.666667, 6.666667, 10, 16, 18.666667, 20]);
  const guarded = sceneEndTimes(30, [40, 50, -2, 22, 26]);
  assert.ok(guarded.every((end, index) => end > (index ? guarded[index - 1] : 0)));
  assert.equal(guarded.at(-1), 30);
});
