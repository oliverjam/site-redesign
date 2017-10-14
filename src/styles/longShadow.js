export default (col, len) =>
  Array.from(
    { length: len },
    (x, i) => `${i / 2 + 0.5}px ${i / 2 + 0.5}px ${col}`
  ).join(', ');
