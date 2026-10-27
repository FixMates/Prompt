export const BASE_SCENE_ENDS = [3, 9, 13, 22, 26, 30] as const;

export function sceneEndTimes(duration: number, customEnds: number[] = [...BASE_SCENE_ENDS.slice(0, -1)]): number[] {
  if (![20, 25, 30].includes(duration)) throw new RangeError('Duration must be 20, 25, or 30 seconds.');
  const scale = duration / 30;
  let previous = 0;
  const editable = BASE_SCENE_ENDS.slice(0, -1).map((fallback, index) => {
    const minimum = previous + 0.1;
    const maximum = 30 - (BASE_SCENE_ENDS.length - 1 - index) * 0.1;
    const candidate = Number(customEnds[index]);
    const seconds = Math.max(minimum, Math.min(maximum, Number.isFinite(candidate) ? candidate : fallback));
    previous = seconds;
    return seconds;
  });
  return [...editable, 30].map(seconds => seconds * scale);
}

export function sceneIndexAt(time: number, duration: number): number {
  const ends = sceneEndTimes(duration);
  const t = Math.max(0, Math.min(duration, time));
  return ends.findIndex(end => t < end) < 0 ? ends.length - 1 : ends.findIndex(end => t < end);
}
