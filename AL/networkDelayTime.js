const networkDelayTime = (times, N, K) => {
  const costs = Array(N + 1).fill(Infinity);
  costs[0] = 0;
  costs[K] = 0;

  while (N--) {
    for (const [u, v, w] of times) {
      if (costs[u] === Infinity) continue;
      if (costs[u] + w < costs[v]) {
        costs[v] = costs[u] + w;
      }
    }
  }

  const result = Math.max(...costs);
  return result === Infinity ? -1 : result;
};
