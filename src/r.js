function mergeObjects(
  objects = [
    { a: 1, b: 2 },
    { b: 3, c: 5 },
  ]
) {
  const p = objects.reduce((acc, cur) => {
    return { ...acc, ...cur };
  }, {});
  return p;
}

mergeObjects([
  { a: 1, b: 2 },
  { b: 3, c: 5 },
  { b: 8, c: 5 },
]);
