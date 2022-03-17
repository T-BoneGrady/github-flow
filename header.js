'use-strict';

export function header(array) {
  const objects = [];
  for (const item of array) {
    if (item['id']) {
      objects.push(item['id']);
    }
  }
}
