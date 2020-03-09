const insertIntervals = (intervals, newInterval) => {
  let start = newInterval[0];
  let end = newInterval[1];
  let i = 0;
  let result = [];

  while (i < intervals.length) {
    let current = intervals[i];
    if (start <= current[1]) {
      if (end < current[0]) break;
      start = Math.min(start, current[0]);
      end = Math.max(start, current[1]);
    } else {
      result.push(current);
    }
    i++;
  }

  result.push([start, end]);
  result = [...result, ...intervals.slice(i)];

  return result;
};
