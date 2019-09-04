require('../src/next-group-by-limit');

var list1 = [10, 40, 50, 45, 23, 12, 100, 123, 120, 12, 12, 123, 123, 2, 123, 144, 198, 130];
var limit = 130;
var groups = nx.groupByLimit(list1, limit);

console.log(gropus);

