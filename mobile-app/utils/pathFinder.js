export function findPath(from, to, paths) {
  const visited = new Set();
  const queue = [[from]];

  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];

    if (node === to) return path;

    if (!visited.has(node)) {
      visited.add(node);
      const neighbors = paths[node] || [];

      neighbors.forEach(neighbor => {
        queue.push([...path, neighbor]);
      });
    }
  }

  return [];
}